-- Migration: Update events for capacity and volunteer management

-- Add new columns to events
ALTER TABLE public.events
ADD COLUMN IF NOT EXISTS capacity integer NOT NULL DEFAULT 0,
ADD COLUMN IF NOT EXISTS participant_capacity integer,
ADD COLUMN IF NOT EXISTS volunteer_capacity integer,
ADD COLUMN IF NOT EXISTS volunteers_enabled boolean NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS is_featured boolean NOT NULL DEFAULT false,
ADD COLUMN IF NOT EXISTS status text DEFAULT 'active' CHECK (status IN ('draft', 'active', 'archived'));

-- Add role to event_registrations
ALTER TABLE public.event_registrations
ADD COLUMN IF NOT EXISTS role text DEFAULT 'participant' CHECK (role IN ('participant', 'volunteer'));

-- Add organization to event_registrations (alias for college in the existing DB, but let's add it clearly)
ALTER TABLE public.event_registrations
ADD COLUMN IF NOT EXISTS organization text;

-- Create an RPC to safely insert a registration and check capacity atomically
CREATE OR REPLACE FUNCTION register_for_event(
  p_event_id uuid,
  p_full_name text,
  p_email text,
  p_phone text,
  p_organization text,
  p_role text
)
RETURNS json
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_event record;
  v_current_count integer;
  v_participant_count integer;
  v_volunteer_count integer;
  v_new_registration_id uuid;
BEGIN
  -- Lock the event row for update so no other transaction can concurrently register
  SELECT * INTO v_event FROM public.events WHERE id = p_event_id FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Event not found';
  END IF;

  IF v_event.status = 'archived' OR v_event.is_published = false THEN
     RAISE EXCEPTION 'Event is not active';
  END IF;

  -- Check if already registered by email
  IF EXISTS (SELECT 1 FROM public.event_registrations WHERE event_id = p_event_id AND email = p_email) THEN
    RAISE EXCEPTION 'Email is already registered for this event';
  END IF;

  -- If volunteers are enabled, check specific capacity
  IF v_event.volunteers_enabled THEN
    IF p_role = 'volunteer' THEN
      SELECT count(*) INTO v_volunteer_count FROM public.event_registrations WHERE event_id = p_event_id AND role = 'volunteer';
      IF v_event.volunteer_capacity IS NOT NULL AND v_volunteer_count >= v_event.volunteer_capacity THEN
        RAISE EXCEPTION 'Volunteer capacity reached';
      END IF;
    ELSE
      SELECT count(*) INTO v_participant_count FROM public.event_registrations WHERE event_id = p_event_id AND role = 'participant';
      IF v_event.participant_capacity IS NOT NULL AND v_participant_count >= v_event.participant_capacity THEN
        RAISE EXCEPTION 'Participant capacity reached';
      END IF;
    END IF;
  ELSE
    -- Shared capacity
    SELECT count(*) INTO v_current_count FROM public.event_registrations WHERE event_id = p_event_id;
    IF v_current_count >= v_event.capacity THEN
      RAISE EXCEPTION 'Event capacity reached';
    END IF;
  END IF;

  -- Insert registration
  INSERT INTO public.event_registrations (
    event_id, full_name, email, phone, organization, role, status
  ) VALUES (
    p_event_id, p_full_name, p_email, p_phone, p_organization, p_role, 'approved'
  ) RETURNING id INTO v_new_registration_id;

  RETURN json_build_object('success', true, 'registration_id', v_new_registration_id);
END;
$$;

"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `remove` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}

export async function getEvents() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("is_published", true)
    .neq("status", "archived")
    .order("start_at", { ascending: true });

  if (error) {
    console.error("Error fetching events:", error);
    return [];
  }

  return data;
}

export async function getEventBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching event:", error);
    return null;
  }

  return data;
}

export async function getRegistrationCount(eventId: string, role?: string) {
  const supabase = await createClient();
  let query = supabase.from("event_registrations").select("id", { count: "exact" }).eq("event_id", eventId);
  
  if (role) {
    query = query.eq("role", role);
  }

  const { count, error } = await query;
  
  if (error) {
    console.error("Error fetching registration count:", error);
    return 0;
  }

  return count || 0;
}

export async function registerForEvent(formData: FormData) {
  const eventId = formData.get("eventId") as string;
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const organization = formData.get("organization") as string;
  const role = (formData.get("role") as string) || "participant";
  const eventName = formData.get("eventName") as string;
  const eventDate = formData.get("eventDate") as string;
  const eventLocation = formData.get("eventLocation") as string;

  const supabase = await createClient();

  // Call the atomic RPC function
  const { data, error } = await supabase.rpc("register_for_event", {
    p_event_id: eventId,
    p_full_name: fullName,
    p_email: email,
    p_phone: phone,
    p_organization: organization,
    p_role: role,
  });

  if (error) {
    console.error("Registration error:", error);
    return { success: false, error: error.message };
  }

  // Send confirmation email asynchronously (don't await so we can return quickly)
  if (resend) {
    resend.emails.send({
      from: "Sophrion Events <events@sophrion.co.in>", // Ensure this domain is verified in Resend
      to: [email],
      subject: `Registration Confirmed: ${eventName}`,
      html: `
        <div>
          <h1>Registration Confirmed!</h1>
          <p>Hi ${fullName},</p>
          <p>You have successfully registered for <strong>${eventName}</strong>.</p>
          <p><strong>Date & Time:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${eventLocation}</p>
          <p>We look forward to seeing you there!</p>
        </div>
      `,
    }).catch(err => console.error("Failed to send email:", err));
  }

  return { success: true, data };
}

export async function registerTeamForEvent(formData: FormData) {
  const eventId = formData.get("eventId") as string;
  const eventName = formData.get("eventName") as string;
  const eventDate = formData.get("eventDate") as string;
  const eventLocation = formData.get("eventLocation") as string;
  
  const teamName = formData.get("teamName") as string;
  const teamSize = parseInt(formData.get("teamSize") as string, 10);
  const college = formData.get("organization") as string;

  const leaderName = formData.get("leaderName") as string;
  const leaderEmail = formData.get("leaderEmail") as string;
  const leaderPhone = formData.get("leaderPhone") as string;
  const leaderGender = formData.get("leaderGender") as string;

  const supabase = await createClient();

  // 1. Insert into teams table
  const { data: teamData, error: teamError } = await supabase.from("teams").insert({
    event_id: eventId,
    team_name: teamName,
    leader_name: leaderName,
    leader_email: leaderEmail,
    leader_phone: leaderPhone,
    college: college,
    status: 'pending'
  }).select("id").single();

  if (teamError || !teamData) {
    console.error("Team registration error:", teamError);
    return { success: false, error: teamError?.message || "Failed to create team" };
  }

  const teamId = teamData.id;

  // 2. Prepare team members array (Leader is member 1)
  const membersToInsert = [
    {
      team_id: teamId,
      member_name: leaderName,
      member_email: leaderEmail,
      member_phone: leaderPhone,
      college: college,
      gender: leaderGender,
      is_leader: true,
    }
  ];

  // 3. Extract other members dynamically
  for (let i = 2; i <= teamSize; i++) {
    const memberName = formData.get(`member${i}Name`) as string;
    if (memberName) {
      membersToInsert.push({
        team_id: teamId,
        member_name: memberName,
        member_email: formData.get(`member${i}Email`) as string || null,
        member_phone: formData.get(`member${i}Phone`) as string || null,
        college: college,
        gender: formData.get(`member${i}Gender`) as string || null,
        is_leader: false,
      });
    }
  }

  // 4. Insert into team_members table
  const { error: membersError } = await supabase.from("team_members").insert(membersToInsert);

  if (membersError) {
    console.error("Team members insertion error:", membersError);
    // Ideally we would rollback the team creation here if we had full transactions,
    // but without an RPC, returning an error is the next best thing.
    return { success: false, error: membersError.message };
  }

  // 5. Send confirmation email to leader
  if (resend) {
    resend.emails.send({
      from: "Sophrion Events <events@sophrion.co.in>",
      to: [leaderEmail],
      subject: `Team Registration Confirmed: ${eventName}`,
      html: `
        <div>
          <h1>Team Registration Confirmed!</h1>
          <p>Hi ${leaderName},</p>
          <p>Your team <strong>${teamName}</strong> has successfully registered for <strong>${eventName}</strong>.</p>
          <p><strong>Date & Time:</strong> ${eventDate}</p>
          <p><strong>Location:</strong> ${eventLocation}</p>
          <p>We look forward to seeing your team there!</p>
        </div>
      `,
    }).catch(err => console.error("Failed to send email:", err));
  }

  return { success: true, data: teamData };
}

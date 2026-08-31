import { createClient } from "@supabase/supabase-js";
import * as dotenv from 'dotenv';
dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function test() {
  const { data, error } = await supabase
    .from("events")
    .select(`
      id,
      slug,
      title,
      subtitle,
      start_at,
      end_at,
      mode,
      venue,
      city,
      state,
      banner_url,
      hero_url,
      event_type,
      registration_type,
      fee,
      prize_pool,
      winner_prize,
      runner_prize,
      is_published,
      registration_open,
      capacity,
      participant_capacity,
      volunteer_capacity,
      volunteers_enabled,
      is_featured,
      status,
      created_at,
      updated_at
    `);

  if (error) {
    console.error("ERROR:", error.message);
  } else {
    console.log("SUCCESS. Fetched rows:", data?.length);
  }
}

test();

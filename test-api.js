const url = "https://nkiqmzetqipgrhnwuiqt.supabase.co/rest/v1/events?select=id,slug,title,subtitle,start_at,end_at,mode,venue,city,state,banner_url,hero_url,event_type,registration_type,fee,prize_pool,winner_prize,runner_prize,is_published,registration_open,capacity,participant_capacity,volunteer_capacity,volunteers_enabled,is_featured,status,created_at,updated_at";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5raXFtemV0cWlwZ3Jobnd1aXF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODE0Mjc5MCwiZXhwIjoyMTAzNzE4NzkwfQ.1ap4TJHromDZ0-d7yrmc3g3x10t__GjkLqDbCRaza1Q";

fetch(url, {
  headers: {
    "apikey": key,
    "Authorization": `Bearer ${key}`
  }
})
.then(res => res.json())
.then(data => console.log(JSON.stringify(data, null, 2)))
.catch(err => console.error(err));

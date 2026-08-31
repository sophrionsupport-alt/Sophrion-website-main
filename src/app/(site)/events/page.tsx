import { getEvents } from "@/app/actions/events";
import EventsListClient from "@/components/events/EventsListClient";

export const metadata = {
  title: "Events | Sophrion",
  description: "Discover upcoming hackathons, workshops, and learning experiences.",
};

export default async function EventsPage() {
  const events = await getEvents();
  const featuredEvent = events.find((e) => e.is_featured) || null;
  
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pb-12 pt-24">
       <EventsListClient initialEvents={events} featuredEvent={featuredEvent} />
    </div>
  );
}
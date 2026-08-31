"use client";

import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  event: any; // We can type this strictly later
}

export default function EventCard({ event }: EventCardProps) {
  // Use simple date formatter
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };
  
  const formattedDate = event.end_at ? `${formatDate(event.start_at)} - ${formatDate(event.end_at)}` : formatDate(event.start_at);

  return (
    <div className="flex flex-col bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden transition-all hover:border-[var(--accent-primary)] hover:shadow-[0_0_15px_rgba(124,58,237,0.1)] h-full">
      <div className="relative w-full h-48 bg-gray-900">
        {event.banner_url ? (
          <Image src={event.banner_url} alt={event.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#1a1a3a] to-[#0a0a1f] flex items-center justify-center">
             <span className="text-[var(--text-muted)] font-medium">{event.event_type}</span>
          </div>
        )}
        <div className="absolute top-3 left-3 flex gap-2">
           <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--accent-tag)] text-white shadow-md">
              {event.event_type}
           </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[var(--text-body)] mb-2 line-clamp-2">{event.title}</h3>
        
        <div className="flex flex-col gap-2 mt-auto mb-5 text-[var(--text-muted)] text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Date : {formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--accent-primary)]" />
            <span>Location : {event.city ? `${event.city}` : (event.venue || event.mode || "TBA")}</span>
          </div>
        </div>
        
        <Link href={`/events/${event.slug}`} className="w-full">
          <button className="w-full py-2.5 rounded-lg font-medium btn-secondary">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EventCardProps {
  event: any;
}

const TYPE_COLORS: Record<string, string> = {
  hackathon: "from-[#7c3aed] to-[#c026d3]",
  workshop:  "from-[#0891b2] to-[#7c3aed]",
  hybrid:    "from-[#ea7317] to-[#c026d3]",
  default:   "from-[#7c3aed] to-[#22d3ee]",
};

export default function EventCard({ event }: EventCardProps) {
  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const formattedDate = event.end_at
    ? `${formatDate(event.start_at)} – ${formatDate(event.end_at)}`
    : formatDate(event.start_at);

  const typeKey = (event.event_type ?? "").toLowerCase();
  const gradientClass = TYPE_COLORS[typeKey] ?? TYPE_COLORS.default;

  const isUpcoming = event.start_at && new Date(event.start_at) > new Date();

  return (
    <div className="group relative flex flex-col bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-subtle)] overflow-hidden transition-all duration-300 hover:border-[var(--accent-primary)]/60 hover:shadow-[0_0_30px_rgba(124,58,237,0.18)] hover:-translate-y-1 h-full shimmer-border">
      {/* Banner */}
      <div className="relative w-full h-52 bg-[#0a0a1f] overflow-hidden flex-shrink-0">
        {event.banner_url ? (
          <Image
            src={event.banner_url}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${gradientClass} opacity-30`} />
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent" />

        {/* Badges row */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${gradientClass} text-white shadow-lg uppercase tracking-wider`}>
            {event.event_type}
          </span>
          {event.mode && (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-black/50 backdrop-blur border border-white/10 text-white/80 capitalize">
              {event.mode}
            </span>
          )}
        </div>

        {/* Upcoming indicator */}
        {isUpcoming && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--state-success)]/15 border border-[var(--state-success)]/30 backdrop-blur">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--state-success)] animate-pulse" />
            <span className="text-[10px] font-bold text-[var(--state-success)] uppercase tracking-wider">Upcoming</span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-snug group-hover:text-[var(--text-heading)] transition-colors">
          {event.title}
        </h3>

        <div className="flex flex-col gap-2 mt-auto mb-5">
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <div className="p-1.5 rounded-md bg-[var(--accent-primary)]/10">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>
            <span className="truncate">{formattedDate || "Date TBA"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <div className="p-1.5 rounded-md bg-[var(--accent-primary)]/10">
              <MapPin className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
            </div>
            <span className="truncate">
              {event.city ? event.city : (event.venue || event.mode || "TBA")}
            </span>
          </div>
        </div>

        <Link href={`/events/${event.slug}`} className="w-full">
          <button className="w-full py-2.5 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white hover:border-[var(--accent-primary)] hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] group/btn">
            View Details
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </Link>
      </div>
    </div>
  );
}

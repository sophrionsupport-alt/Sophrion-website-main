"use client";

import { useState, useMemo, useEffect } from "react";
import EventCard from "./EventCard";
import { Search, LayoutGrid, List as ListIcon, SlidersHorizontal, X, Calendar, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface EventsListClientProps {
  initialEvents: any[];
  featuredEvent: any | null;
}

export default function EventsListClient({ initialEvents, featuredEvent }: EventsListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [eventTypeFilter, setEventTypeFilter] = useState("All");
  const [formatFilter, setFormatFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("Any Date");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const savedMode = sessionStorage.getItem("events_view_mode") as "grid" | "list" | null;
    if (savedMode) setViewMode(savedMode);
  }, []);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    sessionStorage.setItem("events_view_mode", mode);
  };

  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialEvents.forEach(e => { if (e.event_type) cats.add(e.event_type); });
    return ["All", ...Array.from(cats)];
  }, [initialEvents]);

  const filteredEvents = useMemo(() => {
    return initialEvents.filter(event => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesType = eventTypeFilter === "All" || event.event_type === eventTypeFilter;
      const matchesFormat =
        formatFilter === "All" ||
        (formatFilter === "Online" && event.mode === "online") ||
        (formatFilter === "Offline" && event.mode === "offline");
      let matchesDate = true;
      if (dateFilter === "Upcoming") matchesDate = new Date(event.start_at) >= new Date();
      else if (dateFilter === "Past") matchesDate = new Date(event.start_at) < new Date();
      return matchesSearch && matchesType && matchesFormat && matchesDate;
    });
  }, [initialEvents, searchTerm, eventTypeFilter, formatFilter, dateFilter]);

  const hasActiveFilters =
    searchTerm !== "" ||
    eventTypeFilter !== "All" ||
    formatFilter !== "All" ||
    dateFilter !== "Any Date";

  const clearFilters = () => {
    setSearchTerm("");
    setEventTypeFilter("All");
    setFormatFilter("All");
    setDateFilter("Any Date");
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* ── Featured Event Hero ─────────────────────────────────── */}
      {featuredEvent && (
        <div className="mb-20 relative group">
          {/* Ambient glow behind card */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[var(--accent-primary)]/30 via-[#22d3ee]/20 to-[var(--accent-primary)]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="relative rounded-3xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden shadow-2xl flex flex-col md:flex-row shimmer-border">
            {/* Content side */}
            <div className="p-8 md:p-12 flex-1 flex flex-col justify-center order-2 md:order-1 relative">
              {/* Subtle bg gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/25 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">Featured Event</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
                  {featuredEvent.title}
                </h2>
                <p className="text-[var(--text-muted)] mb-8 text-base leading-relaxed max-w-xl">
                  {featuredEvent.subtitle || featuredEvent.overview || featuredEvent.description || "Join us for our upcoming featured event."}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <Calendar className="w-4 h-4 text-[var(--text-heading)]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-0.5">Date</div>
                      <div className="text-sm font-semibold text-[var(--text-body)]">
                        {formatDate(featuredEvent.start_at)}
                        {featuredEvent.end_at && ` – ${formatDate(featuredEvent.end_at)}`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <MapPin className="w-4 h-4 text-[var(--text-heading)]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-0.5">Location</div>
                      <div className="text-sm font-semibold text-[var(--text-body)]">
                        {featuredEvent.city || featuredEvent.venue || featuredEvent.mode || "TBA"}
                      </div>
                    </div>
                  </div>
                </div>

                <Link href={`/events/${featuredEvent.slug}`}>
                  <button className="inline-flex items-center gap-2 btn-primary px-8 py-3 rounded-xl font-semibold text-base shadow-lg shadow-[var(--accent-primary)]/25 group/btn">
                    View Event
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Image side */}
            <div className="relative flex-1 min-h-[280px] md:min-h-[400px] bg-[#0a0a1f] order-1 md:order-2">
              {featuredEvent.banner_url ? (
                <Image
                  src={featuredEvent.banner_url}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a] via-[#13132b] to-[#0a0a1f] flex items-center justify-center">
                  <span className="text-[var(--accent-primary)] text-5xl font-black opacity-10 uppercase tracking-widest select-none">
                    {featuredEvent.event_type}
                  </span>
                </div>
              )}
              {/* Overlay fade to content side */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg-surface)]/30 md:to-transparent" />
            </div>
          </div>
        </div>
      )}

      {/* ── Page Header ────────────────────────────────────────── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 pb-8 border-b border-[var(--border-subtle)]">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent-primary)] mb-2">Sophrion</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
            Discover Events
          </h1>
          <p className="text-[var(--text-muted)] text-lg">
            Hackathons, workshops &amp; learning experiences
          </p>
        </div>

        {/* Search */}
        <div className="w-full md:w-auto flex-1 max-w-sm relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)] pointer-events-none" />
          <input
            type="text"
            placeholder="Search events…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl text-white text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/50 transition-all placeholder-[var(--text-muted)] shadow-inner"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* ── Filters & View Toggle ──────────────────────────────── */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-wrap">

          {/* Event Type */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap">Type</span>
            <div className="flex gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setEventTypeFilter(cat)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all duration-200 ${
                    eventTypeFilter === cat
                      ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Format */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap">Format</span>
            <div className="flex gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
              {["All", "Online", "Offline"].map(fmt => (
                <button
                  key={fmt}
                  onClick={() => setFormatFilter(fmt)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all duration-200 ${
                    formatFilter === fmt
                      ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>

          {/* Date filter */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider whitespace-nowrap">When</span>
            <div className="flex gap-1.5 bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
              {["Any Date", "Upcoming", "Past"].map(d => (
                <button
                  key={d}
                  onClick={() => setDateFilter(d)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-semibold transition-all duration-200 ${
                    dateFilter === d
                      ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                      : "text-[var(--text-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Clear filters pill */}
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-xl font-semibold border border-[var(--state-error)]/30 text-[var(--state-error)] hover:bg-[var(--state-error)]/10 transition-all"
            >
              <X className="w-3 h-3" />
              Clear
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 flex-shrink-0 self-end lg:self-auto">
          {/* Result count */}
          <span className="text-xs text-[var(--text-muted)] hidden sm:block">
            {filteredEvents.length} event{filteredEvents.length !== 1 ? "s" : ""}
          </span>

          {/* View toggle */}
          <div className="flex items-center bg-[var(--bg-surface)] p-1 rounded-xl border border-[var(--border-subtle)]">
            <button
              onClick={() => handleViewModeChange("grid")}
              title="Grid view"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-semibold transition-all duration-200 ${
                viewMode === "grid"
                  ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                  : "text-[var(--text-muted)] hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              Grid
            </button>
            <button
              onClick={() => handleViewModeChange("list")}
              title="List view"
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-lg font-semibold transition-all duration-200 ${
                viewMode === "list"
                  ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                  : "text-[var(--text-muted)] hover:text-white"
              }`}
            >
              <ListIcon className="w-3.5 h-3.5" />
              List
            </button>
          </div>
        </div>
      </div>

      {/* ── Events Grid / List ──────────────────────────────────── */}
      {filteredEvents.length > 0 ? (
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filteredEvents.map(event => (
            <div
              key={event.id}
              className={`animate-in fade-in slide-in-from-bottom-4 duration-300 ${viewMode === "list" ? "max-h-[220px]" : ""}`}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center py-28 px-4 rounded-3xl border border-dashed border-[var(--border-subtle)] text-center">
          <div className="w-16 h-16 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-center mb-5">
            <Search className="w-7 h-7 text-[var(--text-muted)]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No events found</h3>
          <p className="text-[var(--text-muted)] max-w-sm mb-6">
            Try adjusting your search or filters to discover more events.
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-[var(--accent-primary)]/10 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] hover:bg-[var(--accent-primary)] hover:text-white transition-all duration-200"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}

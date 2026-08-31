"use client";

import { useState, useMemo, useEffect } from "react";
import EventCard from "./EventCard";
import { Search, LayoutGrid, List as ListIcon } from "lucide-react";
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

  // Load persisted view mode on mount
  useEffect(() => {
    const savedMode = sessionStorage.getItem("events_view_mode") as "grid" | "list" | null;
    if (savedMode) {
      setViewMode(savedMode);
    }
  }, []);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    sessionStorage.setItem("events_view_mode", mode);
  };

  // Derive unique categories from events
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialEvents.forEach(e => {
      if (e.event_type) cats.add(e.event_type);
    });
    return ["All", ...Array.from(cats)];
  }, [initialEvents]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return initialEvents.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            (event.description && event.description.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = eventTypeFilter === "All" || event.event_type === eventTypeFilter;
      
      const matchesFormat = formatFilter === "All" || 
                            (formatFilter === "Online" && event.mode === "online") ||
                            (formatFilter === "Offline" && event.mode === "offline");
      
      // Basic date filtering logic (can be expanded with a real date picker)
      let matchesDate = true;
      if (dateFilter === "Upcoming") {
        matchesDate = new Date(event.start_at) >= new Date();
      } else if (dateFilter === "Past") {
        matchesDate = new Date(event.start_at) < new Date();
      }

      return matchesSearch && matchesType && matchesFormat && matchesDate;
    });
  }, [initialEvents, searchTerm, eventTypeFilter, formatFilter, dateFilter]);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Featured Event Hero */}
      {featuredEvent && (
        <div className="mb-16 rounded-2xl border border-[var(--border-subtle)] bg-[#101024] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-[var(--text-heading)] text-3xl md:text-4xl font-bold mb-2">Featured Event</h2>
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">{featuredEvent.title}</h3>
            <p className="text-[var(--text-body)] mb-6 text-lg max-w-xl">
              {featuredEvent.subtitle || featuredEvent.overview || featuredEvent.description || "Join us for our upcoming featured event."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8 text-[var(--text-body)] font-medium">
              <div>
                <span className="block text-[var(--text-muted)] text-sm uppercase tracking-wider mb-1">Date</span>
                {formatDate(featuredEvent.start_at)}
                {featuredEvent.end_at && ` - ${formatDate(featuredEvent.end_at)}`}
              </div>
              <div>
                <span className="block text-[var(--text-muted)] text-sm uppercase tracking-wider mb-1">Location</span>
                {featuredEvent.city || featuredEvent.venue || featuredEvent.mode || "TBA"}
              </div>
            </div>
            <div>
              <Link href={`/events/${featuredEvent.slug}`}>
                <button className="btn-primary px-8 py-3 rounded-lg font-semibold text-lg shadow-lg shadow-[var(--accent-primary)]/20">
                  View Event &rarr;
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex-1 min-h-[300px] bg-black order-1 md:order-2 border-b md:border-b-0 md:border-l border-[var(--border-subtle)]">
            {featuredEvent.banner_url ? (
              <Image src={featuredEvent.banner_url} alt={featuredEvent.title} fill className="object-cover" />
            ) : (
               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a3a] to-[#0a0a1f] flex items-center justify-center">
                  <span className="text-[var(--accent-primary)] text-4xl font-bold opacity-30 uppercase tracking-widest">{featuredEvent.event_type}</span>
               </div>
            )}
          </div>
        </div>
      )}

      {/* Discovery Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-[var(--border-subtle)] pb-8">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Discover Events</h1>
          <p className="text-[var(--text-muted)] text-lg">Find hackathons, workshops and learning experiences</p>
        </div>
        
        {/* Search Bar */}
        <div className="w-full md:w-auto flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-muted)]" />
          <input 
            type="text" 
            placeholder="Search Events ..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-xl text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors placeholder-[var(--text-muted)] shadow-inner"
          />
        </div>
      </div>

      {/* Filters & View Toggle */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {/* Event Type Filter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-sm font-semibold text-white min-w-[80px]">Event Type:</span>
            <div className="flex gap-2 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-subtle)]">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setEventTypeFilter(cat)}
                  className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${eventTypeFilter === cat ? 'bg-white/10 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'}`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Format Filter */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-sm font-semibold text-white min-w-[60px]">Format:</span>
            <div className="flex gap-2 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-subtle)]">
              {["All", "Online", "Offline"].map(fmt => (
                <button 
                  key={fmt}
                  onClick={() => setFormatFilter(fmt)}
                  className={`px-3 py-1 text-sm rounded-md font-medium transition-colors ${formatFilter === fmt ? 'bg-white/10 text-white shadow-sm' : 'text-[var(--text-muted)] hover:text-white hover:bg-white/5'}`}
                >
                  {fmt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 flex-shrink-0 bg-[var(--bg-surface)] p-1 rounded-lg border border-[var(--border-subtle)] self-end lg:self-auto">
          <button 
            onClick={() => handleViewModeChange("grid")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${viewMode === "grid" ? 'bg-[var(--accent-primary)] text-white shadow-md' : 'text-[var(--text-muted)] hover:text-white'}`}
          >
            <LayoutGrid className="w-4 h-4" />
            Grid
          </button>
          <button 
            onClick={() => handleViewModeChange("list")}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-md font-medium transition-colors ${viewMode === "list" ? 'bg-[var(--accent-primary)] text-white shadow-md' : 'text-[var(--text-muted)] hover:text-white'}`}
          >
            <ListIcon className="w-4 h-4" />
            List View
          </button>
        </div>
      </div>

      {/* Events Grid/List */}
      {filteredEvents.length > 0 ? (
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {filteredEvents.map(event => (
            <div key={event.id} className={viewMode === 'list' ? 'h-[250px]' : ''}>
               {/* Note: The EventCard component might need adjustments to perfectly support list view styling depending on its internal structure, but we'll use it as-is for now */}
              <EventCard event={event} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 px-4 bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
             <Search className="w-8 h-8 text-[var(--text-muted)]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No events match your filters</h3>
          <p className="text-[var(--text-muted)] max-w-md">Try adjusting your search criteria, event type, or format to see more results.</p>
          <button 
            onClick={() => {
              setSearchTerm("");
              setEventTypeFilter("All");
              setFormatFilter("All");
            }}
            className="mt-6 px-6 py-2 rounded-lg font-medium bg-white/10 text-white hover:bg-white/15 transition-colors border border-white/10"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

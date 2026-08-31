import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Trophy,
  FileText,
  IndianRupee,
  Gift,
  Users,
  MapPin,
  Clock,
  Layers3
} from "lucide-react";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import EventRegistrationCTA from "@/components/events/EventRegistrationCTA";
import EventCountdown from "@/components/events/EventCountdown";
import { ReactNode } from "react";

// (Keep existing helper functions for rendering content)
type EventRecord = Record<string, unknown>;

function fmtDateTime(s?: string | null) {
  if (!s) return "To be announced";
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return "To be announced";
  return d.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric" });
}

function labelEventType(value?: string | null) {
  switch (value) {
    case "workshop": return "Workshop";
    case "hackathon": return "Hackathon";
    case "hybrid": return "Hybrid";
    default: return value ? value.charAt(0).toUpperCase() + value.slice(1) : "Event";
  }
}

function Section({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <section className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-surface)] p-6 md:p-8">
      <div className="mb-6 flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
        <div className="p-2 bg-[var(--accent-primary)]/10 rounded-lg text-[var(--accent-primary)]">
          {icon}
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PrettyText({ text }: { text?: string | null }) {
  if (!text) return null;
  const paragraphs = text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
  return (
    <div className="space-y-4 text-[var(--text-body)] leading-relaxed text-lg">
      {paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}

function Schedule({ schedule }: { schedule: unknown }) {
  if (!Array.isArray(schedule) || schedule.length === 0) return null;

  const grouped: Record<string, Record<string, unknown>[]> = {};
  schedule.forEach((item) => {
    if (!item || typeof item !== "object") return;
    const row = item as Record<string, unknown>;
    const day = String(row.day ?? "Schedule");
    if (!grouped[day]) grouped[day] = [];
    grouped[day].push(row);
  });

  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--accent-primary)] before:to-transparent">
      {Object.entries(grouped).map(([day, items], i) => (
        <div key={day} className="relative z-10">
          <div className="sticky top-20 z-10 flex items-center mb-6">
            <h3 className="text-lg font-bold text-white bg-[var(--bg-surface)] border border-[var(--border-subtle)] px-4 py-2 rounded-full shadow-xl mx-0 md:mx-auto">
              {day}
            </h3>
          </div>
          <div className="space-y-6">
            {items.map((s, j) => (
              <div key={j} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-[var(--bg-surface)] bg-[var(--accent-primary)] shadow shrink-0 ml-0 md:mx-auto group-hover:scale-125 transition-transform"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-[var(--border-subtle)] bg-[#101024] shadow-md group-hover:border-[var(--accent-primary)]/50 transition-colors">
                  <div className="flex items-center gap-2 text-[var(--accent-primary)] font-semibold text-sm mb-1">
                    <Clock className="w-4 h-4" />
                    {String(s.time ?? "")}
                  </div>
                  <h4 className="text-white font-semibold text-lg">{String(s.title ?? "")}</h4>
                  {s.description ? <p className="text-[var(--text-muted)] mt-2 text-sm">{String(s.description)}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Speakers Section implementation
function Speakers({ speakers }: { speakers: unknown }) {
  if (!Array.isArray(speakers) || speakers.length === 0) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {speakers.map((s: any, i: number) => (
        <div key={i} className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-[var(--accent-primary)] bg-gray-800">
             {s.avatar_url ? (
               <img src={s.avatar_url} alt={s.name} className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center text-3xl font-bold text-white/30">
                 {s.name?.charAt(0) || "U"}
               </div>
             )}
          </div>
          <h4 className="text-lg font-bold text-white">{s.name}</h4>
          <p className="text-[var(--accent-primary)] text-sm mb-1">{s.designation}</p>
          {s.company ? <p className="text-[var(--text-muted)] text-sm">{s.company}</p> : null}
        </div>
      ))}
    </div>
  );
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const supabase = await createSupabaseServerClient();

  const { data: event, error } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !event) {
    notFound();
  }

  const location = [event.venue, event.city, event.state]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden border-b border-[var(--border-subtle)]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {event.banner_url ? (
            <Image
              src={event.banner_url}
              alt={event.title}
              fill
              className="object-cover opacity-30"
              priority
            />
          ) : (
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] via-[#101024] to-[var(--bg-primary)]" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Events
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-end justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--accent-tag)] text-white shadow-md">
                  {labelEventType(event.event_type)}
                </span>
                {event.mode && (
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[var(--border-subtle)] bg-white/5 text-white">
                    {event.mode}
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 tracking-tight">
                {event.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 text-lg font-medium text-[var(--text-body)]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur border border-white/10">
                    <CalendarDays className="w-5 h-5 text-[var(--text-heading)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)]">Date & Time</div>
                    {fmtDateTime(event.start_at)}
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-white/10 backdrop-blur border border-white/10">
                    <MapPin className="w-5 h-5 text-[var(--text-heading)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)]">Location</div>
                    {location || event.mode || "TBA"}
                  </div>
                </div>
              </div>
            </div>

            {event.start_at && new Date(event.start_at) > new Date() && (
              <div className="hidden md:block mb-2">
                <div className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">Starting In</div>
                <EventCountdown targetDateStr={event.start_at} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          
          <div className="space-y-12">
            {(event.overview || event.description) && (
              <Section title="About this Event" icon={<FileText className="w-6 h-6" />}>
                <PrettyText text={event.overview || event.description} />
              </Section>
            )}

            {Array.isArray(event.schedule_json) && event.schedule_json.length > 0 && (
              <Section title="Itinerary" icon={<CalendarDays className="w-6 h-6" />}>
                <Schedule schedule={event.schedule_json} />
              </Section>
            )}

            {Array.isArray(event.sample_roles_json) && event.sample_roles_json.length > 0 && (
               <Section title="Speakers & Mentors" icon={<Users className="w-6 h-6" />}>
                 {/* Reusing sample_roles_json structure to mock speakers since there's no actual speakers_json field requested yet, 
                     but we'll assume a similar JSON array is passed or repurposed. */}
                 <Speakers speakers={event.sample_roles_json} />
               </Section>
            )}
            
            {event.rules_markdown && (
              <Section title="Guidelines & Rules" icon={<FileText className="w-6 h-6" />}>
                <div className="prose prose-invert max-w-none text-[var(--text-body)]">
                   <p className="whitespace-pre-wrap leading-relaxed">{event.rules_markdown}</p>
                </div>
              </Section>
            )}
          </div>
          
          <div className="relative">
             <div className="sticky top-24">
                <div className="bg-[var(--bg-surface)] border border-[var(--border-subtle)] rounded-2xl p-6 md:p-8 shadow-2xl">
                   <h3 className="text-2xl font-bold text-white mb-2">Join the Event</h3>
                   <p className="text-[var(--text-muted)] mb-6">Secure your spot before capacity fills up.</p>
                   
                   <EventRegistrationCTA event={event} />
                   
                   <div className="mt-6 pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-3 text-sm text-[var(--text-muted)]">
                      {event.fee && (
                         <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2"><IndianRupee className="w-4 h-4"/> Registration Fee</span>
                            <span className="font-semibold text-white">{event.fee}</span>
                         </div>
                      )}
                      
                      <div className="flex justify-between items-center">
                         <span className="flex items-center gap-2"><Layers3 className="w-4 h-4"/> Format</span>
                         <span className="font-semibold text-white capitalize">{event.mode || "Offline"}</span>
                      </div>
                      
                      {event.prize_pool && (
                         <div className="flex justify-between items-center text-[var(--accent-tag)]">
                            <span className="flex items-center gap-2"><Trophy className="w-4 h-4"/> Prize Pool</span>
                            <span className="font-bold">{event.prize_pool}</span>
                         </div>
                      )}
                   </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
"use client";

import { X, Calendar, CheckCircle2, ExternalLink } from "lucide-react";

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: any;
}

export default function SuccessModal({ isOpen, onClose, event }: SuccessModalProps) {
  if (!isOpen) return null;

  const generateGoogleCalendarUrl = () => {
    const text = encodeURIComponent(event.title);
    const dates = `${event.start_at?.replace(/[-:]/g, "").split(".")[0]}Z/${event.end_at?.replace(/[-:]/g, "").split(".")[0]}Z`;
    const details = encodeURIComponent(`Registration confirmed for ${event.title}.`);
    const location = encodeURIComponent(event.venue || event.city || event.mode || "");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl border border-[var(--border-subtle)] bg-[#050510] shadow-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-300 overflow-hidden">

        {/* Ambient background glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[var(--state-success)]/10 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[var(--accent-primary)]/10 blur-2xl rounded-full pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Success icon */}
        <div className="relative mx-auto w-20 h-20 mb-6">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 rounded-full bg-[var(--state-success)]/15 animate-ping" />
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[var(--state-success)]/20 to-[var(--state-success)]/5 border border-[var(--state-success)]/30 flex items-center justify-center">
            <CheckCircle2 className="w-9 h-9 text-[var(--state-success)]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Text */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--state-success)]/10 border border-[var(--state-success)]/20 mb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--state-success)]">Confirmed</span>
        </div>

        <h2 className="text-2xl font-black text-white mb-3">You&apos;re Registered!</h2>
        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-8">
          You&apos;re all set for{" "}
          <span className="font-semibold text-white">{event.title}</span>.
          {" "}A confirmation email has been sent to you — keep an eye on your inbox.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <a
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl font-semibold text-sm btn-primary flex items-center justify-center gap-2 shadow-lg shadow-[var(--accent-primary)]/20 hover:shadow-[var(--accent-primary)]/40 transition-shadow"
          >
            <Calendar className="w-4 h-4" />
            Add to Google Calendar
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 text-[var(--text-muted)] hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

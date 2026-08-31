"use client";

import { useState } from "react";
import { X, Calendar } from "lucide-react";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-full max-w-md bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border-subtle)] rounded-2xl shadow-2xl p-8 text-center animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
        <p className="text-[var(--text-muted)] mb-8">
          You are now registered for <strong className="text-white">{event.title}</strong>. A confirmation email has been sent to you.
        </p>
        
        <div className="flex flex-col gap-3">
          <a 
            href={generateGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-lg font-medium btn-primary flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Add to Google Calendar
          </a>
          <button 
            onClick={onClose}
            className="w-full py-3 px-4 rounded-lg font-medium bg-[var(--border-subtle)] text-white hover:bg-[var(--border-subtle)]/80 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

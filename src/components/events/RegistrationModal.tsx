"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { registerForEvent, registerTeamForEvent } from "@/app/actions/events";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  event: any;
}

export default function RegistrationModal({ isOpen, onClose, onSuccess, event }: RegistrationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<'individual' | 'team'>(event?.registration_type === 'team' ? 'team' : 'individual');
  const [teamSize, setTeamSize] = useState<number>(event?.min_team_size || 2);

  // Handle mounting and body scroll lock
  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset state when modal opens/closes or event changes
  useEffect(() => {
    if (isOpen && event) {
      setMode(event.registration_type === 'team' ? 'team' : 'individual');
      setTeamSize(event.min_team_size || 2);
      setError(null);
    }
  }, [isOpen, event]);

  if (!isOpen || !mounted) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    const formData = new FormData(e.currentTarget);
    formData.append("eventId", event.id);
    formData.append("eventName", event.title);
    formData.append("eventDate", new Date(event.start_at).toLocaleString());
    formData.append("eventLocation", event.venue || event.city || event.mode || "TBA");

    try {
      let result;
      if (mode === 'team') {
        formData.append("teamSize", teamSize.toString());
        result = await registerTeamForEvent(formData);
      } else {
        result = await registerForEvent(formData);
      }

      if (result.success) {
        onSuccess();
      } else {
        setError(result.error || "Registration failed. The event might be full.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  }

  const renderIndividualFields = () => (
    <>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Full Name</label>
        <input type="text" name="fullName" required disabled={loading}
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Email</label>
        <input type="email" name="email" required disabled={loading}
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Phone Number</label>
        <input type="tel" name="phone" required disabled={loading} pattern="^\+?[1-9]\d{1,14}$"
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="+91 98765 43210" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">College / Organization</label>
        <input type="text" name="organization" required disabled={loading}
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="Your University or Company" />
      </div>
      {event.volunteers_enabled && (
        <div>
          <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">Role</label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="role" value="participant" defaultChecked className="accent-[var(--accent-primary)]" disabled={loading} />
              <span className="text-white text-sm">Participant</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="role" value="volunteer" className="accent-[var(--accent-primary)]" disabled={loading} />
              <span className="text-white text-sm">Volunteer</span>
            </label>
          </div>
        </div>
      )}
    </>
  );

  const renderTeamFields = () => (
    <>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">Team Name</label>
        <input type="text" name="teamName" required disabled={loading}
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="Awesome Team" />
      </div>
      <div>
        <label className="block text-sm font-medium text-[var(--text-muted)] mb-1">College / Organization</label>
        <input type="text" name="organization" required disabled={loading}
          className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)] transition-colors disabled:opacity-50"
          placeholder="Your University" />
      </div>
      
      <div className="mt-4 pt-4 border-t border-white/10">
        <h3 className="text-lg font-semibold text-white mb-3">Team Leader</h3>
        <div className="space-y-4">
          <input type="text" name="leaderName" required disabled={loading} placeholder="Leader Name"
            className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
          <input type="email" name="leaderEmail" required disabled={loading} placeholder="Leader Email"
            className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
          <input type="tel" name="leaderPhone" required disabled={loading} placeholder="Leader Phone (+91...)"
            className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
        </div>
      </div>

      {Array.from({ length: teamSize - 1 }).map((_, idx) => {
        const memberNum = idx + 2;
        return (
          <div key={memberNum} className="mt-4 pt-4 border-t border-white/10">
            <h3 className="text-lg font-semibold text-white mb-3">Member {memberNum}</h3>
            <div className="space-y-4">
              <input type="text" name={`member${memberNum}Name`} required disabled={loading} placeholder="Member Name"
                className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
              <input type="email" name={`member${memberNum}Email`} required disabled={loading} placeholder="Member Email"
                className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
              <input type="tel" name={`member${memberNum}Phone`} disabled={loading} placeholder="Member Phone (Optional)"
                className="w-full px-4 py-2 bg-[#0a0a1f] border border-[var(--border-subtle)] rounded-lg text-white text-sm focus:outline-none focus:border-[var(--accent-primary)]" />
            </div>
          </div>
        );
      })}

      {event.max_team_size > event.min_team_size && (
        <div className="flex justify-between mt-4">
          <button type="button" disabled={teamSize <= (event.min_team_size || 1)} onClick={() => setTeamSize(prev => prev - 1)}
            className="text-xs text-[var(--accent-primary)] hover:text-white disabled:opacity-50">
            - Remove Member
          </button>
          <button type="button" disabled={teamSize >= (event.max_team_size || 5)} onClick={() => setTeamSize(prev => prev + 1)}
            className="text-xs text-[var(--accent-primary)] hover:text-white disabled:opacity-50">
            + Add Member
          </button>
        </div>
      )}
    </>
  );

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={!loading ? onClose : undefined} />
      
      {/* Modal content - Used solid background to fix overlap */}
      <div className="relative w-full max-w-lg bg-[#050510] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
        <button onClick={onClose} disabled={loading}
          className="absolute top-4 right-4 text-[var(--text-muted)] hover:text-white transition-colors disabled:opacity-50">
          <X className="w-5 h-5" />
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-1">Register</h2>
        <p className="text-[var(--text-muted)] mb-6">for {event.title}</p>

        {event.registration_type === 'both' && (
          <div className="flex p-1 bg-white/5 rounded-lg mb-6">
            <button type="button" onClick={() => setMode('individual')}
              className={`flex-1 py-1.5 text-sm rounded-md transition-colors ${mode === 'individual' ? 'bg-[var(--accent-primary)] text-white font-medium' : 'text-white/60 hover:text-white'}`}>
              Individual
            </button>
            <button type="button" onClick={() => setMode('team')}
              className={`flex-1 py-1.5 text-sm rounded-md transition-colors ${mode === 'team' ? 'bg-[var(--accent-primary)] text-white font-medium' : 'text-white/60 hover:text-white'}`}>
              Team
            </button>
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {mode === 'individual' ? renderIndividualFields() : renderTeamFields()}
          
          <button type="submit" disabled={loading}
            className={`w-full mt-6 py-3 rounded-lg font-medium btn-primary ${loading ? 'btn-loading' : ''}`}>
            Register Now
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}

"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, User, Mail, Phone, Building2, Users, UserPlus, UserMinus } from "lucide-react";
import { registerForEvent, registerTeamForEvent } from "@/app/actions/events";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  event: any;
}

/** Shared styled input with an icon prefix */
function Field({
  label,
  icon,
  type = "text",
  name,
  placeholder,
  required = true,
  disabled = false,
  pattern,
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  pattern?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">
        {label}
        {required && <span className="text-[var(--accent-primary)] ml-0.5">*</span>}
      </label>
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-muted)] pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          name={name}
          required={required}
          disabled={disabled}
          pattern={pattern}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2.5 bg-white/[0.04] border border-[var(--border-subtle)] rounded-xl text-white text-sm placeholder-[var(--text-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]/40 transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:border-white/20"
        />
      </div>
    </div>
  );
}

/** Divider with label */
function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 pt-2">
      <div className="h-px flex-1 bg-white/8" />
      <span className="text-xs font-bold uppercase tracking-widest text-[var(--accent-primary)]">{label}</span>
      <div className="h-px flex-1 bg-white/8" />
    </div>
  );
}

export default function RegistrationModal({ isOpen, onClose, onSuccess, event }: RegistrationModalProps) {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mode, setMode] = useState<"individual" | "team">(
    event?.registration_type === "team" ? "team" : "individual"
  );
  const [teamSize, setTeamSize] = useState<number>(event?.min_team_size || 2);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && event) {
      setMode(event.registration_type === "team" ? "team" : "individual");
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
      if (mode === "team") {
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
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const renderIndividualFields = () => (
    <div className="flex flex-col gap-4">
      <Field label="Full Name" icon={<User className="w-4 h-4" />} name="fullName" placeholder="John Doe" disabled={loading} />
      <Field label="Email" icon={<Mail className="w-4 h-4" />} type="email" name="email" placeholder="john@example.com" disabled={loading} />
      <Field label="Phone Number" icon={<Phone className="w-4 h-4" />} type="tel" name="phone" placeholder="+91 98765 43210" pattern="^\+?[1-9]\d{1,14}$" disabled={loading} />
      <Field label="College / Organization" icon={<Building2 className="w-4 h-4" />} name="organization" placeholder="Your University or Company" disabled={loading} />

      {event.volunteers_enabled && (
        <div className="flex flex-col gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]">Role</label>
          <div className="flex gap-3">
            {["participant", "volunteer"].map(role => (
              <label key={role} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="radio"
                  name="role"
                  value={role}
                  defaultChecked={role === "participant"}
                  disabled={loading}
                  className="accent-[var(--accent-primary)] w-4 h-4"
                />
                <span className="text-sm text-[var(--text-muted)] group-hover:text-white transition-colors capitalize">{role}</span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const renderTeamFields = () => (
    <div className="flex flex-col gap-4">
      <Field label="Team Name" icon={<Users className="w-4 h-4" />} name="teamName" placeholder="Awesome Team" disabled={loading} />
      <Field label="College / Organization" icon={<Building2 className="w-4 h-4" />} name="organization" placeholder="Your University" disabled={loading} />

      <SectionDivider label="Team Leader" />
      <div className="flex flex-col gap-3 pl-3 border-l-2 border-[var(--accent-primary)]/30">
        <Field label="Leader Name" icon={<User className="w-4 h-4" />} name="leaderName" placeholder="Leader Name" disabled={loading} />
        <Field label="Leader Email" icon={<Mail className="w-4 h-4" />} type="email" name="leaderEmail" placeholder="leader@example.com" disabled={loading} />
        <Field label="Leader Phone" icon={<Phone className="w-4 h-4" />} type="tel" name="leaderPhone" placeholder="+91..." disabled={loading} />
      </div>

      {Array.from({ length: teamSize - 1 }).map((_, idx) => {
        const n = idx + 2;
        return (
          <div key={n} className="flex flex-col gap-3">
            <SectionDivider label={`Member ${n}`} />
            <div className="flex flex-col gap-3 pl-3 border-l-2 border-[var(--border-subtle)]">
              <Field label="Name" icon={<User className="w-4 h-4" />} name={`member${n}Name`} placeholder="Member Name" disabled={loading} />
              <Field label="Email" icon={<Mail className="w-4 h-4" />} type="email" name={`member${n}Email`} placeholder="Member Email" disabled={loading} />
              <Field label="Phone" icon={<Phone className="w-4 h-4" />} type="tel" name={`member${n}Phone`} placeholder="Phone (Optional)" required={false} disabled={loading} />
            </div>
          </div>
        );
      })}

      {event.max_team_size > event.min_team_size && (
        <div className="flex justify-between items-center pt-1">
          <button
            type="button"
            disabled={teamSize <= (event.min_team_size || 1) || loading}
            onClick={() => setTeamSize(p => p - 1)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[var(--text-muted)] hover:text-[var(--state-error)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-3 py-1.5 rounded-lg hover:bg-[var(--state-error)]/10"
          >
            <UserMinus className="w-3.5 h-3.5" />
            Remove Member
          </button>
          <span className="text-xs text-[var(--text-muted)]">{teamSize} / {event.max_team_size} members</span>
          <button
            type="button"
            disabled={teamSize >= (event.max_team_size || 5) || loading}
            onClick={() => setTeamSize(p => p + 1)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-primary)] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-3 py-1.5 rounded-lg hover:bg-[var(--accent-primary)]/15"
          >
            <UserPlus className="w-3.5 h-3.5" />
            Add Member
          </button>
        </div>
      )}
    </div>
  );

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-lg"
        onClick={!loading ? onClose : undefined}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[92vh] flex flex-col rounded-2xl border border-[var(--border-subtle)] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

        {/* Gradient header */}
        <div className="relative flex-shrink-0 bg-gradient-to-br from-[#1a0a3a] via-[#13132b] to-[#0a0a1f] px-6 pt-6 pb-5 border-b border-[var(--border-subtle)]">
          {/* Ambient glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[var(--accent-primary)]/20 blur-2xl rounded-full pointer-events-none" />

          <button
            onClick={onClose}
            disabled={loading}
            className="absolute top-4 right-4 p-1.5 rounded-lg text-[var(--text-muted)] hover:text-white hover:bg-white/10 transition-all disabled:opacity-40"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/25 mb-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--accent-primary)]">Registration</span>
            </div>
            <h2 className="text-2xl font-black text-white leading-tight">{event.title}</h2>
            <p className="text-[var(--text-muted)] text-sm mt-1">Fill in your details to secure your spot.</p>
          </div>

          {/* Individual / Team toggle */}
          {event.registration_type === "both" && (
            <div className="flex p-1 bg-black/30 rounded-xl mt-5 border border-white/8">
              {(["individual", "team"] as const).map(m => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex-1 py-2 text-sm rounded-lg font-semibold transition-all duration-200 capitalize ${
                    mode === m
                      ? "bg-[var(--accent-primary)] text-white shadow-md shadow-[var(--accent-primary)]/25"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Scrollable form body */}
        <div className="flex-1 overflow-y-auto bg-[#050510] px-6 py-5">
          {error && (
            <div className="mb-4 flex items-start gap-3 p-3.5 bg-[var(--state-error)]/8 border border-[var(--state-error)]/20 rounded-xl">
              <X className="w-4 h-4 text-[var(--state-error)] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--state-error)]">{error}</p>
            </div>
          )}

          <form id="reg-form" onSubmit={handleSubmit}>
            {mode === "individual" ? renderIndividualFields() : renderTeamFields()}
          </form>
        </div>

        {/* Sticky footer */}
        <div className="flex-shrink-0 bg-[#050510] border-t border-[var(--border-subtle)] px-6 py-4">
          <button
            type="submit"
            form="reg-form"
            disabled={loading}
            className={`w-full py-3 rounded-xl font-bold text-base tracking-wide transition-all duration-200 shadow-lg ${
              loading
                ? "btn-loading bg-[var(--accent-primary)] shadow-[var(--accent-primary)]/20"
                : "btn-primary shadow-[var(--accent-primary)]/20 hover:shadow-[var(--accent-primary)]/40"
            }`}
          >
            {!loading && "Register Now →"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

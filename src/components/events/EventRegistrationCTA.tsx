"use client";

import { useState, useEffect } from "react";
import { Loader2, Lock, Zap } from "lucide-react";
import RegistrationModal from "./RegistrationModal";
import SuccessModal from "./SuccessModal";
import { getRegistrationCount } from "@/app/actions/events";

interface EventRegistrationCTAProps {
  event: any;
}

export default function EventRegistrationCTA({ event }: EventRegistrationCTAProps) {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [capacityStatus, setCapacityStatus] = useState<"loading" | "open" | "closed">("loading");

  useEffect(() => {
    async function checkCapacity() {
      if (!event.registration_open) {
        setCapacityStatus("closed");
        return;
      }
      try {
        const count = await getRegistrationCount(event.id);
        setCapacityStatus(event.capacity && count >= event.capacity ? "closed" : "open");
      } catch {
        setCapacityStatus("open");
      }
    }

    checkCapacity();
    const id = setInterval(checkCapacity, 30_000);
    return () => clearInterval(id);
  }, [event.id, event.capacity, event.registration_open]);

  const handleSuccess = () => {
    setIsRegModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Primary CTA */}
      <button
        onClick={() => setIsRegModalOpen(true)}
        disabled={capacityStatus !== "open"}
        className={`relative w-full py-4 px-6 rounded-2xl font-bold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 overflow-hidden ${
          capacityStatus === "open"
            ? "btn-primary shadow-xl shadow-[var(--accent-primary)]/25 hover:shadow-[var(--accent-primary)]/45 hover:-translate-y-0.5"
            : capacityStatus === "loading"
            ? "bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)] cursor-wait"
            : "bg-[var(--state-disabled)]/50 border border-[var(--border-subtle)] text-[var(--text-muted)] cursor-not-allowed"
        }`}
      >
        {/* Shimmer sweep on open state */}
        {capacityStatus === "open" && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_ease_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
        )}

        {capacityStatus === "loading" && <Loader2 className="w-5 h-5 animate-spin" />}
        {capacityStatus === "closed" && <Lock className="w-5 h-5" />}
        {capacityStatus === "open" && <Zap className="w-5 h-5" />}

        {capacityStatus === "open"
          ? "Register Now"
          : capacityStatus === "loading"
          ? "Checking availability…"
          : "Registration Closed"}
      </button>

      {/* Capacity indicator */}
      {capacityStatus === "open" && (
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--text-muted)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--state-success)] animate-pulse" />
          Spots available — register before it fills up
        </div>
      )}
      {capacityStatus === "closed" && (
        <div className="flex items-center justify-center gap-2 text-xs text-[var(--state-error)]">
          <Lock className="w-3.5 h-3.5" />
          Registrations are currently closed
        </div>
      )}

      <RegistrationModal
        isOpen={isRegModalOpen}
        onClose={() => setIsRegModalOpen(false)}
        onSuccess={handleSuccess}
        event={event}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        event={event}
      />
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import RegistrationModal from "./RegistrationModal";
import SuccessModal from "./SuccessModal";
import { getRegistrationCount } from "@/app/actions/events";

interface EventRegistrationCTAProps {
  event: any;
}

export default function EventRegistrationCTA({ event }: EventRegistrationCTAProps) {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  
  const [capacityStatus, setCapacityStatus] = useState<"loading" | "open" | "closed" | "waitlist">("loading");

  useEffect(() => {
    async function checkCapacity() {
      if (!event.registration_open) {
        setCapacityStatus("closed");
        return;
      }
      
      try {
        const count = await getRegistrationCount(event.id);
        if (event.capacity && count >= event.capacity) {
          setCapacityStatus("closed");
        } else {
          setCapacityStatus("open");
        }
      } catch (e) {
        console.error("Failed to fetch capacity:", e);
        setCapacityStatus("open"); // Fallback to open, server will reject if full
      }
    }
    
    checkCapacity();
    
    // Poll every 30 seconds for live updates
    const intervalId = setInterval(checkCapacity, 30000);
    return () => clearInterval(intervalId);
  }, [event.id, event.capacity, event.registration_open]);

  const handleSuccess = () => {
    setIsRegModalOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="w-full">
      <button
        onClick={() => setIsRegModalOpen(true)}
        disabled={capacityStatus !== "open"}
        className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-lg ${
          capacityStatus === "open"
            ? "btn-primary shadow-[var(--accent-primary)]/20"
            : capacityStatus === "loading"
            ? "btn-loading bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-[var(--text-muted)]"
            : "bg-[var(--state-disabled)] text-[var(--text-muted)] cursor-not-allowed shadow-none border border-[var(--border-subtle)]"
        }`}
      >
        {capacityStatus === "open" ? "Register Now" : capacityStatus === "loading" ? "Checking Status..." : "Registration Closed"}
      </button>

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

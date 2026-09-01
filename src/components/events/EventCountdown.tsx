"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function EventCountdown({ targetDateStr }: { targetDateStr: string }) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();

    const calculate = () => {
      const diff = target - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      };
    };

    setTimeLeft(calculate());
    const id = setInterval(() => setTimeLeft(calculate()), 1000);
    return () => clearInterval(id);
  }, [targetDateStr]);

  if (!timeLeft) return null;

  const isOver =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  if (isOver) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)]/15 border border-[var(--accent-primary)]/30 text-[var(--accent-primary)] font-semibold text-sm">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
        Event has started!
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days, highlight: true },
    { label: "Hours", value: timeLeft.hours.toString().padStart(2, "0"), highlight: false },
    { label: "Mins", value: timeLeft.minutes.toString().padStart(2, "0"), highlight: false },
    { label: "Secs", value: timeLeft.seconds.toString().padStart(2, "0"), highlight: true },
  ];

  return (
    <div className="flex gap-3">
      {units.map(({ label, value, highlight }, i) => (
        <div key={label} className="flex flex-col items-center">
          <div
            className={`relative min-w-[68px] h-[68px] flex items-center justify-center rounded-2xl border transition-colors duration-500 ${
              highlight
                ? "bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/30"
                : "bg-black/40 backdrop-blur-md border-white/10"
            }`}
          >
            {/* Inner glow for highlighted units */}
            {highlight && (
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent-primary)]/5 pointer-events-none" />
            )}
            <span
              className={`text-2xl font-black tabular-nums leading-none ${
                highlight ? "text-[var(--accent-primary)]" : "text-white"
              }`}
            >
              {value}
            </span>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--text-muted)] mt-1.5">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

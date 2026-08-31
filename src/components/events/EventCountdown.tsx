"use client";

import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

export default function EventCountdown({ targetDateStr }: { targetDateStr: string }) {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    const target = new Date(targetDateStr).getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = target - now;
      
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());
    
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDateStr]);

  if (!timeLeft) return null;

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <div className="text-[var(--accent-primary)] font-bold flex items-center gap-2"><Clock className="w-5 h-5" /> Event has started</div>;
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 min-w-[70px]">
        <span className="text-2xl font-bold text-white leading-none mb-1">{timeLeft.days}</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Days</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 min-w-[70px]">
        <span className="text-2xl font-bold text-white leading-none mb-1">{timeLeft.hours.toString().padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Hours</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 min-w-[70px]">
        <span className="text-2xl font-bold text-white leading-none mb-1">{timeLeft.minutes.toString().padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Mins</span>
      </div>
      <div className="flex flex-col items-center p-3 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 min-w-[70px]">
        <span className="text-2xl font-bold text-[var(--text-heading)] leading-none mb-1">{timeLeft.seconds.toString().padStart(2, '0')}</span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--accent-primary)]">Secs</span>
      </div>
    </div>
  );
}

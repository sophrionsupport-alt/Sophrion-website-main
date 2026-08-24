"use client";

// Wrapper container for marketing pages providing ambient background gradient orbs and noise overlay.

import * as React from "react";
import { cn } from "@/lib/utils/cn";

// Outer layout shell rendering fixed ambient glows and children content
export default function MarketingShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col bg-background text-foreground",
        className
      )}
    >
      {/* ── Ambient background layer ── */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Top-left purple orb — hero atmosphere */}
        <div
          className="absolute -top-40 -left-40 h-[700px] w-[700px] rounded-full opacity-[0.08]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }}
        />
        {/* Top-right cyan orb */}
        <div
          className="absolute -top-20 right-0 h-[550px] w-[550px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-500)), transparent)" }}
        />
        {/* Mid glow — ecosystem diagram section (~40% from top) */}
        <div
          className="absolute top-[38%] left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full opacity-[0.055]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }}
        />
        {/* Lower glow — pilot stats section (~72% from top) */}
        <div
          className="absolute top-[70%] right-0 h-[500px] w-[600px] rounded-full opacity-[0.045]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-500)), transparent)" }}
        />

        {/* Grain/noise overlay — ~3.5% opacity to kill flatness */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />
      </div>
      {children}
    </div>
  );
}

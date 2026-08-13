"use client";

import * as React from "react";
import { cn } from "@/lib/utils/cn";

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
      {/* Ambient background orbs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        {/* Top-left purple orb */}
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }}
        />
        {/* Top-right cyan orb */}
        <div
          className="absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-500)), transparent)" }}
        />
        {/* Mid subtle noise texture */}
        <div className="absolute inset-0 opacity-[0.012]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat: "repeat" }}
        />
      </div>
      {children}
    </div>
  );
}

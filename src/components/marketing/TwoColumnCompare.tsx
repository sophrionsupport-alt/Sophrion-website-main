"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";

export default function TwoColumnCompare({
  leftTitle,
  leftItems,
  rightTitle,
  rightItems,
  className,
}: {
  leftTitle: string;
  leftItems: string[];
  rightTitle: string;
  rightItems: string[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 lg:grid-cols-2 lg:gap-6", className)}>
      {/* Left — neutral/muted */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 backdrop-blur-md"
      >
        {/* Subtle top border */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-white/30" />
          </div>
          <h3 className="text-sm font-bold tracking-widest text-foreground/50 uppercase">{leftTitle}</h3>
        </div>

        <ul className="space-y-3">
          {leftItems.map((t) => (
            <li key={t} className="flex items-center gap-3 text-foreground/60">
              <span className="h-px w-4 shrink-0 bg-white/15 rounded" />
              <span className="text-sm font-medium">{t}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right — highlighted/Sophrion branded */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-500))/0.25] bg-[hsl(var(--brand-600))/0.06] p-7 backdrop-blur-md shadow-[0_0_40px_-12px_hsl(var(--brand-500)/0.3)]"
      >
        {/* Top accent bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] via-[hsl(var(--cyan-500))] to-[hsl(var(--brand-600))]" />
        
        <div className="mb-6 flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-[hsl(var(--brand-500))/0.2] border border-[hsl(var(--brand-500))/0.3] flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--brand-400))]" />
          </div>
          <h3 className="text-sm font-bold tracking-widest text-[hsl(var(--brand-300))] uppercase">{rightTitle}</h3>
        </div>

        <ul className="space-y-3">
          {rightItems.map((t, i) => (
            <motion.li
              key={t}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="flex items-center gap-3 text-foreground/80"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--cyan-400))]" />
              <span className="text-sm font-medium">{t}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

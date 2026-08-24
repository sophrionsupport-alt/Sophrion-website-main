"use client";

// Two-column side-by-side comparison component highlighting traditional institutional vs Sophrion ecosystem models.

import * as React from "react";
import { motion } from "motion/react";
import { Check, ArrowRight, Building2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils/cn";

// Renders comparative list cards for institutional baseline and Sophrion ecosystem additions
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
    <div className={cn("relative grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch", className)}>
      {/* ── Left Column — Traditional / Institution ── */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 sm:p-8 backdrop-blur-md"
      >
        {/* Subtle top border highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent" />

        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-foreground/50">
              <Building2 className="h-4 w-4" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wider text-foreground/50 uppercase">
              {leftTitle}
            </span>
          </div>

          <ul className="space-y-4">
            {leftItems.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/60">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5 text-xs text-foreground/40 font-mono">
                  —
                </span>
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* ── Center Divider Badge for Desktop (Absolute overlay centered) ── */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[hsl(var(--brand-500))/0.4] bg-[#0c0d14] text-[hsl(var(--cyan-400))] shadow-[0_0_24px_hsl(var(--brand-500)/0.4)]">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>

      {/* ── Right Column — Sophrion Adds / Sophrion ── */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[hsl(var(--brand-500))/0.35] bg-linear-to-br from-[hsl(var(--brand-600))/0.08] via-white/[0.03] to-[hsl(var(--cyan-500))/0.05] p-7 sm:p-8 backdrop-blur-md shadow-[0_0_50px_-15px_hsl(var(--brand-500)/0.25)]"
      >
        {/* Top glowing accent bar */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-[hsl(var(--brand-500))] via-[hsl(var(--cyan-500))] to-[hsl(var(--brand-500))]" />

        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[hsl(var(--brand-500))/0.4] bg-[hsl(var(--brand-500))/0.15] text-[hsl(var(--cyan-400))]">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="rounded-full border border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.1] px-3.5 py-1 text-[11px] font-bold tracking-widest text-[hsl(var(--cyan-300))] uppercase">
              {rightTitle}
            </span>
          </div>

          <ul className="space-y-3.5">
            {rightItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.04 }}
                className="group flex items-center gap-3 rounded-lg text-foreground transition-all duration-200"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--cyan-500))/0.15] border border-[hsl(var(--cyan-500))/0.3] text-[hsl(var(--cyan-400))]">
                  <Check className="h-3 w-3 stroke-[2.5]" />
                </div>
                <span className="text-sm font-semibold text-foreground/90 group-hover:text-foreground">
                  {item}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

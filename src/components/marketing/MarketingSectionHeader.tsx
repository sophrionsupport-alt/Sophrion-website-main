"use client";

// Reusable animated header component for marketing sections featuring eyebrow badges, title, and subtitle.

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";

// Renders left or center aligned animated section header with scroll-triggered fade-in
export default function MarketingSectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        align === "center" && "mx-auto max-w-3xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className={cn("mb-4 inline-flex", align === "center" && "justify-center w-full")}>
          {/* Consistent eyebrow pill — uppercase, letter-spaced, muted accent */}
          <span className="section-eyebrow inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-[hsl(var(--brand-400))] uppercase backdrop-blur-sm">
            <span className="h-1 w-1 rounded-full bg-[hsl(var(--brand-400))] animate-pulse" />
            {eyebrow}
          </span>
        </div>
      ) : null}
      <h2
        className={cn(
          /* Consistent H2 scale across all sections */
          "text-3xl font-bold tracking-[-0.025em] sm:text-4xl lg:text-5xl leading-[1.1]",
          align === "center" && "mx-auto"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <div className={cn("mt-5 text-base leading-relaxed text-foreground/65 sm:text-lg max-w-2xl", align === "center" && "mx-auto")}>
          {subtitle}
        </div>
      ) : null}
    </motion.div>
  );
}

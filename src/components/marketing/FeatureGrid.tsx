"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils/cn";

export type FeatureItem = {
  title: string;
  body: string;
  icon?: React.ReactNode;
  accent?: "purple" | "cyan" | "blue" | "indigo" | "emerald";
};

const ACCENT_CONFIG = {
  purple: {
    border: "hover:border-[hsl(var(--brand-500))/0.4]",
    dot: "bg-[hsl(var(--brand-400))]",
    glow: "hover:shadow-[0_0_30px_-8px_hsl(var(--brand-500)/0.3)]",
    bar: "bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-400))]",
    text: "text-[hsl(var(--brand-300))]",
  },
  cyan: {
    border: "hover:border-[hsl(var(--cyan-500))/0.4]",
    dot: "bg-[hsl(var(--cyan-400))]",
    glow: "hover:shadow-[0_0_30px_-8px_hsl(var(--cyan-500)/0.25)]",
    bar: "bg-gradient-to-r from-[hsl(var(--cyan-500))] to-[hsl(var(--cyan-400))]",
    text: "text-[hsl(var(--cyan-300))]",
  },
  blue: {
    border: "hover:border-blue-500/30",
    dot: "bg-blue-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(59,130,246,0.25)]",
    bar: "bg-gradient-to-r from-blue-500 to-blue-400",
    text: "text-blue-300",
  },
  indigo: {
    border: "hover:border-indigo-500/30",
    dot: "bg-indigo-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(99,102,241,0.25)]",
    bar: "bg-gradient-to-r from-indigo-500 to-indigo-400",
    text: "text-indigo-300",
  },
  emerald: {
    border: "hover:border-emerald-500/30",
    dot: "bg-emerald-400",
    glow: "hover:shadow-[0_0_30px_-8px_rgba(16,185,129,0.2)]",
    bar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    text: "text-emerald-300",
  },
} as const;

const ACCENT_CYCLE = ["purple", "cyan", "blue", "indigo", "emerald"] as const;

function FeatureCard({
  item,
  accent,
  index,
}: {
  item: FeatureItem;
  accent: keyof typeof ACCENT_CONFIG;
  index: number;
}) {
  const cfg = ACCENT_CONFIG[accent];
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = React.useState<React.CSSProperties>({});
  const [hovered, setHovered] = React.useState(false);

  const handleMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      setTilt({
        transform: `perspective(900px) rotateX(${((y - cy) / cy) * -3}deg) rotateY(${((x - cx) / cx) * 3}deg) translateY(-3px)`,
      });
    },
    []
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={tilt}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTilt({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)" }); setHovered(false); }}
      onMouseEnter={() => setHovered(true)}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md",
        "transition-all duration-300 will-change-transform",
        cfg.border,
        cfg.glow
      )}
    >
      {/* Top accent bar */}
      <div className={cn("absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", cfg.bar)} />
      
      {/* Ambient corner glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(closest-side, hsl(var(--brand-500) / 0.12), transparent)` }}
      />

      {item.icon && (
        <div className={cn("mb-4 w-fit rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors duration-300", `group-hover:border-current group-hover:${cfg.text}`)}>
          {item.icon}
        </div>
      )}

      <div className="flex items-start gap-3 mb-3">
        <span className={cn("mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full transition-all duration-300", hovered ? cfg.dot : "bg-foreground/20")} />
        <h3 className="text-[15px] font-semibold text-foreground leading-snug">
          {item.title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-foreground/60 pl-[18px]">
        {item.body}
      </p>
    </motion.div>
  );
}

export default function FeatureGrid({
  items,
  columns = 3,
  className,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const col =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-4", col, className)}>
      {items.map((item, i) => (
        <FeatureCard
          key={item.title}
          item={item}
          accent={item.accent ?? ACCENT_CYCLE[i % ACCENT_CYCLE.length]}
          index={i}
        />
      ))}
    </div>
  );
}

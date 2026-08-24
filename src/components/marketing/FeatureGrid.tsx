"use client";

// Responsive grid component rendering interactive feature cards with accent glows, 3D mouse tilt, and bento layout support.

import * as React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Zap,
  Flame,
  Rocket,
  Briefcase,
  Compass,
  Layers,
  Cpu,
  Palette,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

// Feature item schema for card content and accent colors
export type FeatureItem = {
  title: string;
  body: string;
  icon?: React.ReactNode;
  accent?: "purple" | "cyan" | "blue" | "indigo" | "emerald";
  badge?: string;
};

// --- Accent Style Configurations & Fallback Cycle ---
const ACCENT_CONFIG = {
  purple: {
    border: "border-[hsl(var(--brand-500))/0.25] hover:border-[hsl(var(--brand-500))/0.5]",
    dot: "bg-[hsl(var(--brand-400))]",
    glow: "hover:shadow-[0_0_35px_-8px_hsl(var(--brand-500)/0.35)]",
    bar: "bg-gradient-to-r from-[hsl(var(--brand-500))] to-[hsl(var(--brand-400))]",
    text: "text-[hsl(var(--brand-300))]",
    badgeBg: "bg-[hsl(var(--brand-500))/0.12] border-[hsl(var(--brand-500))/0.3]",
    iconBg: "bg-[hsl(var(--brand-500))/0.15] border-[hsl(var(--brand-500))/0.3] text-[hsl(var(--brand-300))]",
  },
  cyan: {
    border: "border-[hsl(var(--cyan-500))/0.25] hover:border-[hsl(var(--cyan-500))/0.5]",
    dot: "bg-[hsl(var(--cyan-400))]",
    glow: "hover:shadow-[0_0_35px_-8px_hsl(var(--cyan-500)/0.3)]",
    bar: "bg-gradient-to-r from-[hsl(var(--cyan-500))] to-[hsl(var(--cyan-400))]",
    text: "text-[hsl(var(--cyan-300))]",
    badgeBg: "bg-[hsl(var(--cyan-500))/0.12] border-[hsl(var(--cyan-500))/0.3]",
    iconBg: "bg-[hsl(var(--cyan-500))/0.15] border-[hsl(var(--cyan-500))/0.3] text-[hsl(var(--cyan-300))]",
  },
  blue: {
    border: "border-blue-500/25 hover:border-blue-500/50",
    dot: "bg-blue-400",
    glow: "hover:shadow-[0_0_35px_-8px_rgba(59,130,246,0.35)]",
    bar: "bg-gradient-to-r from-blue-500 to-blue-400",
    text: "text-blue-300",
    badgeBg: "bg-blue-500/12 border-blue-500/30",
    iconBg: "bg-blue-500/15 border-blue-500/30 text-blue-300",
  },
  indigo: {
    border: "border-indigo-500/25 hover:border-indigo-500/50",
    dot: "bg-indigo-400",
    glow: "hover:shadow-[0_0_35px_-8px_rgba(99,102,241,0.35)]",
    bar: "bg-gradient-to-r from-indigo-500 to-indigo-400",
    text: "text-indigo-300",
    badgeBg: "bg-indigo-500/12 border-indigo-500/30",
    iconBg: "bg-indigo-500/15 border-indigo-500/30 text-indigo-300",
  },
  emerald: {
    border: "border-emerald-500/25 hover:border-emerald-500/50",
    dot: "bg-emerald-400",
    glow: "hover:shadow-[0_0_35px_-8px_rgba(16,185,129,0.3)]",
    bar: "bg-gradient-to-r from-emerald-500 to-emerald-400",
    text: "text-emerald-300",
    badgeBg: "bg-emerald-500/12 border-emerald-500/30",
    iconBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
  },
} as const;

const ACCENT_CYCLE = ["purple", "cyan", "blue", "indigo", "emerald"] as const;

/* Distinct Lucide icons by experience title */
const FEATURE_ICONS: Record<string, React.ReactNode> = {
  Workshops: <Sparkles className="h-5 w-5" />,
  Challenges: <Zap className="h-5 w-5" />,
  Hackathons: <Flame className="h-5 w-5" />,
  Projects: <Rocket className="h-5 w-5" />,
  "Industry Interactions": <Briefcase className="h-5 w-5" />,
  Residency: <Compass className="h-5 w-5" />,
  "AI & Intelligent Systems": <Cpu className="h-5 w-5" />,
  "Data & Intelligence": <Layers className="h-5 w-5" />,
  "Creative Technology": <Palette className="h-5 w-5" />,
  "Cloud & Cyber": <ShieldCheck className="h-5 w-5" />,
  "Smart Engineering": <Wrench className="h-5 w-5" />,
};

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

  const iconToDisplay = item.icon ?? FEATURE_ICONS[item.title] ?? <Sparkles className="h-5 w-5" />;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={tilt}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)" })}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-transparent p-6 sm:p-7 backdrop-blur-md",
        "transition-all duration-300 h-full",
        cfg.border,
        cfg.glow
      )}
    >
      {/* Top glowing accent bar on hover */}
      <div className={cn("absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100", cfg.bar)} />

      {/* Top Header Row */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110", cfg.iconBg)}>
            {iconToDisplay}
          </div>
          <span className={cn("rounded-full border px-3 py-1 text-[10px] font-bold tracking-widest uppercase", cfg.badgeBg, cfg.text)}>
            {item.badge ?? `0${index + 1}`}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white tracking-tight mb-2.5 group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Description Body */}
        <p className="text-sm font-medium leading-relaxed text-foreground/75">
          {item.body}
        </p>
      </div>

      {/* Bottom Subtle Accent Bar Indicator */}
      <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
        <span className={cn("h-1.5 w-1.5 rounded-full", cfg.dot)} />
        <span className="text-[11px] font-semibold tracking-wider text-foreground/40 uppercase">
          Sophrion Experience
        </span>
      </div>
    </motion.div>
  );
}

export default function FeatureGrid({
  items,
  columns = 3,
  variant = "default",
  className,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "asymmetric";
  className?: string;
}) {
  /* Asymmetric Bento Layout (6 items -> 3 rows of 3 columns, perfectly filled with zero empty slots) */
  if (variant === "asymmetric") {
    /* Custom bento spans for 6 items */
    const spans = [
      "lg:col-span-2 md:col-span-2", // Row 1 Left (span 2)
      "lg:col-span-1 md:col-span-1", // Row 1 Right (span 1)
      "lg:col-span-1 md:col-span-1", // Row 2 Left (span 1)
      "lg:col-span-2 md:col-span-2", // Row 2 Right (span 2)
      "lg:col-span-2 md:col-span-2", // Row 3 Left (span 2)
      "lg:col-span-1 md:col-span-1", // Row 3 Right (span 1)
    ];

    return (
      <div className={cn("grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-stretch", className)}>
        {items.map((item, i) => {
          const accent = item.accent ?? ACCENT_CYCLE[i % ACCENT_CYCLE.length];
          const spanClass = spans[i % spans.length];
          return (
            <div key={item.title} className={spanClass}>
              <FeatureCard
                item={item}
                accent={accent}
                index={i}
              />
            </div>
          );
        })}
      </div>
    );
  }

  const col =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn("grid gap-5", col, className)}>
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

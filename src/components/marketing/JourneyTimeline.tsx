"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils/cn";

type JourneyStep = {
  number: string;
  title: string;
  body: string;
};

export default function JourneyTimeline({ steps }: { steps: JourneyStep[] }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative mt-16 max-w-5xl mx-auto px-2">
      {/* ── Vertical rail line (desktop) ── */}
      <div
        aria-hidden
        className="absolute left-1/2 top-4 bottom-4 hidden w-[2px] -translate-x-1/2 lg:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, 0.4) 15%, rgba(34, 211, 238, 0.4) 85%, transparent 100%)",
        }}
      />
      {/* ── Vertical rail line (mobile) ── */}
      <div
        aria-hidden
        className="absolute left-6 top-4 bottom-4 w-[2px] lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(168, 85, 247, 0.4) 15%, rgba(34, 211, 238, 0.4) 85%, transparent 100%)",
        }}
      />

      <ol className="relative flex flex-col gap-8">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.li
              key={step.number}
              initial={
                prefersReduced
                  ? { opacity: 0 }
                  : { opacity: 0, y: 24 }
              }
              whileInView={
                prefersReduced
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: prefersReduced ? 0.3 : 0.5,
                delay: prefersReduced ? 0 : i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                "group relative flex items-start gap-0 lg:gap-0",
                "lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center"
              )}
            >
              {/* ── Left content cell ── */}
              <div
                className={cn(
                  "hidden lg:flex lg:justify-end lg:pr-10",
                  !isEven && "lg:invisible"
                )}
              >
                {isEven && (
                  <StepCard step={step} side="left" index={i} />
                )}
              </div>

              {/* ── Rail node ── */}
              <div className="relative flex flex-col items-center justify-center z-10 shrink-0">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-500))] bg-[#0d0f18] shadow-[0_0_20px_hsl(var(--brand-500)/0.4)] ml-1 lg:ml-0 mr-4 lg:mr-0 transition-transform duration-300 group-hover:scale-110"
                >
                  <span className="text-xs font-black tracking-wider text-white">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* ── Right content cell ── */}
              <div
                className={cn(
                  "flex-1 pl-2 lg:pl-10",
                  isEven && "lg:invisible lg:pointer-events-none"
                )}
              >
                <div className="lg:hidden">
                  <StepCard step={step} side="right" index={i} />
                </div>
                {!isEven && (
                  <div className="hidden lg:block">
                    <StepCard step={step} side="right" index={i} />
                  </div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}

function StepCard({
  step,
  side,
  index,
}: {
  step: JourneyStep;
  side: "left" | "right";
  index: number;
}) {
  const ACCENT_COLORS = [
    { title: "text-[hsl(var(--brand-300))]", border: "border-[hsl(var(--brand-500))/0.3]", bg: "from-[hsl(var(--brand-600))/0.08]" },
    { title: "text-[hsl(var(--cyan-300))]", border: "border-[hsl(var(--cyan-500))/0.3]", bg: "from-[hsl(var(--cyan-500))/0.08]" },
    { title: "text-blue-300", border: "border-blue-500/30", bg: "from-blue-500/[0.08]" },
  ];
  const ac = ACCENT_COLORS[index % ACCENT_COLORS.length];

  return (
    <div
      className={cn(
        "group/card relative w-full max-w-md rounded-2xl border bg-gradient-to-br to-white/[0.02] p-6 backdrop-blur-md",
        "transition-all duration-300",
        "hover:border-white/20 hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.5)]",
        ac.border, ac.bg,
        side === "left" ? "text-left" : "text-left"
      )}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-bold tracking-widest text-white/60 uppercase">
          STEP {step.number}
        </span>
        <span className={cn("text-xs font-black tracking-widest uppercase", ac.title)}>
          {step.title}
        </span>
      </div>
      <p className="text-sm font-medium leading-relaxed text-foreground/80">
        {step.body}
      </p>
    </div>
  );
}

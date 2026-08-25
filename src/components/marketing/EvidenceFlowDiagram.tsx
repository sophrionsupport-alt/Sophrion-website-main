"use client";

// Interactive multi-stage diagram component visualizing Sophrion's 5-step evidence generation lifecycle.

import * as React from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  Activity,
  FolderGit2,
  ShieldCheck,
  TrendingUp,
  Building2,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

// Step definition schema for evidence pipeline stages
export type EvidenceStep = {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  metrics: string[];
  icon: React.ElementType;
  accentColor: string;
  accentGlow: string;
  detail: {
    description: string;
    verifiableOutputs: string[];
  };
};

// --- Pipeline Node Data ---
const EVIDENCE_FLOW_DATA: EvidenceStep[] = [
  {
    id: "participation",
    step: "01",
    title: "PARTICIPATION",
    subtitle: "Active engagement & live telemetry",
    metrics: ["Attendance Logs", "Real-time Telemetry", "Workshop Activity"],
    icon: Activity,
    accentColor: "rgb(34, 211, 238)",
    accentGlow: "rgba(34, 211, 238, 0.2)",
    detail: {
      description:
        "Captures dynamic engagement across interactive sessions, live coding sprints, and project check-ins in real time.",
      verifiableOutputs: [
        "Verified Attendance Records",
        "Live Session Activity Logs",
        "Participation Scorecard",
      ],
    },
  },
  {
    id: "project-evidence",
    step: "02",
    title: "PROJECT EVIDENCE",
    subtitle: "Git repos, commits & live demos",
    metrics: ["Git Commit History", "System Architecture", "Live Demos"],
    icon: FolderGit2,
    accentColor: "rgb(168, 85, 247)",
    accentGlow: "rgba(168, 85, 247, 0.2)",
    detail: {
      description:
        "Tracks tangible project outputs with complete commit history, code quality metrics, and production deployments.",
      verifiableOutputs: [
        "Repository Audit Trail",
        "System Design Artifacts",
        "Deployed Application Links",
      ],
    },
  },
  {
    id: "assessment",
    step: "03",
    title: "ASSESSMENT",
    subtitle: "Peer code reviews & benchmarks",
    metrics: ["Mentor Scorecards", "Peer Reviews", "Code Benchmarks"],
    icon: ShieldCheck,
    accentColor: "rgb(59, 130, 246)",
    accentGlow: "rgba(59, 130, 246, 0.2)",
    detail: {
      description:
        "Multi-layered evaluation incorporating expert reviews, rubric-based feedback, and continuous code quality audits.",
      verifiableOutputs: [
        "Mentor Feedback Matrix",
        "Peer Review Summary",
        "Technical Rubric Breakdown",
      ],
    },
  },
  {
    id: "industry-readiness",
    step: "04",
    title: "INDUSTRY READINESS",
    subtitle: "Real-world capability index",
    metrics: ["Capability Index", "Domain Score", "Role Alignment"],
    icon: TrendingUp,
    accentColor: "rgb(16, 185, 129)",
    accentGlow: "rgba(16, 185, 129, 0.2)",
    detail: {
      description:
        "Aggregates performance indicators into a transparent capability score aligned with industry hiring standards.",
      verifiableOutputs: [
        "Verified Capability Badge",
        "Domain Readiness Rating",
        "Skill Maturity Graph",
      ],
    },
  },
  {
    id: "institutional-impact",
    step: "05",
    title: "INSTITUTIONAL IMPACT",
    subtitle: "Placement analytics & audit reports",
    metrics: ["Cohort Insights", "Placement Readiness", "Audit Reports"],
    icon: Building2,
    accentColor: "rgb(245, 158, 11)",
    accentGlow: "rgba(245, 158, 11, 0.2)",
    detail: {
      description:
        "Delivers macro-level intelligence for institutional leadership, accreditation bodies, and placement partners.",
      verifiableOutputs: [
        "Institutional Audit Report",
        "Cohort Placement Matrix",
        "Executive Outcome Digest",
      ],
    },
  },
];

export default function EvidenceFlowDiagram() {
  const [activeStepId, setActiveStepId] = React.useState<string>("assessment");
  const prefersReduced = useReducedMotion();

  const activeStep =
    EVIDENCE_FLOW_DATA.find((s) => s.id === activeStepId) ||
    EVIDENCE_FLOW_DATA[2];

  return (
    <div className="relative mt-12 w-full max-w-5xl mx-auto select-none">
      {/* ── PIPELINE STEP CARDS ── */}
      <div className="relative mb-6 overflow-x-auto scrollbar-none pb-2">
        {/* Horizontal connector line */}
        <div
          aria-hidden="true"
          className="absolute top-[38px] left-[10%] right-[10%] h-px z-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 80%, transparent)",
          }}
        />

        {/* Step cards */}
        <div className="flex md:grid md:grid-cols-5 gap-3 relative z-10 min-w-[700px] md:min-w-0">
          {EVIDENCE_FLOW_DATA.map((stepItem, idx) => {
            const isActive = stepItem.id === activeStepId;
            const IconComponent = stepItem.icon;

            return (
              <React.Fragment key={stepItem.id}>
                <button
                  onClick={() => setActiveStepId(stepItem.id)}
                  className={cn(
                    "group relative flex flex-1 flex-col items-center p-4 pt-5 rounded-2xl border transition-all duration-300 cursor-pointer text-center backdrop-blur-md",
                    isActive
                      ? "bg-white/[0.07] border-white/25"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/15"
                  )}
                  style={
                    isActive
                      ? {
                        boxShadow: `0 0 0 1px ${stepItem.accentColor}33, 0 8px 32px -8px ${stepItem.accentGlow}`,
                        borderColor: `${stepItem.accentColor}55`,
                      }
                      : undefined
                  }
                >
                  {/* Step number badge */}
                  <span
                    className={cn(
                      "font-mono text-[10px] font-black tracking-widest mb-3 transition-colors",
                      isActive ? "" : "text-foreground/30 group-hover:text-foreground/50"
                    )}
                    style={isActive ? { color: stepItem.accentColor } : undefined}
                  >
                    {stepItem.step}
                  </span>

                  {/* Icon circle */}
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl mb-3 transition-all duration-300",
                      isActive ? "bg-white/10" : "bg-white/[0.04] group-hover:bg-white/[0.07]"
                    )}
                    style={
                      isActive
                        ? {
                          color: stepItem.accentColor,
                          boxShadow: `0 4px 16px -4px ${stepItem.accentGlow}`,
                        }
                        : undefined
                    }
                  >
                    <IconComponent
                      className={cn(
                        "h-4 w-4 transition-colors",
                        isActive ? "" : "text-foreground/35 group-hover:text-foreground/60"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className={cn(
                      "text-[10px] font-black tracking-tight uppercase leading-tight mb-1.5 transition-colors",
                      isActive ? "text-white" : "text-foreground/50 group-hover:text-foreground/80"
                    )}
                  >
                    {stepItem.title}
                  </h4>

                  <p className="text-[10px] text-foreground/35 leading-snug line-clamp-2">
                    {stepItem.subtitle}
                  </p>

                  {/* Active bottom glow bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute bottom-0 inset-x-4 h-[2px] rounded-full"
                      style={{ background: stepItem.accentColor }}
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>

                {/* Arrow connector between steps */}
                {idx < EVIDENCE_FLOW_DATA.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden md:flex absolute top-[38px] items-center justify-center z-20 pointer-events-none"
                    style={{ left: `calc(${(idx + 1) * 20}% - 6px)` }}
                  >
                    <ArrowRight className="h-3 w-3 text-white/15" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* ── ACTIVE STEP DETAIL PANEL ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep.id}
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl border backdrop-blur-xl"
          style={{
            borderColor: `${activeStep.accentColor}30`,
            background: `linear-gradient(135deg, ${activeStep.accentGlow} 0%, rgba(255,255,255,0.01) 60%)`,
            boxShadow: `0 0 48px -16px ${activeStep.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`,
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute inset-x-0 top-0 h-[2px]"
            style={{
              background: `linear-gradient(to right, transparent, ${activeStep.accentColor}, transparent)`,
            }}
          />

          <div className="p-6 sm:p-8">
            {/* Header row */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Live indicator dot */}
                <span
                  className="flex h-2.5 w-2.5 rounded-full animate-pulse shrink-0"
                  style={{ background: activeStep.accentColor, boxShadow: `0 0 8px ${activeStep.accentColor}` }}
                />
                <div>
                  <p className="font-mono text-[10px] font-bold tracking-[0.2em] text-foreground/40 uppercase">
                    Node {activeStep.step}
                  </p>
                  <h3 className="text-base font-black tracking-tight text-white">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              {/* Metric pills */}
              <div className="flex flex-wrap items-center gap-2">
                {activeStep.metrics.map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[10px] font-semibold px-2.5 py-1 rounded-lg border"
                    style={{
                      color: activeStep.accentColor,
                      borderColor: `${activeStep.accentColor}30`,
                      background: `${activeStep.accentColor}0D`,
                    }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* 2-column body */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
              {/* Left — description */}
              <div>
                <span className="block font-mono text-[9px] font-black tracking-[0.2em] text-foreground/35 uppercase mb-3">
                  Documentation & Telemetry Focus
                </span>
                <p className="text-sm font-medium leading-relaxed text-foreground/75">
                  {activeStep.detail.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className="hidden md:block w-px self-stretch my-2"
                style={{ background: `${activeStep.accentColor}20` }}
              />

              {/* Right — outputs */}
              <div>
                <span className="block font-mono text-[9px] font-black tracking-[0.2em] text-foreground/35 uppercase mb-3">
                  Verifiable Output Artifacts
                </span>
                <ul className="space-y-2.5">
                  {activeStep.detail.verifiableOutputs.map((output) => (
                    <li
                      key={output}
                      className="flex items-center gap-2.5 text-sm font-semibold text-foreground/85"
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full shrink-0"
                        style={{
                          background: activeStep.accentColor,
                          boxShadow: `0 0 6px ${activeStep.accentColor}`,
                        }}
                      />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

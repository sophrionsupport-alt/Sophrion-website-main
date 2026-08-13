"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Activity,
  FolderGit2,
  ShieldCheck,
  TrendingUp,
  Building2,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

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

const EVIDENCE_FLOW_DATA: EvidenceStep[] = [
  {
    id: "participation",
    step: "01",
    title: "PARTICIPATION",
    subtitle: "Active engagement & live telemetry",
    metrics: ["Attendance Logs", "Real-time Telemetry", "Workshop Activity"],
    icon: Activity,
    accentColor: "rgb(34, 211, 238)", // Cyan
    accentGlow: "rgba(34, 211, 238, 0.25)",
    detail: {
      description: "Captures dynamic engagement across interactive sessions, live coding sprints, and project check-ins in real time.",
      verifiableOutputs: ["Verified Attendance Records", "Live Session Activity Logs", "Participation Scorecard"],
    },
  },
  {
    id: "project-evidence",
    step: "02",
    title: "PROJECT EVIDENCE",
    subtitle: "Git repos, commits & live demos",
    metrics: ["Git Commit History", "System Architecture", "Live Demos"],
    icon: FolderGit2,
    accentColor: "rgb(168, 85, 247)", // Purple
    accentGlow: "rgba(168, 85, 247, 0.25)",
    detail: {
      description: "Tracks tangible project outputs with complete commit history, code quality metrics, and production deployments.",
      verifiableOutputs: ["Repository Audit Trail", "System Design Artifacts", "Deployed Application Links"],
    },
  },
  {
    id: "assessment",
    step: "03",
    title: "ASSESSMENT",
    subtitle: "Peer code reviews & benchmarks",
    metrics: ["Mentor Scorecards", "Peer Reviews", "Code Benchmarks"],
    icon: ShieldCheck,
    accentColor: "rgb(59, 130, 246)", // Blue
    accentGlow: "rgba(59, 130, 246, 0.25)",
    detail: {
      description: "Multi-layered evaluation incorporating expert reviews, rubric-based feedback, and continuous code quality audits.",
      verifiableOutputs: ["Mentor Feedback Matrix", "Peer Review Summary", "Technical Rubric Breakdown"],
    },
  },
  {
    id: "industry-readiness",
    step: "04",
    title: "INDUSTRY READINESS",
    subtitle: "Real-world capability index",
    metrics: ["Capability Index", "Domain Score", "Role Alignment"],
    icon: TrendingUp,
    accentColor: "rgb(16, 185, 129)", // Emerald
    accentGlow: "rgba(16, 185, 129, 0.25)",
    detail: {
      description: "Aggregates performance indicators into a transparent capability score aligned with industry hiring standards.",
      verifiableOutputs: ["Verified Capability Badge", "Domain Readiness Rating", "Skill Maturity Graph"],
    },
  },
  {
    id: "institutional-impact",
    step: "05",
    title: "INSTITUTIONAL IMPACT",
    subtitle: "Placement analytics & audit reports",
    metrics: ["Cohort Insights", "Placement Readiness", "Audit Reports"],
    icon: Building2,
    accentColor: "rgb(245, 158, 11)", // Amber
    accentGlow: "rgba(245, 158, 11, 0.25)",
    detail: {
      description: "Delivers macro-level intelligence for institutional leadership, accreditation bodies, and placement partners.",
      verifiableOutputs: ["Institutional Audit Report", "Cohort Placement Matrix", "Executive Outcome Digest"],
    },
  },
];

export default function EvidenceFlowDiagram() {
  const [activeStepId, setActiveStepId] = React.useState<string>("assessment");
  const prefersReduced = useReducedMotion();

  const activeStep = EVIDENCE_FLOW_DATA.find((s) => s.id === activeStepId) || EVIDENCE_FLOW_DATA[2];

  return (
    <div className="relative mt-10 w-full max-w-5xl mx-auto px-2 select-none">
      {/* ── MINIMAL PIPELINE FLOW BAR ── */}
      <div className="relative mb-8 overflow-x-auto scrollbar-none pb-2">
        {/* Connecting Laser Line */}
        <div
          aria-hidden="true"
          className="absolute top-5 left-8 right-8 h-px z-0 bg-white/10 hidden md:block"
        />

        {/* Minimal Steps Flow */}
        <div className="flex md:grid md:grid-cols-5 gap-2.5 relative z-10 min-w-[650px] md:min-w-0">
          {EVIDENCE_FLOW_DATA.map((stepItem, index) => {
            const isActive = stepItem.id === activeStepId;
            const IconComponent = stepItem.icon;

            return (
              <button
                key={stepItem.id}
                onClick={() => setActiveStepId(stepItem.id)}
                className={cn(
                  "group relative flex flex-1 flex-col items-start p-3.5 rounded-xl border transition-all duration-200 cursor-pointer text-left backdrop-blur-md",
                  isActive
                    ? "bg-white/[0.05] border-white/20 shadow-lg"
                    : "bg-white/[0.015] border-white/[0.06] hover:bg-white/[0.03] hover:border-white/15"
                )}
                style={
                  isActive
                    ? {
                        boxShadow: `0 4px 20px -4px ${stepItem.accentGlow}`,
                        borderColor: stepItem.accentColor,
                      }
                    : undefined
                }
              >
                {/* Step Node Header */}
                <div className="flex items-center justify-between w-full mb-2.5">
                  <span
                    className={cn(
                      "font-mono text-[10px] font-bold tracking-wider px-1.5 py-0.5 rounded transition-colors",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-foreground/40 group-hover:text-foreground/70"
                    )}
                    style={isActive ? { color: stepItem.accentColor } : undefined}
                  >
                    {stepItem.step}
                  </span>
                  <div
                    className={cn(
                      "flex h-6 w-6 items-center justify-center rounded-lg transition-all",
                      isActive ? "bg-white/10" : "bg-transparent text-foreground/40 group-hover:text-foreground/70"
                    )}
                    style={isActive ? { color: stepItem.accentColor } : undefined}
                  >
                    <IconComponent className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Step Title */}
                <h4
                  className={cn(
                    "text-xs font-bold tracking-tight uppercase transition-colors line-clamp-1 mb-1",
                    isActive ? "text-white" : "text-foreground/60 group-hover:text-foreground"
                  )}
                >
                  {stepItem.title}
                </h4>

                <p className="text-[11px] text-foreground/40 line-clamp-1 font-medium">
                  {stepItem.subtitle}
                </p>

                {/* Minimal Active Underline Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeMinimalUnderline"
                    className="absolute bottom-0 inset-x-3 h-[2px] rounded-full"
                    style={{ background: stepItem.accentColor }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── SLEEK MINIMAL TELEMETRY DETAIL CARD ── */}
      <motion.div
        key={activeStep.id}
        initial={prefersReduced ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-xl"
        style={{
          boxShadow: `0 0 30px -10px ${activeStep.accentGlow}`,
        }}
      >
        {/* Minimal Monospace Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <span
              className="flex h-2 w-2 rounded-full animate-pulse"
              style={{ background: activeStep.accentColor }}
            />
            <span className="font-mono text-xs font-semibold tracking-wider text-foreground/50 uppercase">
              NODE {activeStep.step} // {activeStep.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {activeStep.metrics.map((m) => (
              <span
                key={m}
                className="font-mono text-[10px] text-foreground/60 bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Minimal 2-Column Telemetry Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <span className="block font-mono text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">
              DOCUMENTATION & TELEMETRY FOCUS
            </span>
            <p className="text-sm font-medium leading-relaxed text-foreground/80">
              {activeStep.detail.description}
            </p>
          </div>

          <div>
            <span className="block font-mono text-[10px] font-bold tracking-widest text-foreground/40 uppercase mb-2">
              VERIFIABLE OUTPUT ARTIFACTS
            </span>
            <ul className="space-y-2">
              {activeStep.detail.verifiableOutputs.map((output) => (
                <li key={output} className="flex items-center gap-2.5 text-xs text-foreground/90 font-medium">
                  <span
                    className="h-1.5 w-1.5 rounded-full shrink-0"
                    style={{ background: activeStep.accentColor }}
                  />
                  <span>{output}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  BarChart3,
  Search,
  Eye,
  GitBranch,
  FileText,
  Workflow,
  AlertCircle
} from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import {
  READINESS_DIMENSIONS,
  OBSERVATION_DIMENSIONS,
  EVIDENCE_SOURCES,
  INSTITUTIONAL_OUTPUTS
} from "@/lib/marketing/evidenceData";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export default function EvidencePage() {
  return (
    <MarketingShell>
      {/* ─── 1. HERO ─── */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }}
          />
          <div
            className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-500)), transparent)" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold tracking-[0.15em] text-[hsl(var(--brand-400))] uppercase backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-400))] animate-pulse" />
              Measurable Capability
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Build Evidence. Not Claims.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Sophrion is designed so that learning, participation, project work, feedback and development can be observed, assessed and documented.
            </p>

            <p className="mt-4 text-sm font-semibold text-[hsl(var(--cyan-300))]">
              The process is structured. The outcomes are earned.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#readiness-score">Explore Readiness Dimensions</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.institutionalPilot} primary={false}>
                View Institutional Pilot
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. THE MEASUREMENT PHILOSOPHY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Pedagogical Stance"
            title="Measure Development, Not Just Attendance."
            subtitle="A student attending a session is activity. A student applying knowledge, contributing to a project, responding to feedback and improving their work is evidence."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-xs sm:text-sm font-bold text-foreground/85">
            {[
              "PARTICIPATION",
              "ENGAGEMENT",
              "CAPABILITY",
              "APPLICATION",
              "EVIDENCE",
              "OUTCOME"
            ].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={cn(
                  "rounded-xl border px-4 py-2.5 shadow-sm backdrop-blur-md",
                  i === 0 || i === arr.length - 1
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03]"
                )}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold hidden sm:inline">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT SOPHRION OBSERVES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Continuous Observation"
            title="What Sophrion Observes"
            subtitle="Assessment is integrated into daily active learning workflows rather than evaluated solely through isolated examinations."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OBSERVATION_DIMENSIONS.map((obs) => (
              <div
                key={obs.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))] inline-block mb-3" />
                <h4 className="text-sm font-bold text-foreground mb-1.5">{obs.title}</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{obs.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. INDUSTRY READINESS SCORE ─── */}
      <section id="readiness-score" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Development Metrics"
            title="Industry Readiness Score"
            subtitle="An evidence-based representation of student development during a Sophrion experience across six foundational dimensions."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {READINESS_DIMENSIONS.map((dim) => (
              <div
                key={dim.num}
                className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.3] transition-all"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                    Dimension {dim.num}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{dim.title}</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {dim.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest block">
                      Observable Evidence:
                    </span>
                    {dim.observableEvidence.map((ev) => (
                      <div key={ev} className="flex items-start gap-2 text-xs text-foreground/75 font-medium">
                        <span className="mt-1 h-1 w-1 rounded-full bg-[hsl(var(--cyan-400))] shrink-0" />
                        <span>{ev}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-5 text-center max-w-3xl mx-auto">
            <p className="text-xs text-foreground/75 leading-relaxed font-medium">
              Important: The Industry Readiness Score is a Sophrion development measure. It is not an academic grade, placement score or guarantee of employment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. WHERE EVIDENCE COMES FROM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Evidence Triangulation"
            title="Evidence Comes From Multiple Sources"
            subtitle="To ensure reliability, student development is triangulated across diverse ecosystem touchpoints."
            align="center"
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
            {EVIDENCE_SOURCES.map((src) => (
              <div
                key={src}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4 text-center backdrop-blur-md flex items-center justify-center"
              >
                <span className="text-xs font-semibold text-foreground/80">{src}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. PROJECT EVIDENCE LIFECYCLE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Stage Artifacts"
            title="Projects Make Development Visible"
            subtitle="Each phase of project execution produces distinct observable artifacts."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stage: "01 Discovery", evidence: "Problem understanding, stakeholder questioning, and literature exploration." },
              { stage: "02 Validation", evidence: "Constraint identification, technical scoping, and feasibility benchmarking." },
              { stage: "03 Build", evidence: "Applied technical implementation, system architecture, and code hygiene." },
              { stage: "04 Feedback", evidence: "Receptiveness to constructive criticism from mentors and domain leads." },
              { stage: "05 Iteration", evidence: "Empirical refactoring, performance optimization, and architectural pivots." },
              { stage: "06 Showcase", evidence: "Technical defense, clear communication, and public proof-of-work demonstration." }
            ].map((st) => (
              <div
                key={st.stage}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <span className="text-xs font-black uppercase tracking-wider text-[hsl(var(--brand-300))] block mb-2">
                  {st.stage}
                </span>
                <p className="text-xs text-foreground/70 leading-relaxed">{st.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. STUDENT DEVELOPMENT PROFILE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Individual Growth"
              title="Every Learner Has a Development Story"
              subtitle="The Sophrion framework captures multifaceted student growth into verifiable proof-of-work records."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-xs font-semibold text-foreground/80">
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-[hsl(var(--cyan-300))] block mb-1">Individual Development Profile</span>
                <span className="text-foreground/60 font-normal">Documented trajectory across all sprint cycles.</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-[hsl(var(--brand-300))] block mb-1">Industry Readiness Score</span>
                <span className="text-foreground/60 font-normal">Radar metric visualizer across 6 development dimensions.</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-emerald-300 block mb-1">Project Contribution Record</span>
                <span className="text-foreground/60 font-normal">Verifiable role breakdown and delivered architecture modules.</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-blue-300 block mb-1">Portfolio-Ready Evidence</span>
                <span className="text-foreground/60 font-normal">GitHub repositories, architecture docs, and live demos.</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-purple-300 block mb-1">Certificate Eligibility</span>
                <span className="text-foreground/60 font-normal">Earned Sophrion Industry Readiness credential.</span>
              </div>
              <div className="p-4 rounded-2xl border border-white/10 bg-white/5">
                <span className="text-indigo-300 block mb-1">Activity Credentials</span>
                <span className="text-foreground/60 font-normal">Hackathon, workshop, and challenge milestone records.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. INSTITUTIONAL IMPACT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Executive Clarity"
            title="The Institution Sees More Than Individual Students"
            subtitle="College leadership receives aggregated, transparent insights into cohort readiness, project quality, and curriculum enrichment."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INSTITUTIONAL_OUTPUTS.map((out) => (
              <div
                key={out.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <h4 className="text-base font-bold text-foreground mb-2">{out.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{out.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. THE IMPACT REPORT CHAIN ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Reporting Architecture"
              title="Institutional Impact Report"
              subtitle="The formal evidence pipeline delivered to academic leadership upon program conclusion."
            />

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs font-bold text-foreground/85 bg-white/[0.03] rounded-2xl p-5 border border-white/[0.07]">
              <span>BASELINE</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>INTERVENTION</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>EVIDENCE</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>OUTCOMES</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>INSIGHTS</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-[hsl(var(--brand-300))] font-bold">RECOMMENDATIONS</span>
            </div>

            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3 text-xs text-foreground/70">
              <span>• Executive Summary</span>
              <span>• Cohort Participation Distribution</span>
              <span>• Industry Readiness Score Analysis</span>
              <span>• Project Deliverable Showcase</span>
              <span>• Mentor & Faculty Observations</span>
              <span>• Industry Review Commentary</span>
              <span>• Identified Cohort Bottlenecks</span>
              <span>• Student Self-Reflections</span>
              <span>• Strategic Curriculum Recommendations</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. TRANSPARENT OUTCOMES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground/60 mb-4">
              Transparency
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
              What Sophrion Does Not Promise
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6 max-w-3xl">
              We maintain absolute integrity with students and institutions. Sophrion creates the active environment, structure, access, feedback and opportunities through which students can develop capability. We do not make speculative commercial guarantees:
            </p>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-xs font-semibold text-foreground/60 mb-6">
              <span>✕ Guaranteed Placements</span>
              <span>✕ Guaranteed Internships</span>
              <span>✕ Guaranteed Startups / Funding</span>
              <span>✕ Guaranteed Client Adoption</span>
              <span>✕ Fixed Salary Numbers</span>
              <span>✕ Universal Identical Outcomes</span>
            </div>

            <p className="text-xs italic text-foreground/50 border-t border-white/[0.06] pt-4">
              Outcomes are determined by individual student dedication, technical execution quality, and external market opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 11. FROM PILOT TO PROOF ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Partnership Trajectory"
            title="Every Pilot Can Strengthen the Ecosystem"
            subtitle="Sophrion's institutional credibility grows through documented execution and verifiable outcomes."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 text-xs font-bold text-foreground/85">
            {[
              "Pilot",
              "Evidence",
              "Institutional Review",
              "Validated Model",
              "Case Study",
              "Longer Partnership"
            ].map((st, i, arr) => (
              <React.Fragment key={st}>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2">
                  {st}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. THE LONG-TERM VISION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.06] bg-white/[0.015] p-8 sm:p-10 backdrop-blur-md">
            <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] block mb-2">
              Future Development
            </span>
            <h3 className="text-xl font-bold text-foreground mb-3">The Long-Term Evidence Vision</h3>
            <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed max-w-3xl mb-6">
              Over time, Sophrion will expand its digital evidence infrastructure to connect lifelong learning histories, verified project contributions, cryptographic skill credentials, and institutional capability analytics.
            </p>

            <div className="flex flex-wrap gap-2 text-xs font-semibold text-foreground/60">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Learner Development History</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Continuous Experience Records</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Cryptographic Credentials</span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1">Predictive Cohort Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 13. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Start With a Measurable Experience.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              Evidence-Based Active Learning for Your Institution.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Give your students an environment where development can be experienced, demonstrated and understood.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.institutionalPilot}>
                Explore Institutional Pilot
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.institutions} primary={false}>
                For Institutions
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.contact} primary={false}>
                Contact Sophrion
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingShell>
  );
}

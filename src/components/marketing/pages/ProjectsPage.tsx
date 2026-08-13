"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Layers,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  ExternalLink,
  Code2,
  FileText,
  Workflow,
  X,
  Compass,
  Target,
  Users,
  ShieldCheck,
  Zap,
  Brain
} from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import EvidenceFlowDiagram from "@/components/marketing/EvidenceFlowDiagram";
import { SHOWCASE_PROJECTS, type ShowcaseProject, type TeamContribution } from "@/lib/marketing/projectsData";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

const DOMAIN_OPTIONS = [
  "All Domains",
  "AI",
  "Data",
  "Creative Technology",
  "Cloud / Cyber",
  "Smart Engineering"
] as const;

const TYPE_OPTIONS = [
  "All Types",
  "Student Project",
  "Challenge / Hackathon",
  "Institutional Pilot",
  "Industry Context",
  "Research"
] as const;

export default function ProjectsPage() {
  const [selectedDomain, setSelectedDomain] = React.useState<string>("All Domains");
  const [selectedType, setSelectedType] = React.useState<string>("All Types");
  const [activeProjectModal, setActiveProjectModal] = React.useState<ShowcaseProject | null>(null);

  const filteredProjects = React.useMemo(() => {
    return SHOWCASE_PROJECTS.filter((p) => {
      const matchDomain = selectedDomain === "All Domains" || p.domain === selectedDomain;
      const matchType = selectedType === "All Types" || p.projectType === selectedType;
      return matchDomain && matchType;
    });
  }, [selectedDomain, selectedType]);

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
              Evidence of Capability
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Projects That Make Learning Visible
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Projects are where Sophrion's learning ecosystem becomes tangible—turning problems, knowledge, collaboration and feedback into evidence of what learners can do.
            </p>

            <p className="mt-4 text-sm font-semibold text-[hsl(var(--cyan-300))] max-w-2xl">
              A project is not just an output. It is a record of discovery, decisions, iteration and contribution.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#project-grid">Explore Projects</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.experiences} primary={false}>
                View Experiences
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. PROJECT ECOSYSTEM LIFECYCLE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Lifecycle"
            title="Projects Start With Problems"
            subtitle="Projects may originate from students, faculty, institutions, industry or client contexts and are shaped according to relevance, feasibility and available support."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2.5 max-w-5xl mx-auto">
            {[
              "Problem",
              "Discovery",
              "Validation",
              "Team Formation",
              "Build",
              "Feedback",
              "Iteration",
              "Showcase"
            ].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={cn(
                  "rounded-xl border px-4 py-2.5 text-xs font-bold shadow-sm backdrop-blur-md",
                  i === 0 || i === arr.length - 1
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03] text-foreground/85"
                )}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold text-xs hidden sm:inline">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. FILTERS & RESTRUCTURED PROJECT CARDS ─── */}
      <section id="project-grid" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Showcase Library</h2>
              <p className="text-xs text-foreground/60 mt-1">
                Explore authentic projects built across Sophrion experiences.
              </p>
            </div>

            {/* Filter pills */}
            <div className="space-y-3">
              {/* Domain filters */}
              <div className="flex flex-wrap gap-1.5">
                {DOMAIN_OPTIONS.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setSelectedDomain(d)}
                    className={cn(
                      "rounded-lg px-3 py-1 text-xs font-semibold transition-all",
                      selectedDomain === d
                        ? "bg-[hsl(var(--brand-600))/0.2] text-[hsl(var(--brand-300))] border border-[hsl(var(--brand-500))/0.4]"
                        : "bg-white/[0.02] text-foreground/60 border border-white/[0.06] hover:text-foreground"
                    )}
                  >
                    {d}
                  </button>
                ))}
              </div>

              {/* Type filters */}
              <div className="flex flex-wrap gap-1.5">
                {TYPE_OPTIONS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSelectedType(t)}
                    className={cn(
                      "rounded-lg px-3 py-1 text-[11px] font-medium transition-all",
                      selectedType === t
                        ? "bg-[hsl(var(--cyan-500))/0.15] text-[hsl(var(--cyan-300))] border border-[hsl(var(--cyan-500))/0.3]"
                        : "bg-white/[0.02] text-foreground/50 border border-white/[0.05] hover:text-foreground"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-[hsl(var(--brand-500))/0.3] hover:shadow-[0_0_30px_-10px_hsl(var(--brand-500)/0.2)]"
              >
                <div>
                  {/* Category badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-md border border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.1] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-300))]">
                        {proj.domain}
                      </span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-foreground/65">
                        {proj.projectType}
                      </span>
                    </div>
                    <span className="text-[11px] text-foreground/45 font-medium">
                      {proj.experienceSource}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{proj.title}</h3>

                  {/* 1. Problem */}
                  <div className="mb-4 rounded-xl border border-white/5 bg-white/[0.02] p-3.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-rose-300 block mb-1">
                      Problem Context
                    </span>
                    <p className="text-xs text-foreground/75 leading-relaxed">{proj.problem}</p>
                  </div>

                  {/* 2. Approach & Output */}
                  <div className="space-y-3 mb-5 text-xs text-foreground/70 leading-relaxed">
                    <div>
                      <span className="font-bold text-foreground block mb-0.5">Approach:</span>
                      <p>{proj.approach}</p>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block mb-0.5">What Was Built:</span>
                      <p>{proj.output}</p>
                    </div>
                  </div>

                  {/* Capability Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {proj.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-md border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] px-2 py-0.5 text-[10px] font-semibold text-[hsl(var(--cyan-300))]"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technologies */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] text-foreground/60">
                          {tech}
                        </span>
                      ))}
                      {proj.technologies.length > 4 && (
                        <span className="text-[10px] text-foreground/40 self-center">
                          +{proj.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveProjectModal(proj)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[hsl(var(--brand-300))] hover:text-foreground transition-colors"
                    >
                      <span>View Evidence</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 13. AUTHENTIC INVENTORY NOTICE */}
          <div className="mt-14 text-center rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 max-w-2xl mx-auto">
            <p className="text-xs text-foreground/60 leading-relaxed font-medium">
              More projects are being built inside the Sophrion ecosystem. We display authentic projects with verifiable evidence rather than generic mockups.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. EVIDENCE OF CAPABILITY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Capability Metrics"
            title="More Than a Portfolio"
            subtitle="Projects provide evidence of how a learner understands problems, learns what is needed, collaborates, builds, responds to feedback and contributes to an outcome."
            align="center"
          />

          <EvidenceFlowDiagram />

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Problem Solving", desc: "Formulating hypotheses, clarifying constraints, and architecting solutions under ambiguity." },
              { title: "Research & Synthesis", desc: "Reviewing technical documentation, literature benchmarks, and prior engineering art." },
              { title: "Technical Execution", desc: "Writing maintainable code, configuring infrastructure pipelines, and building functional systems." },
              { title: "Collaboration & Teamwork", desc: "Operating inside cross-functional squads, sprint reviews, and asynchronous communication." },
              { title: "Communication", desc: "Presenting architecture trade-offs, writing decision records (ADRs), and defending decisions." },
              { title: "Iteration & Refinement", desc: "Absorbing feedback from mentors and domain leads to refactor and optimize deliverables." },
              { title: "Professional Execution", desc: "Adhering to production hygiene, version control rigor, and verifiable delivery standards." },
              { title: "Public Proof-of-Work", desc: "Documenting artifacts into deployable repositories, live demos, and verifiable portfolios." }
            ].map((cap) => (
              <div
                key={cap.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))] inline-block mb-3" />
                <h4 className="text-sm font-bold text-foreground mb-1.5">{cap.title}</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. CONNECT PROJECTS TO ECOSYSTEM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Integration"
            title="Projects Connect the Ecosystem"
            subtitle="Projects connect experiences, people, knowledge and opportunities into a continuous learning cycle."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-xs sm:text-sm font-bold text-foreground/85">
            {[
              "Pathway",
              "Domain Knowledge",
              "Workshop",
              "Discovery",
              "Project",
              "Mentor",
              "Expert",
              "Industry",
              "Feedback",
              "Showcase"
            ].map((node, i, arr) => (
              <React.Fragment key={node}>
                <span className={cn(
                  "rounded-xl border px-3.5 py-2 shadow-sm backdrop-blur-md",
                  node === "Project" || node === "Showcase"
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03]"
                )}>
                  {node}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold hidden sm:inline">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PROJECT → EXPERIENCE FLOWS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Dynamic Pathways"
            title="Projects Don't Exist in Isolation"
            subtitle="These are illustrative examples of how project work triggers further exploration across the Sophrion ecosystem."
            align="center"
          />

          <div className="mt-12 space-y-3">
            {[
              { left: "Workshop", right: "New capability → Multi-week Project Track" },
              { left: "Hackathon", right: "MVP Prototype → Scaled Project Architecture" },
              { left: "Project", right: "Expert Review → Entry into Sophrion Residency" },
              { left: "Residency Project", right: "Industry Feedback → Advanced Opportunity" }
            ].map((item) => (
              <div
                key={item.left}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-4 backdrop-blur-md"
              >
                <span className="text-xs font-black uppercase tracking-wider text-[hsl(var(--brand-300))]">
                  {item.left}
                </span>
                <span className="text-xs font-semibold text-foreground/80">
                  {item.right}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. INDUSTRY & REAL-WORLD CONTEXT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 sm:p-12 backdrop-blur-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300 mb-4">
              Real-World Alignment
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Projects With Real-World Context
            </h3>
            <p className="text-sm text-foreground/75 leading-relaxed max-w-3xl mb-6">
              Selected projects may incorporate institutional, industry or client requirements where suitable opportunities are available and approved. Learners engage with authentic operating constraints and technical standards.
            </p>
            <p className="text-xs text-foreground/45 italic border-l border-white/10 pl-3">
              Note: Client participation, commercial engagements and external project opportunities depend on availability, suitability, approval and agreed scope. Sophrion maintains strict data confidentiality for external stakeholders.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 11. SHOWCASE & READINESS SCORE BRIDGE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Demonstration"
                title="Demonstrate, Don't Just Submit"
                subtitle="The final showcase is an opportunity for student squads to defend architectural decisions, explain iterative pivots, and present verifiable proof-of-work."
              />

              <ul className="mt-6 space-y-2 text-xs text-foreground/70 font-medium">
                {[
                  "What problem was understood and scoped",
                  "What architecture was built and deployed",
                  "Why technical decisions and trade-offs were made",
                  "What feedback triggered pivots and refactoring",
                  "What each individual student contributed to the system",
                  "What capability was demonstrably learned"
                ].map((pt) => (
                  <li key={pt} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))]" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-10 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-400))] mb-2">
                  From Output to Evidence
                </p>
                <h4 className="text-lg font-bold text-foreground mb-4">
                  The Continuous Evidence Pipeline
                </h4>
                <div className="flex flex-col gap-2 text-xs font-semibold text-foreground/80">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    1. Project Work & Sprint Execution
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    2. Mentor & Domain Expert Observation
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    3. Continuous Rubric-Based Assessment
                  </div>
                  <div className="p-3 rounded-xl border border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.06] text-[hsl(var(--cyan-300))]">
                    4. Industry Readiness Score Evidence
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Build Something That Shows What You Can Do.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              From Concept to Verifiable Proof-of-Work.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Explore our connected experiences, discover specialized pathways, join residency squads, or partner with Sophrion for institutional pilots.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.experiences}>Explore Experiences</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.pathways} primary={false}>
                Explore Pathways
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.residency} primary={false}>
                Explore Residency
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.institutions} primary={false}>
                For Institutions
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 6. PROJECT DETAIL MODAL (9-Point Deep Dive) ─── */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/70">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl rounded-3xl border border-white/15 bg-background p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-5 right-5 rounded-full border border-white/10 bg-white/5 p-2 text-foreground/60 hover:text-foreground hover:bg-white/10 transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-6 pr-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                  {activeProjectModal.domain} · {activeProjectModal.projectType}
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  {activeProjectModal.title}
                </h3>
              </div>

              {/* 9-Point Breakdown */}
              <div className="space-y-6 text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {/* 01 Problem */}
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-rose-300">
                    01 — Problem
                  </h4>
                  <p>{activeProjectModal.problem}</p>
                </div>

                {/* 02 Context */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-[hsl(var(--cyan-300))]">
                    02 — Context & Stakeholders
                  </h4>
                  <p>{activeProjectModal.context}</p>
                </div>

                {/* 03 Approach */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-[hsl(var(--brand-300))]">
                    03 — Approach
                  </h4>
                  <p>{activeProjectModal.approach}</p>
                </div>

                {/* 04 Build */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-emerald-300">
                    04 — Build & Output
                  </h4>
                  <p>{activeProjectModal.output}</p>
                </div>

                {/* 05 Feedback */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-blue-300">
                    05 — Mentor & Expert Feedback
                  </h4>
                  <p>{activeProjectModal.feedbackSummary}</p>
                </div>

                {/* 06 Iteration */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-1 text-purple-300">
                    06 — Iteration & Refinements
                  </h4>
                  <p>{activeProjectModal.iteration}</p>
                </div>

                {/* 07 Outcome */}
                <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
                  <h4 className="font-bold text-emerald-400 text-xs uppercase tracking-wider mb-1">
                    07 — Demonstrated Outcome
                  </h4>
                  <p>{activeProjectModal.outcome}</p>
                </div>

                {/* 08 Student Contribution */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-3">
                    08 — Squad Team Contribution
                  </h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeProjectModal.contributions.map((c) => (
                      <div key={c.role} className="rounded-xl border border-white/10 bg-white/5 p-3">
                        <span className="font-bold text-xs text-[hsl(var(--cyan-300))] block mb-1">
                          {c.role}
                        </span>
                        <p className="text-xs text-foreground/70 mb-2">{c.contribution}</p>
                        <div className="flex flex-wrap gap-1">
                          {c.skills.map((s) => (
                            <span key={s} className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-foreground/60">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 09 Evidence Links */}
                <div>
                  <h4 className="font-bold text-foreground text-xs uppercase tracking-wider mb-3">
                    09 — Verifiable Proof-of-Work
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.evidence.map((ev) => (
                      <span
                        key={ev.label}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold text-foreground/90"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{ev.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveProjectModal(null)}
                  className="rounded-xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-bold text-foreground hover:bg-white/10 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </MarketingShell>
  );
}

"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import TwoColumnCompare from "@/components/marketing/TwoColumnCompare";
import JourneyTimeline from "@/components/marketing/JourneyTimeline";
import EvidenceFlowDiagram from "@/components/marketing/EvidenceFlowDiagram";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

const PARTNERSHIP_COLUMNS = [
  {
    label: "College",
    color: "border-white/[0.07]",
    headerColor: "text-foreground/50",
    items: ["Student cohort", "Faculty participation", "Infrastructure", "Timetable", "Institutional coordination", "Academic environment"],
  },
  {
    label: "Sophrion",
    color: "border-[hsl(var(--brand-500))/0.25]",
    headerColor: "text-[hsl(var(--brand-300))]",
    glow: "shadow-[0_0_40px_-12px_hsl(var(--brand-500)/0.3)]",
    accent: "from-[hsl(var(--brand-600))/0.06] to-transparent",
    items: ["Program architecture", "Cohort leadership", "Mentors", "Experts", "Project ecosystem", "Industry interactions", "Assessment", "Reporting"],
  },
  {
    label: "Shared",
    color: "border-[hsl(var(--cyan-500))/0.2]",
    headerColor: "text-[hsl(var(--cyan-300))]",
    glow: "shadow-[0_0_30px_-12px_hsl(var(--cyan-500)/0.2)]",
    accent: "from-[hsl(var(--cyan-500))/0.04] to-transparent",
    items: ["Student development", "Project environment", "Monitoring", "Feedback", "Institutional review"],
  },
];

const STUDENT_JOURNEY = [
  { number: "01", title: "Discover", body: "Explore interests, problems and opportunities." },
  { number: "02", title: "Learn", body: "Acquire the knowledge required." },
  { number: "03", title: "Collaborate", body: "Work with peers, mentors and experts." },
  { number: "04", title: "Build", body: "Create projects, prototypes or solutions." },
  { number: "05", title: "Feedback", body: "Receive mentor, expert and industry perspectives." },
  { number: "06", title: "Iterate", body: "Improve through evidence and feedback." },
  { number: "07", title: "Showcase", body: "Demonstrate what students built and learned." },
];

const ASSESSMENT_METHODS = [
  "Baseline assessment", "Mentor observations", "Faculty observations",
  "Project contribution", "Task/activity evidence", "Expert reviews",
  "Industry interaction", "Presentations", "Reflection",
];

const OUTPUTS = [
  { title: "Student Development Evidence", body: "Individual development and Industry Readiness information." },
  { title: "Project Outcomes", body: "Project summaries and showcase outcomes.", accent: "cyan" as const },
  { title: "Cohort Metrics", body: "Participation and engagement insights.", accent: "blue" as const },
  { title: "Faculty Observations", body: "Institutional perspective on student development.", accent: "indigo" as const },
  { title: "Institutional Impact Report", body: "Consolidated outcomes, observations and recommendations.", accent: "emerald" as const },
];

const TRANSPARENCY_NOT = [
  "Placements", "Startups", "Investment", "Commercialization",
  "Client adoption", "Production deployment", "Identical outcomes for every student",
];

export default function InstitutionsPage() {
  return (
    <MarketingShell>
      {/* ─── HERO ─── */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />
          <div className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(closest-side, hsl(var(--cyan-500)), transparent)" }} />
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
              For Institutions
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                An Ecosystem Layer for Industry Readiness.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground/65 sm:text-xl max-w-2xl">
              Sophrion works alongside institutions to connect students, faculty, mentors, domain experts, industry, projects and assessment into an industry-integrated active learning environment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="/institutional-pilot">Explore the 4-Week Pilot</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.contact} primary={false}>Discuss a Partnership</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CHALLENGE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Challenge"
            title="The Challenge Is Not Just Employability. It's Applied Capability."
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="Institutions already provide:"
              leftItems={["Academic knowledge", "Faculty", "Curriculum", "Infrastructure", "Certifications"]}
              rightTitle="But students also need:"
              rightItems={["Discover problems", "Collaborate", "Apply knowledge", "Build projects", "Receive feedback", "Iterate", "Demonstrate capability"]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex items-start gap-4 rounded-2xl border border-[hsl(var(--cyan-500))/0.15] bg-[hsl(var(--cyan-500))/0.04] px-6 py-5"
          >
            <span className="text-[hsl(var(--cyan-400))] text-xl mt-0.5">→</span>
            <p className="text-base font-semibold text-foreground/85 sm:text-lg">
              Sophrion adds the execution and ecosystem layer around the existing academic environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── LAYER DIAGRAM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="How It Works"
            title="Building on the Academic Foundation"
            subtitle="Sophrion does not replace existing institutional systems. We extend them."
            align="center"
          />

          <div className="mt-16 space-y-6">
            {/* Institution layer */}
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">The Institution Already Has</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Students", "Faculty", "Curriculum", "Infrastructure", "Academic Governance"].map(item => (
                  <span key={item} className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-5 py-3 text-sm font-semibold text-foreground/70">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <span className="text-2xl font-black text-foreground/20">+</span>
            </div>

            {/* Sophrion layer */}
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-400))] mb-4">Sophrion Adds</p>
              <div className="flex flex-wrap justify-center gap-3">
                {["Cohort Leadership", "Mentors", "Domain Experts", "Industry", "Projects", "Assessment", "Industry Readiness", "External Opportunities"].map(item => (
                  <span key={item} className="rounded-xl border border-[hsl(var(--brand-500))/0.25] bg-[hsl(var(--brand-600))/0.06] px-5 py-3 text-sm font-semibold text-[hsl(var(--brand-200))]">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-10 w-px bg-gradient-to-b from-[hsl(var(--brand-500))/0.5] to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-500))/0.2] bg-linear-to-r from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.05] p-8 text-center shadow-[0_0_50px_-15px_hsl(var(--brand-500)/0.3)]"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-linear-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />
              <h3
                className="text-xl font-black tracking-wider sm:text-2xl uppercase"
                style={{
                  background: "linear-gradient(to right, #c084fc, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Industry-Integrated Active Learning Ecosystem
              </h3>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIP MODEL ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Operating Model"
            title="One Institution. One Connected Ecosystem."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {PARTNERSHIP_COLUMNS.map((col) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative overflow-hidden rounded-2xl border p-7 backdrop-blur-md",
                  col.color, col.glow ?? "",
                  col.accent ? `bg-gradient-to-b ${col.accent}` : "bg-white/[0.025]"
                )}
              >
                {col.accent && <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-40" />}
                <p className={cn("text-xs font-black tracking-[0.18em] uppercase mb-6 pb-4 border-b border-white/[0.07]", col.headerColor)}>
                  {col.label}
                </p>
                <ul className="space-y-3">
                  {col.items.map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                      <span className="h-1 w-3 shrink-0 rounded bg-white/10" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STUDENT JOURNEY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Student Experience"
            title="From Discovery to Demonstrated Capability"
            align="center"
          />
          <JourneyTimeline steps={STUDENT_JOURNEY} />
          <div className="mt-12 flex justify-center">
            <MarketingCtaLink href="/institutional-pilot">See the Pilot Structure</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── COHORT MODEL ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Cohort Design"
            title="A Structured Pilot. A Dynamic Cohort."
            align="center"
          />
          <div className="mt-12 flex flex-col items-center gap-2">
            {["~150 Students Nominated", "Expression of Interest", "Baseline Assessment", "~100 Students Selected", "Capability + Interest Mapping", "~10 Project Teams"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={cn(
                    "flex w-full max-w-sm items-center justify-center rounded-xl border py-3.5 text-sm font-bold text-center backdrop-blur-md",
                    i === 3 || i === 5
                      ? "border-[hsl(var(--brand-500))/0.4] bg-[hsl(var(--brand-600))/0.1] text-[hsl(var(--brand-200))]"
                      : "border-white/[0.07] bg-white/[0.025] text-foreground/75"
                  )}
                >
                  {step}
                </motion.div>
                {i < arr.length - 1 && <div className="h-4 w-px bg-white/10" />}
              </React.Fragment>
            ))}
          </div>
          <p className="mt-10 max-w-xl mx-auto text-center text-sm text-foreground/60 leading-relaxed">
            Selection is designed to establish a committed and diverse cohort rather than simply identify the highest academic performers.
          </p>
        </div>
      </section>

      {/* ─── PEOPLE ARCHITECTURE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Expertise Distribution"
            title="Distributed Expertise, Not One Mentor for Everyone."
            align="center"
          />
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold sm:text-base">
              {["Student", "Junior Mentor", "Cohort Leader", "Domain Expert", "Industry Professional"].map((role, i, arr) => (
                <React.Fragment key={role}>
                  <span className={cn(
                    "rounded-full border px-5 py-3",
                    i === arr.length - 1
                      ? "bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] border-transparent text-white"
                      : "bg-white/[0.04] border-white/[0.08] text-foreground/80"
                  )}>
                    {role}
                  </span>
                  {i < arr.length - 1 && <span className="text-foreground/25 font-bold">↕</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--cyan-400))]">
              {["Faculty Layer", "Community Layer"].map(layer => (
                <span key={layer} className="rounded border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.06] px-4 py-2">+ {layer}</span>
              ))}
            </div>
            <p className="mt-10 text-center text-base text-foreground/60 max-w-xl">
              Students access the right level of guidance as their learning and projects evolve.
            </p>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY INTEGRATION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <MarketingSectionHeader
                eyebrow="Industry Layer"
                title="Industry as Context, Not Just a Destination."
              />
              <ul className="mt-8 space-y-3">
                {["Industry seminars", "Expert interactions", "Project reviews", "Requirement discussions", "Professional feedback", "Real-world problem statements", "Client/project opportunities where applicable"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground/70">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--cyan-400))]" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs italic text-foreground/40 border-l border-white/10 pl-3">
                Note: Industry and client opportunities depend on availability, suitability, approval and agreed scope.
              </p>
            </div>
            <div className="flex items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.025] p-10">
              <div className="flex flex-col items-center gap-3 text-base font-bold text-[hsl(var(--brand-300))]">
                {["Industry", "Problems", "Students", "Projects", "Feedback"].map((n, i, arr) => (
                  <React.Fragment key={n}>
                    <span className="rounded-xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.07] px-6 py-3">{n}</span>
                    {i < arr.length - 1 && <span className="text-foreground/20">↕</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ASSESSMENT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Assessment"
            title="Measure Development, Not Just Attendance."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {ASSESSMENT_METHODS.map(m => (
              <span key={m} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-2 text-sm text-foreground/65">{m}</span>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl mx-auto relative overflow-hidden rounded-2xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-8 text-center"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--cyan-500))] to-transparent" />
            <p className="text-xs font-black tracking-widest uppercase text-[hsl(var(--cyan-400))] mb-2">Evidence Instrument</p>
            <h3 className="text-2xl font-black text-foreground">Industry Readiness Score</h3>
            <p className="mt-3 text-sm text-foreground/60">An evidence-based representation of student development during the pilot.</p>
            <p className="mt-4 text-xs italic text-foreground/40">Not a replacement for institutional grades.</p>
            <div className="mt-6">
              <MarketingCtaLink href="/institutional-pilot" primary={false}>Explore How the Pilot Is Measured</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4-WEEK PILOT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-gradient-to-br from-[hsl(var(--brand-600))/0.06] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 text-center shadow-[0_0_60px_-20px_hsl(var(--brand-500)/0.3)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />
            <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full opacity-25"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />

            <MarketingSectionHeader eyebrow="The Pilot" title="Start Small. Measure. Then Expand." align="center" />

            <div className="relative mt-10 grid grid-cols-2 gap-px sm:grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
              {[{ value: "100", label: "Students" }, { value: "4", label: "Weeks" }, { value: "15–18", label: "Hours / Week" }, { value: "~10", label: "Project Teams" }].map(m => (
                <div key={m.label} className="flex flex-col items-center justify-center py-7 px-4 bg-white/[0.02]">
                  <span className="text-4xl font-black text-foreground">{m.value}</span>
                  <span className="mt-1.5 text-xs font-bold uppercase tracking-widest text-foreground/50">{m.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {["3 Workshops", "3 Expert Interactions", "2 Industry Interactions", "~10 Project Teams", "Continuous Assessment", "Final Showcase", "Industry Readiness Certificates", "Institutional Impact Report"].map(f => (
                <span key={f} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-foreground/65">{f}</span>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <MarketingCtaLink href="/institutional-pilot">View Pilot Details</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── OUTPUTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Deliverables" title="Institutional Outputs" />
          <FeatureGrid className="mt-10" items={OUTPUTS} columns={3} />
        </div>
      </section>

      {/* ─── TRANSPARENCY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Transparency" title="Transparent by Design" />
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8">
              <p className="text-xs font-black tracking-widest uppercase text-red-400 mb-5">Sophrion does not guarantee:</p>
              <ul className="space-y-3">
                {TRANSPARENCY_NOT.map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/65">
                    <span className="h-px w-3 bg-red-400/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-500))/0.2] bg-gradient-to-b from-[hsl(var(--brand-600))/0.06] to-transparent p-8">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />
              <p className="text-xs font-black tracking-widest uppercase text-[hsl(var(--brand-400))] mb-5">Instead:</p>
              <p className="text-base font-semibold text-foreground/85 leading-relaxed">
                Sophrion provides the structured environment, people, projects, feedback, assessment and opportunities through which students can develop capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMMERCIAL ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Commercial" title="Recommended Institutional Entry" align="center" />
          <div className="mt-10 relative overflow-hidden rounded-3xl border-2 border-[hsl(var(--brand-500))] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-10 sm:p-14 text-center shadow-[0_0_60px_-15px_hsl(var(--brand-500)/0.35)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[hsl(var(--brand-600))] via-[hsl(var(--cyan-500))] to-[hsl(var(--brand-600))]" />
            <p className="text-xs font-black tracking-widest uppercase text-[hsl(var(--brand-400))] mb-5">Standard Pilot</p>
            <p className="text-6xl font-black text-foreground tracking-tight">₹1,25,000</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm font-semibold text-foreground/75 border-y border-white/[0.06] py-5">
              {["100 Students", "4 Weeks", "15–18 Hours / Week"].map((m, i, arr) => (
                <React.Fragment key={m}>
                  <span>{m}</span>
                  {i < arr.length - 1 && <span className="text-white/15">|</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="mt-6 text-sm text-foreground/60 max-w-md mx-auto">
              The Standard tier is designed to provide the complete core Sophrion experience while maintaining a practical institutional operating model.
            </p>
            <div className="mt-8">
              <MarketingCtaLink href={MARKETING.contact}>View Commercial Proposal</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <MarketingSectionHeader
            align="center"
            title="Let's Build the Next Learning Environment Together."
            subtitle="Begin with a measurable institutional pilot and evaluate the model through evidence."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MarketingCtaLink href="/institutional-pilot">Explore the Pilot</MarketingCtaLink>
            <MarketingCtaLink href={MARKETING.contact} primary={false}>Discuss a Partnership</MarketingCtaLink>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

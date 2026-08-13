"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import TwoColumnCompare from "@/components/marketing/TwoColumnCompare";
import EcosystemDiagram from "@/components/marketing/EcosystemDiagram";
import JourneyTimeline from "@/components/marketing/JourneyTimeline";
import EvidenceFlowDiagram from "@/components/marketing/EvidenceFlowDiagram";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

const JOURNEY_STEPS = [
  { number: "01", title: "DISCOVER", body: "Explore interests, problems and opportunities." },
  { number: "02", title: "LEARN", body: "Acquire the knowledge required for the problem." },
  { number: "03", title: "COLLABORATE", body: "Work with peers, mentors and experts." },
  { number: "04", title: "BUILD", body: "Create projects, prototypes or solutions." },
  { number: "05", title: "FEEDBACK", body: "Receive mentor, expert and industry perspectives." },
  { number: "06", title: "ITERATE", body: "Improve the work based on evidence." },
  { number: "07", title: "SHOWCASE", body: "Demonstrate what you built and what you learned." },
];

const PILOT_FEATURES = [
  "3 Workshops", "3 Expert Interactions", "2 Industry Interactions",
  "Continuous Assessment", "Final Showcase", "Institutional Impact Report",
];

const EVIDENCE_STEPS = [
  "PARTICIPATION", "PROJECT EVIDENCE", "ASSESSMENT", "INDUSTRY READINESS", "INSTITUTIONAL IMPACT",
];

/* ── Section alternating background ── */
const SECTION_ALT = "bg-[#0e0e14]/60";

export default function HomeMarketing() {
  const trainingCards = [
    { title: "LEARN", body: "Build knowledge when it becomes necessary." },
    { title: "BUILD", body: "Apply knowledge to meaningful problems.", accent: "cyan" as const },
    { title: "GROW", body: "Use feedback, reflection and experience to improve.", accent: "blue" as const },
  ];

  const experienceCards = [
    { title: "Workshops", body: "Structured learning sessions to activate knowledge.", badge: "ACTIVATION" },
    { title: "Challenges", body: "Explore real problems with time-boxed intensity.", accent: "cyan" as const, badge: "SPRINT" },
    { title: "Hackathons", body: "Intensive team collaboration around problem statements.", accent: "blue" as const, badge: "COLLABORATION" },
    { title: "Projects", body: "Sustained execution environments across weeks.", accent: "indigo" as const, badge: "EXECUTION" },
    { title: "Industry Interactions", body: "Expert sessions, reviews and professional context.", accent: "emerald" as const, badge: "NETWORKING" },
    { title: "Residency", body: "Deep, project-first applied learning environments.", accent: "purple" as const, badge: "IMMERSION" },
  ];

  const pathwayCards = [
    { title: "AI & Intelligent Systems", body: "Build intelligent workflows, AI-powered applications, and smart systems.", badge: "AI / ML" },
    { title: "Data & Intelligence", body: "Work with analytics, business intelligence, and AI-powered insights.", accent: "cyan" as const, badge: "ANALYTICS" },
    { title: "Creative Technology", body: "Design digital experiences, immersive interfaces, and intelligent products.", accent: "blue" as const, badge: "DESIGN & UI" },
    { title: "Cloud & Cyber", body: "Learn scalable infrastructure, security workflows, and cloud operations.", accent: "indigo" as const, badge: "DEV OPS" },
    { title: "Smart Engineering", body: "Build IoT systems, automation workflows, and applied engineering solutions.", accent: "emerald" as const, badge: "IOT & SYSTEMS" },
  ];

  return (
    <MarketingShell>
      {/* ─── HERO ─── */}
      <section className="relative py-20 sm:py-36 overflow-hidden">
        {/* Decorative orbs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full opacity-20"
            style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />
          <div className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full opacity-15"
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
              SOPHRION — Future Within
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Industry-Integrated Active Learning Ecosystem
              </span>
            </h1>

            <p className="mt-6 text-lg font-medium text-foreground sm:text-xl">
              Building Future-Ready Students Through Industry-Aligned Cohort Experiences.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/60 sm:text-lg max-w-2xl">
              Sophrion connects learners with people, problems, projects, knowledge, industry and feedback through structured experiences designed to develop real-world capability.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href={MARKETING.institutions}>For Institutions</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.ecosystem} primary={false}>
                Explore the Ecosystem
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── MORE THAN TRAINING — Manifesto flow ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Sophrion Model"
            title="More Than Training."
            subtitle="Sophrion creates the environment between academic learning and real-world execution."
          />

          {/* 3-step manifesto flow */}
          <div className="mt-16 flex flex-col items-start gap-0 lg:flex-row lg:items-stretch">
            {trainingCards.map((card, i) => {
              const accentColors = [
                { text: "text-[hsl(var(--brand-400))]", glow: "hsl(var(--brand-500))", border: "border-[hsl(var(--brand-500))/0.25]", bg: "from-[hsl(var(--brand-600))/0.06]" },
                { text: "text-[hsl(var(--cyan-400))]", glow: "hsl(var(--cyan-500))", border: "border-[hsl(var(--cyan-500))/0.25]", bg: "from-[hsl(var(--cyan-500))/0.06]" },
                { text: "text-blue-400", glow: "rgb(59,130,246)", border: "border-blue-500/25", bg: "from-blue-500/[0.06]" },
              ];
              const ac = accentColors[i];
              return (
                <React.Fragment key={card.title}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "group relative flex-1 rounded-2xl border bg-gradient-to-br to-transparent p-8 sm:p-10 backdrop-blur-md",
                      "transition-all duration-300",
                      ac.border, ac.bg,
                    )}
                    style={{ boxShadow: `0 0 40px -16px ${ac.glow}40` }}
                  >
                    {/* Step number — large ghost */}
                    <span className="absolute top-6 right-6 text-7xl font-black text-foreground/[0.04] leading-none select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className={cn("mb-4 text-xs font-black tracking-[0.22em] uppercase", ac.text)}>
                      {card.title}
                    </p>
                    <p className="text-xl font-semibold text-foreground/85 leading-snug sm:text-2xl max-w-[220px]">
                      {card.body}
                    </p>
                  </motion.div>

                  {/* Arrow connector between steps */}
                  {i < trainingCards.length - 1 && (
                    <div className="flex items-center justify-center py-4 lg:py-0 lg:px-3" aria-hidden>
                      {/* Vertical on mobile, horizontal on desktop */}
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 text-foreground/20 rotate-90 lg:rotate-0 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── THE GAP (alternating BG) ─── */}
      <section className={cn("border-t border-white/[0.06] py-20 sm:py-32", SECTION_ALT)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Problem"
            title="The Gap Isn't Information. It's Experience."
            subtitle="Students already have access to information and academic knowledge, but need opportunities to work with ambiguity, collaborate, solve meaningful problems, receive feedback, iterate, and demonstrate capability."
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="Traditional"
              leftItems={["Learn", "Exam", "Certificate"]}
              rightTitle="Sophrion"
              rightItems={["Discover", "Learn", "Build", "Feedback", "Iterate", "Showcase"]}
            />
          </div>
        </div>
      </section>

      {/* ─── LEARNING IS NOT A STRAIGHT LINE ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            title="Learning Is Not a Straight Line."
            subtitle="A learner's development is shaped by experiences, people, problems, projects, failures, feedback and reflection."
            align="center"
          />

          <div className="relative mt-14 flex flex-col items-center">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      {/* ─── JOURNEY STEPS — Timeline (alternating BG) ─── */}
      <section className={cn("border-t border-white/[0.06] py-20 sm:py-32", SECTION_ALT)}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="How It Works"
            title="From Experience to Capability"
            align="center"
          />
          <JourneyTimeline steps={JOURNEY_STEPS} />
        </div>
      </section>

      {/* ─── EXPERIENCES ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Inside Sophrion"
            title="Experiences Inside Sophrion"
            subtitle="Different experiences. One connected ecosystem."
          />
          <div className="mt-12">
            <FeatureGrid items={experienceCards} columns={3} variant="asymmetric" />
          </div>
          <p className="mt-8 text-sm font-medium text-foreground/40 text-center">
            Experiences can connect, overlap and lead to new pathways.
          </p>
        </div>
      </section>

      {/* ─── INSTITUTIONAL LAYER (alternating BG) ─── */}
      <section className={cn("border-t border-white/[0.06] py-20 sm:py-32", SECTION_ALT)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="For Institutions"
            title="Sophrion Adds the Ecosystem Layer Around Education."
            align="center"
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="The Institution Already Has"
              leftItems={["Students", "Faculty", "Curriculum", "Infrastructure", "Academic Governance"]}
              rightTitle="Sophrion Adds"
              rightItems={["Cohort Leadership", "Mentors", "Domain Experts", "Industry Projects", "Assessment", "Industry Readiness", "External Opportunities"]}
            />
          </div>

          {/* Result */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 rounded-2xl border border-[hsl(var(--cyan-500))/0.3] bg-linear-to-r from-[hsl(var(--brand-600))/0.15] via-white/[0.04] to-[hsl(var(--cyan-500))/0.15] p-6 sm:p-8 text-center backdrop-blur-md shadow-[0_0_40px_-10px_hsl(var(--cyan-500)/0.25)]"
          >
            <p className="text-xs font-bold tracking-[0.2em] text-[hsl(var(--cyan-400))] uppercase mb-2">The Result</p>
            <h3 className="text-xl font-extrabold text-white sm:text-2xl tracking-tight">
              Industry-Integrated Active Learning Ecosystem
            </h3>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <MarketingCtaLink href={MARKETING.institutions}>Discuss an Institutional Pilot</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── 4-WEEK PILOT ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-gradient-to-br from-[hsl(var(--brand-600))/0.06] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-14 text-center backdrop-blur-md shadow-[0_0_80px_-20px_hsl(var(--brand-500)/0.35)]">
            {/* Decorative orb */}
            <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full opacity-30"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />

            <MarketingSectionHeader
              title="Start With a 4-Week Institutional Pilot"
              align="center"
            />

            {/* ── Metrics — display-scale numbers ── */}
            <div className="relative mt-12 grid grid-cols-2 sm:grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.06]">
              {[
                { value: "100", label: "Students" },
                { value: "4", label: "Weeks" },
                { value: "15–18", label: "Hours / Week" },
                { value: "~10", label: "Project Teams" },
              ].map((m, idx) => (
                <div
                  key={m.label}
                  className={cn(
                    "flex flex-col items-center justify-center py-8 px-4 bg-white/[0.02]",
                    idx < 3 && "border-r border-white/[0.06] sm:border-r",
                    idx === 1 && "border-r-0 sm:border-r border-white/[0.06]",
                  )}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="text-5xl font-black leading-none sm:text-6xl"
                    style={{
                      background: "linear-gradient(to bottom, hsl(var(--foreground)), hsl(var(--foreground) / 0.55))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </motion.span>
                  <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/40">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {PILOT_FEATURES.map((f) => (
                <span key={f} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-foreground/70">
                  {f}
                </span>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <MarketingCtaLink href="/institutional-pilot">Discuss an Institutional Pilot</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EVIDENCE (alternating BG) ─── */}
      <section id="evidence" className={cn("border-t border-white/[0.06] py-20 sm:py-32 scroll-mt-24 relative overflow-hidden", SECTION_ALT)}>
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="How It's Measured"
            title="Build Evidence. Not Claims."
            subtitle="Sophrion is designed so that student participation, project work, feedback and development can be observed, audited and documented."
            align="center"
          />
          <EvidenceFlowDiagram />
        </div>
      </section>

      {/* ─── DOMAINS ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Learning Pathways"
            title="Explore the Domains Shaping the Future"
            subtitle="Technology domains evolve. The ability to learn, adapt, collaborate and create remains."
          />
          <div className="mt-12">
            <FeatureGrid items={pathwayCards} columns={3} />
          </div>
          <div className="mt-10 flex justify-center">
            <MarketingCtaLink href={MARKETING.pathways}>Explore Pathways</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── VISION STATEMENT (alternating BG) ─── */}
      <section className={cn("border-t border-white/[0.06] py-20 sm:py-36", SECTION_ALT)}>
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl leading-[1.1]">
              Students Shouldn't Just Prepare for the Future.
            </h2>
            <p
              className="mt-4 text-2xl font-semibold sm:text-4xl"
              style={{
                background: "linear-gradient(to right, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              They should learn how to operate in it.
            </p>
            <p className="mt-8 text-base leading-relaxed text-foreground/60 sm:text-lg max-w-2xl mx-auto">
              Sophrion creates the environment where students can discover problems, learn what they need, work with people, build meaningful things, receive feedback and continue growing through new experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                audience: "Students",
                tagline: "Explore the Sophrion ecosystem.",
                cta: "Explore Ecosystem",
                href: MARKETING.ecosystem,
                accent: "from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--brand-600))/0.03]",
                border: "border-[hsl(var(--brand-500))/0.2]",
                glow: "shadow-[0_0_30px_-12px_hsl(var(--brand-500)/0.25)]",
              },
              {
                audience: "Institutions",
                tagline: "Start with a measurable 4-week pilot.",
                cta: "Discuss an Institutional Pilot",
                href: "/institutional-pilot",
                accent: "from-[hsl(var(--cyan-500))/0.08] to-[hsl(var(--cyan-500))/0.03]",
                border: "border-[hsl(var(--cyan-500))/0.2]",
                glow: "shadow-[0_0_30px_-12px_hsl(var(--cyan-500)/0.25)]",
              },
              {
                audience: "Industry",
                tagline: "Collaborate with the ecosystem.",
                cta: "Collaborate",
                href: MARKETING.contact,
                accent: "from-blue-500/[0.07] to-blue-500/[0.03]",
                border: "border-blue-500/20",
                glow: "shadow-[0_0_30px_-12px_rgba(59,130,246,0.2)]",
              },
            ].map((item) => (
              <motion.div
                key={item.audience}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "flex flex-col rounded-2xl border bg-gradient-to-br p-7 backdrop-blur-md",
                  item.accent, item.border, item.glow
                )}
              >
                <p className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-3">{item.audience}</p>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.audience}</h3>
                <p className="text-sm text-foreground/60 mb-8 flex-1">{item.tagline}</p>
                <MarketingCtaLink href={item.href} className="self-start">{item.cta}</MarketingCtaLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import TwoColumnCompare from "@/components/marketing/TwoColumnCompare";
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

export default function HomeMarketing() {
  const trainingCards = [
    { title: "LEARN", body: "Build knowledge when it becomes necessary." },
    { title: "BUILD", body: "Apply knowledge to meaningful problems.", accent: "cyan" as const },
    { title: "GROW", body: "Use feedback, reflection and experience to improve.", accent: "blue" as const },
  ];

  const experienceCards = [
    { title: "Workshops", body: "Structured learning sessions to activate knowledge." },
    { title: "Challenges", body: "Explore real problems with time-boxed intensity.", accent: "cyan" as const },
    { title: "Hackathons", body: "Intensive team collaboration around problem statements.", accent: "blue" as const },
    { title: "Projects", body: "Sustained execution environments across weeks.", accent: "indigo" as const },
    { title: "Industry Interactions", body: "Expert sessions, reviews and professional context.", accent: "emerald" as const },
    { title: "Residency", body: "Deep, project-first applied learning environments.", accent: "purple" as const },
  ];

  const pathwayCards = [
    { title: "AI & Intelligent Systems", body: "Build intelligent workflows, AI-powered applications, and smart systems." },
    { title: "Data & Intelligence", body: "Work with analytics, business intelligence, and AI-powered insights.", accent: "cyan" as const },
    { title: "Creative Technology", body: "Design digital experiences, immersive interfaces, and intelligent products.", accent: "blue" as const },
    { title: "Cloud & Cyber", body: "Learn scalable infrastructure, security workflows, and cloud operations.", accent: "indigo" as const },
    { title: "Smart Engineering", body: "Build IoT systems, automation workflows, and applied engineering solutions.", accent: "emerald" as const },
  ];

  return (
    <MarketingShell>
      {/* ─── HERO ─── */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
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

      {/* ─── MORE THAN TRAINING ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Sophrion Model"
            title="More Than Training."
            subtitle="Sophrion creates the environment between academic learning and real-world execution."
          />
          <div className="mt-12">
            <FeatureGrid items={trainingCards} columns={3} />
          </div>
        </div>
      </section>

      {/* ─── THE GAP ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
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
      <section className="border-t border-white/[0.06] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            title="Learning Is Not a Straight Line."
            subtitle="A learner's development is shaped by experiences, people, problems, projects, failures, feedback and reflection."
            align="center"
          />

          <div className="relative mt-16 flex flex-col items-center">
            {/* Orbit rings */}
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[280px] w-[280px] rounded-full border border-white/[0.05]" />
            </div>
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[500px] w-[500px] rounded-full border border-white/[0.04]" />
            </div>

            {/* Learner node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mb-10"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-500))] bg-background shadow-[0_0_50px_hsl(var(--brand-500)/0.4),inset_0_0_20px_hsl(var(--brand-600)/0.1)]">
                <span className="text-xs font-bold tracking-[0.2em] text-[hsl(var(--brand-400))]">LEARNER</span>
              </div>
            </motion.div>

            {/* Ecosystem nodes */}
            <div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-3xl">
              {["Experiences", "People", "Problems", "Knowledge", "Projects", "Industry", "Community", "Feedback", "Opportunities"].map((node, i) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-foreground/75 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.4] hover:text-foreground transition-colors cursor-default"
                >
                  {node}
                </motion.div>
              ))}
            </div>

            <p className="mt-12 text-center text-sm font-medium text-foreground/50 max-w-lg">
              These connections are not a fixed sequence. They form an evolving learning ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* ─── JOURNEY STEPS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="How It Works"
            title="From Experience to Capability"
            align="center"
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {JOURNEY_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md",
                  "hover:border-[hsl(var(--brand-500))/0.3] hover:shadow-[0_0_25px_-8px_hsl(var(--brand-500)/0.25)] transition-all duration-300"
                )}
              >
                {/* Accent bar on hover */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                <span className="block text-3xl font-black text-foreground/[0.08] leading-none mb-3 group-hover:text-foreground/[0.12] transition-colors">
                  {step.number}
                </span>
                <p className="text-xs font-bold tracking-[0.18em] text-[hsl(var(--brand-400))] uppercase mb-2">
                  {step.title}
                </p>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Inside Sophrion"
            title="Experiences Inside Sophrion"
            subtitle="Different experiences. One connected ecosystem."
          />
          <div className="mt-12">
            <FeatureGrid items={experienceCards} columns={3} />
          </div>
          <p className="mt-8 text-sm font-medium text-foreground/40 text-center">
            Experiences can connect, overlap and lead to new pathways.
          </p>
        </div>
      </section>

      {/* ─── INSTITUTIONAL LAYER ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
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
            className="mt-8 rounded-2xl border border-[hsl(var(--cyan-500))/0.15] bg-gradient-to-r from-[hsl(var(--brand-600))/0.05] to-[hsl(var(--cyan-500))/0.05] p-6 text-center"
          >
            <p className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-2">The Result</p>
            <h3 className="text-xl font-bold bg-gradient-to-l from-[hsl(var(--brand-400))] to-[hsl(var(--cyan-400))] bg-clip-text text-transparent sm:text-2xl">
              Industry-Integrated Active Learning Ecosystem
            </h3>
          </motion.div>

          <div className="mt-8 flex justify-center">
            <MarketingCtaLink href={MARKETING.institutions}>Explore Institutional Partnerships</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── 4-WEEK PILOT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-gradient-to-br from-[hsl(var(--brand-600))/0.06] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 text-center backdrop-blur-md shadow-[0_0_60px_-20px_hsl(var(--brand-500)/0.3)]">
            {/* Decorative orb */}
            <div aria-hidden className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full opacity-30"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />
            {/* Top accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />

            <MarketingSectionHeader
              title="Start With a 4-Week Institutional Pilot"
              align="center"
            />

            {/* Metrics */}
            <div className="relative mt-10 grid grid-cols-2 gap-px sm:grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
              {[
                { value: "100", label: "Students" },
                { value: "4", label: "Weeks" },
                { value: "15–18", label: "Hours / Week" },
                { value: "~10", label: "Project Teams" },
              ].map((m) => (
                <div key={m.label} className="flex flex-col items-center justify-center py-6 px-4 bg-white/[0.02]">
                  <span className="text-3xl font-black text-foreground sm:text-4xl">{m.value}</span>
                  <span className="mt-1.5 text-xs font-bold uppercase tracking-widest text-foreground/50">{m.label}</span>
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
              <MarketingCtaLink href="/institutional-pilot">Explore the Institutional Pilot</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EVIDENCE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="How It's Measured"
            title="Build Evidence. Not Claims."
            subtitle="Sophrion is designed so that student participation, project work, feedback and development can be observed and documented."
            align="center"
          />
          <div className="mt-14 flex flex-col items-center gap-2">
            {EVIDENCE_STEPS.map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "group flex w-full max-w-md items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.025] px-6 py-3.5 text-sm font-bold tracking-widest backdrop-blur-md transition-all duration-300",
                    "hover:border-[hsl(var(--brand-500))/0.3] hover:bg-white/[0.04]"
                  )}
                >
                  <span className="text-foreground/70 group-hover:text-foreground transition-colors">{step}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground/20 group-hover:bg-[hsl(var(--brand-400))] transition-colors" />
                </motion.div>
                {i < arr.length - 1 && (
                  <div className="h-5 w-px bg-gradient-to-b from-white/15 to-white/5" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DOMAINS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
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

      {/* ─── VISION STATEMENT ─── */}
      <section className="border-t border-white/[0.06] py-20 sm:py-32">
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
            <p className="mt-4 text-2xl font-semibold bg-gradient-to-r from-[hsl(var(--brand-400))] to-[hsl(var(--cyan-400))] bg-clip-text text-transparent sm:text-4xl">
              They should learn how to operate in it.
            </p>
            <p className="mt-8 text-base leading-relaxed text-foreground/60 sm:text-lg max-w-2xl mx-auto">
              Sophrion creates the environment where students can discover problems, learn what they need, work with people, build meaningful things, receive feedback and continue growing through new experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
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
                cta: "Discuss Pilot", 
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

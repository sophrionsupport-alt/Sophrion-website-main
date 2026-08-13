"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import EvidenceFlowDiagram from "@/components/marketing/EvidenceFlowDiagram";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export const pilotContent = {
  hero: {
    heading: "4-Week Institutional Pilot",
    subheading: "Test the Sophrion ecosystem inside your institution.",
    metrics: [
      { value: "100", label: "Students" },
      { value: "4", label: "Weeks" },
      { value: "15–18", label: "Hours / Week" },
      { value: "~10", label: "Project Teams" }
    ],
    copy: "A structured industry-integrated active learning pilot connecting students with mentors, domain experts, industry perspectives, projects, feedback and continuous assessment."
  },
  whatIsPilot: {
    heading: "More Than a Workshop Series",
    copy: "The pilot is not a guest lecture series, placement coaching or academic certification. It is an operating model pilot that introduces active learning, problem discovery, project execution, mentorship, industry feedback and continuous assessment into the student experience.",
    flow: ["Experience", "Discovery", "Execution", "Mentorship", "Industry Context", "Evidence"],
    keyStatement: "Students build real capability through structured participation."
  },
  structure: {
    primaryMetrics: [
      { value: "100", label: "Students" },
      { value: "4", label: "Weeks" },
      { value: "15–18", label: "Hours per Week" },
      { value: "~10", label: "Project Teams" }
    ],
    secondaryMetrics: [
      "3 Workshops",
      "3 Expert Interactions",
      "2 Industry Interactions",
      "Continuous Assessment",
      "Final Showcase",
      "Institutional Impact Report"
    ]
  },
  selection: {
    heading: "Building the Right Cohort",
    flow: [
      "~150 Students Nominated by College",
      "Expression of Interest + Baseline Assessment",
      "~100 Students Selected for Pilot",
      "Capability & Interest Mapping",
      "~10 Multidisciplinary Teams Formed"
    ],
    copy: "Selection focuses on intent, curiosity, collaborative attitude and willingness to engage rather than academic grades alone."
  },
  weeks: [
    {
      title: "WEEK 1 — ORIENT & DISCOVER",
      tasks: [
        "Cohort orientation & ecosystem introduction",
        "Workshop 01: Problem Discovery & Framing",
        "Team formation (~10 teams)",
        "Domain exploration & problem selection",
        "Initial mentor interaction"
      ],
      output: "Approved Problem Brief per team"
    },
    {
      title: "WEEK 2 — VALIDATE & BUILD",
      tasks: [
        "Workshop 02: Solution Architecture & Prototyping",
        "Expert Interaction 01: Domain Context",
        "Industry Interaction 01: Perspective Session",
        "Team sprints & project development",
        "Mid-point mentor reviews"
      ],
      output: "Working Prototype / Project Architecture"
    },
    {
      title: "WEEK 3 — EXECUTE & ITERATE",
      tasks: [
        "Workshop 03: Iteration & Evidence",
        "Expert Interaction 02: Technical Review",
        "Project iteration based on feedback",
        "Team reviews & refinement sprints",
        "Readiness assessment checkpoints"
      ],
      output: "Refined Project & Evidence Documentation"
    },
    {
      title: "WEEK 4 — DEMONSTRATE & CLOSE",
      tasks: [
        "Expert Interaction 03: Showcase Preparation",
        "Industry Interaction 02: Final Reviews",
        "Final Showcase Presentation",
        "Industry Readiness evaluation",
        "Cohort debrief & institutional handover"
      ],
      output: "Showcase + Individual Scores + Institutional Report"
    }
  ],
  experiences: [
    { title: "Workshops", body: "3 hands-on, execution-oriented workshops.", accent: "purple" as const },
    { title: "Expert Sessions", body: "3 domain expert interactions for technical direction.", accent: "cyan" as const },
    { title: "Industry Perspective", body: "2 industry professional sessions for context.", accent: "blue" as const },
    { title: "Team Projects", body: "Sustained execution on meaningful problem statements.", accent: "indigo" as const },
    { title: "Continuous Mentorship", body: "Dedicated mentor guidance throughout the 4 weeks.", accent: "emerald" as const },
    { title: "Feedback & Iteration", body: "Multiple feedback loops to improve project outcomes.", accent: "purple" as const },
    { title: "Final Showcase", body: "Demonstration of capability to experts and faculty.", accent: "cyan" as const },
    { title: "Readiness Assessment", body: "Evidence-based evaluation of each student.", accent: "blue" as const }
  ],
  people: {
    heading: "Distributed Expertise Architecture",
    flow: ["Student", "Junior Mentor", "Cohort Leader", "Domain Expert", "Industry Professional"],
    layers: ["Faculty", "Community"],
    copy: "Students are supported by layered expertise so guidance is always available at the appropriate level."
  },
  project: {
    heading: "How Projects Work in the Pilot",
    flow: ["Problem Selection", "Discovery Sprint", "Build Sprint", "Iteration Sprint", "Showcase"],
    sources: ["Real-world problems", "Institutional challenges", "Industry-suggested themes", "Open-source / Community"],
    copy: "Projects are the vehicle through which students learn to collaborate, solve problems, make decisions and build evidence of capability."
  },
  assessment: {
    heading: "How Assessment Works",
    methods: [
      "Baseline assessment",
      "Mentor observation",
      "Faculty observation",
      "Project contribution",
      "Sprint submissions",
      "Showcase presentation",
      "Self-reflection"
    ],
    scoreDimensions: [
      "Problem Understanding & Discovery",
      "Execution & Technical Capability",
      "Collaboration & Team Dynamics",
      "Adaptability & Iteration",
      "Communication & Demonstration",
      "Ownership & Professionalism"
    ],
    disclaimer: "The Industry Readiness Score is an evidence-based developmental assessment provided by Sophrion. It reflects student performance within the pilot experience and is not a substitute for institutional academic grades."
  },
  collegeProvides: {
    heading: "What the College Provides",
    items: [
      "100 nominated students (across 1–2 departments or multidisciplinary)",
      "Designated faculty coordinator / observer",
      "Physical venue for in-person workshops & showcase (if applicable)",
      "Internet, power and basic computing infrastructure",
      "Timetable accommodation (15–18 hrs/week per student)",
      "Active institutional endorsement and communication"
    ],
    copy: "The college provides the foundation and environment. Sophrion provides the execution ecosystem."
  },
  sophrionProvides: {
    heading: "What Sophrion Provides",
    items: [
      "Complete pilot design, curriculum & scheduling",
      "Dedicated Cohort Leader for the 4-week duration",
      "Junior Mentors assigned to project teams",
      "Domain Experts for 3 specialized sessions",
      "Industry Professionals for 2 perspective sessions",
      "All workshop materials, templates and project frameworks",
      "Continuous assessment system & tracking",
      "Industry Readiness Scores for all completing students",
      "Institutional Impact Report with detailed outcomes",
      "Digital certificates of completion with verified credentials"
    ]
  },
  outputs: [
    { title: "For Students", body: "Industry Readiness Score, portfolio project evidence, digital certificate, ecosystem network access.", accent: "purple" as const },
    { title: "For Faculty", body: "Direct observation of student capability under industry conditions, project assessment data.", accent: "cyan" as const },
    { title: "For the Institution", body: "Institutional Impact Report, cohort analytics, evidence base for NAAC/NBA criteria, partnership pathway.", accent: "blue" as const }
  ],
  pricing: {
    heading: "Pilot Commercial Structure",
    price: "₹1,25,000",
    metrics: ["100 Students", "4 Weeks", "15–18 Hours / Week"],
    copy: "The Standard Pilot is priced as a self-contained institutional engagement designed to demonstrate measurable impact before any long-term commitment.",
    included: [
      "Complete 4-week delivery",
      "Cohort leader & mentor deployment",
      "All expert & industry sessions",
      "Continuous assessment & scoring",
      "Showcase coordination",
      "Institutional Impact Report",
      "Digital certificates for 100 students"
    ],
    note: "Taxes extra as applicable. Travel and accommodation for in-person delivery outside base location quoted separately if required."
  },
  exclusions: {
    heading: "Transparent by Design — What Is Not Included",
    items: [
      "Guaranteed placement or job offers",
      "Guaranteed client projects or paid work",
      "Student hardware, laptops or specialized equipment",
      "College infrastructure upgrades or lab setups",
      "Individual student travel or accommodation"
    ],
    note: "Sophrion provides the ecosystem, mentorship, framework and assessment. Capability and outcomes are developed by the students through their active participation."
  },
  success: {
    heading: "How Success Is Evaluated",
    flow: [
      "Student Participation Rate (target >85%)",
      "Project Completion Rate (~10 teams completing showcase)",
      "Industry Readiness Score Improvement (baseline vs final)",
      "Faculty Evaluation & Observation Feedback",
      "Institutional Impact Report Delivery"
    ],
    copy: "Both Sophrion and the institution evaluate the pilot against observable, documented evidence — not subjective impressions."
  },
  beyond: {
    heading: "Beyond the Pilot",
    flow: [
      "4-Week Pilot → Evidence & Outcomes → Review with Leadership → Full-Year Ecosystem Layer"
    ],
    focus: [
      "Semester-long active learning tracks",
      "Multi-cohort scaling across departments",
      "Integrated project residencies",
      "Faculty enablement & co-delivery models",
      "Dedicated Industry-Academia CoE layer"
    ],
    copy: "The pilot is the beginning of a long-term partnership to build permanent industry readiness capability within the institution."
  }
};

export default function InstitutionalPilotPage() {
  return (
    <MarketingShell>
      {/* 1 HERO */}
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
              Institutional Pilot
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                {pilotContent.hero.heading}
              </span>
            </h1>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">
              {pilotContent.hero.subheading}
            </p>

            {/* Metrics */}
            <div className="mt-8 grid grid-cols-2 gap-px sm:grid-cols-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03]">
              {pilotContent.hero.metrics.map(m => (
                <div key={m.label} className="flex flex-col items-center justify-center py-6 px-4 bg-background/50">
                  <span className="text-3xl font-black text-[hsl(var(--brand-300))] sm:text-4xl">{m.value}</span>
                  <span className="mt-1 text-xs font-bold uppercase tracking-widest text-foreground/50">{m.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-relaxed text-foreground/65 max-w-2xl">
              {pilotContent.hero.copy}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href={MARKETING.contact}>Discuss the Pilot</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.institutions} primary={false}>Back to Institutional Overview</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 WHAT THE PILOT IS */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader 
            eyebrow="The Concept"
            title={pilotContent.whatIsPilot.heading} 
            align="center" 
          />
          <p className="mt-6 text-center text-lg text-foreground/65 max-w-3xl mx-auto leading-relaxed">
            {pilotContent.whatIsPilot.copy}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-foreground/90 bg-white/[0.025] rounded-2xl px-6 py-4 border border-white/[0.07] max-w-4xl mx-auto backdrop-blur-md">
            {pilotContent.whatIsPilot.flow.map((step, i, arr) => (
              <React.Fragment key={step}>
                <span>{step}</span>
                {i < arr.length - 1 && <span className="text-[hsl(var(--brand-400))] px-1">→</span>}
              </React.Fragment>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 max-w-3xl mx-auto rounded-2xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-6 text-center shadow-sm"
          >
            <p className="font-semibold text-lg text-[hsl(var(--cyan-200))]">
              {pilotContent.whatIsPilot.keyStatement}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 PILOT STRUCTURE & 4 STUDENT SELECTION */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <MarketingSectionHeader eyebrow="Overview" title="Pilot Structure" />
              <div className="mt-8 grid grid-cols-2 gap-4">
                {pilotContent.structure.primaryMetrics.map(m => (
                  <div key={m.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl font-black text-foreground">{m.value}</span>
                    <span className="text-xs uppercase tracking-widest text-foreground/50 mt-2 font-bold">{m.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2 text-sm font-medium text-foreground/80">
                {pilotContent.structure.secondaryMetrics.map(m => (
                  <span key={m} className="rounded-full bg-[hsl(var(--brand-500))/0.1] border border-[hsl(var(--brand-500))/0.25] px-4 py-1.5 text-xs text-[hsl(var(--brand-300))]">{m}</span>
                ))}
              </div>
            </div>
            
            <div>
              <MarketingSectionHeader eyebrow="Cohort Intake" title={pilotContent.selection.heading} />
              <div className="mt-8 flex flex-col items-center">
                 {pilotContent.selection.flow.map((step, i, arr) => (
                   <React.Fragment key={step}>
                     <motion.div 
                       initial={{ opacity: 0, scale: 0.98 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       className={cn(
                         "flex w-full items-center justify-center rounded-xl border py-3 text-sm font-medium tracking-wide shadow-sm",
                         i === 2 || i === 4 
                           ? "border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.08] text-[hsl(var(--brand-200))] font-semibold"
                           : "border-white/[0.07] bg-white/[0.025] text-foreground/75"
                       )}
                     >
                       {step}
                     </motion.div>
                     {i < arr.length - 1 && (
                       <div className="h-4 w-px bg-white/15 my-0.5" />
                     )}
                   </React.Fragment>
                 ))}
              </div>
              <p className="mt-8 text-sm text-foreground/60 italic text-center">
                {pilotContent.selection.copy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 FOUR-WEEK JOURNEY */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Week by Week" title="The Four-Week Journey" align="center" />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pilotContent.weeks.map((week, i) => (
              <motion.div
                key={week.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.3] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xs font-black tracking-[0.15em] text-[hsl(var(--brand-400))] uppercase mb-5 pb-4 border-b border-white/[0.07]">
                  {week.title}
                </h3>
                <ul className="space-y-2.5 text-sm text-foreground/65 mb-8 flex-1">
                  {week.tasks.map(task => (
                    <li key={task} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/25" />
                      {task}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-1">Output</p>
                  <p className="text-sm font-medium text-foreground/80">{week.output}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 WHAT STUDENTS EXPERIENCE */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Experiences" title="One Ecosystem. Multiple Experiences." />
          <FeatureGrid className="mt-12" items={pilotContent.experiences} columns={4} />
        </div>
      </section>

      {/* 7 PEOPLE ARCHITECTURE */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Mentorship" title={pilotContent.people.heading} align="center" />
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold sm:text-base">
              {pilotContent.people.flow.map((role, i, arr) => (
                <React.Fragment key={role}>
                  <span className={cn(
                    "rounded-full border px-5 py-3 shadow-sm",
                    i === arr.length - 1 
                      ? "bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] border-transparent text-white" 
                      : "bg-white/[0.03] border-white/[0.08] text-foreground/80"
                  )}>
                    {role}
                  </span>
                  {i < arr.length - 1 && <span className="text-foreground/30 font-bold">↕</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--cyan-400))]">
              {pilotContent.people.layers.map(layer => (
                <span key={layer} className="rounded border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.05] px-4 py-2">+ {layer} Layer</span>
              ))}
            </div>
            <p className="mt-10 text-center text-base text-foreground/65 max-w-2xl">
              {pilotContent.people.copy}
            </p>
          </div>
        </div>
      </section>

      {/* 8 PROJECT ECOSYSTEM */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Problem to Showcase" title={pilotContent.project.heading} align="center" />
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-col gap-2">
              {pilotContent.project.flow.map((step, i, arr) => (
                <React.Fragment key={step}>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex w-full max-w-sm items-center justify-center rounded-xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-500))/0.04] py-3 text-sm font-bold tracking-widest text-foreground shadow-sm backdrop-blur-md px-10 text-center uppercase"
                  >
                    {step}
                  </motion.div>
                  {i < arr.length - 1 && (
                    <div className="h-4 w-px bg-white/20 mx-auto text-[10px] text-white/30 flex items-center justify-center font-bold">↓</div>
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/40 mb-4">Problem Sources</p>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-medium text-foreground/75">
                {pilotContent.project.sources.map((src, i, arr) => (
                  <React.Fragment key={src}>
                    <span>{src}</span>
                    {i < arr.length - 1 && <span className="text-white/15">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <p className="mt-8 max-w-2xl text-center text-sm font-medium text-foreground/60 italic">
              {pilotContent.project.copy}
            </p>
          </div>
        </div>
      </section>

      {/* 9 ASSESSMENT */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Evaluation & Evidence" title={pilotContent.assessment.heading} align="center" />
          <EvidenceFlowDiagram />
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <p className="text-base font-medium text-foreground/70 mb-6">
              Assessment evidence is gathered through multiple dimensions:
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {pilotContent.assessment.methods.map(method => (
                <span key={method} className="rounded-full border border-white/[0.07] bg-white/[0.025] px-4 py-1.5 text-xs text-foreground/75">{method}</span>
              ))}
            </div>
            
            <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.2] bg-gradient-to-b from-[hsl(var(--cyan-500))/0.04] to-transparent p-8 sm:p-12 shadow-sm text-left relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--cyan-500))] to-transparent" />
              <h3 className="text-2xl font-black text-[hsl(var(--cyan-400))] mb-6 uppercase tracking-wide text-center">Industry Readiness Score</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {pilotContent.assessment.scoreDimensions.map(dim => (
                  <div key={dim} className="flex items-center gap-3 p-3.5 bg-white/[0.03] rounded-xl border border-white/[0.05]">
                    <span className="h-2 w-2 rounded-full bg-[hsl(var(--cyan-400))] shrink-0" />
                    <span className="font-semibold text-sm text-foreground/85">{dim}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-foreground/50 italic border-t border-white/[0.06] pt-6">
                Important: {pilotContent.assessment.disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 COLLEGE PROVIDES & 11 SOPHRION PROVIDES */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <MarketingSectionHeader eyebrow="Institutional Role" title={pilotContent.collegeProvides.heading} />
              <div className="mt-8 space-y-2.5">
                {pilotContent.collegeProvides.items.map(item => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-foreground/80 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/30 shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-foreground/60">
                {pilotContent.collegeProvides.copy}
              </p>
            </div>
            <div>
              <MarketingSectionHeader eyebrow="Sophrion Extension" title={pilotContent.sophrionProvides.heading} />
              <div className="mt-8 space-y-2.5">
                {pilotContent.sophrionProvides.items.map(item => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-[hsl(var(--brand-500))/0.25] bg-[hsl(var(--brand-600))/0.06] px-4 py-3 text-sm font-semibold text-[hsl(var(--brand-200))]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-400))] shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 PILOT OUTPUTS */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Outcomes" title="Institutional Pilot Outputs" />
          <FeatureGrid className="mt-12" items={pilotContent.outputs} columns={3} />
        </div>
      </section>

      {/* 13 COMMERCIAL ENTRY */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Commercial Structure" title={pilotContent.pricing.heading} align="center" />
          <div className="mt-10 relative overflow-hidden rounded-3xl border-2 border-[hsl(var(--brand-500))] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-10 sm:p-14 text-center shadow-[0_0_60px_-15px_hsl(var(--brand-500)/0.35)]">
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[hsl(var(--brand-600))] via-[hsl(var(--cyan-500))] to-[hsl(var(--brand-600))]" />
            <p className="text-xs font-black tracking-widest uppercase text-[hsl(var(--brand-400))] mb-4">Standard Pilot Fee</p>
            <p className="text-6xl font-black text-foreground tracking-tight mb-6">{pilotContent.pricing.price}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base font-semibold text-foreground/80 mb-8 border-y border-white/[0.06] py-5">
              {pilotContent.pricing.metrics.map((m, i, arr) => (
                <React.Fragment key={m}>
                  <span>{m}</span>
                  {i < arr.length - 1 && <span className="text-white/15">|</span>}
                </React.Fragment>
              ))}
            </div>
            <p className="text-sm text-foreground/75 max-w-xl mx-auto mb-8 font-medium leading-relaxed">
              {pilotContent.pricing.copy}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-10 text-xs sm:text-sm">
              {pilotContent.pricing.included.map(inc => (
                <span key={inc} className="rounded-full bg-white/[0.04] border border-white/[0.08] px-4 py-1.5 font-medium text-foreground/80">{inc}</span>
              ))}
            </div>
            <p className="text-xs text-foreground/45 italic">
              Note: {pilotContent.pricing.note}
            </p>
            <div className="mt-8 flex justify-center">
              <MarketingCtaLink href={MARKETING.contact}>Discuss with Commercial Team</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* 14 WHAT IS NOT INCLUDED */}
      <section className="py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-8">
            <h3 className="text-base font-bold text-foreground mb-4">{pilotContent.exclusions.heading}</h3>
            <p className="text-sm text-foreground/60 mb-6">Unless separately agreed, the following are not included:</p>
            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-foreground/70 pl-2 mb-6">
              {pilotContent.exclusions.items.map(item => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="h-1 w-2 bg-red-400/40 rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm font-medium text-[hsl(var(--brand-300))] border-t border-white/[0.06] pt-4">
              {pilotContent.exclusions.note}
            </p>
          </div>
        </div>
      </section>

      {/* 15 HOW SUCCESS IS EVALUATED */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Evaluation" title={pilotContent.success.heading} align="center" />
          <div className="mt-12 flex flex-col items-center">
             <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-foreground/90 bg-white/[0.025] rounded-2xl px-6 py-4 border border-white/[0.07]">
               {pilotContent.success.flow.map((step, i, arr) => (
                 <React.Fragment key={step}>
                   <span>{step}</span>
                   {i < arr.length - 1 && <span className="text-[hsl(var(--cyan-400))] px-1">↓</span>}
                 </React.Fragment>
               ))}
             </div>
             <p className="mt-8 max-w-3xl mx-auto text-center text-base text-foreground/70 leading-relaxed">
               {pilotContent.success.copy}
             </p>
          </div>
        </div>
      </section>

      {/* 16 BEYOND THE PILOT */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Growth Path" title={pilotContent.beyond.heading} align="center" />
          <div className="mt-12 flex flex-col items-center">
             <div className="flex flex-col gap-3">
               {pilotContent.beyond.flow.map((step, i, arr) => (
                 <React.Fragment key={step}>
                   <div className="flex w-full max-w-md items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.025] py-4 text-sm font-bold tracking-widest text-foreground shadow-sm backdrop-blur-md px-8 text-center">
                     {step}
                   </div>
                   {i < arr.length - 1 && (
                     <div className="h-5 w-px bg-white/20 mx-auto text-center flex items-center justify-center font-bold text-white/30 text-xs">↓</div>
                   )}
                 </React.Fragment>
               ))}
             </div>
             <div className="mt-12">
               <p className="text-center text-xs font-bold uppercase tracking-widest text-foreground/50 mb-6">Possible Focus</p>
               <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                 {pilotContent.beyond.focus.map(f => (
                   <span key={f} className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-foreground/75">{f}</span>
                 ))}
               </div>
             </div>
             <p className="mt-10 max-w-2xl text-center text-sm font-medium text-foreground/55 leading-relaxed italic">
               Important: {pilotContent.beyond.copy}
             </p>
          </div>
        </div>
      </section>

      {/* 17 FINAL CTA */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <MarketingSectionHeader 
            align="center" 
            title="Start With a Measurable Pilot." 
            subtitle="Give students the environment to discover, build, receive feedback and demonstrate what they can do." 
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MarketingCtaLink href={MARKETING.contact}>Discuss the Pilot</MarketingCtaLink>
            <MarketingCtaLink href={MARKETING.institutions} primary={false}>
              View Institutional Partnership
            </MarketingCtaLink>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

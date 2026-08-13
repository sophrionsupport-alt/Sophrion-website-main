"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid, { FeatureItem } from "@/components/marketing/FeatureGrid";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";
import {
  Compass,
  Flame,
  Code2,
  Briefcase,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Building2,
  GraduationCap
} from "lucide-react";

export type ExperienceCardItem = {
  title: string;
  category: string;
  purpose: string;
  description: string;
  duration: string;
  depth: "Exposure" | "Exploration" | "Application" | "Immersion";
  route?: string;
  icon: React.ReactNode;
  accent: "purple" | "cyan" | "blue" | "indigo" | "emerald";
  points: string[];
};

export const experiencesList: ExperienceCardItem[] = [
  {
    title: "Workshops",
    category: "LEARN",
    purpose: "Activate Knowledge",
    description: "Hands-on, focused sessions designed to introduce concepts, trigger problem discovery, and prepare students for execution.",
    duration: "1–3 Days",
    depth: "Exposure",
    icon: <Sparkles className="h-5 w-5" />,
    accent: "purple",
    points: [
      "Introduce emerging concepts & tools",
      "Activate curiosity & explore new domains",
      "Trigger structured problem discovery",
      "Starting points—not the destination"
    ]
  },
  {
    title: "Challenges",
    category: "EXPLORE",
    purpose: "Explore Problems",
    description: "Time-boxed problem investigations that teach students to observe, frame questions, and explore approaches under real constraints.",
    duration: "3–7 Days",
    depth: "Exploration",
    icon: <Compass className="h-5 w-5" />,
    accent: "cyan",
    points: [
      "Observe, question & frame problems",
      "Work under operational constraints",
      "Investigate root causes & user needs",
      "Valuable when it shifts problem understanding"
    ]
  },
  {
    title: "Hackathons",
    category: "COLLABORATE",
    purpose: "Intensive Collaboration",
    description: "High-intensity collaborative sprints focusing on rapid team formation, prototyping, decision-making, and immediate feedback.",
    duration: "24–48 Hours",
    depth: "Exploration",
    icon: <Flame className="h-5 w-5" />,
    accent: "blue",
    points: [
      "Rapid multidisciplinary team formation",
      "Fast-cycle prototyping & experimentation",
      "Collaborative decision-making under pressure",
      "Entry points into deeper project residencies"
    ]
  },
  {
    title: "Projects",
    category: "BUILD",
    purpose: "Sustained Execution",
    description: "Multi-week project tracks turning theoretical knowledge into observable proof-of-work and documented evidence of capability.",
    duration: "4–8 Weeks",
    depth: "Application",
    icon: <Code2 className="h-5 w-5" />,
    accent: "indigo",
    points: [
      "End-to-end problem discovery & validation",
      "Iterative engineering sprints & reviews",
      "Continuous mentor & domain feedback",
      "Tangible evidence over verbal claims"
    ]
  },
  {
    title: "Industry Interactions",
    category: "CONNECT",
    purpose: "Understand Professional Context",
    description: "Structured touchpoints with practicing industry professionals to understand how real engineering and business teams operate.",
    duration: "Ongoing",
    depth: "Exposure",
    icon: <Briefcase className="h-5 w-5" />,
    accent: "emerald",
    points: [
      "Expert reviews & requirement discussions",
      "Professional critique & feedback sessions",
      "Real-world problem briefs & perspectives",
      "Context for how professionals think & decide"
    ]
  },
  {
    title: "Residency",
    category: "IMMERSE",
    purpose: "Deep Execution",
    description: "Sustained immersion in collaborative squads with agile sprint workflows, production reviews, and public proof-of-work.",
    duration: "3–6 Months",
    depth: "Immersion",
    route: MARKETING.residency,
    icon: <Layers className="h-5 w-5" />,
    accent: "purple",
    points: [
      "Cross-functional squad operating model",
      "Agile sprint cycles & weekly accountability",
      "AI workflows & production deployments",
      "Verified proof-of-work & public portfolios"
    ]
  }
];

const sampleProjectCards = [
  {
    title: "Institutional Readiness Intelligence Engine",
    problem: "Colleges lack real-time continuous visibility into student applied capability and industry alignment.",
    approach: "Designed a multi-dimensional telemetry system tracking rubric-based project sprint checkpoints.",
    output: "Interactive institutional analytics dashboard with student readiness score profiles.",
    learning: "Architecting data models around multi-rater feedback under strict privacy constraints."
  },
  {
    title: "AI-Augmented Diagnostic Assistant",
    problem: "First-line triage teams spend critical minutes navigating unstructured symptom logs.",
    approach: "Fine-tuned contextual retrieval pipeline with structured schema validation and confidence flags.",
    output: "Deployable microservice with sub-second retrieval latency and audit logs.",
    learning: "Handling probabilistic outputs in mission-critical decision-support environments."
  },
  {
    title: "Smart Grid IoT Telemetry Pipeline",
    problem: "Intermittent edge node disconnects causing data loss in distributed power monitoring.",
    approach: "Built local queuing buffer with edge synchronization and automated failover recovery.",
    output: "Resilient IoT gateway firmware prototype with cloud dashboard visualization.",
    learning: "Designing for high-latency network environments and constrained edge memory limits."
  }
];

const connectedPathways = [
  {
    step1: "Workshop",
    step2: "Discover a Problem",
    step3: "Challenge",
    step4: "Form a Team",
    step5: "Project"
  },
  {
    step1: "Hackathon",
    step2: "Build Prototype",
    step3: "Expert Feedback",
    step4: "Refinement",
    step5: "Residency"
  },
  {
    step1: "Project",
    step2: "Industry Review",
    step3: "Improved Solution",
    step4: "Showcase",
    step5: "Industry Opportunity"
  },
  {
    step1: "Industry Interaction",
    step2: "New Problem Brief",
    step3: "Discovery Sprint",
    step4: "Research",
    step5: "Advanced Project"
  }
];

const depthComparison = [
  {
    level: "EXPOSURE",
    experience: "Workshop",
    focus: "Short, focused learning activation.",
    duration: "1–3 Days",
    accent: "border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.04]"
  },
  {
    level: "EXPLORATION",
    experience: "Challenge / Hackathon",
    focus: "Problem exploration, rapid prototyping, and collaboration.",
    duration: "1–7 Days",
    accent: "border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.04]"
  },
  {
    level: "APPLICATION",
    experience: "Project",
    focus: "Sustained execution and milestone-driven capability building.",
    duration: "4–8 Weeks",
    accent: "border-blue-500/30 bg-blue-500/0.04"
  },
  {
    level: "IMMERSION",
    experience: "Residency",
    focus: "Longer-term execution, squad operating model, and deep ecosystem participation.",
    duration: "3–6 Months",
    accent: "border-emerald-500/30 bg-emerald-500/0.04"
  }
];

const audienceCards = [
  {
    title: "STUDENTS",
    icon: <GraduationCap className="h-6 w-6 text-[hsl(var(--brand-400))]" />,
    role: "Explore & Build",
    body: "Explore diverse domains, build practical capability through hands-on sprints, work with mentors, and establish verifiable evidence of competence.",
    cta: "Explore Pathways",
    href: MARKETING.pathways
  },
  {
    title: "INSTITUTIONS",
    icon: <Building2 className="h-6 w-6 text-[hsl(var(--cyan-400))]" />,
    role: "Ecosystem Extension",
    body: "Add an external industry-integrated active learning layer around existing curriculum. Run structured pilots and track cohort-wide readiness scores.",
    cta: "For Institutions",
    href: MARKETING.institutions
  },
  {
    title: "INDUSTRY",
    icon: <Users className="h-6 w-6 text-blue-400" />,
    role: "Collaborate & Mentor",
    body: "Engage directly with student talent through real-world problem statements, technical reviews, mentorship sessions, and showcase evaluations.",
    cta: "Partner With Us",
    href: MARKETING.contact
  }
];

export default function ExperiencesPage() {
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
              Sophrion Experiences
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Experiences That Build Capability
              </span>
            </h1>

            <p className="mt-6 text-lg font-medium text-foreground sm:text-xl">
              Different experiences. One connected ecosystem.
            </p>
            <p className="mt-3 text-base leading-relaxed text-foreground/65 sm:text-lg max-w-2xl">
              Sophrion creates different environments for students to explore, learn, collaborate, build, receive feedback and grow.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#overview">Explore Experiences</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.institutions} primary={false}>
                For Institutions
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. EXPERIENCE ECOSYSTEM OVERVIEW ─── */}
      <section id="overview" className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Connected Model"
            title="Connected Environments, Not a Fixed Sequence"
            subtitle="Students engage through multiple touchpoints tailored to their stage of development."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[
              { category: "LEARN", title: "Workshops", icon: <Sparkles className="h-4 w-4" />, desc: "Activate knowledge & explore domains" },
              { category: "EXPLORE", title: "Challenges", icon: <Compass className="h-4 w-4" />, desc: "Investigate problems under constraints" },
              { category: "COLLABORATE", title: "Hackathons", icon: <Flame className="h-4 w-4" />, desc: "Rapid prototyping & team formation" },
              { category: "BUILD", title: "Projects", icon: <Code2 className="h-4 w-4" />, desc: "Sustained execution & tangible output" },
              { category: "CONNECT", title: "Industry Interactions", icon: <Briefcase className="h-4 w-4" />, desc: "Professional context & expert critique" },
              { category: "IMMERSE", title: "Residency", icon: <Layers className="h-4 w-4" />, desc: "Deep execution squads & sprint cycles" },
              { category: "DEMONSTRATE", title: "Showcase", icon: <CheckCircle2 className="h-4 w-4" />, desc: "Public proof-of-work & evidence demonstration" }
            ].map((node, i) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md transition-all duration-300 hover:border-[hsl(var(--brand-500))/0.3] hover:shadow-[0_0_25px_-8px_hsl(var(--brand-500)/0.25)]"
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-black tracking-widest text-[hsl(var(--brand-400))] uppercase">
                    {node.category}
                  </span>
                  <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-foreground/70 group-hover:text-[hsl(var(--cyan-400))] transition-colors">
                    {node.icon}
                  </div>
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">{node.title}</h3>
                <p className="text-xs leading-relaxed text-foreground/60">{node.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-[hsl(var(--cyan-500))/0.15] bg-gradient-to-r from-[hsl(var(--brand-600))/0.05] to-[hsl(var(--cyan-500))/0.05] p-6 text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-medium text-foreground/80 leading-relaxed">
              A student may enter through one experience, move into another, or combine multiple experiences depending on their interests, capability and opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 3. WORKSHOPS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Learn"
                title="Workshops: Activate Knowledge"
                subtitle="Workshops are starting points—not the destination. They are designed to trigger curiosity, establish foundational context, and frame problem spaces."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Introduce emerging technology paradigms & architectures",
                  "Activate curiosity through live demonstrations & exercises",
                  "Explore specialized technology and engineering domains",
                  "Provide the foundational knowledge needed for project execution",
                  "Trigger initial problem discovery and student team ideation"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground/75 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-400))] shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <MarketingCtaLink href={MARKETING.pathways}>Explore Pathways</MarketingCtaLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-400))] mb-3">Operating Principle</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Starting Points, Not the Full Arc</h3>
                <p className="text-sm leading-relaxed text-foreground/65 mb-6">
                  Unlike traditional coaching that treats workshops as the final product, Sophrion uses workshops to unlock student confidence and transition learners directly into hands-on problem investigation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/80">Interactive Briefs</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/80">Hands-on Labs</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-foreground/80">Domain Mentorship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. CHALLENGES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--cyan-500))] to-transparent" />
                <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] mb-4">Core Philosophy</p>
                <blockquote className="text-lg font-semibold text-foreground/90 italic leading-relaxed sm:text-xl">
                  "A challenge is valuable not only when a solution is produced, but when it changes how a learner understands a problem."
                </blockquote>
                <p className="mt-6 text-xs text-foreground/50 uppercase tracking-wider font-bold">
                  Problem Framing · Constraint Management · Investigation
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <MarketingSectionHeader
                eyebrow="Explore"
                title="Challenges: Explore Problems"
                subtitle="Challenges give students structured opportunities to engage with ambiguity, question assumptions, and frame clear problem statements."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Observe real-world operating environments and failure modes",
                  "Question default assumptions and investigate user requirements",
                  "Frame well-bounded problem definitions before writing code",
                  "Explore alternative architecture approaches under constraints",
                  "Develop resilience when dealing with uncertain requirements"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground/75 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))] shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. HACKATHONS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Collaborate"
                title="Hackathons: Intensive Collaboration"
                subtitle="Hackathons create high-intensity environments where multidisciplinary teams form quickly, prototype under pressure, and receive immediate critique."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Rapid team formation across disciplines and skill sets",
                  "High-velocity problem decomposition and solution scoping",
                  "Fast-cycle prototyping and functional demonstration",
                  "Collaborative decision-making under strict time limits",
                  "Live presentations and constructive mentor feedback"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground/75 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-xs font-medium text-foreground/70"
              >
                Hackathons are not standalone gimmicks—they serve as high-energy entry points into sustained project tracks and residency squads.
              </motion.div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Team Dynamics", desc: "Cross-functional synergy and role ownership." },
                  { title: "Rapid MVP", desc: "Building working prototypes within 24–48 hours." },
                  { title: "Live Review", desc: "Constructive critique from industry reviewers." },
                  { title: "Pathway Entry", desc: "Promising prototypes move into extended residency." }
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
                  >
                    <h4 className="text-sm font-bold text-foreground mb-1.5">{card.title}</h4>
                    <p className="text-xs text-foreground/60 leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. PROJECTS (CORE STRENGTH SECTION) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Build"
            title="Projects: Sustained Execution"
            subtitle="Projects turn learning into evidence of capability. Students execute across complete engineering and problem-solving lifecycles."
            align="center"
          />

          {/* Project Lifecycle */}
          <div className="mt-14 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-400))] mb-6">
              Complete Project Execution Lifecycle
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto">
              {[
                "Problem",
                "Discovery",
                "Validation",
                "Team Formation",
                "Solution",
                "Prototype",
                "Feedback",
                "Iteration",
                "Showcase"
              ].map((stage, i, arr) => (
                <React.Fragment key={stage}>
                  <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-bold text-foreground/85 shadow-sm">
                    {stage}
                  </span>
                  {i < arr.length - 1 && (
                    <span className="text-[hsl(var(--brand-400))] text-xs font-bold hidden sm:inline">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Project Sample Cards */}
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {sampleProjectCards.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.3] transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))]" />
                <h3 className="text-base font-bold text-foreground mb-4">{proj.title}</h3>

                <div className="space-y-3.5 text-xs text-foreground/70 flex-1">
                  <div>
                    <span className="font-bold text-[hsl(var(--brand-300))] uppercase tracking-wider block mb-1">
                      Problem:
                    </span>
                    <p className="leading-relaxed">{proj.problem}</p>
                  </div>

                  <div>
                    <span className="font-bold text-[hsl(var(--cyan-300))] uppercase tracking-wider block mb-1">
                      Approach:
                    </span>
                    <p className="leading-relaxed">{proj.approach}</p>
                  </div>

                  <div>
                    <span className="font-bold text-blue-300 uppercase tracking-wider block mb-1">
                      Output:
                    </span>
                    <p className="leading-relaxed">{proj.output}</p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06]">
                    <span className="font-bold text-emerald-300 uppercase tracking-wider block mb-1">
                      Key Learning:
                    </span>
                    <p className="leading-relaxed italic text-foreground/60">{proj.learning}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs font-semibold text-foreground/50 uppercase tracking-widest">
            Project cards emphasize Problem → Approach → Output → Learning over simple tech buzzwords.
          </p>
        </div>
      </section>

      {/* ─── 7. INDUSTRY INTERACTIONS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Connect"
                title="Industry Interactions: Understand Professional Context"
                subtitle="Industry is not only a destination for employment. It is a context in which students learn how professionals think, communicate, decide and execute."
              />
              <div className="mt-8 space-y-3">
                {[
                  "Specialized industry seminars & technology briefings",
                  "Expert review sessions on student architectural decisions",
                  "Professional critique on sprint deliverables & code quality",
                  "Real problem statements sourced from operational contexts",
                  "Demonstrations, presentations, and communication coaching"
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-foreground/75 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-foreground/45 italic border-l border-white/10 pl-3">
                Industry and client touchpoints depend on availability, cohort suitability, and agreed operational scope.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 sm:p-10 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">Context Over Placement Promises</p>
                <h3 className="text-xl font-bold text-foreground mb-4">Learning How Professionals Operate</h3>
                <p className="text-sm leading-relaxed text-foreground/70 mb-6">
                  Rather than making unsubstantiated placement claims, Sophrion embeds industry professionals as active reviewers and mentors so students absorb workplace expectations naturally during project builds.
                </p>
                <div className="space-y-2 text-xs font-medium text-foreground/80">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Live Architecture Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Requirement Discovery Guidance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Professional Communication Feedback</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. RESIDENCY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--brand-500))/0.25] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-14 backdrop-blur-md shadow-[0_0_50px_-15px_hsl(var(--brand-500)/0.3)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] via-[hsl(var(--cyan-500))] to-[hsl(var(--brand-600))]" />

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.1] px-3.5 py-1.5 text-xs font-bold tracking-[0.15em] text-[hsl(var(--brand-300))] uppercase mb-4">
                Deep Execution Environment
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Residency: Sustained Immersion
              </h2>
              <p className="mt-4 text-base leading-relaxed text-foreground/75 sm:text-lg">
                Residency provides sustained immersion in the Sophrion ecosystem through longer project cycles, multidisciplinary squads, weekly sprint reviews, production reviews, and verifiable proof-of-work.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-semibold text-foreground/85">
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">Collaborative Squads</span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">Agile Sprint Systems</span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">Task Accountability</span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">AI-Native Tooling</span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">Production Deployments</span>
                <span className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5">Public Proof-of-Work</span>
              </div>

              <div className="mt-10">
                <MarketingCtaLink href={MARKETING.residency}>Explore Residency</MarketingCtaLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. SHOWCASE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Demonstrate"
            title="Showcase: Demonstrate What You Can Do"
            subtitle="Showcase is not just an event. It is the culmination of structured evidence where students demonstrate what they built and what they learned."
            align="center"
          />

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Problem Evidence", desc: "Demonstrating root cause understanding and validation." },
              { num: "02", title: "Approach & Solution", desc: "Explaining architectural decisions and trade-offs." },
              { num: "03", title: "Iterations & Failures", desc: "Highlighting how feedback reshaped the implementation." },
              { num: "04", title: "Individual Contribution", desc: "Showing tangible proof-of-work and next steps." }
            ].map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <span className="text-2xl font-black text-foreground/[0.1] block mb-2">{s.num}</span>
                <h4 className="text-sm font-bold text-[hsl(var(--brand-300))] uppercase tracking-wide mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. CONNECTED EXPERIENCES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Flexible Pathways"
            title="One Experience Can Lead to Another"
            subtitle="There is no single required route through Sophrion. Experiences interconnect to support different student journeys."
            align="center"
          />

          <div className="mt-12 space-y-3 max-w-4xl mx-auto">
            {connectedPathways.map((path, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-4 backdrop-blur-md"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/85">
                  <span className="text-[hsl(var(--brand-400))] font-bold">Example {idx + 1}:</span>
                  <span>{path.step1}</span>
                  <span className="text-[hsl(var(--cyan-400))]">→</span>
                  <span>{path.step2}</span>
                  <span className="text-[hsl(var(--cyan-400))]">→</span>
                  <span>{path.step3}</span>
                  <span className="text-[hsl(var(--cyan-400))]">→</span>
                  <span>{path.step4}</span>
                  <span className="text-[hsl(var(--cyan-400))]">→</span>
                  <span className="text-[hsl(var(--brand-300))] font-bold">{path.step5}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs font-semibold text-foreground/50 uppercase tracking-widest">
            Key Statement: There is no single required route through Sophrion.
          </p>
        </div>
      </section>

      {/* ─── 11. EXPERIENCE DEPTH ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Progression"
            title="Experience Depth & Immersion"
            subtitle="Experiences differ in depth, duration, and commitment—not in fundamental philosophy."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {depthComparison.map((lvl) => (
              <div
                key={lvl.level}
                className={cn(
                  "flex flex-col rounded-2xl border p-6 backdrop-blur-md",
                  lvl.accent
                )}
              >
                <p className="text-xs font-black tracking-widest text-foreground/50 uppercase mb-2">
                  {lvl.level}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-3">{lvl.experience}</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6 flex-1">{lvl.focus}</p>
                <div className="pt-3 border-t border-white/[0.06] text-xs font-bold text-[hsl(var(--brand-400))]">
                  {lvl.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. WHO THESE EXPERIENCES ARE FOR ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Stakeholders"
            title="Who These Experiences Are For"
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {audienceCards.map((aud) => (
              <motion.div
                key={aud.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md"
              >
                <div className="mb-4">{aud.icon}</div>
                <h3 className="text-lg font-bold text-foreground">{aud.title}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-400))] mb-4">
                  {aud.role}
                </p>
                <p className="text-sm leading-relaxed text-foreground/65 mb-8 flex-1">{aud.body}</p>
                <MarketingCtaLink href={aud.href} className="self-start">
                  {aud.cta}
                </MarketingCtaLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 13. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Start With an Experience.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              Grow Through the Ecosystem.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Explore specialized pathways, enter a project residency, or partner with Sophrion to launch an institutional pilot.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.pathways}>Explore Pathways</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.residency} primary={false}>
                Explore Residency
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

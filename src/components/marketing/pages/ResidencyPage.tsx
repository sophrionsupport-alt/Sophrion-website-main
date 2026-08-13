"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import FeatureGrid, { FeatureItem } from "@/components/marketing/FeatureGrid";
import PhaseTimeline from "@/components/marketing/PhaseTimeline";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";
import {
  Layers,
  Sparkles,
  Users,
  Target,
  RefreshCw,
  Cpu,
  GraduationCap,
  Building2,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  ShieldCheck,
  Zap
} from "lucide-react";

const squadRoles = [
  {
    role: "AI Engineer",
    desc: "Build AI systems, intelligent workflows, model pipelines and automation environments.",
    accent: "purple" as const
  },
  {
    role: "Full Stack Associate",
    desc: "Develop product systems, APIs, user interfaces, database integrations and deployment workflows.",
    accent: "cyan" as const
  },
  {
    role: "Data Associate",
    desc: "Build telemetry dashboards, analytics systems, reporting models and intelligence pipelines.",
    accent: "blue" as const
  },
  {
    role: "UX Designer",
    desc: "Design accessible interfaces, user research flows, design systems and interaction patterns.",
    accent: "indigo" as const
  },
  {
    role: "Operations Lead",
    desc: "Coordinate sprint management, team communication, blocker resolution and accountability workflows.",
    accent: "emerald" as const
  },
  {
    role: "QA & Documentation Associate",
    desc: "System validation, test suites, documentation architectures, deployment verification and quality metrics.",
    accent: "purple" as const
  }
];

const purposeCards: FeatureItem[] = [
  {
    title: "DEPTH",
    body: "Go deeper into specialized problem spaces and technical architectures beyond short-format workshops.",
    accent: "purple",
    icon: <Target className="h-5 w-5" />
  },
  {
    title: "EXECUTION",
    body: "Turn conceptual ideas into sustained, deployable project systems with real operational telemetry.",
    accent: "cyan",
    icon: <Zap className="h-5 w-5" />
  },
  {
    title: "COLLABORATION",
    body: "Work closely with multidisciplinary peers, junior mentors, domain experts and industry practitioners.",
    accent: "blue",
    icon: <Users className="h-5 w-5" />
  },
  {
    title: "ITERATION",
    body: "Build, review, receive structured feedback, improve through evidence and repeat until production-ready.",
    accent: "emerald",
    icon: <RefreshCw className="h-5 w-5" />
  }
];

const executionStages = [
  {
    title: "01 — DISCOVER",
    body: "Understand the core problem context, investigate user requirements, and analyze operating constraints."
  },
  {
    title: "02 — DEFINE",
    body: "Clarify problem boundaries, technical requirements, success criteria, and the intended architecture outcome."
  },
  {
    title: "03 — BUILD",
    body: "Develop the solution through structured weekly sprints, agile squad collaboration, and iterative implementation."
  },
  {
    title: "04 — REVIEW",
    body: "Receive continuous technical reviews, mentor checkpoints, and practicing industry feedback where available."
  },
  {
    title: "05 — ITERATE",
    body: "Refactor, optimize, and improve the project implementation directly based on empirical feedback and evidence."
  },
  {
    title: "06 — DEMONSTRATE",
    body: "Present, showcase, and defend the project outcome, architecture decisions, and individual contributions."
  }
];

const learningMethods = [
  "Multi-week project execution",
  "Regular mentor checkpoints",
  "Domain expert code reviews",
  "Industry perspective sessions",
  "Applied research & literature review",
  "System architecture documentation",
  "Cross-functional peer learning",
  "Independent technical exploration",
  "Structured sprint reflection",
  "Real-time problem solving under ambiguity"
];

const mentorNetwork = [
  {
    title: "Junior Mentor",
    role: "Recurring Support",
    body: "Provides weekly sprint check-ins, unblocks daily implementation hurdles, and ensures steady team progress.",
    accent: "purple" as const
  },
  {
    title: "Domain Expert",
    role: "Technical & Conceptual Depth",
    body: "Offers deep architectural critique, algorithm optimization, and specialized domain guidance.",
    accent: "cyan" as const
  },
  {
    title: "Industry Professional",
    role: "Professional Context",
    body: "Shares real-world operational standards, industry best practices, and production-level expectations.",
    accent: "blue" as const
  },
  {
    title: "Residency & Cohort Lead",
    role: "Execution Coordination",
    body: "Manages overall cohort governance, sprint tracking, quality standards, and institutional escalation systems.",
    accent: "indigo" as const
  }
];

const evidenceForms = [
  { title: "Working Prototypes", body: "Deployable web applications, APIs, microservices and functional systems." },
  { title: "Product & System Architecture", body: "Complete system blueprints, data pipelines, schema models and infrastructure maps." },
  { title: "Applied Research & Analysis", body: "Evaluations of model performance, benchmarking data, and algorithm trade-offs." },
  { title: "Design & UX Systems", body: "Interactive prototypes, design tokens, component libraries and usability audits." },
  { title: "Technical Documentation", body: "Architecture decision records (ADRs), API docs, user guides and deployment logs." },
  { title: "Public Proof-of-Work", body: "Verifiable GitHub repositories, live demo URLs, dashboards and capability portfolios." }
];

const aiWorkflows = [
  { title: "Research", body: "Synthesize documentation, extract technical patterns, and explore existing paradigms." },
  { title: "Build", body: "Accelerate development using AI-assisted coding, boilerplate generation, and schema creation." },
  { title: "Test", body: "Automate test-case generation, boundary condition checking, and security scans." },
  { title: "Automate", body: "Implement intelligent workflows, background agents, and automated data processing." },
  { title: "Analyze", body: "Process telemetry logs, evaluate system performance, and extract project insights." },
  { title: "Document", body: "Generate comprehensive API specifications, release notes, and architecture summaries." }
];

const audienceCards = [
  {
    title: "LEARNERS",
    icon: <GraduationCap className="h-6 w-6 text-[hsl(var(--brand-400))]" />,
    role: "Sustained Execution",
    body: "Students who want to go beyond surface-level tutorials, work in interdisciplinary squads, and build verifiable proof-of-work.",
    cta: "Explore Pathways",
    href: MARKETING.pathways
  },
  {
    title: "INSTITUTIONS",
    icon: <Building2 className="h-6 w-6 text-[hsl(var(--cyan-400))]" />,
    role: "Ecosystem Extension",
    body: "Colleges seeking to embed an immersive execution semester into their campus without replacing academic governance.",
    cta: "For Institutions",
    href: MARKETING.institutions
  },
  {
    title: "INDUSTRY",
    icon: <Briefcase className="h-6 w-6 text-blue-400" />,
    role: "Mentorship & Context",
    body: "Organizations looking to mentor emerging talent on real-world engineering problems and evaluate candidates based on observed evidence.",
    cta: "Partner With Us",
    href: MARKETING.contact
  }
];

const examplePathways = [
  {
    title: "Pathway to Residency",
    flow: ["Pathway", "Discovery Project", "Residency Squad", "Industry Review"]
  },
  {
    title: "Hackathon Prototype Expansion",
    flow: ["Hackathon", "MVP Prototype", "Residency Sprint", "Production Deployment"]
  },
  {
    title: "Industry Problem Track",
    flow: ["Industry Interaction", "Problem Brief", "Residency Project", "Showcase"]
  },
  {
    title: "Residency to External Opportunity",
    flow: ["Residency Project", "Peer & Expert Reviews", "Showcase Evidence", "Ecosystem Opportunity"]
  }
];

export default function ResidencyPage() {
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
              Sophrion Residency
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Residency
              </span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
              Deep Execution Environment
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/65 sm:text-lg max-w-2xl">
              Residency is an immersive Sophrion experience where learners spend sustained time working on meaningful problems with peers, mentors, experts and industry context.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#execution-model">Explore How It Works</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.experiences} primary={false}>
                View All Experiences
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. REPOSITIONING BANNER ─── */}
      <section className="border-t border-white/[0.06] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-6 sm:p-8 backdrop-blur-md">
            <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-300))] mb-2">
              Deep Execution Environment
            </p>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-4xl">
              Residency creates a sustained environment for project execution, collaboration, learning, feedback and professional practice. While it can support entrepreneurial tracks and startup-style agile sprints, it is not limited to startups—it is designed for deep engineering capability and multi-week project execution.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. RESIDENCY PURPOSE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Purpose"
            title="Why Residency Exists"
            subtitle="Short experiences can activate curiosity. Sustained experiences develop execution. Residency gives learners more time to understand complex problems, develop deeper capabilities, work through iterations, collaborate with others and produce meaningful evidence of what they can do."
            align="center"
          />

          <div className="mt-14">
            <FeatureGrid items={purposeCards} columns={4} />
          </div>
        </div>
      </section>

      {/* ─── 4. RESIDENCY IN THE ECOSYSTEM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Ecosystem Context"
            title="Residency Is Part of the Ecosystem"
            subtitle="Residency is an environment, not a mandatory step that every learner must complete."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
            {["Experience", "Project", "Residency", "Industry / Opportunity"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={cn(
                  "rounded-xl border px-5 py-3 text-sm font-bold shadow-sm backdrop-blur-md",
                  step === "Residency"
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03] text-foreground/80"
                )}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--brand-400))] font-bold text-sm hidden sm:inline">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            A learner may enter Residency through a project, challenge, pathway or other Sophrion experience when deeper engagement is appropriate.
          </p>
        </div>
      </section>

      {/* ─── 5. SQUAD MODEL ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Collaborative Operations"
            title="Squad-Based Execution Model"
            subtitle="Students operate inside cross-functional squads (5–8 students) designed around shared project execution, agile sprint rhythms, and mutual accountability."
          />

          {/* Squad Definitions */}
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold text-[hsl(var(--brand-300))] uppercase tracking-wider mb-2">Squads</h4>
              <p className="text-xs text-foreground/70 leading-relaxed">Small working groups built around specific project domains, architecture scopes, and shared execution.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold text-[hsl(var(--cyan-300))] uppercase tracking-wider mb-2">Sprints</h4>
              <p className="text-xs text-foreground/70 leading-relaxed">Structured execution cycles used to plan deliverables, build functionality, review progress, and iterate.</p>
            </div>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
              <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2">Accountability</h4>
              <p className="text-xs text-foreground/70 leading-relaxed">Shared responsibility for peer contribution, asynchronous communication, sprint deadlines, and visible progress.</p>
            </div>
          </div>

          {/* Squad Roles Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {squadRoles.map((r) => (
              <div
                key={r.role}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.3] transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-400))]" />
                  <h3 className="font-bold text-foreground text-sm">{r.role}</h3>
                </div>
                <p className="text-xs leading-relaxed text-foreground/65">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. EXECUTION MODEL (PROCESS) ─── */}
      <section id="execution-model" className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Lifecycle"
            title="How Residency Works"
            subtitle="The 6-stage execution lifecycle turning complex problem briefs into verified proof-of-work."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {executionStages.map((st, i) => (
              <motion.div
                key={st.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.3] transition-all"
              >
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xs font-black tracking-widest text-[hsl(var(--brand-400))] uppercase mb-3">
                  {st.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/70">{st.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 7. LEARNING INSIDE RESIDENCY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Pedagogy"
                title="Learning Happens Through Execution"
                subtitle="Residency does not rely entirely on rigid lectures. Students acquire technical depth, architectural principles, and problem-solving skills dynamically as project milestones require them."
              />

              <div className="mt-8 grid grid-cols-2 gap-2.5">
                {learningMethods.map((m) => (
                  <div key={m} className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                    <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))] shrink-0" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden">
                <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] mb-4">Core Statement</p>
                <blockquote className="text-xl font-bold text-foreground italic leading-relaxed sm:text-2xl">
                  "Learn what the project requires, when the project requires it."
                </blockquote>
                <p className="mt-6 text-xs text-foreground/60 leading-relaxed">
                  Knowledge retention multiplies when learners encounter an authentic roadblock, research the solution under mentor guidance, and immediately integrate it into live systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. MENTOR & EXPERT NETWORK ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Layered Guidance"
            title="Support When You Need It"
            subtitle="Residency does not depend on one person knowing everything. Learners access the right level of expertise as their work evolves."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentorNetwork.map((m) => (
              <div
                key={m.title}
                className="flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[hsl(var(--brand-400))] mb-1">
                  {m.role}
                </span>
                <h3 className="text-base font-bold text-foreground mb-3">{m.title}</h3>
                <p className="text-xs text-foreground/65 leading-relaxed flex-1">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. INDUSTRY CONNECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Context"
                title="Work With Real-World Context"
                subtitle="Students connect with industry professionals to understand how modern engineering, data, and product teams make decisions under real-world conditions."
              />

              <ul className="mt-8 space-y-2.5 text-xs text-foreground/75 font-medium">
                {[
                  "Live architecture & code review sessions",
                  "Professional industry seminars on operational maturity",
                  "Requirement discussions & scope framing with external experts",
                  "Constructive feedback on sprint deliverables & performance",
                  "Real-world problem briefs sourced from industry domains",
                  "Client demonstrations & presentations where available"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-xs text-foreground/45 italic border-l border-white/10 pl-3">
                Important: Industry and client participation depends on suitability, availability, approval and agreed scope. Sophrion does not make speculative placement guarantees.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.03] p-8 sm:p-10 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">Professional Standard</p>
                <h3 className="text-lg font-bold text-foreground mb-3">Context Over Certification</h3>
                <p className="text-xs leading-relaxed text-foreground/70 mb-4">
                  Industry interaction in Residency is structured so students understand how practicing leads, engineering managers, and technical architects evaluate quality, security, and scalability.
                </p>
                <div className="flex flex-wrap gap-2 text-[11px] font-semibold text-foreground/80">
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Code Quality</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Production Hygiene</span>
                  <span className="rounded border border-white/10 bg-white/5 px-2.5 py-1">Trade-off Defense</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 10. PROJECT OUTPUTS (EVIDENCE OF CAPABILITY) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Proof-of-Work"
            title="Produce Evidence of Capability"
            subtitle="The goal is not to produce something impressive for its own sake. The goal is to produce documented evidence of learning, contribution, problem solving and execution."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {evidenceForms.map((ev) => (
              <div
                key={ev.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <h4 className="text-sm font-bold text-foreground mb-1.5">{ev.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{ev.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. AI & TECHNOLOGY WORKFLOWS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Accelerated Execution"
            title="Use Technology to Accelerate Learning and Execution"
            subtitle="AI is a capability inside Residency—not the definition of Residency. Technology choices follow project needs."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiWorkflows.map((ai) => (
              <div
                key={ai.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))]" />
                  <h4 className="text-sm font-bold text-foreground">{ai.title}</h4>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed">{ai.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 12. FEEDBACK LOOP (KEY VISUAL ELEMENT) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Continuous Iteration"
            title="Build → Review → Improve"
            subtitle="Capability develops through the continuous repetition of this execution loop."
            align="center"
          />

          <div className="mt-14 flex flex-col items-center">
            <div className="flex flex-col gap-2.5 w-full max-w-md">
              {[
                { step: "BUILD", desc: "Squad implements project features & architecture components." },
                { step: "MENTOR REVIEW", desc: "Junior mentors conduct code quality & blocker checkpoints." },
                { step: "EXPERT / INDUSTRY FEEDBACK", desc: "Domain specialists critique architecture, security & scaling." },
                { step: "REFLECT", desc: "Squad evaluates gaps between intended outcome and current evidence." },
                { step: "ITERATE", desc: "Refactor, optimize and improve the implementation." },
                { step: "BUILD AGAIN", desc: "Ship the next increment with higher operational maturity." }
              ].map((item, idx, arr) => (
                <React.Fragment key={item.step}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    className={cn(
                      "flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-2xl border px-6 py-4 backdrop-blur-md shadow-sm",
                      idx === 0 || idx === arr.length - 1
                        ? "border-[hsl(var(--brand-500))/0.4] bg-[hsl(var(--brand-600))/0.1] text-[hsl(var(--brand-200))]"
                        : "border-white/[0.08] bg-white/[0.025] text-foreground/85"
                    )}
                  >
                    <span className="text-xs font-black tracking-widest uppercase">{item.step}</span>
                    <span className="text-xs text-foreground/60 sm:text-right">{item.desc}</span>
                  </motion.div>
                  {idx < arr.length - 1 && (
                    <div className="h-4 w-px bg-gradient-to-b from-white/20 to-transparent mx-auto" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 13. WHO RESIDENCY IS FOR ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Stakeholders"
            title="Who Residency Is For"
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

      {/* ─── 14. RESIDENCY → FUTURE OPPORTUNITIES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Outcomes"
            title="What Can Residency Lead To?"
            subtitle="Residency establishes concrete evidence of capability. Opportunities emerge naturally from demonstrated performance."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              "Stronger portfolio evidence",
              "Advanced multidisciplinary projects",
              "Direct industry exposure",
              "Continued senior mentorship",
              "Applied technical research",
              "Entrepreneurship pathways",
              "Internship opportunities where available",
              "Ecosystem community leadership",
              "Advanced pathway specializations"
            ].map((outcome) => (
              <span
                key={outcome}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium text-foreground/80"
              >
                {outcome}
              </span>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-foreground/50 italic max-w-2xl mx-auto">
            Outcomes depend on student performance, project quality, opportunity availability and external conditions. Sophrion does not make speculative promises of employment or investment.
          </p>
        </div>
      </section>

      {/* ─── 15. RELATIONSHIP TO OTHER EXPERIENCES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Integration"
            title="Residency Connects With Other Experiences"
            subtitle="These are examples of how learners and teams flow into and out of Residency, not mandatory progression paths."
            align="center"
          />

          <div className="mt-12 space-y-3 max-w-4xl mx-auto">
            {examplePathways.map((path) => (
              <div
                key={path.title}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-4 backdrop-blur-md"
              >
                <span className="text-xs font-bold text-[hsl(var(--brand-300))] uppercase tracking-wider">
                  {path.title}:
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-foreground/85">
                  {path.flow.map((step, idx) => (
                    <React.Fragment key={step}>
                      <span>{step}</span>
                      {idx < path.flow.length - 1 && (
                        <span className="text-[hsl(var(--cyan-400))]">→</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 16. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Go Deeper. Build Longer.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              Learn Through Execution.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Explore our connected experiences, discover specialized pathways, or partner with Sophrion for an institutional residency.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.experiences}>Explore Experiences</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.pathways} primary={false}>
                Explore Pathways
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

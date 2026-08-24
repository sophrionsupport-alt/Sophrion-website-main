"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";
import {
  Brain,
  Database,
  Palette,
  Shield,
  Cpu,
  ArrowRight,
  Sparkles,
  Compass,
  CheckCircle2,
  GitMerge,
  Target
} from "lucide-react";

export type PathwayDomain = {
  id: string;
  slug: string;
  categoryNum: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  accent: "purple" | "cyan" | "blue" | "indigo" | "emerald";
  domains: string[];
  capabilities: string[];
  problems: string[];
  projects: string[];
  tools: string[];
  experiences: string[];
  relatedPathways: string[];
};

export const pathwayDomainsData: PathwayDomain[] = [
  {
    id: "pathway-ai-systems",
    slug: "ai-systems",
    categoryNum: "DOMAIN 01",
    title: "AI & Intelligent Systems",
    subtitle: "Explore AI models, machine learning pipelines, autonomous agents, and intelligent applications.",
    icon: <Brain className="h-5 w-5" />,
    accent: "purple",
    domains: [
      "Artificial Intelligence",
      "Machine Learning",
      "Autonomous Agent Systems",
      "Intelligent Applications",
      "Workflow Automation"
    ],
    capabilities: [
      "Prompt engineering & context orchestration",
      "Model fine-tuning & evaluation benchmarks",
      "Agentic reasoning & task automation",
      "Full-stack AI application architecture",
      "Model latency & cost optimization"
    ],
    problems: [
      "Automating unstructured knowledge retrieval across heterogeneous document silos",
      "Building resilient agentic workflows with human-in-the-loop validation",
      "Optimizing context window consumption and token economics for real-time services"
    ],
    projects: [
      "Context-aware enterprise knowledge assistant with audit logs",
      "Autonomous workflow orchestrator for multi-stage triage",
      "Predictive API routing microservice with confidence scoring"
    ],
    tools: [
      "Python",
      "LangChain",
      "LlamaIndex",
      "PyTorch",
      "Hugging Face",
      "OpenAI API",
      "Vector Databases (Qdrant, Pinecone)",
      "Next.js"
    ],
    experiences: [
      "AI Problem Discovery Workshop",
      "Agentic Architecture Hackathon",
      "4-Week AI Systems Project",
      "Residency AI Squad"
    ],
    relatedPathways: ["Data & Intelligence", "Cloud & Cyber", "Creative Technology"]
  },
  {
    id: "pathway-data-intelligence",
    slug: "data-intelligence",
    categoryNum: "DOMAIN 02",
    title: "Data & Intelligence",
    subtitle: "Explore analytics ecosystems, business intelligence pipelines, decision systems, and applied AI modeling.",
    icon: <Database className="h-5 w-5" />,
    accent: "cyan",
    domains: [
      "Data Analytics & Modeling",
      "Data Science & Statistics",
      "Decision Systems",
      "Data Visualization & BI",
      "Applied AI Analytics"
    ],
    capabilities: [
      "Exploratory data analysis & statistical validation",
      "ETL pipeline construction & schema optimization",
      "Interactive dashboard & telemetry design",
      "Predictive modeling & forecasting algorithms",
      "Data storytelling & executive communication"
    ],
    problems: [
      "Identifying operational bottlenecks from noisy, fragmented log telemetry",
      "Designing trustworthy forecasting models under fluctuating market patterns",
      "Building real-time streaming dashboards that maintain sub-second response times"
    ],
    projects: [
      "Institutional readiness telemetry dashboard with continuous rubric metrics",
      "Predictive student engagement forecasting model with anomaly detection",
      "Automated financial forecasting pipeline with interactive scenario simulator"
    ],
    tools: [
      "Python",
      "Pandas / Polars",
      "SQL",
      "Apache Superset",
      "PowerBI / Tableau",
      "DuckDB",
      "dbt",
      "Scikit-learn"
    ],
    experiences: [
      "Data Exploration Challenge",
      "Institutional Telemetry Hackathon",
      "Analytics Pipeline Project",
      "Industry Review Sessions"
    ],
    relatedPathways: ["AI & Intelligent Systems", "Smart Engineering", "Creative Technology"]
  },
  {
    id: "pathway-creative-ai",
    slug: "creative-technology",
    categoryNum: "DOMAIN 03",
    title: "Creative Technology",
    subtitle: "Explore UI/UX systems, product design, creative AI workflows, interactive media, and digital experience engineering.",
    icon: <Palette className="h-5 w-5" />,
    accent: "blue",
    domains: [
      "UX/UI System Design",
      "Human-Centered Design Research",
      "Creative AI & Generative Media",
      "Digital Product Architecture",
      "Interactive Experiences & Motion"
    ],
    capabilities: [
      "User journey mapping & usability testing",
      "Design token architecture & component systems",
      "AI-assisted generative prototyping",
      "Micro-interaction & motion design",
      "Accessibility (a11y) validation & design audits"
    ],
    problems: [
      "Translating complex AI probabilistic outputs into intuitive, trust-building user interfaces",
      "Unifying fragmented user journeys across multi-platform enterprise products",
      "Designing accessible, high-performance web experiences with zero visual clutter"
    ],
    projects: [
      "Design system & component library for multi-tenant institutional console",
      "Contextual AI co-pilot interface with adaptive confidence visualizers",
      "Interactive data storytelling experience with motion-assisted transitions"
    ],
    tools: [
      "Figma",
      "Tailwind CSS",
      "Framer Motion / Motion",
      "Midjourney / Stable Diffusion",
      "Storybook",
      "React / Next.js"
    ],
    experiences: [
      "UX Sprint Challenge",
      "Product Design Hackathon",
      "Design System Project Track",
      "Showcase Demonstration"
    ],
    relatedPathways: ["AI & Intelligent Systems", "Data & Intelligence"]
  },
  {
    id: "pathway-cloud-cyber",
    slug: "cloud-cyber",
    categoryNum: "DOMAIN 04",
    title: "Cloud & Cyber",
    subtitle: "Explore scalable infrastructure, DevOps automation, cybersecurity principles, and resilient cloud operations.",
    icon: <Shield className="h-5 w-5" />,
    accent: "indigo",
    domains: [
      "Cloud Infrastructure Architecture",
      "DevOps & CI/CD Automation",
      "Cybersecurity & Threat Modeling",
      "Zero-Trust Infrastructure",
      "Intelligent Operations & SRE"
    ],
    capabilities: [
      "Container orchestration & Kubernetes deployments",
      "Automated CI/CD pipeline configuration",
      "Vulnerability assessment & secure architecture design",
      "Infrastructure-as-Code (Terraform / CloudFormation)",
      "Observability, log aggregation & incident response"
    ],
    problems: [
      "Securing multi-tenant microservice architectures against unauthorized privilege escalation",
      "Automating zero-downtime rolling deployments across distributed cloud regions",
      "Designing fault-tolerant failover systems for mission-critical telemetry endpoints"
    ],
    projects: [
      "Automated GitOps deployment pipeline with ephemeral staging environments",
      "Zero-trust authentication gateway with biometric WebAuthn verification",
      "Distributed log aggregation and real-time security alerting dashboard"
    ],
    tools: [
      "Docker",
      "Kubernetes",
      "AWS / GCP",
      "Terraform",
      "GitHub Actions",
      "Prometheus & Grafana",
      "Nginx",
      "Linux / Bash"
    ],
    experiences: [
      "Cloud Architecture Workshop",
      "Cyber Defense Challenge",
      "Infrastructure Automation Project",
      "Production Residency Squad"
    ],
    relatedPathways: ["AI & Intelligent Systems", "Smart Engineering"]
  },
  {
    id: "pathway-smart-engineering",
    slug: "smart-engineering",
    categoryNum: "DOMAIN 05",
    title: "Smart Engineering",
    subtitle: "Explore IoT networks, embedded robotics, edge intelligence, automation hardware, and industrial technology.",
    icon: <Cpu className="h-5 w-5" />,
    accent: "emerald",
    domains: [
      "Internet of Things (IoT) Networks",
      "Embedded Systems & Firmware",
      "Robotics & Sensor Actuation",
      "Industrial Automation & Edge AI",
      "Smart Infrastructure & Telemetry"
    ],
    capabilities: [
      "Microcontroller programming & sensor interfacing",
      "Low-power wireless communication (MQTT, LoRaWAN, BLE)",
      "Edge inference model deployment (TinyML)",
      "Hardware-in-the-loop testing & diagnostics",
      "Real-time sensor telemetry cloud ingestion"
    ],
    problems: [
      "Transmitting real-time telemetry over bandwidth-constrained, high-latency industrial networks",
      "Optimizing battery life on distributed environmental sensor nodes",
      "Deploying quantized computer vision models onto edge microcontrollers"
    ],
    projects: [
      "Distributed air quality and acoustic telemetry mesh network with solar backup",
      "Edge-assisted computer vision node for automated industrial quality inspection",
      "Smart campus energy monitoring gateway with automated load-shedding control"
    ],
    tools: [
      "C / C++",
      "MicroPython",
      "ESP32 / Raspberry Pi",
      "MQTT Brokers",
      "TinyML / TensorFlow Lite",
      "FreeRTOS",
      "KiCad",
      "Node-RED"
    ],
    experiences: [
      "IoT Prototyping Workshop",
      "Smart Hardware Hackathon",
      "Embedded Systems Project Track",
      "Showcase Demonstration"
    ],
    relatedPathways: ["Cloud & Cyber", "Data & Intelligence"]
  }
];

const crossDomainExamples = [
  {
    title: "AI + Design",
    desc: "Intelligent systems with human-centered interfaces, adaptive layouts, and transparent confidence indicators.",
    accent: "purple" as const
  },
  {
    title: "Data + Product",
    desc: "Decision intelligence systems, continuous user telemetry, and empirical feature optimization loops.",
    accent: "cyan" as const
  },
  {
    title: "Robotics + AI",
    desc: "Edge-based computer vision, autonomous navigation, sensor fusion, and physical hardware actuation.",
    accent: "emerald" as const
  },
  {
    title: "Cloud + Cyber",
    desc: "Resilient deployment pipelines, zero-trust infrastructure, and automated vulnerability monitoring.",
    accent: "indigo" as const
  },
  {
    title: "Engineering + Business",
    desc: "Applied IoT architectures solving concrete operational economics, energy efficiency, and logistics costs.",
    accent: "blue" as const
  }
];

const howItWorksSteps = [
  {
    num: "01",
    title: "Explore",
    desc: "Discover technical domains, observe problems, and explore what sparks your curiosity."
  },
  {
    num: "02",
    title: "Experiment",
    desc: "Engage in short workshops, targeted challenges, or rapid prototyping hackathons."
  },
  {
    num: "03",
    title: "Build",
    desc: "Collaborate on multi-week projects that turn concepts into tangible proof-of-work."
  },
  {
    num: "04",
    title: "Go Deeper",
    desc: "Transition into project residencies, receive industry critique, or lead new project tracks."
  }
];

export default function PathwaysPage() {
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
              Sophrion Exploration Domains
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Explore Domains. Build Your Own Path.
              </span>
            </h1>

            <p className="mt-5 text-xl font-semibold text-foreground sm:text-2xl">
              Pathways are not fixed career tracks.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/65 sm:text-lg max-w-2xl">
              Sophrion pathways are exploration environments where learners can discover domains, develop relevant capabilities, work on projects and move toward new experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#domains">Explore All Domains</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.experiences} primary={false}>
                View Experiences
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. INTRODUCTION SECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Flexible Trajectory"
            title="There Is No Single Route Through Sophrion."
            subtitle="Learners may begin with an interest, discover a problem, develop a capability, work on a project and then move into a completely different domain. Pathways provide structure without forcing every learner into the same destination."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 max-w-4xl mx-auto">
            {["Explore", "Combine", "Build", "Revisit", "Go Deeper"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-5 py-3 text-sm font-bold text-foreground/85 shadow-sm backdrop-blur-md">
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold text-sm hidden sm:inline">→</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-foreground/50 uppercase tracking-widest font-semibold">
            Non-linear exploration across engineering, intelligence and design.
          </p>
        </div>
      </section>

      {/* ─── 3. DOMAIN OVERVIEW & QUICK ANCHORS ─── */}
      <section id="domains" className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The 5 Exploration Domains"
            title="Discover Areas of Curiosity"
            subtitle="Explore interconnected domains designed around modern engineering and intelligence ecosystems."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {pathwayDomainsData.map((d) => (
              <a
                key={d.id}
                href={`#${d.id}`}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md transition-all duration-300 hover:border-[hsl(var(--brand-500))/0.3] hover:shadow-[0_0_25px_-8px_hsl(var(--brand-500)/0.25)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black tracking-widest text-[hsl(var(--brand-400))] uppercase">
                      {d.categoryNum}
                    </span>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-foreground/70 group-hover:text-[hsl(var(--cyan-400))] transition-colors">
                      {d.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{d.title}</h3>
                  <p className="text-xs text-foreground/60 line-clamp-2">{d.subtitle}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[hsl(var(--brand-300))]">
                  <span>Explore</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. RESTRUCTURED DETAILED DOMAIN SECTIONS ─── */}
      <div className="space-y-0">
        {pathwayDomainsData.map((domain) => (
          <section
            key={domain.id}
            id={domain.id}
            className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-bold tracking-[0.15em] text-[hsl(var(--brand-400))] uppercase mb-3">
                    {domain.categoryNum}
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
                    {domain.title}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-foreground/65 max-w-3xl">
                    {domain.subtitle}
                  </p>
                </div>
              </div>

              {/* 3-Column Structured Information Grid */}
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Column 1: Explore & Capabilities */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-300))] mb-4 flex items-center gap-2">
                      <Compass className="h-4 w-4" />
                      What You Can Explore
                    </h3>
                    <ul className="space-y-2 text-xs text-foreground/75 font-medium">
                      {domain.domains.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--brand-400))]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md flex-1">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--cyan-300))] mb-4 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Capabilities You May Develop
                    </h3>
                    <ul className="space-y-2 text-xs text-foreground/75 font-medium">
                      {domain.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[hsl(var(--cyan-400))]" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 2: Problems & Sample Projects */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
                    <h3 className="text-xs font-black uppercase tracking-widest text-blue-300 mb-4 flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Problems You May Encounter
                    </h3>
                    <ul className="space-y-2.5 text-xs text-foreground/75 leading-relaxed">
                      {domain.problems.map((prob) => (
                        <li key={prob} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                          <span>{prob}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md flex-1">
                    <h3 className="text-xs font-black uppercase tracking-widest text-emerald-300 mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" />
                      Example Projects
                    </h3>
                    <ul className="space-y-2.5 text-xs text-foreground/75 font-medium">
                      {domain.projects.map((proj) => (
                        <li key={proj} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-emerald-400" />
                          <span>{proj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Column 3: Tools, Experiences & Connections */}
                <div className="flex flex-col gap-6">
                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md">
                    <h3 className="text-xs font-black uppercase tracking-widest text-foreground/60 mb-4">
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md flex-1">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-300))] mb-4 flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Possible Experiences
                    </h3>
                    <div className="space-y-2 mb-6">
                      {domain.experiences.map((exp) => (
                        <div key={exp} className="flex items-center gap-2 text-xs text-foreground/70 font-medium">
                          <span className="h-1 w-1 rounded-full bg-white/30" />
                          <span>{exp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/[0.06]">
                      <span className="text-[10px] font-bold text-foreground/45 uppercase tracking-widest block mb-2">
                        Related Domains:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs text-foreground/60">
                        {domain.relatedPathways.map((rel) => (
                          <span key={rel} className="rounded border border-white/10 px-2 py-0.5 text-[11px]">
                            {rel}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ─── 5. DOMAIN → EXPERIENCE CONNECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Application"
            title="Domains Become Meaningful Through Experience."
            subtitle="A domain is not simply something to study. It becomes meaningful when learners use it to understand and solve problems."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2.5 max-w-5xl mx-auto">
            {[
              "DOMAIN",
              "LEARN",
              "EXPLORE A PROBLEM",
              "BUILD A PROJECT",
              "GET FEEDBACK",
              "ITERATE",
              "SHOWCASE"
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

      {/* ─── 6. CROSS-DOMAIN EXPLORATION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Multidisciplinary"
            title="Real Problems Rarely Fit Into One Domain."
            subtitle="Sophrion encourages learners to combine capabilities across domains when a problem requires it."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {crossDomainExamples.map((ex) => (
              <div
                key={ex.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <div className="flex items-center gap-2 mb-2">
                  <GitMerge className="h-4 w-4 text-[hsl(var(--cyan-400))]" />
                  <h3 className="text-base font-bold text-foreground">{ex.title}</h3>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed">{ex.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-foreground/50 italic max-w-xl mx-auto">
            Cross-domain combinations are illustrative exploration models designed to solve multi-dimensional problems.
          </p>
        </div>
      </section>

      {/* ─── 7. FOLLOW PROBLEMS, NOT JUST SUBJECTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Problem-Led Progression"
              title="Follow Problems, Not Just Subjects."
              subtitle="A learner may enter Sophrion through a domain, but projects can take them somewhere unexpected."
            />

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/85 bg-white/[0.03] rounded-2xl p-5 border border-white/[0.07]">
              <span>Interested in AI</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Discovers Healthcare Problem</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Learns Data Modeling</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Works With UX Design</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Consults Domain Expert</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Builds Project</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-[hsl(var(--brand-300))] font-bold">Receives Industry Feedback</span>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-foreground/65 leading-relaxed">
              This journey reinforces the core philosophy: pathways are adaptable environments, not rigid classroom silos.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 8. RESIDENCY CONNECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-[hsl(var(--brand-500))/0.25] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 text-center backdrop-blur-md shadow-[0_0_50px_-15px_hsl(var(--brand-500)/0.3)]">
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))]" />
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Go Deeper Through Execution.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-foreground/75 max-w-2xl mx-auto leading-relaxed">
              Learners who want sustained project engagement can move from exploration into deeper execution environments such as Sophrion Residency.
            </p>
            <div className="mt-8 flex justify-center">
              <MarketingCtaLink href={MARKETING.residency}>Explore Residency</MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 9. INDUSTRY CONNECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Context"
            title="Domains Meet the Real World"
            subtitle="Industry interactions expose learners to how different domains are applied in professional environments."
            align="center"
          />

          <div className="mt-12 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto text-sm sm:text-base font-bold text-foreground/90">
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">Domain Knowledge</span>
            <span className="text-[hsl(var(--cyan-400))]">+</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">Industry Context</span>
            <span className="text-[hsl(var(--cyan-400))]">+</span>
            <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">Project Experience</span>
            <span className="text-[hsl(var(--brand-400))]">=</span>
            <span className="rounded-xl border border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] px-4 py-2.5 text-[hsl(var(--brand-200))]">
              Applied Capability
            </span>
          </div>

          <p className="mt-8 text-center text-xs text-foreground/50 italic max-w-xl mx-auto">
            Industry exposure is designed to develop professional context and execution standards without speculative placement claims.
          </p>
        </div>
      </section>

      {/* ─── 10. HOW PATHWAYS WORK (4 STEPS) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Methodology"
            title="How Pathways Work"
            subtitle="You do not need to know your final direction before you begin."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorksSteps.map((st) => (
              <div
                key={st.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <span className="text-2xl font-black text-foreground/[0.1] block mb-2">{st.num}</span>
                <h3 className="text-base font-bold text-[hsl(var(--brand-300))] mb-2">{st.title}</h3>
                <p className="text-xs text-foreground/65 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Explore Where Your Curiosity Takes You.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              From Exploration to Demonstrated Capability.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Discover specialized exploration domains, join hands-on experiences, or build sustained project proof-of-work in our residency squads.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.experiences}>Explore Experiences</MarketingCtaLink>
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

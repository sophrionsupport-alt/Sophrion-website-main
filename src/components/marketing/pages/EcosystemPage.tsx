"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import TwoColumnCompare from "@/components/marketing/TwoColumnCompare";
import EcosystemDiagram from "@/components/marketing/EcosystemDiagram";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

function EcosystemLayerCard({ 
  number, 
  title, 
  subtitle, 
  items, 
  flow, 
  sources, 
  footerText 
}: { 
  number: string, 
  title: string, 
  subtitle?: string, 
  items?: string[], 
  flow?: string[], 
  sources?: string[],
  footerText?: string 
}) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md transition-all duration-300 hover:border-[hsl(var(--brand-500))/0.3] hover:shadow-[0_0_25px_-8px_hsl(var(--brand-500)/0.25)]">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-black tracking-widest text-[hsl(var(--brand-400))]">{number}</span>
        <h3 className="text-base font-bold text-foreground">{title}</h3>
      </div>
      {subtitle && <p className="mb-4 text-xs font-medium text-foreground/70">{subtitle}</p>}
      
      {flow && (
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-medium text-foreground/80">
          {flow.map((step, idx) => (
            <React.Fragment key={step}>
              <span className="rounded bg-white/5 border border-white/5 px-2 py-1">{step}</span>
              {idx < flow.length - 1 && <span className="text-foreground/30">→</span>}
            </React.Fragment>
          ))}
        </div>
      )}

      {items && (
        <ul className="space-y-2 text-sm text-foreground/65 flex-1">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-foreground/30" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {sources && (
        <div className="mt-4 border-t border-white/[0.06] pt-4">
          <p className="mb-2 text-[10px] font-bold text-foreground/40 uppercase tracking-widest">Sources</p>
          <div className="flex flex-wrap gap-1.5 text-xs text-foreground/70">
            {sources.map(src => (
              <span key={src} className="rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-0.5 text-[11px]">{src}</span>
            ))}
          </div>
        </div>
      )}

      {footerText && (
        <p className="mt-5 border-t border-white/[0.06] pt-4 text-xs italic text-foreground/50 leading-relaxed">
          {footerText}
        </p>
      )}
    </div>
  );
}

function ExperienceFlow({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2.5 text-sm font-semibold text-foreground/80 bg-white/[0.025] rounded-xl px-5 py-3.5 border border-white/[0.07] backdrop-blur-md">
      {flow.map((step, i) => (
        <React.Fragment key={step}>
          <span>{step}</span>
          {i < flow.length - 1 && <span className="text-[hsl(var(--cyan-400))]">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function EcosystemPage() {
  const ecosystemNodes = [
    { name: "EXPERIENCES", sub: "Workshops · Challenges · Hackathons · Projects · Residency" },
    { name: "PEOPLE", sub: "Mentors · Experts · Faculty · Industry · Peers" },
    { name: "PROBLEMS", sub: "Real-world · Institutional · Industry · Social · Research" },
    { name: "KNOWLEDGE", sub: "Pathways · Resources · Tools · AI · Community knowledge" },
    { name: "PROJECTS", sub: "Build · Prototype · Research · Experiment · Solve" },
    { name: "FEEDBACK", sub: "Mentors · Experts · Industry · Faculty · Reflection" },
    { name: "OPPORTUNITIES", sub: "Projects · Internships · Research · Entrepreneurship · Further learning" }
  ];

  return (
    <MarketingShell>
      {/* 1 Hero */}
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
              Connected Environment
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                The Sophrion Ecosystem
              </span>
            </h1>
            <p className="mt-5 text-lg font-medium text-foreground sm:text-xl">
              A connected learning environment where people, problems, knowledge, experiences and opportunities come together.
            </p>
            <p className="mt-4 text-base leading-relaxed text-foreground/65 max-w-2xl sm:text-lg">
              Sophrion connects learners with mentors, experts, faculty, industry, communities, projects and feedback through an evolving network of experiences.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href={MARKETING.institutions}>For Institutions</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.contact} primary={false}>Get in Touch</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2 Core Ecosystem Visual */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="Interconnected Network" title="Learner at the Center" align="center" />
          <div className="mt-8">
            <EcosystemDiagram />
          </div>
        </div>
      </section>

      {/* 3 Ecosystem Principle */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Network vs Pipeline"
            title="Learning Is a Network, Not a Pipeline."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 items-center">
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8 text-center text-foreground/45">
              <p className="text-xs font-black uppercase tracking-widest mb-4">Traditional Pipeline</p>
              <p className="font-medium text-base line-through decoration-white/30">Learn → Qualify → Move On</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.06] p-8 text-center shadow-[0_0_30px_hsl(var(--brand-500)/0.1)]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))]" />
              <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-400))] mb-4">Sophrion Ecosystem</p>
              <p className="font-medium text-base flex flex-wrap justify-center gap-x-3 gap-y-2 text-foreground/90">
                <span>Experience</span> <span className="text-[hsl(var(--brand-400))]">↔</span>
                <span>Explore</span> <span className="text-[hsl(var(--brand-400))]">↔</span>
                <span>Connect</span> <span className="text-[hsl(var(--brand-400))]">↔</span>
                <span>Build</span> <span className="text-[hsl(var(--brand-400))]">↔</span>
                <span>Reflect</span> <span className="text-[hsl(var(--brand-400))]">↔</span>
                <span>Discover Again</span>
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-base text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            One experience can lead to another problem, another mentor, another project, another domain or another opportunity.
          </p>
        </div>
      </section>

      {/* 4 Ecosystem Layers */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader eyebrow="The Layers" title="Components of the Ecosystem" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <EcosystemLayerCard
              number="01"
              title="LEARNER"
              subtitle="The learner remains at the center of the ecosystem."
              items={["Interests", "Capabilities", "Aspirations", "Experiences", "Development needs"]}
            />
            <EcosystemLayerCard
              number="02"
              title="EXPERIENCES"
              subtitle="Experiences create the situations in which learning occurs."
              items={["Workshops", "Challenges", "Hackathons", "Projects", "Residency", "Industry interactions"]}
            />
            <EcosystemLayerCard
              number="03"
              title="PEOPLE"
              subtitle="Learning expands through people."
              items={["Mentors", "Domain Experts", "Industry Professionals", "Faculty", "Peers", "Community"]}
            />
            <EcosystemLayerCard
              number="04"
              title="KNOWLEDGE"
              subtitle="Learn What You Need, When You Need It."
              items={["Pathways", "Resources", "Tools", "Documentation", "AI systems", "Community knowledge"]}
            />
            <EcosystemLayerCard
              number="05"
              title="PROBLEMS & PROJECTS"
              subtitle="Problems Become Learning Environments."
              flow={["Problem", "Discovery", "Validation", "Build", "Feedback", "Iteration", "Outcome"]}
              sources={["Students", "Faculty", "Institution", "Industry", "Clients", "Mentors", "Experts"]}
            />
            <EcosystemLayerCard
              number="06"
              title="FEEDBACK & REFLECTION"
              subtitle="Feedback Changes What Happens Next."
              items={["Mentor feedback", "Expert review", "Industry feedback", "Faculty observations", "Peer feedback", "Self-reflection", "Assessment"]}
            />
            <EcosystemLayerCard
              number="07"
              title="OPPORTUNITIES"
              items={["Advanced projects", "Industry exposure", "Internships", "Research", "Entrepreneurship", "Residency", "Community leadership", "Further learning"]}
              footerText="Opportunities emerge from demonstrated participation, capability and ecosystem availability."
            />
          </div>
        </div>
      </section>

      {/* 5 People Network */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Layered Guidance"
            title="No One Person Can Know Everything."
            align="center"
          />
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold sm:text-base">
              {["Student", "Junior Mentor", "Cohort Leader", "Domain / Industry Support"].map((role, i, arr) => (
                <React.Fragment key={role}>
                  <span className={cn(
                    "rounded-full border px-5 py-3",
                    i === arr.length - 1 
                      ? "bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] border-transparent text-white" 
                      : "bg-white/[0.03] border-white/[0.08] text-foreground/80"
                  )}>
                    {role}
                  </span>
                  {i < arr.length - 1 && <span className="text-foreground/30 font-bold">→</span>}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-6 flex gap-3 text-xs font-bold uppercase tracking-widest text-[hsl(var(--cyan-400))]">
              <span className="rounded border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.05] px-4 py-2">+ Faculty Support Layer</span>
              <span className="rounded border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.05] px-4 py-2">+ Community Support Layer</span>
            </div>
            <p className="mt-8 text-center text-base text-foreground/65 max-w-xl">
              Students should be able to reach the right level of support without depending on one person for every question.
            </p>
          </div>
        </div>
      </section>

      {/* 6 Connected Experiences */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Flows"
            title="One Experience Can Open Another."
            align="center"
          />
          <div className="mt-12 flex flex-col items-center gap-3">
             <ExperienceFlow flow={["Workshop", "Problem Discovery", "Project"]} />
             <ExperienceFlow flow={["Hackathon", "Team", "Prototype", "Industry Review"]} />
             <ExperienceFlow flow={["Project", "Expert Network", "Residency"]} />
             <ExperienceFlow flow={["Residency", "Industry Opportunity", "Further Project"]} />
          </div>
          <p className="mt-8 text-center text-sm text-foreground/55 max-w-xl mx-auto italic">
            Sophrion does not require every learner to follow the same route.
          </p>
        </div>
      </section>

      {/* 7 Institutional Ecosystem */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Partnerships"
            title="The Institution Remains at the Center of the Academic Environment."
            align="center"
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="INSTITUTION"
              leftItems={[
                "Students",
                "Faculty",
                "Curriculum",
                "Infrastructure",
                "Academic Governance"
              ]}
              rightTitle="SOPHRION"
              rightItems={[
                "Cohort Leadership",
                "Mentors",
                "Experts",
                "Industry",
                "Projects",
                "Assessment",
                "Opportunities"
              ]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-[hsl(var(--cyan-500))/0.15] bg-white/[0.025] p-6 text-center"
          >
            <p className="text-xs font-bold tracking-widest text-foreground/40 uppercase mb-2">Together</p>
            <h3
              className="text-xl font-bold sm:text-2xl"
              style={{
                background: "linear-gradient(to right, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Industry-Integrated Active Learning Ecosystem
            </h3>
          </motion.div>
          <div className="mt-8 flex justify-center">
            <MarketingCtaLink href={MARKETING.institutions}>For Institutions</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* 8 Final Philosophy */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              Different Students. Different Paths. One Connected Ecosystem.
            </h2>
            <p className="text-base leading-relaxed text-foreground/65 sm:text-lg mb-8 max-w-2xl mx-auto">
              A learner should not be restricted by one classroom, one department, one discipline, one mentor or one curriculum. Sophrion connects these environments so learning can continue through new experiences, people, problems and opportunities.
            </p>
            <p
              className="mt-4 text-2xl font-bold sm:text-3xl"
              style={{
                background: "linear-gradient(to right, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Students don't just learn about the future. They begin learning how to operate in it.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.institutions}>For Institutions</MarketingCtaLink>
              <MarketingCtaLink href="/experiences" primary={false}>Explore Experiences</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.pathways} primary={false}>Explore Pathways</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingShell>
  );
}

"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Sparkles, CheckCircle2 } from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import {
  INDUSTRY_BENEFITS,
  INDUSTRY_MODES,
  ENGAGEMENT_LEVELS,
  ORCHESTRATION_SOPHRION,
  ORCHESTRATION_INDUSTRY
} from "@/lib/marketing/industryData";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export default function IndustryPage() {
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
              Industry Collaboration
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Bring the Real World Into Learning.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Sophrion connects industry with learners through problems, expertise, project reviews, professional perspectives and opportunities for meaningful collaboration.
            </p>

            <p className="mt-4 text-sm font-semibold text-[hsl(var(--cyan-300))]">
              Industry is a context for learning, not just a destination for employment.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`}>
                Explore Industry Collaboration
              </MarketingCtaLink>
              <MarketingCtaLink href="#participation-levels" primary={false}>
                View Engagement Levels
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. WHY INDUSTRY PARTICIPATES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Mutual Value"
            title="Why Engage With Sophrion?"
            subtitle="Connect with emerging engineering and intelligence talent through structured problem-solving touchpoints."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRY_BENEFITS.map((ben) => (
              <div
                key={ben.title}
                className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md transition-all hover:border-[hsl(var(--brand-500))/0.3]"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                    {ben.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{ben.title}</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">{ben.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. INDUSTRY IN THE ECOSYSTEM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Integration"
            title="Industry Becomes Part of the Learning Environment."
            subtitle="Industry participation helps students understand not only what to learn, but how knowledge is applied in professional environments."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-xs sm:text-sm font-bold text-foreground/85">
            {[
              "INDUSTRY",
              "PROBLEMS",
              "STUDENTS",
              "PROJECTS",
              "FEEDBACK",
              "CAPABILITY"
            ].map((node, i, arr) => (
              <React.Fragment key={node}>
                <span className={cn(
                  "rounded-xl border px-4 py-2.5 shadow-sm backdrop-blur-md",
                  node === "INDUSTRY" || node === "CAPABILITY"
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03]"
                )}>
                  {node}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold hidden sm:inline">↔</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. WAYS INDUSTRY CAN PARTICIPATE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Touchpoints"
            title="Ways Industry Can Participate"
            subtitle="Diverse contribution avenues tailored to team availability and operational capacity."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRY_MODES.map((mode) => (
              <div
                key={mode.num}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                  {mode.num}
                </span>
                <h4 className="text-sm font-bold text-foreground mb-1.5">{mode.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. PROBLEM → PROJECT LIFECYCLE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Lifecycle"
              title="Turn Real Problems Into Learning Experiences"
              subtitle="How authentic industry challenges transform into structured active learning projects."
            />

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-foreground/85 bg-white/[0.03] rounded-2xl p-5 border border-white/[0.07]">
              <span>Industry Problem</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Problem Curation</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Student Discovery</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Team Formation</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-[hsl(var(--brand-300))] font-bold">Project Sprint</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-blue-300 font-bold">Industry Review</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Iteration</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-emerald-300 font-bold">Showcase</span>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-foreground/70 leading-relaxed max-w-3xl">
              Not every submitted problem becomes a project. Sophrion carefully evaluates educational relevance, feasibility, student safety, data confidentiality, and mentor support before incorporating it into an active cohort.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 6-7. REVIEW MODEL ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <MarketingSectionHeader
                eyebrow="Feedback Pedagogy"
                title="Challenge the Work. Strengthen the Learner."
                subtitle="Industry feedback should challenge technical assumptions and improve execution standards rather than simply validate surface-level ideas."
              />

              <div className="mt-6 space-y-2 text-xs text-foreground/75 font-medium">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))]" />
                  <span>Expose students to how practicing leads critique architectures</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))]" />
                  <span>Highlight edge-case vulnerabilities, security, and scalability</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--cyan-400))]" />
                  <span>Evaluate communication clarity and architectural trade-off defense</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-widest text-[hsl(var(--brand-300))] mb-4">
                  The Review Loop
                </p>
                <div className="space-y-2 text-xs font-semibold text-foreground/85">
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    1. Student Team Presents Scoped Problem
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    2. Explains Architectural Approach & Code Hygiene
                  </div>
                  <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02]">
                    3. Demonstrates Live Deployable Work
                  </div>
                  <div className="p-3 rounded-xl border border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.06] text-[hsl(var(--cyan-300))]">
                    4. Receives Practitioner Critique & Edge-Case Feedback
                  </div>
                  <div className="p-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] text-emerald-300">
                    5. Reflects, Refactors, and Iterates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. RESIDENCY CONNECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.25] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 backdrop-blur-md text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Deeper Engagement Through Sustained Projects
            </h3>
            <p className="text-xs sm:text-sm text-foreground/75 max-w-2xl mx-auto leading-relaxed mb-6">
              Suitable industry problem statements can extend into multi-week execution squads inside Sophrion Residency, creating opportunities for deep sprint review cycles and observed proof-of-work.
            </p>
            <p className="text-xs text-foreground/50 italic max-w-xl mx-auto mb-8">
              Note: Client and industry participation is dependent on suitability, availability, confidentiality, institutional approval and agreed scope.
            </p>
            <MarketingCtaLink href={MARKETING.residency} primary={false}>
              Explore Residency Squads
            </MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── 9. ORCHESTRATION MATRIX ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Operational Division"
            title="Sophrion Orchestrates the Ecosystem"
            subtitle="Industry partners never have to manage students individually. Sophrion handles the educational scaffolding so professionals can focus purely on sharing expertise."
            align="center"
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {/* Sophrion Handles */}
            <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.05] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-300))] block mb-3">
                Sophrion Scaffolding
              </span>
              <h4 className="text-xl font-bold text-foreground mb-6">What Sophrion Handles</h4>
              <ul className="space-y-2.5 text-xs text-foreground/80 font-medium">
                {ORCHESTRATION_SOPHRION.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--brand-400))] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industry Contributes */}
            <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.05] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-300))] block mb-3">
                High-Impact Contribution
              </span>
              <h4 className="text-xl font-bold text-foreground mb-6">What Industry Contributes</h4>
              <ul className="space-y-3 text-xs text-foreground/80 font-medium">
                {ORCHESTRATION_INDUSTRY.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[hsl(var(--cyan-400))] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/[0.08] text-xs text-foreground/60 leading-relaxed">
                A lightweight, highly organized engagement designed around your team&rsquo;s schedule.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11-12. CLIENT PROJECTS & TRANSPARENT NON-MANDATES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Client Engagements */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 block mb-2">
                Applied Scopes
              </span>
              <h4 className="text-xl font-bold text-foreground mb-3">
                When a Problem Becomes a Client Engagement
              </h4>
              <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                When an organization commissions dedicated project development, Sophrion establishes formal, separately contracted terms aligned with our Master Statement of Work (SOW):
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-foreground/75 font-medium mb-4">
                <span>• Defined Scope & Milestones</span>
                <span>• Strict Data Confidentiality</span>
                <span>• Intellectual Property Terms</span>
                <span>• Clear Acceptance Criteria</span>
              </div>
            </div>

            {/* What Industry Does Not Need to Promise */}
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-300))] block mb-2">
                Low-Friction Entry
              </span>
              <h4 className="text-xl font-bold text-foreground mb-3">
                What Industry Does Not Need to Promise
              </h4>
              <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                Participating in the Sophrion ecosystem carries zero mandatory hiring quotas or commercial obligations. You can engage through a single 60-minute session:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-foreground/60 mb-4">
                <span>✕ No mandatory hiring quotas</span>
                <span>✕ No funding commitments</span>
                <span>✕ No long-term lock-in</span>
                <span>✕ No universal commercial adoption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14. PARTICIPATION LEVELS ─── */}
      <section id="participation-levels" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Engagement Tiers"
            title="Choose Your Level of Engagement"
            subtitle="Select the involvement model that matches your organization's goals and bandwidth."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {ENGAGEMENT_LEVELS.map((lvl) => (
              <div
                key={lvl.level}
                className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      "text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full",
                      lvl.level === "LIGHT" ? "bg-purple-500/20 text-purple-300 border border-purple-500/30" :
                      lvl.level === "ACTIVE" ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30" :
                      "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                    )}>
                      {lvl.level}
                    </span>
                    <span className="text-xs font-semibold text-foreground/50">{lvl.commitment}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{lvl.title}</h3>
                  <p className="text-xs text-foreground/60 mb-6">{lvl.subtitle}</p>

                  <ul className="space-y-2 mb-8 text-xs text-foreground/75 font-medium">
                    {lvl.activities.map((act) => (
                      <li key={act} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-white/40" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`}>
                  Engage at {lvl.level}
                </MarketingCtaLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 15. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Bring Your Expertise. Bring a Problem.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              Help Shape the Next Generation of Builders.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Sophrion handles the ecosystem around the interaction so industry professionals can focus on what they do best—sharing experience, challenging ideas and helping learners understand the real world.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`}>
                Start an Industry Conversation
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.ecosystem} primary={false}>
                Explore the Ecosystem
              </MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.projects} primary={false}>
                View Student Projects
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingShell>
  );
}

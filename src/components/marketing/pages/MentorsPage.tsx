"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Users,
  Compass,
  Target,
  Brain,
  Briefcase,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  HelpCircle,
  MessageSquare
} from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import { MENTOR_TIERS } from "@/lib/marketing/mentorsData";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export default function MentorsPage() {
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
              Human Expertise Network
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Learn With People Who Have Done It.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Sophrion connects learners with mentors, domain experts, industry professionals, faculty and community contributors who bring different forms of knowledge and experience into the learning ecosystem.
            </p>

            <p className="mt-4 text-sm font-semibold text-[hsl(var(--cyan-300))]">
              The right person, at the right stage, for the right problem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#architecture">View Expertise Architecture</MarketingCtaLink>
              <MarketingCtaLink href={`${MARKETING.contact}?topic=mentor`} primary={false}>
                Contribute as a Mentor
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. WHY THE NETWORK EXISTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Distributed Model"
              title="No One Person Can Know Everything."
              subtitle="A learner may need different kinds of support at different moments—basic guidance, technical depth, professional context, project feedback or help navigating a difficult problem. Sophrion distributes expertise across a network rather than assigning every need to one mentor."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs font-semibold text-foreground/80">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-[hsl(var(--brand-300))] block mb-1">01 Immediate Help</span>
                <span>Unblocking syntax, tools, and sprint routines.</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-[hsl(var(--cyan-300))] block mb-1">02 Conceptual Depth</span>
                <span>Algorithms, architecture blueprints, and trade-offs.</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-blue-300 block mb-1">03 Real-World Context</span>
                <span>Production hygiene, security standards, and client framing.</span>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <span className="text-emerald-300 block mb-1">04 Academic Rigor</span>
                <span>Curriculum alignment, research context, and accreditation.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. EXPERTISE ARCHITECTURE ─── */}
      <section id="architecture" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Layered Topology"
            title="Expertise Architecture"
            subtitle="How different tiers of expertise collaborate around the student and project team."
            align="center"
          />

          <div className="mt-14 max-w-4xl mx-auto flex flex-col items-center">
            {/* Top Node: Cohort Leader */}
            <div className="rounded-2xl border border-[hsl(var(--brand-500))/0.4] bg-[hsl(var(--brand-600))/0.15] px-8 py-4 text-center shadow-lg backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-300))] block">
                Governance & Standards
              </span>
              <span className="text-base font-bold text-foreground">Sophrion Cohort Leader</span>
            </div>

            <div className="h-6 w-px bg-white/20" />

            {/* Middle Tier: 3 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 block mb-1">
                  Immediate Guidance
                </span>
                <h4 className="text-sm font-bold text-foreground">Junior Mentor</h4>
                <p className="text-[11px] text-foreground/60 mt-1">Daily sprints & unblocking</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-300))] block mb-1">
                  Technical Depth
                </span>
                <h4 className="text-sm font-bold text-foreground">Domain Expert</h4>
                <p className="text-[11px] text-foreground/60 mt-1">Architecture & deep reviews</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-blue-300 block mb-1">
                  Real Context
                </span>
                <h4 className="text-sm font-bold text-foreground">Industry Professional</h4>
                <p className="text-[11px] text-foreground/60 mt-1">Standards & client perspective</p>
              </div>
            </div>

            <div className="h-6 w-px bg-white/20" />

            {/* Center Node: Student Squad */}
            <div className="rounded-2xl border border-[hsl(var(--cyan-500))/0.4] bg-[hsl(var(--cyan-500))/0.1] px-10 py-5 text-center shadow-lg backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-300))] block">
                Center of the Ecosystem
              </span>
              <span className="text-lg font-bold text-foreground">Student & Project Squad</span>
            </div>

            <div className="h-6 w-px bg-white/20" />

            {/* Bottom Tier: Faculty & Community */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 block mb-1">
                  Academic Continuity
                </span>
                <h4 className="text-sm font-bold text-foreground">Faculty Partners</h4>
                <p className="text-[11px] text-foreground/60 mt-1">Institutional observation & alignment</p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 text-center backdrop-blur-md">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block mb-1">
                  Distributed Learning
                </span>
                <h4 className="text-sm font-bold text-foreground">Community Contributors</h4>
                <p className="text-[11px] text-foreground/60 mt-1">Shared experience & peer exchange</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4-8. DETAILED EXPERTISE TIERS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Tiers of Support"
            title="How Each Role Operates"
            subtitle="Clear boundaries and responsibilities ensure students receive precise guidance without creating bottleneck dependencies."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {MENTOR_TIERS.map((tier) => (
              <div
                key={tier.id}
                className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md transition-all hover:border-[hsl(var(--brand-500))/0.3]"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                    {tier.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{tier.title}</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                    {tier.roleDescription}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest block">
                      Core Responsibilities:
                    </span>
                    {tier.responsibilities.map((resp) => (
                      <div key={resp} className="flex items-start gap-2 text-xs text-foreground/75 font-medium">
                        <span className="mt-1 h-1 w-1 rounded-full bg-[hsl(var(--cyan-400))] shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <p className="text-xs italic text-[hsl(var(--brand-300))] font-medium">
                    &ldquo;{tier.pedagogyQuote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. HOW A STUDENT GETS SUPPORT (PROGRESSION FLOW) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Progression Rhythms"
            title="Support Follows the Problem"
            subtitle="Sophrion's support escalation path develops problem-solving independence before engaging specialist time."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-xs font-bold text-foreground/85">
            {[
              "Student",
              "Try",
              "Think",
              "Search",
              "Discuss",
              "Ask Mentor",
              "Escalate to Expert",
              "Industry / Community Input",
              "Apply"
            ].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={cn(
                  "rounded-xl border px-3.5 py-2 shadow-sm backdrop-blur-md",
                  i === 0 || i === arr.length - 1
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03]"
                )}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold hidden sm:inline">↓</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 10. MENTORING IS NOT ANSWER DELIVERY (COMPARISON) ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Pedagogical Philosophy"
            title="Good Mentoring Builds Independence."
            subtitle="Sophrion mentors are not expected to solve every problem for the learner. The objective is to help students develop the ability to investigate, reason, ask better questions, find resources and make informed decisions."
            align="center"
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Traditional Mentoring */}
            <div className="rounded-3xl border border-rose-500/20 bg-rose-500/[0.03] p-7 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-rose-300 block mb-2">
                Traditional Dependent Model
              </span>
              <h4 className="text-base font-bold text-foreground mb-4">
                Student asks → Mentor gives direct answer
              </h4>
              <p className="text-xs text-foreground/65 leading-relaxed">
                Creates passive learning habits where students stall the moment a predefined answer isn&rsquo;t immediately available.
              </p>
            </div>

            {/* Sophrion Mentoring */}
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/[0.04] p-7 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 block mb-2">
                Sophrion Active Model
              </span>
              <h4 className="text-base font-bold text-foreground mb-4">
                Student asks → Mentor helps frame → Student investigates → Expert assists when needed → Student applies
              </h4>
              <p className="text-xs text-foreground/75 leading-relaxed">
                Builds durable engineering reasoning, self-reliance, and the ability to formulate clear technical inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. EXPERTISE INSIDE PROJECTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Dynamic Injection"
              title="Expertise Enters When the Project Needs It."
              subtitle="Expertise is integrated dynamically based on the project's evolution rather than rigid lecture schedules."
            />

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-foreground/85 bg-white/[0.03] rounded-2xl p-5 border border-white/[0.07]">
              <span>Problem Brief</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Mentor Sprint Support</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Knowledge Gap Identified</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-[hsl(var(--brand-300))] font-bold">Domain Expert Review</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Technical Decision</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-blue-300 font-bold">Industry Context</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Iterate Deliverable</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12-14. FOR CONTRIBUTORS & INDUSTRY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* For Potential Mentors */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-2">
                  For Mentors & Domain Experts
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4">Contribute to the Ecosystem</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                  Share your experience, challenge technical assumptions, guide projects, and help learners understand how knowledge is applied beyond the classroom.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-foreground/75 font-medium mb-8">
                  <span>• Junior Mentorship</span>
                  <span>• Expert Architecture Sessions</span>
                  <span>• Code & Project Reviews</span>
                  <span>• Office Hours & AMAs</span>
                  <span>• Community Sharing</span>
                  <span>• Problem Statement Submission</span>
                </div>
              </div>

              <MarketingCtaLink href={`${MARKETING.contact}?topic=mentor`}>
                Become a Mentor / Expert
              </MarketingCtaLink>
            </div>

            {/* For Industry Partners */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 backdrop-blur-md">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] block mb-2">
                  For Industry Professionals
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-4">Bring Real-World Perspective</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                  Engage with active student squads on engineering problems, provide operational feedback, and observe emerging talent through verified proof-of-work.
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-foreground/75 font-medium mb-8">
                  <span>• Industry Problem Context</span>
                  <span>• Production Hygiene Talks</span>
                  <span>• Milestone Design Reviews</span>
                  <span>• Requirement Discussions</span>
                  <span>• Showcase Panel Feedback</span>
                  <span>• Suitable Project Opportunities</span>
                </div>
              </div>

              <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`} primary={false}>
                Explore Industry Collaboration
              </MarketingCtaLink>
            </div>
          </div>

          {/* Authentic Network State Notice */}
          <div className="mt-12 text-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 max-w-xl mx-auto">
            <p className="text-xs text-foreground/50 font-medium">
              Sophrion&rsquo;s human expert network is actively expanding across technical domains, industries and academic institutions.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 15. FINAL POSITIONING & CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Expertise Should Move Through the Ecosystem.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              The Right Guidance When You Need It.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Sophrion connects learners with a distributed network of guidance—ensuring students develop self-reliance alongside expert insights.
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

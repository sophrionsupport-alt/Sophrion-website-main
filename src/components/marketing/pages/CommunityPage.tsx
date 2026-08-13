"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import {
  Users,
  Compass,
  Target,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Workflow,
  MessageSquare,
  Share2,
  GitMerge,
  HeartHandshake,
  BookOpen,
  HelpCircle,
  Lightbulb,
  Building2,
  GraduationCap,
  Briefcase
} from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import {
  COMMUNITY_MEMBERS,
  WHAT_PEOPLE_SHARE,
  PARTICIPATION_MODES,
  COMMUNITY_PRINCIPLES
} from "@/lib/marketing/communityData";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export default function CommunityPage() {
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
              Human Ecosystem Layer
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Learning Doesn't End in the Classroom.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Sophrion brings together learners, mentors, experts, faculty, industry professionals and contributors who share knowledge, experience, problems and opportunities.
            </p>

            <p className="mt-4 text-sm font-semibold text-[hsl(var(--cyan-300))]">
              The community is the human layer of the Sophrion ecosystem.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <MarketingCtaLink href="#members">Explore Community Members</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.experiences} primary={false}>
                View Experiences
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. WHY COMMUNITY EXISTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Human Velocity"
            title="Knowledge Moves Through People."
            subtitle="A learner's development is shaped not only by what they study, but by the people they meet, the questions they ask, the experiences they share and the perspectives they encounter."
            align="center"
          />

          <div className="mt-14 flex flex-wrap justify-center items-center gap-2 max-w-5xl mx-auto text-xs sm:text-sm font-bold text-foreground/85">
            {[
              "QUESTION",
              "DISCUSS",
              "SHARE",
              "EXPERIMENT",
              "LEARN",
              "CONTRIBUTE"
            ].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className={cn(
                  "rounded-xl border px-4 py-2.5 shadow-sm backdrop-blur-md",
                  i === 0 || i === arr.length - 1
                    ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))]"
                    : "border-white/[0.08] bg-white/[0.03]"
                )}>
                  {step}
                </span>
                {i < arr.length - 1 && (
                  <span className="text-[hsl(var(--cyan-400))] font-bold hidden sm:inline">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. WHO MAKES UP THE COMMUNITY ─── */}
      <section id="members" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Ecosystem Participants"
            title="Who Makes Up the Community"
            subtitle="Six interconnected groups collaborating to support active student development."
            align="center"
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_MEMBERS.map((m) => (
              <div
                key={m.title}
                className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md transition-all hover:border-[hsl(var(--brand-500))/0.3]"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-1">
                    {m.role}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-3">{m.title}</h3>
                  <p className="text-xs text-foreground/70 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. COMMUNITY AS A NETWORK ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Topology"
            title="One Community. Many Connections."
            subtitle="Every connection can lead to a question, a project, a collaboration, a new skill or a new opportunity."
            align="center"
          />

          <div className="mt-14 max-w-4xl mx-auto rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] p-8 sm:p-12 backdrop-blur-md text-center">
            {/* Center Node: Learner */}
            <div className="inline-block rounded-2xl border border-[hsl(var(--cyan-500))/0.5] bg-[hsl(var(--cyan-500))/0.15] px-8 py-4 text-center shadow-lg backdrop-blur-md mb-8">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-300))] block mb-1">
                Ecosystem Center
              </span>
              <span className="text-xl font-bold text-foreground">THE LEARNER</span>
            </div>

            {/* Connected Nodes */}
            <div className="flex flex-wrap justify-center items-center gap-3 text-xs sm:text-sm font-semibold text-foreground/80">
              {["Mentor", "Peer", "Domain Expert", "Faculty", "Industry Lead", "Project Squad", "Community"].map((node) => (
                <span
                  key={node}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-sm"
                >
                  {node}
                </span>
              ))}
            </div>

            <p className="mt-8 text-xs text-foreground/60 max-w-xl mx-auto leading-relaxed">
              Knowledge and support flow dynamically between all nodes—creating a responsive active learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. WHAT HAPPENS INSIDE THE COMMUNITY ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Exchanges"
            title="What People Share"
            subtitle="The human currency of the Sophrion ecosystem."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_PEOPLE_SHARE.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <h4 className="text-base font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. COMMUNITY CONNECTION TO PROJECTS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] p-8 sm:p-12 backdrop-blur-md">
            <MarketingSectionHeader
              eyebrow="Project Synergy"
              title="Communities Help Projects Move"
              subtitle="The community is not separate from the project ecosystem. It helps knowledge and experience move directly into active project execution."
            />

            <div className="mt-8 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-bold text-foreground/85 bg-white/[0.03] rounded-2xl p-5 border border-white/[0.07]">
              <span>Question</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Community Discussion</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Knowledge / Resource</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Mentor / Expert</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-[hsl(var(--brand-300))] font-bold">Project Execution</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span>Feedback</span>
              <span className="text-[hsl(var(--cyan-400))]">→</span>
              <span className="text-emerald-300 font-bold">Iteration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. COMMUNITY CONNECTION TO EXPERIENCES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Shared Touchpoints"
            title="Experiences Bring the Community Together"
            subtitle="Experiences create moments where different parts of the community naturally connect."
            align="center"
          />

          <div className="mt-12 space-y-3">
            {[
              { exp: "Workshop", flow: "Discussion → Mentor Check-in → Project Exploration" },
              { exp: "Hackathon", flow: "Squad Formation → Domain Expert Review → Live Demo Feedback" },
              { exp: "Project Track", flow: "Industry Practitioner Review → Community Knowledge Synthesis" },
              { exp: "Residency", flow: "Multi-Week Squad Collaboration → Showcase & Ecosystem Bridge" }
            ].map((item) => (
              <div
                key={item.exp}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-6 py-4 backdrop-blur-md"
              >
                <span className="text-xs font-black uppercase tracking-wider text-[hsl(var(--brand-300))]">
                  {item.exp}
                </span>
                <span className="text-xs font-semibold text-foreground/80">
                  {item.flow}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PARTICIPATION MODES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Engagement Options"
            title="There Is More Than One Way to Participate"
            subtitle="Participants contribute according to their current goals, skills, and availability without being forced into a single mold."
            align="center"
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PARTICIPATION_MODES.map((mode) => (
              <div
                key={mode.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] block mb-1">
                  {mode.verb}
                </span>
                <h4 className="text-lg font-bold text-foreground mb-2">{mode.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{mode.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9-11. AUDIENCE CARDS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* For Students */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
              <div>
                <GraduationCap className="h-6 w-6 text-[hsl(var(--brand-400))] mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">For Students</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                  Use the community to discover how peers solve technical roadblocks, ask questions, find squad collaborators, and receive constructive feedback.
                </p>

                <ul className="space-y-2 text-xs text-foreground/75 font-medium mb-8">
                  <li>• Ask questions without fear</li>
                  <li>• Find squad collaborators</li>
                  <li>• Share project proof-of-work</li>
                  <li>• Receive peer & mentor feedback</li>
                </ul>
              </div>

              <MarketingCtaLink href={MARKETING.experiences}>
                Explore Experiences
              </MarketingCtaLink>
            </div>

            {/* For Mentors & Experts */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
              <div>
                <Users className="h-6 w-6 text-[hsl(var(--cyan-400))] mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">For Mentors & Experts</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                  Contribute your experience where it can create meaningful learning. Help students develop self-reliance and engineering reasoning.
                </p>

                <ul className="space-y-2 text-xs text-foreground/75 font-medium mb-8">
                  <li>• Sprint check-ins & blocker unblocking</li>
                  <li>• Deep architecture critique sessions</li>
                  <li>• Problem framing & code audits</li>
                  <li>• Open community discussions</li>
                </ul>
              </div>

              <MarketingCtaLink href={`${MARKETING.contact}?topic=mentor`} primary={false}>
                Join Mentor Network
              </MarketingCtaLink>
            </div>

            {/* For Industry */}
            <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 backdrop-blur-md">
              <div>
                <Briefcase className="h-6 w-6 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">For Industry</h3>
                <p className="text-xs text-foreground/70 leading-relaxed mb-6">
                  Bring real-world perspective into learning through authentic problem statements, technical seminars, and milestone reviews.
                </p>

                <ul className="space-y-2 text-xs text-foreground/75 font-medium mb-8">
                  <li>• Industry problem statements</li>
                  <li>• Production hygiene talks</li>
                  <li>• Milestone showcase reviews</li>
                  <li>• Suitable project tracks</li>
                </ul>
              </div>

              <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`} primary={false}>
                Explore Collaboration
              </MarketingCtaLink>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 12. COMMUNITY PRINCIPLES ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Values"
            title="How We Expect the Community to Work"
            subtitle="Six principles guiding constructive, safe, and collaborative engagement."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMMUNITY_PRINCIPLES.map((pr) => (
              <div
                key={pr.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-md"
              >
                <h4 className="text-base font-bold text-foreground mb-2">{pr.title}</h4>
                <p className="text-xs text-foreground/65 leading-relaxed">{pr.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 13. COMMUNITY GOVERNANCE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 backdrop-blur-md text-center">
            <ShieldCheck className="h-8 w-8 text-[hsl(var(--brand-400))] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-foreground mb-2">Open Participation. Clear Boundaries.</h3>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-2xl mx-auto leading-relaxed mb-6">
              A healthy ecosystem needs both openness and governance. Sophrion operates with clear professional conduct expectations, project data privacy safeguards, and institutional alignment policies.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold text-foreground/75">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Professional Conduct</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Confidentiality Standards</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Project Boundaries</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Institutional Policies</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 14-15. CURRENT STATE & FUTURE VISION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 14. Current State Transparency */}
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--brand-400))] block mb-2">
                Honest Transparency
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">The Community Is Being Built</h3>
              <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
                Sophrion is actively building its human network across learners, mentors, experts, faculty, industry professionals and contributors. Participation and community touchpoints will expand progressively as cohort programs and institutional partnerships scale.
              </p>
            </div>

            {/* 15. Future Community Vision */}
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 backdrop-blur-md">
              <span className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] block mb-2">
                Future Direction
              </span>
              <h3 className="text-xl font-bold text-foreground mb-3">Where the Community Can Go</h3>
              <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed mb-4">
                Over time, Sophrion plans to introduce enhanced peer collaboration spaces, interest-based project circles, interactive community sessions, and experience-based connection registries.
              </p>
              <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-foreground/60">
                <span className="rounded border border-white/10 px-2 py-0.5">Project Circles</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Peer Collaboration</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Expert AMAs</span>
                <span className="rounded border border-white/10 px-2 py-0.5">Experience Connections</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 16. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
              Be Part of the Ecosystem.
            </h2>
            <p className="mt-3 text-2xl font-bold bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent sm:text-4xl">
              Connect. Learn. Collaborate.
            </p>
            <p className="mt-6 text-base text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Whether you are an aspiring student, experienced mentor, domain expert, or industry partner—there is a meaningful way to engage.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <MarketingCtaLink href={MARKETING.experiences}>
                For Students
              </MarketingCtaLink>
              <MarketingCtaLink href={`${MARKETING.contact}?topic=mentor`} primary={false}>
                For Mentors & Experts
              </MarketingCtaLink>
              <MarketingCtaLink href={`${MARKETING.contact}?topic=industry`} primary={false}>
                For Industry
              </MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingShell>
  );
}

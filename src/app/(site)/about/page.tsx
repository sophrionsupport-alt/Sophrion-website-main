"use client";

import * as React from "react";
import { motion } from "motion/react";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import FeatureGrid from "@/components/marketing/FeatureGrid";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import TwoColumnCompare from "@/components/marketing/TwoColumnCompare";
import MarketingShell from "@/components/marketing/MarketingShell";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

const NETWORK_NODES = [
  "Experiences", "People", "Problems", "Knowledge",
  "Projects", "Industry", "Community", "Feedback", "Opportunities"
];

const PHILOSOPHY = [
  { title: "Experience Over Consumption", body: "Learning becomes meaningful when knowledge is used, not just stored." },
  { title: "Discovery Before Solution", body: "Understand the problem before rushing toward an answer.", accent: "cyan" as const },
  { title: "Learning On Demand", body: "Learn what the situation requires, when it becomes necessary.", accent: "blue" as const },
  { title: "People Matter", body: "Mentors, peers, experts, faculty and industry expand what a learner can access.", accent: "indigo" as const },
  { title: "Feedback Is Part of Learning", body: "Capability grows through observation, criticism, reflection and iteration.", accent: "emerald" as const },
  { title: "Evidence Over Claims", body: "What students demonstrate matters more than what they say they know.", accent: "cyan" as const },
  { title: "Opportunity Through Participation", body: "New opportunities emerge from meaningful contribution and demonstrated capability.", accent: "blue" as const },
];

const ECOSYSTEM_CHAIN = ["Learner", "Experiences", "People", "Knowledge", "Projects", "Feedback", "Opportunities"];

export default function Page() {
  return (
    <MarketingShell>
      {/* ─── HERO ─── */}
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
              Why Sophrion Exists
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                The future does not need more information. It needs people who can learn, adapt, collaborate and create.
              </span>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-foreground/65 sm:text-xl max-w-2xl">
              Sophrion was created to build the environment between academic learning and real-world capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── THE PROBLEM ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Problem"
            title="The Industry–Academia Execution Gap"
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="Academic education provides:"
              leftItems={["Knowledge", "Curriculum", "Examination", "Certification"]}
              rightTitle="Real-world environments require:"
              rightItems={["Observation", "Problem Discovery", "Learning", "Application", "Execution", "Feedback", "Iteration", "Delivery"]}
            />
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 max-w-3xl text-lg leading-relaxed text-foreground/65 border-l-2 border-[hsl(var(--brand-500))/0.5] pl-5"
          >
            The challenge is not simply access to knowledge. Students need repeated opportunities to apply knowledge under uncertainty, work with people, make decisions, receive feedback and improve.
          </motion.p>
        </div>
      </section>

      {/* ─── LEARNING IS NOT A STRAIGHT LINE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Core Belief"
            title="Learning Is Not a Straight Line."
            align="center"
          />
          <p className="mt-5 max-w-2xl mx-auto text-center text-lg text-foreground/60 leading-relaxed">
            A learner's development is shaped by experiences, people, problems, projects, failures, feedback and reflection — not always in a fixed order.
          </p>

          <div className="relative mt-16 flex flex-col items-center">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[260px] w-[260px] rounded-full border border-white/[0.05]" />
            </div>
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="h-[460px] w-[460px] rounded-full border border-white/[0.04]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 mb-10"
            >
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-[hsl(var(--brand-500))] bg-background shadow-[0_0_60px_hsl(var(--brand-500)/0.5),inset_0_0_20px_hsl(var(--brand-600)/0.12)]">
                <span className="text-xs font-black tracking-[0.2em] text-[hsl(var(--brand-400))] uppercase">Learner</span>
              </div>
            </motion.div>

            <div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-3xl">
              {NETWORK_NODES.map((node, i) => (
                <motion.div
                  key={node}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-sm font-medium text-foreground/70 backdrop-blur-md hover:border-[hsl(var(--brand-500))/0.35] hover:text-foreground transition-colors cursor-default"
                >
                  {node}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Philosophy"
            title="What We Believe"
            subtitle="The philosophies that drive the Sophrion ecosystem."
          />
          <FeatureGrid className="mt-12" items={PHILOSOPHY} columns={3} />
        </div>
      </section>

      {/* ─── WHAT SOPHRION IS ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="The Ecosystem"
            title="Sophrion Is an Ecosystem."
            align="center"
          />
          <p className="mt-5 max-w-2xl mx-auto text-center text-lg text-foreground/60 leading-relaxed">
            Sophrion is an Industry-Integrated Active Learning Ecosystem that connects learners with people, problems, knowledge, projects, communities, industry and feedback.
          </p>

          <div className="mt-14 flex flex-wrap justify-center items-center gap-3 max-w-3xl mx-auto">
            {ECOSYSTEM_CHAIN.map((step, i, arr) => (
              <React.Fragment key={step}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={cn(
                    "flex items-center justify-center rounded-xl border px-5 py-3 text-sm font-bold tracking-wide backdrop-blur-md transition-all",
                    i === 0
                      ? "border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.12] text-[hsl(var(--brand-300))] shadow-[0_0_20px_-6px_hsl(var(--brand-500)/0.4)]"
                      : "border-white/10 bg-white/[0.04] text-foreground/75 hover:border-white/20"
                  )}
                >
                  {step}
                </motion.div>
                {i < arr.length - 1 && (
                  <span className="text-foreground/20 text-lg hidden sm:block">↔</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT SOPHRION IS NOT ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Clarity"
            title="Sophrion Is Not Another Training Program."
          />
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="Not"
              leftItems={[
                "A coaching institute",
                "A certificate-first program",
                "A workshop-only provider",
                "A placement-training company",
                "A fixed curriculum where every learner follows the same path",
              ]}
              rightTitle="Instead"
              rightItems={[
                "An active learning ecosystem",
                "A project environment",
                "A mentor & expert network",
                "An industry-connected experience layer",
                "A system for continuous development and evidence",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── ECOSYSTEM LAYER ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Our Role"
            title="The Ecosystem Layer Around Learning"
            align="center"
          />
          <p className="mt-5 max-w-2xl mx-auto text-center text-lg text-foreground/60 leading-relaxed">
            Institutions already have students, faculty, curriculum, infrastructure and academic governance. Sophrion adds an external ecosystem layer.
          </p>
          <div className="mt-12">
            <TwoColumnCompare
              leftTitle="Institution"
              leftItems={["Students", "Faculty", "Curriculum", "Infrastructure", "Academic governance"]}
              rightTitle="Sophrion"
              rightItems={["Cohort leadership", "Mentors", "Experts", "Industry", "Projects", "Assessment", "Opportunities"]}
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl border border-[hsl(var(--cyan-500))/0.15] bg-gradient-to-r from-[hsl(var(--brand-600))/0.05] to-[hsl(var(--cyan-500))/0.05] p-6 text-center"
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
            <MarketingCtaLink href={MARKETING.institutions}>Explore Institutional Partnerships</MarketingCtaLink>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER QUOTE ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-10 sm:p-14 backdrop-blur-md"
          >
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--brand-500))] to-transparent" />
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-20"
              style={{ background: "radial-gradient(closest-side, hsl(var(--brand-600)), transparent)" }} />

            <div className="text-5xl font-black text-[hsl(var(--brand-500))/0.25] leading-none mb-4">"</div>
            <p className="text-xl leading-relaxed text-foreground/85 italic sm:text-2xl font-medium max-w-2xl">
              Students do not become future-ready by consuming more content alone. They develop capability by participating in meaningful experiences, working with people, solving problems, building things, receiving feedback and reflecting on what they learn.
            </p>
            <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="h-10 w-10 rounded-full border border-[hsl(var(--brand-500))/0.4] bg-[hsl(var(--brand-600))/0.15] flex items-center justify-center">
                <span className="text-xs font-bold text-[hsl(var(--brand-400))]">SM</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Srikanth Molugu</p>
                <p className="text-sm font-semibold text-foreground/50 uppercase tracking-widest">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VISION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-bold tracking-[0.15em] text-[hsl(var(--brand-400))] uppercase">
              Future Within
            </div>
            <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl max-w-2xl mx-auto">
              A learning environment where students are not restricted by one classroom, one department, one curriculum or one mentor.
            </p>
            <p
              className="mt-10 text-2xl font-bold sm:text-3xl"
              style={{
                background: "linear-gradient(to right, #c084fc, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Students should not only prepare for the future. They should learn how to operate in it.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <MarketingCtaLink href={MARKETING.institutions}>Explore Institutional Partnerships</MarketingCtaLink>
              <MarketingCtaLink href={MARKETING.ecosystem} primary={false}>Explore the Ecosystem</MarketingCtaLink>
            </div>
          </motion.div>
        </div>
      </section>
    </MarketingShell>
  );
}

"use client";

import * as React from "react";
import { Suspense } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Globe,
  Building2,
  GraduationCap,
  Users,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
  Instagram
} from "lucide-react";
import InquiryForm from "@/components/forms/InquiryForm";
import ContactFaqAccordion from "@/components/marketing/ContactFaqAccordion";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import MarketingShell from "@/components/marketing/MarketingShell";
import { MARKETING } from "@/lib/marketing/links";
import { type InquiryType } from "@/lib/validators/inquiry";
import { cn } from "@/lib/utils/cn";

export default function ContactPage() {
  const [selectedType, setSelectedType] = React.useState<InquiryType>("institutional");

  const contactCategories = [
    {
      id: "institutional" as InquiryType,
      title: "INSTITUTIONAL PARTNERSHIP",
      desc: "Explore a Sophrion pilot or long-term institutional collaboration.",
      cta: "Discuss a Partnership",
      icon: <Building2 className="h-5 w-5" />,
      accent: "border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.06] text-[hsl(var(--brand-300))]"
    },
    {
      id: "student" as InquiryType,
      title: "STUDENT",
      desc: "Explore Sophrion experiences, pathways and opportunities.",
      cta: "Student Enquiry",
      icon: <GraduationCap className="h-5 w-5" />,
      accent: "border-[hsl(var(--cyan-500))/0.3] bg-[hsl(var(--cyan-500))/0.06] text-[hsl(var(--cyan-300))]"
    },
    {
      id: "mentor" as InquiryType,
      title: "MENTOR / EXPERT",
      desc: "Contribute knowledge, experience and guidance to the ecosystem.",
      cta: "Join Mentor Network",
      icon: <Users className="h-5 w-5" />,
      accent: "border-blue-500/30 bg-blue-500/0.06 text-blue-300"
    },
    {
      id: "industry" as InquiryType,
      title: "INDUSTRY",
      desc: "Bring problems, expertise, feedback or project opportunities into the ecosystem.",
      cta: "Explore Industry Collaboration",
      icon: <Briefcase className="h-5 w-5" />,
      accent: "border-emerald-500/30 bg-emerald-500/0.06 text-emerald-300"
    }
  ];

  function handleSelectType(type: InquiryType) {
    setSelectedType(type);
    const formEl = document.getElementById("inquiry-form-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

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
              Contact Sophrion
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Let's Build the Next Learning Environment Together.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Whether you represent an institution, want to contribute as a mentor or expert, want to collaborate through industry, or want to explore Sophrion as a student, start the conversation here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. CONTACT TYPE SELECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Enquiry Channels"
            title="How Would You Like to Engage?"
            subtitle="Select a category to customize your enquiry."
            align="center"
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCategories.map((cat) => {
              const isSelected = selectedType === cat.id;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => handleSelectType(cat.id)}
                  className={cn(
                    "group text-left relative flex flex-col justify-between rounded-2xl border p-6 backdrop-blur-md transition-all duration-300",
                    isSelected
                      ? cn("ring-2 ring-[hsl(var(--brand-500))]", cat.accent)
                      : "border-white/[0.08] bg-white/[0.025] hover:border-white/20 hover:bg-white/[0.04]"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl border border-white/10 bg-white/5 text-foreground/80">
                        {cat.icon}
                      </div>
                      {isSelected && (
                        <span className="text-[10px] font-black tracking-widest text-[hsl(var(--brand-300))] uppercase bg-[hsl(var(--brand-500))/0.2] px-2 py-0.5 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-xs text-foreground/65 leading-relaxed mb-6">{cat.desc}</p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-[hsl(var(--brand-300))] group-hover:text-foreground transition-colors">
                    <span>{cat.cta}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. PRIMARY CONTACT & FORM SECTION ─── */}
      <section id="inquiry-form-section" className="scroll-mt-24 border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Primary Contact & Institutional Shortcut */}
            <div className="lg:col-span-5 space-y-8">
              {/* Primary Contact: Institutional Partnerships */}
              <div className="rounded-3xl border border-[hsl(var(--brand-500))/0.3] bg-gradient-to-br from-[hsl(var(--brand-600))/0.08] to-[hsl(var(--cyan-500))/0.04] p-7 sm:p-8 backdrop-blur-md shadow-[0_0_40px_-15px_hsl(var(--brand-500)/0.25)] relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))]" />
                <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.15] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--brand-300))] mb-4">
                  Primary Priority
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">Institutional Partnerships</h3>
                <p className="text-xs text-foreground/60 mb-6">Direct executive leadership contact for college partnerships and pilots.</p>

                <div className="space-y-4 pt-4 border-t border-white/[0.08]">
                  <div>
                    <p className="text-base font-bold text-foreground">Srikanth Molugu</p>
                    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-widest">Founder & CEO</p>
                  </div>

                  <div className="space-y-2.5 text-sm text-foreground/80">
                    <a
                      href="tel:8500711655"
                      className="flex items-center gap-3 hover:text-[hsl(var(--cyan-400))] transition-colors"
                    >
                      <Phone className="h-4 w-4 text-[hsl(var(--brand-400))]" />
                      <span className="font-semibold">8500711655</span>
                    </a>

                    <a
                      href="mailto:ceo@sophrion.in"
                      className="flex items-center gap-3 hover:text-[hsl(var(--cyan-400))] transition-colors"
                    >
                      <Mail className="h-4 w-4 text-[hsl(var(--brand-400))]" />
                      <span className="font-semibold">ceo@sophrion.in</span>
                    </a>

                    <div className="flex items-center gap-3 text-foreground/70">
                      <Globe className="h-4 w-4 text-[hsl(var(--brand-400))]" />
                      <span>sophrion.co.in</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. INSTITUTIONAL QUICK PATH SHORTCUT */}
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-7 backdrop-blur-md">
                <p className="text-[10px] font-black uppercase tracking-widest text-[hsl(var(--cyan-400))] mb-2">
                  Institutional Shortcut
                </p>
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Looking for the Institutional Pilot?
                </h4>
                <p className="text-xs text-foreground/65 leading-relaxed mb-6">
                  Evaluate the complete 4-week active learning pilot metrics and deliverables directly without waiting.
                </p>

                <div className="grid grid-cols-2 gap-2 mb-6 text-xs font-bold text-foreground/85">
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                    <span className="block text-base font-black text-foreground">100</span>
                    <span className="text-[10px] text-foreground/50 uppercase">Students</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                    <span className="block text-base font-black text-foreground">4</span>
                    <span className="text-[10px] text-foreground/50 uppercase">Weeks</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                    <span className="block text-base font-black text-foreground">15–18</span>
                    <span className="text-[10px] text-foreground/50 uppercase">Hours / Wk</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-white/[0.02] p-2.5 text-center">
                    <span className="block text-base font-black text-foreground">~10</span>
                    <span className="text-[10px] text-foreground/50 uppercase">Project Teams</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl border border-[hsl(var(--cyan-500))/0.2] bg-[hsl(var(--cyan-500))/0.04] text-center mb-6">
                  <span className="text-xs font-bold text-[hsl(var(--cyan-300))]">Standard Pilot — ₹1,25,000</span>
                </div>

                <MarketingCtaLink href="/institutional-pilot" className="w-full justify-center">
                  Explore the Pilot
                </MarketingCtaLink>
              </div>

              {/* Verified Social Channels */}
              <div className="flex gap-4 text-xs font-semibold text-foreground/65 px-2">
                <a
                  href="https://www.linkedin.com/in/sophrion/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[hsl(var(--cyan-400))] transition-colors"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/sophrion_private_limited/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[hsl(var(--cyan-400))] transition-colors"
                >
                  <Instagram className="h-4 w-4" /> Instagram
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-10 backdrop-blur-md">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">Send an Enquiry</h3>
                  <p className="text-xs text-foreground/60 mt-1">
                    Fill in the details below and the Sophrion team will connect with you.
                  </p>
                </div>

                <Suspense fallback={<div className="text-xs text-foreground/50">Loading form...</div>}>
                  <InquiryForm selectedType={selectedType} onTypeChange={setSelectedType} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. TRUST / TRANSPARENCY SECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Trust by Design"
            title="Built on Evidence, Not Promises."
            subtitle="Sophrion is building its institutional ecosystem through structured pilots, projects, mentorship, industry interaction and measurable student development."
            align="center"
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { title: "Defined Scope", desc: "Clearly agreed schedules, student cohorts and sprint deliverables." },
              { title: "Clear Responsibilities", desc: "Transparent operational split between college and Sophrion leadership." },
              { title: "Transparent Commercials", desc: "Flat, self-contained pilot pricing with zero hidden commitments." },
              { title: "Continuous Assessment", desc: "Evidence-based readiness tracking across multiple observable rubrics." },
              { title: "Institutional Reporting", desc: "Comprehensive post-pilot outcomes report for academic governance." }
            ].map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 backdrop-blur-md text-center"
              >
                <ShieldCheck className="h-6 w-6 text-[hsl(var(--brand-400))] mx-auto mb-3" />
                <h4 className="text-sm font-bold text-foreground mb-1.5">{p.title}</h4>
                <p className="text-xs text-foreground/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. FAQ SECTION ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <MarketingSectionHeader
            eyebrow="Clarity"
            title="Frequently Asked Questions"
            subtitle="Verified answers on Sophrion operations, institutional pilots, and student participation."
            align="center"
          />
          <div className="mt-12">
            <ContactFaqAccordion />
          </div>
        </div>
      </section>

      {/* ─── FOOTER HIGHLIGHT BLOCK ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--brand-400))] mb-2">
            SOPHRION — Future Within
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Srikanth Molugu · Founder & CEO
          </h2>
          <p className="mt-2 text-sm text-foreground/60 font-medium">
            8500711655 · ceo@sophrion.in · sophrion.co.in
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MarketingCtaLink href="/institutional-pilot">Explore the Pilot</MarketingCtaLink>
            <MarketingCtaLink href={MARKETING.institutions} primary={false}>
              For Institutions
            </MarketingCtaLink>
            <MarketingCtaLink href={MARKETING.experiences} primary={false}>
              Explore Experiences
            </MarketingCtaLink>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

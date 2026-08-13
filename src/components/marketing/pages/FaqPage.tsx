"use client";

import * as React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ChevronDown, Search, ArrowRight, HelpCircle } from "lucide-react";
import MarketingShell from "@/components/marketing/MarketingShell";
import MarketingSectionHeader from "@/components/marketing/MarketingSectionHeader";
import MarketingCtaLink from "@/components/marketing/MarketingCtaLink";
import { ALL_FAQS, FAQ_CATEGORIES, type FaqItem } from "@/lib/marketing/allFaqs";
import { MARKETING } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [openFaqId, setOpenFaqId] = React.useState<string | null>("gen-1");

  const filteredFaqs = React.useMemo(() => {
    return ALL_FAQS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

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
              Clarity & Transparency
            </div>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="bg-linear-to-l from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/75 sm:text-xl max-w-3xl">
              Understand how Sophrion works, who it is for, how the ecosystem operates and what participants can expect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. CATEGORY TABS & SEARCH FILTER ─── */}
      <section className="border-t border-white/[0.06] py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-8 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Search questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-foreground/40 outline-none transition focus:border-[hsl(var(--brand-500))] focus:ring-1 focus:ring-[hsl(var(--brand-500))]"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-5xl mx-auto">
            {FAQ_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat.id);
                  }}
                  className={cn(
                    "rounded-xl px-4 py-2 text-xs font-semibold transition-all backdrop-blur-md",
                    isSelected
                      ? "border border-[hsl(var(--brand-500))] bg-[hsl(var(--brand-600))/0.15] text-[hsl(var(--brand-200))] shadow-sm"
                      : "border border-white/[0.08] bg-white/[0.025] text-foreground/70 hover:border-white/20 hover:text-foreground"
                  )}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 3. FAQ ACCORDION LIST ─── */}
      <section className="py-12 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-16 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <HelpCircle className="h-8 w-8 text-foreground/30 mx-auto mb-3" />
              <p className="text-sm font-medium text-foreground/60">
                No matching questions found for &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 text-xs font-bold text-[hsl(var(--brand-400))] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={cn(
                      "rounded-2xl border transition-all backdrop-blur-md overflow-hidden",
                      isOpen
                        ? "border-[hsl(var(--brand-500))/0.3] bg-[hsl(var(--brand-600))/0.04]"
                        : "border-white/[0.07] bg-white/[0.02] hover:border-white/[0.14]"
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm sm:text-base font-semibold text-foreground"
                    >
                      <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--brand-400))] shrink-0" />
                        <span>{faq.question}</span>
                      </div>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 shrink-0 text-foreground/50 transition-transform duration-200",
                          isOpen && "rotate-180 text-[hsl(var(--brand-400))]"
                        )}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-white/[0.06] p-5 pt-3 text-xs sm:text-sm leading-relaxed text-foreground/75">
                        <p>{faq.answer}</p>
                        {faq.relatedRoute && (
                          <div className="mt-4 pt-3 border-t border-white/[0.05] flex items-center justify-end">
                            <Link
                              href={faq.relatedRoute}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[hsl(var(--cyan-400))] hover:underline"
                            >
                              <span>Learn more</span>
                              <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ─── 4. TRUST & TRANSPARENCY NOTICE ─── */}
      <section className="border-t border-white/[0.06] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-8 sm:p-10 backdrop-blur-md text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Built on Evidence, Not Claims</h3>
            <p className="text-xs sm:text-sm text-foreground/65 max-w-2xl mx-auto leading-relaxed">
              Sophrion is designed so that student participation, project execution, feedback, and skill development are documented through observable evidence. We do not make speculative placement or investment guarantees.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs font-semibold text-foreground/80">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Defined Scope</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Transparent Commercials</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Continuous Evidence</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Institutional Reporting</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FINAL CTA ─── */}
      <section className="border-t border-white/[0.06] py-16 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Still Have Questions?
          </h2>
          <p className="mt-3 text-sm text-foreground/65 max-w-xl mx-auto">
            Connect directly with the Sophrion team to discuss institutional pilots, student experiences, or partnership details.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MarketingCtaLink href={MARKETING.contact}>Contact Sophrion</MarketingCtaLink>
            <MarketingCtaLink href="/institutional-pilot" primary={false}>
              Explore Institutional Pilot
            </MarketingCtaLink>
            <MarketingCtaLink href={MARKETING.institutions} primary={false}>
              For Institutions
            </MarketingCtaLink>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}

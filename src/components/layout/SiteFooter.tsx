import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { MARKETING, PATHWAY_ANCHORS } from "@/lib/marketing/links";
import { cn } from "@/lib/utils/cn";

type Props = {
  className?: string;
};

const exploreLinks = [
  { href: MARKETING.experiences, label: "Experiences" },
  { href: MARKETING.pathways, label: "Pathways" },
  { href: MARKETING.residency, label: "Residency" },
  { href: MARKETING.projects, label: "Projects / Showcase" },
  { href: MARKETING.community, label: "Community" },
  { href: MARKETING.mentors, label: "Mentors & Experts" },
  { href: MARKETING.industry, label: "Industry" },
];

const institutionLinks = [
  { href: MARKETING.institutions, label: "For Institutions" },
  { href: MARKETING.institutionalPilot, label: "Institutional Pilot" },
  { href: MARKETING.evidence, label: "Evidence & Impact" },
  { href: MARKETING.contact, label: "Contact" },
];

const companyLinks = [
  { href: MARKETING.about, label: "Why Sophrion" },
  { href: MARKETING.faq, label: "FAQ" },
  { href: MARKETING.contact, label: "Contact" },
];

const legalLinks = [
  { href: MARKETING.privacy, label: "Privacy Policy" },
  { href: MARKETING.terms, label: "Terms" },
];

export default function SiteFooter({ className }: Props) {
  return (
    <footer className={cn("relative border-t border-white/[0.08]", className)}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px circle at 10% 20%, hsl(var(--glow-purple) / 0.12), transparent 55%)," +
            "radial-gradient(900px circle at 80% 40%, hsl(var(--glow-cyan) / 0.1), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6">
        {/* Footer Institutional CTA */}
        <div className="mb-16 rounded-3xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-500))/0.02] p-8 sm:p-12 text-center backdrop-blur-md">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-8">
            Ready to explore a Sophrion institutional pilot?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={MARKETING.contact}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_-4px_hsl(var(--cyan-500)/0.4)]"
              style={{
                background: "linear-gradient(90deg, hsl(var(--brand-600)), hsl(var(--cyan-500)))",
              }}
            >
              Discuss an Institutional Pilot
            </Link>
            <Link
              href={MARKETING.institutionalPilot}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-foreground/90 transition-all hover:bg-white/10"
            >
              View Pilot
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Block */}
          <div className="lg:col-span-4 pr-8">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/brand/symbol-logo.png"
                alt="Sophrion"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold tracking-wide text-foreground">SOPHRION</span>
            </div>
            <p className="text-sm font-semibold text-[hsl(var(--brand-400))] uppercase tracking-widest mb-4">
              Future Within
            </p>
            <p className="text-sm leading-relaxed text-foreground/80 font-medium mb-8">
              Building Future-Ready Students Through Industry-Aligned Cohort Experiences.
            </p>
            <div className="space-y-1 text-sm text-foreground/70">
              <p className="font-semibold text-foreground/90">Srikanth Molugu</p>
              <p>Founder & CEO</p>
              <p>8500711655</p>
              <a href="mailto:ceo@sophrion.in" className="block hover:text-[hsl(var(--cyan-400))]">ceo@sophrion.in</a>
              <a href="https://sophrion.co.in" className="block hover:text-[hsl(var(--cyan-400))]">sophrion.co.in</a>
            </div>
          </div>

          {/* Links Block */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Explore</p>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-[hsl(var(--cyan-400))]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Institutions</p>
              <ul className="space-y-3">
                {institutionLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-[hsl(var(--cyan-400))]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Company</p>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-[hsl(var(--cyan-400))]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Legal</p>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-[hsl(var(--cyan-400))]">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-foreground/50 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Sophrion. All rights reserved.</p>
          <p className="font-medium tracking-wide">Industry-Integrated Active Learning Ecosystem</p>
        </div>
      </div>
    </footer>
  );
}

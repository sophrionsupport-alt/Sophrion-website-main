"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils/cn";

/** Shimmer overlay via ::after — avoids extra DOM nodes and click-blocking spans. */
export const marketingCtaShimmer =
  "after:pointer-events-none after:absolute after:inset-0 after:-translate-x-full after:bg-gradient-to-r after:from-transparent after:via-white/[0.12] after:to-transparent after:transition-transform after:duration-700 after:content-[''] group-hover:after:translate-x-full";

type Props = {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  showArrow?: boolean;
};

export default function MarketingCtaLink({
  href,
  children,
  primary = true,
  className,
  showArrow = true,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        primary
          ? cn(
              "text-white shadow-[0_10px_30px_-12px_hsl(var(--cyan-500)/0.45)] hover:scale-[1.03] hover:shadow-[0_0_24px_-4px_hsl(var(--cyan-500)/0.45),0_0_12px_-2px_hsl(var(--brand-600)/0.3)]",
              marketingCtaShimmer
            )
          : "border border-white/10 bg-white/[0.03] text-foreground/85 backdrop-blur-sm hover:border-white/[0.15] hover:bg-white/[0.05] hover:text-foreground hover:scale-[1.02]",
        className
      )}
      style={
        primary
          ? {
              background:
                "linear-gradient(90deg, hsl(var(--brand-600)), hsl(var(--cyan-500)))",
            }
          : undefined
      }
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
        {showArrow ? (
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        ) : null}
      </span>
    </Link>
  );
}

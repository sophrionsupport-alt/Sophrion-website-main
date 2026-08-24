"use client";

// Compact section title component used in expanded phase cards and pathway benchmarks.

import * as React from "react";

// Renders H4 section heading with optional subtitle
export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-10">
      <h4 className="text-2xl font-bold tracking-tight text-white">{title}</h4>
      {subtitle && <p className="mt-2 text-sm text-foreground/50">{subtitle}</p>}
    </div>
  );
}

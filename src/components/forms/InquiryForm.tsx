"use client";

// Interactive multi-category inquiry form supporting honeypot protection, Zod schema validation, and institutional metadata enrichment.

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { InquirySchema, type InquiryType } from "@/lib/validators/inquiry";
import { cn } from "@/lib/utils/cn";
import { CheckCircle2 } from "lucide-react";

// --- Form State & Configuration ---
type FormState = {
  name: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  inquiryType: InquiryType;
  studentCount?: string;
  preferredEngagement?: string;
  message: string;
  company: string; // Honeypot field to trap automated spam bots
};

const TYPE_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "institutional", label: "Institutional Partnership" },
  { value: "student", label: "Student" },
  { value: "mentor", label: "Mentor / Expert" },
  { value: "industry", label: "Industry Collaboration" },
  { value: "other", label: "General Enquiry" },
];

const ENGAGEMENT_OPTIONS = [
  "4-Week Pilot",
  "Longer Cohort",
  "Industry Project",
  "General Discussion",
];

function errMsg(json: unknown) {
  const o = json as { error?: string; message?: string };
  return o?.error || o?.message || "Submission failed. Please try again.";
}

// --- Component Implementation ---
export default function InquiryForm({
  selectedType,
  onTypeChange,
}: {
  selectedType?: InquiryType;
  onTypeChange?: (t: InquiryType) => void;
}) {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");

  const initialType = React.useMemo((): InquiryType => {
    if (selectedType) return selectedType;
    const t = (topic ?? "").toLowerCase();
    if (t === "partnership" || t === "institutional") return "institutional";
    if (t === "student") return "student";
    if (t === "mentor" || t === "expert") return "mentor";
    if (t === "industry") return "industry";
    if (t === "innovation") return "innovation";
    return "institutional";
  }, [topic, selectedType]);

  const [form, setForm] = React.useState<FormState>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    designation: "",
    inquiryType: initialType,
    studentCount: "",
    preferredEngagement: "4-Week Pilot",
    message: "",
    company: "",
  });

  React.useEffect(() => {
    if (selectedType) {
      setForm((f) => ({ ...f, inquiryType: selectedType }));
    } else {
      setForm((f) => ({ ...f, inquiryType: initialType }));
    }
  }, [initialType, selectedType]);

  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [result, setResult] = React.useState<{ ok: boolean; message: string } | null>(null);

  function setField<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    if (k === "inquiryType" && onTypeChange) {
      onTypeChange(v as InquiryType);
    }
    setErrors((e) => {
      if (!e[k]) return e;
      const n = { ...e };
      delete n[k];
      return n;
    });
  }

  // --- Form Submission Handler ---
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setResult(null);
    setErrors({});

    // Construct enriched message with optional institutional metadata
    let enrichedMessage = form.message;
    const extras: string[] = [];
    if (form.designation.trim()) {
      extras.push(`Designation: ${form.designation.trim()}`);
    }
    if (form.inquiryType === "institutional") {
      if (form.studentCount?.trim()) {
        extras.push(`Approximate Student Count: ${form.studentCount.trim()}`);
      }
      if (form.preferredEngagement) {
        extras.push(`Preferred Engagement: ${form.preferredEngagement}`);
      }
    }

    if (extras.length > 0) {
      enrichedMessage = `${extras.join(" | ")}\n\n${form.message}`;
    }

    const parsed = InquirySchema.safeParse({
      name: form.name,
      email: form.email,
      phone: form.phone,
      organization: form.organization,
      inquiryType: form.inquiryType,
      message: enrichedMessage,
      company: form.company,
      source: "contact_page",
    });

    if (!parsed.success) {
      const fe: Partial<Record<keyof FormState, string>> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState | undefined;
        if (k && !fe[k]) fe[k] = issue.message;
      }
      setErrors(fe);
      setResult({ ok: false, message: "Please fill in the required fields correctly." });
      return;
    }

    if (parsed.data.company?.trim()) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          phone: parsed.data.phone,
          organization: parsed.data.organization,
          inquiryType: parsed.data.inquiryType,
          message: parsed.data.message,
          source: "contact_page",
        }),
      });

      const json = await res.json().catch(() => null);
      if (!res.ok || json?.ok === false) {
        throw new Error(errMsg(json));
      }

      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        organization: "",
        designation: "",
        inquiryType: parsed.data.inquiryType,
        studentCount: "",
        preferredEngagement: "4-Week Pilot",
        message: "",
        company: "",
      });
    } catch (er: unknown) {
      setResult({
        ok: false,
        message: er instanceof Error ? er.message : "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClasses =
    "mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/35 outline-none transition focus:border-[hsl(var(--brand-500))] focus:ring-1 focus:ring-[hsl(var(--brand-500))]";

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <div className="h-12 w-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Thank You. Your Enquiry Has Been Received.
        </h3>
        <p className="text-sm text-foreground/70 max-w-md mx-auto leading-relaxed mb-6">
          The Sophrion team will review your enquiry and follow up through the contact details provided.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-foreground/80 hover:bg-white/10 transition"
        >
          Send Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      {/* Honeypot */}
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input
            value={form.company}
            onChange={(e) => setField("company", e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Full Name <span className="text-[hsl(var(--brand-400))]">*</span>
          <input
            required
            className={cn(inputClasses, errors.name && "border-rose-500/60")}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setField("name", e.target.value)}
            autoComplete="name"
          />
          {errors.name && <p className="mt-1 text-xs text-rose-300 font-normal">{errors.name}</p>}
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Email Address <span className="text-[hsl(var(--brand-400))]">*</span>
          <input
            required
            type="email"
            className={cn(inputClasses, errors.email && "border-rose-500/60")}
            placeholder="you@institution.edu"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-xs text-rose-300 font-normal">{errors.email}</p>}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Phone Number <span className="text-foreground/40 font-normal">(Optional)</span>
          <input
            className={inputClasses}
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            autoComplete="tel"
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Enquiry Type <span className="text-[hsl(var(--brand-400))]">*</span>
          <select
            className={inputClasses}
            value={form.inquiryType}
            onChange={(e) => setField("inquiryType", e.target.value as InquiryType)}
          >
            {TYPE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value} className="bg-background text-foreground">
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Organization / Institution <span className="text-foreground/40 font-normal">(Optional)</span>
          <input
            className={inputClasses}
            placeholder="College or company name"
            value={form.organization}
            onChange={(e) => setField("organization", e.target.value)}
          />
        </label>

        <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
          Designation / Role <span className="text-foreground/40 font-normal">(Optional)</span>
          <input
            className={inputClasses}
            placeholder="e.g. Principal, Dean, HOD, Student"
            value={form.designation}
            onChange={(e) => setField("designation", e.target.value)}
          />
        </label>
      </div>

      {/* Optional Institutional Fields */}
      {form.inquiryType === "institutional" && (
        <div className="p-4 rounded-xl border border-[hsl(var(--brand-500))/0.2] bg-[hsl(var(--brand-600))/0.04] space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[hsl(var(--brand-300))]">
            Institutional Details (Optional)
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs text-foreground/70 font-medium">
              Approximate Student Count
              <input
                className={inputClasses}
                placeholder="e.g. 100 students for pilot"
                value={form.studentCount}
                onChange={(e) => setField("studentCount", e.target.value)}
              />
            </label>

            <label className="block text-xs text-foreground/70 font-medium">
              Preferred Engagement
              <select
                className={inputClasses}
                value={form.preferredEngagement}
                onChange={(e) => setField("preferredEngagement", e.target.value)}
              >
                {ENGAGEMENT_OPTIONS.map((opt) => (
                  <option key={opt} value={opt} className="bg-background text-foreground">
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
      )}

      <label className="block text-xs font-bold uppercase tracking-wider text-foreground/70">
        Message <span className="text-[hsl(var(--brand-400))]">*</span>
        <textarea
          required
          rows={5}
          className={cn(inputClasses, "resize-none", errors.message && "border-rose-500/60")}
          placeholder="Tell us about your institution, student goals, or collaboration interests..."
          value={form.message}
          onChange={(e) => setField("message", e.target.value)}
        />
        {errors.message && <p className="mt-1 text-xs text-rose-300 font-normal">{errors.message}</p>}
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-linear-to-r from-[hsl(var(--brand-600))] to-[hsl(var(--cyan-500))] py-3 text-sm font-bold text-white transition hover:opacity-95 disabled:opacity-60 shadow-sm"
      >
        {loading ? "Submitting Enquiry…" : "Submit Enquiry"}
      </button>

      {result && !result.ok && (
        <p role="status" className="text-xs text-rose-300 text-center font-medium">
          {result.message}
        </p>
      )}
    </form>
  );
}

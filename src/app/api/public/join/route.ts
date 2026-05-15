import { NextRequest } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { ok, fail } from "@/lib/utils/http";
import { JoinApplicationSchema } from "@/lib/validators/join";
import { sendEmail } from "@/lib/email/send";
import { joinAutoReplyEmail, joinInboxEmail } from "@/lib/email/templates";
import { serverEnv } from "@/lib/env";

export const runtime = "nodejs";

const PATHWAY_LABEL: Record<string, string> = {
  ai_systems: "AI Systems",
  data_intelligence: "Data Intelligence",
  creative_ai: "Creative AI",
  cloud_cyber: "Cloud & Cyber",
  smart_engineering: "Smart Engineering",
  not_sure: "Not sure yet",
};

const YEAR_LABEL: Record<string, string> = {
  "1st": "1st Year",
  "2nd": "2nd Year",
  "3rd": "3rd Year",
  final: "Final Year",
  graduate: "Graduate",
  other: "Other",
};

export async function POST(request: NextRequest) {
  try {
    const raw = await request.json();
    const parsed = JoinApplicationSchema.safeParse(raw);
    if (!parsed.success) {
      return fail("Invalid payload", 400, { issues: parsed.error.issues });
    }

    const p = parsed.data;
    if (p.company && p.company.trim().length > 0) {
      return ok({ ok: true, id: "honeypot" });
    }

    const pathwayLabel = PATHWAY_LABEL[p.pathway] ?? p.pathway;
    const yearLabel = YEAR_LABEL[p.year] ?? p.year;
    const subject = `Join application — ${pathwayLabel}`;
    const body =
      `Year: ${yearLabel}\n` +
      `College: ${p.college}\n` +
      `Pathway: ${pathwayLabel}\n` +
      (p.phone ? `Phone: ${p.phone}\n` : "") +
      `\n${p.message}\n`;

    const supabase = createSupabaseAdminClient();
    const { data: row, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: p.name,
          email: p.email,
          phone: p.phone ?? null,
          subject,
          message: body,
          source: p.source ?? "join_page",
        },
      ])
      .select("id, created_at")
      .single();

    if (error) {
      return fail(error.message, 500);
    }

    if (serverEnv) {
      try {
        const inbox = joinInboxEmail({
          name: p.name,
          email: p.email,
          college: p.college,
          yearLabel,
          pathwayLabel,
          phone: p.phone,
          message: p.message,
          subject,
        });

        await sendEmail({
          to: serverEnv.CONTACT_INBOX,
          subject: inbox.subject,
          html: inbox.html,
          text: inbox.text,
          from: "contact",
        });
      } catch (e) {
        console.error("[join] inbox email failed", e);
      }

      try {
        const autoReply = joinAutoReplyEmail({
          name: p.name,
          pathwayLabel,
        });

        await sendEmail({
          to: p.email,
          subject: autoReply.subject,
          html: autoReply.html,
          text: autoReply.text,
          from: "contact",
          replyTo: serverEnv.CONTACT_INBOX,
        });
      } catch (e) {
        console.error("[join] customer auto-reply failed", e);
      }
    }

    return ok({ ok: true, id: row.id });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unexpected error";
    return fail(msg, 500);
  }
}

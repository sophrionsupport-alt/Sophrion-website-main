import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

function escapeCsvCell(val: string | null | undefined): string {
  if (val == null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

export async function GET() {
  const auth = await requireAdmin();

  if (!auth.ok) {
    return NextResponse.json({ ok: false, error: auth.error }, { status: auth.status });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("contact_messages")
    .select("id, name, email, phone, subject, message, source, archived, created_at, archived_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Export contacts error:", error);
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }

  const headers = ["ID", "Name", "Email", "Phone", "Subject", "Message", "Source", "Archived", "Created At", "Archived At"];
  const rows = (data ?? []).map((row) => [
    escapeCsvCell(row.id),
    escapeCsvCell(row.name),
    escapeCsvCell(row.email),
    escapeCsvCell(row.phone),
    escapeCsvCell(row.subject),
    escapeCsvCell(row.message),
    escapeCsvCell(row.source),
    escapeCsvCell(row.archived ? "Yes" : "No"),
    escapeCsvCell(row.created_at ? new Date(row.created_at).toLocaleString() : ""),
    escapeCsvCell(row.archived_at ? new Date(row.archived_at).toLocaleString() : ""),
  ]);

  const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new Response(csvContent, {
    status: 200,
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="contact_submissions_${new Date().toISOString().slice(0, 10)}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}

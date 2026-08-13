import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/requireAdmin";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const runtime = "nodejs";

function json(
  ok: boolean,
  init?: { data?: unknown; error?: string; message?: string },
  status = 200
) {
  return NextResponse.json({ ok, ...init }, { status });
}

export async function GET(req: Request) {
  try {
    const auth = await requireAdmin();
    if (!auth.ok) {
      return json(false, { error: auth.error }, auth.status);
    }

    const supabase = createSupabaseAdminClient();
    const { count, error } = await supabase
      .from("career_applications")
      .select("id", { count: "exact" });

    if (error) {
      return json(false, { error: error.message }, 500);
    }

    return json(true, { data: { count: count ?? 0 } });
  } catch (e) {
    return json(false, { error: "Something went wrong" }, 500);
  }
}

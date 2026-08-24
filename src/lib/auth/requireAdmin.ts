// Server-side authentication guard verifying that the requesting user is logged in with admin privileges.

import { getActor } from "@/lib/auth/getActor";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Validates active session and role, returning 401 for unauthenticated or 403 for non-admin actors
export async function requireAdmin() {
  const supabase = await createSupabaseServerClient();
  const actor = await getActor();

  if (!actor.isAuthenticated) {
    return {
      ok: false as const,
      status: 401,
      error: "Unauthorized",
      supabase,
      actor,
    };
  }

  if (actor.role !== "admin") {
    return {
      ok: false as const,
      status: 403,
      error: "Forbidden",
      supabase,
      actor,
    };
  }

  return {
    ok: true as const,
    status: 200,
    supabase,
    actor,
  };
}
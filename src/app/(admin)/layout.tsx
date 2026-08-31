import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

const ADMIN_ROLES = new Set(["admin", "global_admin"]);

function isAdminRole(role: string | null | undefined): boolean {
  return ADMIN_ROLES.has(role ?? "");
}

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set() {},
        remove() {},
      },
    }
  );

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/login");
  }

  // Check 1: SEED_ADMIN_EMAILS env var (always trusted)
  const seedEmails = (process.env.SEED_ADMIN_EMAILS ?? "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);

  if (seedEmails.includes((user.email ?? "").toLowerCase())) {
    // Trusted seed admin — grant access without needing a profiles row
    return (
      <div className="flex min-h-screen bg-background text-foreground">
        <AdminSidebar />
        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <AdminHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Check 2: profiles table
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile && isAdminRole(profile.role)) {
    return (
      <div className="flex min-h-screen bg-background text-foreground">
        <AdminSidebar />
        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <AdminHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // Check 3: user_metadata role fallback
  const metaRole = user.user_metadata?.role as string | undefined;
  if (isAdminRole(metaRole)) {
    return (
      <div className="flex min-h-screen bg-background text-foreground">
        <AdminSidebar />
        <div className="flex min-w-0 flex-1 flex-col lg:pl-64">
          <AdminHeader />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    );
  }

  redirect("/unauthorized");
}
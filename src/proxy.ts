// Middleware proxy helper to refresh Supabase authentication cookies for protected admin routes.

import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

// Cookie mutation options for Supabase SSR cookie handler
type CookieMutate = {
  path?: string;
  maxAge?: number;
  domain?: string;
  httpOnly?: boolean;
  secure?: boolean;
  sameSite?: "strict" | "lax" | "none" | boolean;
  expires?: Date;
};

// Refreshes active user session and forwards updated cookies on matched admin requests
export async function proxy(req: NextRequest) {
  const res = NextResponse.next();

  // Initialize SSR Supabase client with cookie getters and setters
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: CookieMutate) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: CookieMutate) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  // Refresh auth session if expired
  await supabase.auth.getUser();

  return res;
}

// Route matcher configuration ensuring middleware runs for all /admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
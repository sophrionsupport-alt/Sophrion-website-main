"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { MARKETING } from "@/lib/marketing/links";

const PUBLIC_ROUTES = Object.values(MARKETING);

export default function RoutePrefetcher() {
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => {
    const routes = PUBLIC_ROUTES.filter((route) => route !== pathname);
    const prefetchRoutes = () => {
      routes.forEach((route) => router.prefetch(route));
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchRoutes, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetchRoutes, 600);
    return () => globalThis.clearTimeout(timeoutId);
  }, [pathname, router]);

  return null;
}

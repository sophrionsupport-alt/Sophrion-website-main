"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CalendarDays, Users, MessageSquare, Mail, Newspaper, Settings, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const sidebarLinks = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Events", href: "/admin/events", icon: CalendarDays },
  { label: "Registrations", href: "/admin/registrations", icon: Users },
  { label: "Contacts", href: "/admin/contacts", icon: MessageSquare },
  { label: "Newsletter", href: "/admin/newsletter", icon: Mail },
  { label: "Blog", href: "/admin/blog", icon: Newspaper },
  { label: "Careers", href: "/admin/careers", icon: Briefcase },
  { label: "Applications", href: "/admin/career-applications", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 flex-col border-r border-white/10 bg-background/95 backdrop-blur-xl lg:flex">
      <div className="flex h-14 shrink-0 items-center px-6 text-xs font-semibold uppercase tracking-wider text-foreground/50 border-b border-white/5">
        Admin Menu
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {sidebarLinks.map((item) => {
          const active =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-300",
                active
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  active ? "text-cyan-400" : "text-foreground/50 group-hover:text-foreground/80"
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

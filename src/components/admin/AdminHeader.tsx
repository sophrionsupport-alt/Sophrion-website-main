"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Plus } from "lucide-react";
import SignOutButton from "@/components/auth/SignOutButton";
import { cn } from "@/lib/utils/cn";

export default function AdminHeader() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Minimal glassmorphism and reduced padding to keep it tight
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-background/80 px-4 backdrop-blur-xl sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center gap-4">
          <Link
            href="/admin"
            className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
          >
            <Image
              src="/images/brand/symbol-logo.png"
              alt="Sophrion"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold text-foreground tracking-tight hidden sm:inline-block">
              Sophrion Admin
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/events/new"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/15"
          >
            <Plus className="h-3.5 w-3.5" />
            New Event
          </Link>
          <div className="hidden sm:block">
            <SignOutButton />
          </div>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-background p-6 border-r border-white/10">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="font-semibold text-foreground">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X className="h-5 w-5 text-foreground/70" />
              </button>
            </div>
            
            <nav className="flex-1 space-y-2 py-4">
              <Link href="/admin" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Dashboard</Link>
              <Link href="/admin/events" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Events</Link>
              <Link href="/admin/registrations" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Registrations</Link>
              <Link href="/admin/contacts" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Contacts</Link>
              <Link href="/admin/newsletter" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Newsletter</Link>
              <Link href="/admin/blog" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-foreground/80 hover:text-white">Blog</Link>
            </nav>

            <div className="pt-4 border-t border-white/5">
              <SignOutButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

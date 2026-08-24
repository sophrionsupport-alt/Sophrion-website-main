# Codebase Structure & Architectural Documentation — Sophrion

This document provides a comprehensive structural guide to the **Sophrion** codebase (`sophrion-web`). It outlines the application architecture, directory hierarchy, file-by-file responsibilities, styling system, component hierarchy, data flow, and established conventions.

---

## 1. Project Overview

**Sophrion** is an execution ecosystem and institutional partner platform designed to bridge academic education with industry-ready execution. The application provides interactive marketing landing pages, an institutional pilot portal, student and volunteer event portals, career application pipelines, blog publishing, and an administrative dashboard for managing event registrations, contact enquiries, newsletter subscriptions, and hiring pipelines.

### Tech Stack
| Category | Technology | Version / Details |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | `16.1.6` (React `19.2.3`, Node runtime, Turbopack) |
| **Styling** | Tailwind CSS v4 | `@import "tailwindcss"`, CSS `@theme` variables, Glassmorphism, HSL color tokens |
| **Database & Auth** | Supabase | `@supabase/supabase-js` (`2.98.0`), `@supabase/ssr` (`0.9.0`) |
| **Validation & Security** | Zod, Upstash Redis, Turnstile | Zod schemas, `@upstash/ratelimit` (`2.0.8`), Cloudflare Turnstile verification |
| **Animations & Icons** | Motion & Lucide React | `motion` (`12.35.0`), `lucide-react` (`0.577.0`) |
| **Utilities** | QR Code, Email | `qrcode` / `html5-qrcode` (Ticket generation & volunteer scanner), ZeptoMail SMTP |

---

## 2. Folder Structure

```text
Sophrion-website-main/
├── public/                 # Static public assets (brand logos, placeholders, OG images)
├── src/                    # Application source code
│   ├── app/                # Next.js App Router pages, layouts, and REST API handlers
│   ├── components/         # React UI components (admin, layout, forms, marketing, ui)
│   ├── content/            # Local content assets (blog posts, data files)
│   ├── lib/                # Backend utilities, DB clients, validators, email & auth guards
│   ├── proxy.ts            # Supabase session proxy middleware helper
│   └── types/              # TypeScript type declarations and global domain constants
├── package.json            # Project manifest, npm dependencies, and build scripts
├── tsconfig.json           # TypeScript compiler configuration and path aliases (@/*)
├── postcss.config.mjs      # PostCSS plugin setup for Tailwind CSS v4
└── next.config.ts          # Next.js framework build configuration
```

---

## 3. File-by-File Breakdown

### Root Directory (`/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `next.config.ts` | Next.js configuration settings | `nextConfig` | None |
| `package.json` | Project dependencies, scripts, metadata | Manifest object | None |
| `postcss.config.mjs` | PostCSS config for Tailwind v4 | Default config | None |
| `tsconfig.json` | TypeScript compiler options & aliases | TS config | None |

---

### Core Infrastructure & Types (`src/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/proxy.ts` | Supabase middleware session proxy | `proxy()`, `config` | None |
| `src/types/careers.ts` | Career role domain schemas & constants | `CAREER_TEAMS`, `CAREER_WORK_MODES`, `CareerRole` | None |
| `src/types/events.ts` | Event schema & registration status types | `EventItem`, `EventRegistration` | None |

---

### Core Libraries (`src/lib/`)

#### Auth (`src/lib/auth/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/auth/getActor.ts` | Resolves active user session actor & role | `getActor()` | `src/lib/supabase/server.ts`, `src/lib/env.ts` |
| `src/lib/auth/requireAdmin.ts` | Guard verifying admin authentication | `requireAdmin()` | `src/lib/auth/getActor.ts`, `src/lib/supabase/server.ts` |

#### Email (`src/lib/email/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/email/send.ts` | Low-level email transport sender | `sendEmail()` | `src/lib/env.ts` |
| `src/lib/email/sendMail.ts` | Helper for transaction email delivery | `sendMail()` | `src/lib/email/send.ts` |
| `src/lib/email/sendTicketEmail.ts` | Formats and sends event ticket emails | `sendTicketEmail()` | `src/lib/email/send.ts` |

#### Employees (`src/lib/employees/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/employees/csv.ts` | Parses CSV files for bulk employee creation | `parseEmployeeCsv()` | None |

#### Marketing (`src/lib/marketing/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/marketing/links.ts` | Centralized site navigation routes | `MARKETING`, `PATHWAY_ANCHORS` | None |

#### Scanner (`src/lib/scanner/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/scanner/code.ts` | Generates/verifies volunteer scanner PINs | `generateScannerCode()`, `verifyScannerCode()` | None |

#### Security (`src/lib/security/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/security/rateLimit.ts` | Rate limiter using Upstash Redis | `checkRateLimit()` | `src/lib/env.ts` |
| `src/lib/security/turnstile.ts` | Verifies Cloudflare Turnstile tokens | `verifyTurnstile()` | `src/lib/env.ts` |

#### Supabase (`src/lib/supabase/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/supabase/admin.ts` | Privileged Supabase client (Service Role) | `createSupabaseAdminClient()` | None |
| `src/lib/supabase/client.ts` | Browser-side Supabase client creator | `createSupabaseBrowserClient()` | `src/lib/env.ts` |
| `src/lib/supabase/server.ts` | Server-side SSR Supabase client creator | `createSupabaseServerClient()` | `src/lib/env.ts` |

#### Time (`src/lib/time/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/time/index.ts` | Date formatting & relative time utilities | `formatDate()`, `timeAgo()` | None |

#### Utils (`src/lib/utils/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/utils/cn.ts` | Classname merging utility | `cn()` | None |

#### Validators (`src/lib/validators/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/validators/inquiry.ts` | Zod schema for inquiry validation | `InquirySchema`, `InquiryType` | None |

#### Root Lib (`src/lib/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/lib/env.ts` | Zod validation for public & server env vars | `publicEnv`, `serverEnv`, `publicConfig`, `getAppConfig()` | None |

---

### React UI Components (`src/components/`)

#### UI Base Components (`src/components/ui/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/components/ui/AnimatedBackground.tsx` | Canvas particle background effect | `AnimatedBackground` | `src/lib/utils/cn.ts` |
| `src/components/ui/Button.tsx` | Multi-variant button component | `Button`, `ButtonProps` | None |
| `src/components/ui/Input.tsx` | Form text input control with label | `Input` | `src/lib/utils/cn.ts` |
| `src/components/ui/Modal.tsx` | Accessible dialog modal container | `Modal` | `src/lib/utils/cn.ts` |

#### Layout Components (`src/components/layout/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/components/layout/Container.tsx` | Responsive layout max-width container | `Container` | `src/lib/utils/cn.ts` |
| `src/components/layout/FooterCtaStrip.tsx` | Pre-footer banner with CTA button | `FooterCtaStrip` | `src/lib/marketing/links.ts`, `src/lib/utils/cn.ts` |
| `src/components/layout/Nav.tsx` | Site header navigation dropdowns & menu | `Nav` | `src/lib/marketing/links.ts`, `src/lib/utils/cn.ts` |
| `src/components/layout/RoutePrefetcher.tsx` | Pre-fetches key routes on idle | `RoutePrefetcher` | `src/lib/marketing/links.ts` |
| `src/components/layout/SiteFooter.tsx` | Global site footer with links | `SiteFooter` | `src/lib/marketing/links.ts`, `src/lib/utils/cn.ts` |
| `src/components/layout/SiteHeader.tsx` | Sticky brand navigation header | `SiteHeader` | `src/components/layout/Nav.tsx`, `src/lib/utils/cn.ts` |

#### Admin Components (`src/components/admin/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/components/admin/AdminHeader.tsx` | Admin header with action buttons | `AdminHeader` | `src/components/auth/SignOutButton.tsx` |
| `src/components/admin/AdminShell.tsx` | Dashboard shell layout wrapper | `AdminShell` | `src/components/admin/AdminHeader.tsx`, `src/components/admin/AdminSidebar.tsx` |
| `src/components/admin/AdminSidebar.tsx` | Sidebar navigation menu for admin | `AdminSidebar` | `src/lib/utils/cn.ts` |
| `src/components/admin/AdminTable.tsx` | Generic data table renderer | `AdminTable`, `AdminRow`, `AdminRowStatus` | None |
| `src/components/admin/BulkActionsBar.tsx` | Floating bar for multi-row table actions | `BulkActionsBar` | `src/lib/utils/cn.ts` |
| `src/components/admin/EventProblemBuilder.tsx` | Form builder for event problem statements | `EventProblemBuilder` | `src/lib/utils/cn.ts` |
| `src/components/admin/FiltersBar.tsx` | Filter, search, and sort control bar | `FiltersBar`, `FiltersState` | `src/lib/utils/cn.ts` |

#### Form Components (`src/components/forms/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/components/forms/CareerApplyForm.tsx` | Job application submission form | `CareerApplyForm` | `src/components/ui/Button.tsx`, `src/lib/utils/cn.ts` |
| `src/components/forms/CareerRoleForm.tsx` | Admin job role creation form | `CareerRoleForm` | `src/components/ui/Button.tsx`, `src/lib/utils/cn.ts` |
| `src/components/forms/ContactForm.tsx` | Contact page message submission form | `ContactForm` | `src/lib/validators/inquiry.ts`, `src/lib/utils/cn.ts` |
| `src/components/forms/EventPublishingRequestForm.tsx` | Institutional event request form | `EventPublishingRequestForm` | `src/lib/utils/cn.ts` |
| `src/components/forms/EventRegistrationSection.tsx` | Public event registration form | `EventRegistrationSection` | `src/components/ui/Button.tsx`, `src/lib/utils/cn.ts` |
| `src/components/forms/InquiryForm.tsx` | Multi-type inquiry form with honeypot | `InquiryForm` | `src/lib/validators/inquiry.ts`, `src/lib/utils/cn.ts` |
| `src/components/forms/JoinForm.tsx` | Community waitlist signup form | `JoinForm` | `src/lib/utils/cn.ts` |
| `src/components/forms/NewsletterForm.tsx` | Inline newsletter subscription form | `NewsletterForm` | `src/lib/utils/cn.ts` |

#### Marketing Components (`src/components/marketing/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/components/marketing/ContactFaqAccordion.tsx` | FAQ accordion for contact page | `ContactFaqAccordion` | `src/lib/utils/cn.ts` |
| `src/components/marketing/EcosystemDiagram.tsx` | SVG radial learner ecosystem diagram | `EcosystemDiagram` | None |
| `src/components/marketing/EvidenceFlowDiagram.tsx` | 5-step evidence generation pipeline | `EvidenceFlowDiagram`, `EvidenceStep` | `src/lib/utils/cn.ts` |
| `src/components/marketing/FeatureGrid.tsx` | Bento feature card grid with 3D tilt | `FeatureGrid`, `FeatureItem` | `src/lib/utils/cn.ts` |
| `src/components/marketing/JourneyTimeline.tsx` | 7-step student learning journey timeline | `JourneyTimeline` | `src/lib/utils/cn.ts` |
| `src/components/marketing/MarketingCtaLink.tsx` | Styled marketing button link | `MarketingCtaLink` | `src/lib/utils/cn.ts` |
| `src/components/marketing/MarketingSectionHeader.tsx` | Animated section header with eyebrow | `MarketingSectionHeader` | `src/lib/utils/cn.ts` |
| `src/components/marketing/MarketingShell.tsx` | Marketing layout wrapper with ambient orbs | `MarketingShell` | `src/lib/utils/cn.ts` |
| `src/components/marketing/PhaseTimeline.tsx` | Phase timeline with detail modal | `PhaseTimeline`, `PhaseStep` | `src/lib/utils/cn.ts` |
| `src/components/marketing/PhaseOneExpanded.tsx` | Phase 1 detail modal content | `PhaseOneExpanded` | `src/components/marketing/SectionTitle.tsx`, `src/lib/utils/cn.ts` |
| `src/components/marketing/PhaseTwoExpanded.tsx` | Phase 2 detail modal content | `PhaseTwoExpanded` | `src/components/marketing/SectionTitle.tsx`, `src/lib/utils/cn.ts` |
| `src/components/marketing/PhaseThreeExpanded.tsx` | Phase 3 detail modal content | `PhaseThreeExpanded` | `src/components/marketing/SectionTitle.tsx`, `src/lib/utils/cn.ts` |
| `src/components/marketing/PhaseFourExpanded.tsx` | Phase 4 detail modal content | `PhaseFourExpanded` | `src/components/marketing/SectionTitle.tsx`, `src/lib/utils/cn.ts` |
| `src/components/marketing/SectionTitle.tsx` | Compact section H4 heading | `SectionTitle` | None |
| `src/components/marketing/TwoColumnCompare.tsx` | Side-by-side comparative model cards | `TwoColumnCompare` | `src/lib/utils/cn.ts` |

#### Marketing Page Views (`src/components/marketing/pages/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `CommunityPage.tsx` | Community & mentorship marketing view | `CommunityPage` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid`, `MarketingCtaLink` |
| `ContactPage.tsx` | Contact enquiry page view | `ContactPage` | `MarketingShell`, `MarketingSectionHeader`, `InquiryForm`, `ContactFaqAccordion` |
| `EcosystemPage.tsx` | Ecosystem architecture page view | `EcosystemPage` | `MarketingShell`, `MarketingSectionHeader`, `EcosystemDiagram`, `FeatureGrid` |
| `EvidencePage.tsx` | Proof-of-work & telemetry page view | `EvidencePage` | `MarketingShell`, `MarketingSectionHeader`, `EvidenceFlowDiagram` |
| `ExperiencesPage.tsx` | Workshops & hackathons marketing view | `ExperiencesPage` | `MarketingShell`, `MarketingSectionHeader`, `PhaseTimeline` |
| `FaqPage.tsx` | Frequently asked questions page view | `FaqPage` | `MarketingShell`, `MarketingSectionHeader` |
| `HomeMarketing.tsx` | Main homepage landing view | `HomeMarketing` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid`, `EcosystemDiagram`, `EvidenceFlowDiagram` |
| `IndustryPage.tsx` | Industry collaboration page view | `IndustryPage` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid`, `MarketingCtaLink` |
| `InstitutionalPilotPage.tsx` | 4-week pilot proposal page view | `InstitutionalPilotPage` | `MarketingShell`, `MarketingSectionHeader`, `InquiryForm`, `PhaseTimeline` |
| `InstitutionsPage.tsx` | Institutional partner marketing view | `InstitutionsPage` | `MarketingShell`, `MarketingSectionHeader`, `TwoColumnCompare`, `InquiryForm` |
| `JoinMarketing.tsx` | Community waitlist page view | `JoinMarketing` | `MarketingShell`, `JoinForm` |
| `MentorsPage.tsx` | Mentor network marketing view | `MentorsPage` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid` |
| `PathwaysPage.tsx` | Career pathways marketing view | `PathwaysPage` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid` |
| `ProjectsPage.tsx` | Student projects showcase page view | `ProjectsPage` | `MarketingShell`, `MarketingSectionHeader`, `FeatureGrid` |
| `ResidencyPage.tsx` | 12-week execution residency page view | `ResidencyPage` | `MarketingShell`, `MarketingSectionHeader`, `PhaseTimeline` |

---

### App Router Directory (`src/app/`)

#### Root App Files
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `src/app/globals.css` | Global styles, Tailwind setup, animations | CSS tokens & classes | None |
| `src/app/layout.tsx` | Root HTML & typography layout | `RootLayout`, `metadata`, `viewport` | `src/app/globals.css` |
| `src/app/not-found.tsx` | Global 404 page | `NotFound` | `src/lib/marketing/links.ts` |
| `src/app/robots.ts` | Robots.txt generator | `robots()` | None |
| `src/app/sitemap.ts` | Sitemap XML generator | `sitemap()` | `src/lib/marketing/links.ts` |

#### Public Site Routes (`src/app/(site)/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `(site)/layout.tsx` | Public site shell with header & footer | `SiteLayout` | `src/components/layout/*` |
| `(site)/page.tsx` | Homepage route handler | `HomePage`, `metadata` | `src/components/marketing/pages/HomeMarketing.tsx` |
| `(site)/about/page.tsx` | About page route handler | `AboutPage`, `metadata` | `src/components/marketing/pages/HomeMarketing.tsx` |
| `(site)/community/page.tsx` | Community route handler | `Page`, `metadata` | `src/components/marketing/pages/CommunityPage.tsx` |
| `(site)/contact/page.tsx` | Contact route handler | `Page`, `metadata` | `src/components/marketing/pages/ContactPage.tsx` |
| `(site)/ecosystem/page.tsx` | Ecosystem route handler | `Page`, `metadata` | `src/components/marketing/pages/EcosystemPage.tsx` |
| `(site)/evidence/page.tsx` | Evidence route handler | `Page`, `metadata` | `src/components/marketing/pages/EvidencePage.tsx` |
| `(site)/experiences/page.tsx` | Experiences route handler | `Page`, `metadata` | `src/components/marketing/pages/ExperiencesPage.tsx` |
| `(site)/institutions/page.tsx` | Institutions route handler | `Page`, `metadata` | `src/components/marketing/pages/InstitutionsPage.tsx` |

#### Admin Routes (`src/app/(admin)/`)
| File Path | Purpose | Key Exports | Internal Dependencies |
| :--- | :--- | :--- | :--- |
| `(admin)/admin/layout.tsx` | Admin section layout wrapper | `Layout` | `src/components/admin/AdminShell.tsx` |
| `(admin)/admin/page.tsx` | Admin overview dashboard | `AdminHomePage` | `src/lib/utils/cn.ts` |
| `(admin)/admin/contacts/page.tsx` | Contact messages admin manager | `ContactsPage` | `src/components/admin/*`, `src/components/ui/*` |

---

## 4. Styling System

### Style Definition Locations
1. **Global CSS**: `src/app/globals.css` (Contains `@import "tailwindcss";`, `@layer base` HSL tokens, `@theme` mappings, keyframe animations, `.glass-surface` utilities, `.glow-*` box-shadows, and `.scan-line` styles).
2. **Tailwind Config**: Tailored directly inside `globals.css` using Tailwind v4 syntax (`@theme`).
3. **Component-Level Utility Strings**: Utility classes defined inside component constants or merged via `cn()`.

### Design Tokens & Values
| Token Category | Variable Name | Actual Value / HSL Definition | Usage |
| :--- | :--- | :--- | :--- |
| **Background Color** | `--background` | `222 47% 6%` (`#080c14`) | Main app background |
| **Foreground Color** | `--foreground` | `210 40% 96%` (`#f0f4fa`) | Primary text color |
| **Card Background** | `--card` | `222 40% 9%` (`#0e1420`) | Cards & containers |
| **Border Color** | `--border` | `220 22% 20%` (`#283244`) | Borders & dividers |
| **Brand Primary** | `--brand-600` | `262 83% 58%` (`#7c3aed` / Purple) | Primary buttons & gradients |
| **Cyan Accent** | `--cyan-500` | `188 86% 48%` (`#22d3ee` / Cyan) | Secondary accents & badges |
| **Ring Color** | `--ring` | `248 82% 62%` (`#6366f1` / Indigo) | Focus rings & glows |
| **Font Family** | `--font-geist-sans` | `Geist Sans` (latin, swap) | Body typography |
| **Mono Font** | `--font-geist-mono` | `Geist Mono` (latin, swap) | Code / metrics typography |

### Reusable vs One-Off Styles
- **Reusable**: Base buttons (`src/components/ui/Button.tsx`), modals (`src/components/ui/Modal.tsx`), glassmorphism cards (`.glass-surface`), and animated section headers (`MarketingSectionHeader.tsx`).
- **One-Off**: SVG math & pulse rings in `EcosystemDiagram.tsx`, custom timeline connectors in `JourneyTimeline.tsx`, scanner animation in `globals.css`.

### Inconsistent Styling Patterns
- **Color Format Hardcoding**: Most components rely on HSL variables (`text-[hsl(var(--cyan-400))]`), but several legacy components hardcode raw Hex/RGBA strings (e.g. `rgba(34, 211, 238, 0.15)` in `EcosystemDiagram.tsx`).

---

## 5. Component Hierarchy

### Public Marketing Site Layout
```text
RootLayout (src/app/layout.tsx)
└── SiteLayout (src/app/(site)/layout.tsx)
    ├── SiteHeader (src/components/layout/SiteHeader.tsx)
    │   └── Nav (src/components/layout/Nav.tsx)
    ├── [Page View Component] (e.g. HomeMarketing, ContactPage)
    │   └── MarketingShell (src/components/marketing/MarketingShell.tsx)
    │       ├── MarketingSectionHeader (src/components/marketing/MarketingSectionHeader.tsx)
    │       ├── FeatureGrid / TwoColumnCompare / PhaseTimeline / Diagram Components
    │       └── InquiryForm / ContactForm / JoinForm
    ├── FooterCtaStrip (src/components/layout/FooterCtaStrip.tsx)
    ├── SiteFooter (src/components/layout/SiteFooter.tsx)
    └── RoutePrefetcher (src/components/layout/RoutePrefetcher.tsx)
```

### Admin Dashboard Layout
```text
RootLayout (src/app/layout.tsx)
└── AdminLayout (src/app/(admin)/admin/layout.tsx)
    └── AdminShell (src/components/admin/AdminShell.tsx)
        ├── AdminHeader (src/components/admin/AdminHeader.tsx)
        │   └── SignOutButton (src/components/auth/SignOutButton.tsx)
        ├── AdminSidebar (src/components/admin/AdminSidebar.tsx)
        └── [Admin Page Route] (e.g. admin/page.tsx, admin/contacts/page.tsx)
            ├── FiltersBar (src/components/admin/FiltersBar.tsx)
            ├── AdminTable (src/components/admin/AdminTable.tsx)
            └── Modal (src/components/ui/Modal.tsx)
```

---

## 6. Data & State Flow

### State Architecture
- **Global Auth & Session**: Managed server-side by Supabase SSR (`@supabase/ssr`) with cookie synchronization inside Next.js Middleware (`src/proxy.ts`).
- **Component Local State**: React standard `useState` handles modal toggles, accordion expansions, form inputs, and tab navigation.
- **URL Parameter State**: `useSearchParams` controls active form selection topics (e.g. `?topic=partnership`) and admin filter state.

### Data Fetching Strategy
- **Client Form Submissions**: `fetch('/api/contact')`, `fetch('/api/join')`, `fetch('/api/public/careers/apply')` perform JSON `POST` requests to API endpoints.
- **Admin Data Operations**: Admin pages fetch count data and paginated records from `/api/admin/*` using `safeCount()` and `load()` handlers wrapped in `React.useCallback`.
- **Database Layer**: All API routes execute typed query calls via `createSupabaseAdminClient()` or `createSupabaseServerClient()`.

### Routing Structure
- `/` — Homepage landing view (`HomeMarketing`)
- `/about` — About overview (`HomeMarketing` variant)
- `/institutions` — Institutional partner page (`InstitutionsPage`)
- `/institutional-pilot` — 4-week pilot proposal page (`InstitutionalPilotPage`)
- `/contact` — Contact page & inquiry form (`ContactPage`)
- `/join` — Waitlist signup page (`JoinMarketing`)
- `/admin` — Protected admin dashboard overview (`AdminHomePage`)
- `/admin/contacts` — Protected admin contacts manager (`ContactsPage`)

---

## 7. Naming & Conventions Observed

| Category | Observed Convention | Examples | Inconsistencies / Notes |
| :--- | :--- | :--- | :--- |
| **File Names** | PascalCase for components, camelCase for utilities/apis | `SiteHeader.tsx`, `cn.ts`, `requireAdmin.ts` | Route files follow Next.js convention (`page.tsx`, `layout.tsx`, `route.ts`). |
| **Component Names** | PascalCase matching file basenames | `function SiteHeader()`, `function Button()` | Consistent across components. |
| **Directory Names** | kebab-case or parenthesized Next.js groups | `(site)`, `(admin)`, `forms/`, `marketing/` | Consistent grouping. |
| **API Responses** | Typed `{ ok: boolean, data?, error? }` objects | `ApiOk<T>`, `ApiFail` | Standardized pattern across all API handlers. |

import type { Metadata, Viewport } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import RoutePrefetcher from "@/components/layout/RoutePrefetcher";
import AnimatedBackground from "@/components/ui/AnimatedBackground";

const SITE_NAME = "Sophrion";
const SITE_URL = "https://sophrion.in";
const DEFAULT_TITLE = "Sophrion — Future Within | Industry-Integrated Active Learning Ecosystem";
const DEFAULT_DESCRIPTION =
  "Sophrion builds industry-integrated active learning experiences that connect students with mentors, experts, projects, communities and industry to develop future-ready capability.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0b10",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s - Sophrion`,
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — OG Image`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.jpg"],
  },
  formatDetection: { email: false, address: false, telephone: false },
  category: "Education",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <RoutePrefetcher />

      <SiteHeader />
      <main className="mx-auto w-full flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
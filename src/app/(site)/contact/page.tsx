import type { Metadata } from "next";
import ContactPage from "@/components/marketing/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Sophrion — Let's Build Together",
  description:
    "Connect with Sophrion for institutional partnerships, student pathways, residency squads, mentor networks, and industry collaboration.",
};

export default function Page() {
  return <ContactPage />;
}

import type { Metadata } from "next";
import InstitutionalPilotPage from "@/components/marketing/pages/InstitutionalPilotPage";

export const metadata: Metadata = {
  title: "Institutional Pilot",
  description:
    "Test the complete Sophrion operating model inside your institution with a 4-Week structured pilot.",
};

export default function Page() {
  return <InstitutionalPilotPage />;
}

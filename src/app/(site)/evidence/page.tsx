import type { Metadata } from "next";
import EvidencePage from "@/components/marketing/pages/EvidencePage";

export const metadata: Metadata = {
  title: "Evidence & Impact — Sophrion",
  description:
    "Explore how Sophrion turns active learning, project work, and feedback into observable evidence of student development and institutional impact.",
};

export default function Page() {
  return <EvidencePage />;
}

import type { Metadata } from "next";
import ExperiencesPage from "@/components/marketing/pages/ExperiencesPage";

export const metadata: Metadata = {
  title: "Experiences — Workshops, Challenges, Projects & Residency",
  description:
    "Explore the connected experiences inside the Sophrion ecosystem: Workshops, Challenges, Hackathons, Projects, Industry Interactions, and Residency.",
};

export default function Page() {
  return <ExperiencesPage />;
}

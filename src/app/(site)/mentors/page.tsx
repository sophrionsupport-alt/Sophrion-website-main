import type { Metadata } from "next";
import MentorsPage from "@/components/marketing/pages/MentorsPage";

export const metadata: Metadata = {
  title: "Mentors & Experts — Sophrion",
  description:
    "Explore the distributed human expertise network inside Sophrion — connecting learners with junior mentors, domain experts, industry professionals, faculty, and community contributors.",
};

export default function Page() {
  return <MentorsPage />;
}

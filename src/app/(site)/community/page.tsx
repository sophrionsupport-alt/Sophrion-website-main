import type { Metadata } from "next";
import CommunityPage from "@/components/marketing/pages/CommunityPage";

export const metadata: Metadata = {
  title: "Community — Sophrion",
  description:
    "Explore the Sophrion Community — the human network bringing together learners, mentors, experts, faculty, industry professionals, and contributors across the active learning ecosystem.",
};

export default function Page() {
  return <CommunityPage />;
}

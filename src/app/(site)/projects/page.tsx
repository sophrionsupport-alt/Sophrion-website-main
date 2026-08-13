import type { Metadata } from "next";
import ProjectsPage from "@/components/marketing/pages/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects & Showcase — Sophrion",
  description:
    "Explore authentic projects built across the Sophrion active learning ecosystem — turning problems, knowledge, collaboration, and feedback into visible proof-of-work.",
};

export default function Page() {
  return <ProjectsPage />;
}

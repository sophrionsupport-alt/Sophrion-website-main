import type { Metadata } from "next";
import ResidencyPage from "@/components/marketing/pages/ResidencyPage";

export const metadata: Metadata = {
  title: "Residency — Deep Execution Environment",
  description:
    "Residency is an immersive Sophrion experience where learners spend sustained time working on meaningful problems in collaborative squads with agile sprints, layered mentorship, and public proof-of-work.",
};

export default function Page() {
  return <ResidencyPage />;
}

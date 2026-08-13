import type { Metadata } from "next";
import IndustryPage from "@/components/marketing/pages/IndustryPage";

export const metadata: Metadata = {
  title: "Industry Collaboration — Sophrion",
  description:
    "Bring the real world into learning. Connect with emerging engineering talent through authentic problem statements, architectural reviews, and applied project tracks.",
};

export default function Page() {
  return <IndustryPage />;
}

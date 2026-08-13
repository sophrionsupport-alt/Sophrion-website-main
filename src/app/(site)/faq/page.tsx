import type { Metadata } from "next";
import FaqPage from "@/components/marketing/pages/FaqPage";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Sophrion",
  description:
    "Understand how Sophrion works, who it is for, how the ecosystem operates, institutional pilots, assessment, and what participants can expect.",
};

export default function Page() {
  return <FaqPage />;
}

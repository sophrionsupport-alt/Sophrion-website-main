import type { Metadata } from "next";
import PathwaysPage from "@/components/marketing/pages/PathwaysPage";

export const metadata: Metadata = {
  title: "Pathways — Explore Domains. Build Your Own Path.",
  description:
    "Sophrion pathways are exploration environments across AI systems, data intelligence, creative technology, cloud & cyber, and smart engineering.",
};

export default function Page() {
  return <PathwaysPage />;
}

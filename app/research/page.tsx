import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { researchContent } from "../../content/research";

export const metadata: Metadata = {
  title: "Research | Globe Technologies",
  description:
    "Explore Globe Technologies research, publications, white papers, innovation and partnerships.",
};

export default function ResearchPage() {
  return <InstitutionalPage content={researchContent} />;
}

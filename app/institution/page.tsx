import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { institutionLandingContent } from "../../content/institution";

export const metadata: Metadata = {
  title: "The Company | Globe Technologies",
  description:
    "Learn about Globe Technologies, the company structure, and the two current divisions: Globe Software and Globe Media.",
};

export default function InstitutionPage() {
  return <InstitutionalPage content={institutionLandingContent} />;
}

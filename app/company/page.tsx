import type { Metadata } from "next";
import {CompanyPage } from "../../components/layout/company-page";
import { companyLandingContent } from "../../content/company";

export const metadata: Metadata = {
  title: "Overview | Globe Technologies",
  description:
    "Learn about Globe Technologies, the company structure, and the two current divisions: Globe Software and Globe Media.",
};

export default function CompanyPageRoute() {
  return <CompanyPage content={companyLandingContent} />;
}


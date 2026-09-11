import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { aboutContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyAbout");

export default function AboutPage() {
  return (
    <CompanyPage
      content={aboutContent}
      structuredData={createPageStructuredData("companyAbout")}
    />
  );
}

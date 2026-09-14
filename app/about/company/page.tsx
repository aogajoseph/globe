import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { companyContent } from "../../../content/about/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyAbout");

export default function AboutPage() {
  return (
    <CompanyPage
      content={companyContent}
      structuredData={createPageStructuredData("companyAbout")}
    />
  );
}

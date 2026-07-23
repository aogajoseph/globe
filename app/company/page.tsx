import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { companyLandingContent } from "../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("company");

export default function CompanyPageRoute() {
  return (
    <CompanyPage
      content={companyLandingContent}
      structuredData={createPageStructuredData("company")}
    />
  );
}

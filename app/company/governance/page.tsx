import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { governanceContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyGovernance");

export default function GovernancePage() {
  return (
    <CompanyPage
      content={governanceContent}
      structuredData={createPageStructuredData("companyGovernance")}
    />
  );
}


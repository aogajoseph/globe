import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { purposeContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyPurpose");

export default function PurposePage() {
  return (
    <CompanyPage
      content={purposeContent}
      structuredData={createPageStructuredData("companyPurpose")}
    />
  );
}



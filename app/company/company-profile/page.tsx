import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { companyProfileContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyProfile");

export default function CompanyProfilePage() {
  return (
    <CompanyPage
      content={companyProfileContent}
      structuredData={createPageStructuredData("companyProfile")}
    />
  );
}


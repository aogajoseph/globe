import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { careersContent } from "../../content/careers";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("careers");

export default function CareersPage() {
  return (
    <CompanyPage
      content={careersContent}
      structuredData={createPageStructuredData("careers")}
    />
  );
}


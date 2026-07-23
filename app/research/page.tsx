import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { researchContent } from "../../content/research";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("research");

export default function ResearchPage() {
  return (
    <CompanyPage
      content={researchContent}
      structuredData={createPageStructuredData("research")}
    />
  );
}


import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { researchDivisionContent } from "../../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisionsResearch");

export default function ResearchDivisionPage() {
  return (
    <CompanyPage
      content={researchDivisionContent}
      structuredData={createPageStructuredData("divisionsResearch")}
    />
  );
}


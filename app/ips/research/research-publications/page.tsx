import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";
import { researchPublicationsContent } from "../../../../content/ips/research/research-publications";
import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata("ipsResearch");

export default function ResearchPublicationsPage() {
  return (
    <CompanyPage
      content={researchPublicationsContent}
      structuredData={createPageStructuredData("ipsResearch")}
    />
  );
}
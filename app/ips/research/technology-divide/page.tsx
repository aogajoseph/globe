import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";

import { technologyDivideContent } from "../../../../content/ips/research/technology-divide";

import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata(
  "ipsResearchTechnologyDivide",
);

export default function TechnologyDivide() {
  return (
    <CompanyPage
      content={technologyDivideContent}
      structuredData={createPageStructuredData(
        "ipsResearchTechnologyDivide",
      )}
    />
  );
}
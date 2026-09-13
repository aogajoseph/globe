import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";

import { digitalFinancialCoordinationContent } from "../../../../content/ips/research/digital-financial-coordination-african-community-groups";

import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata(
  "ipsResearchDigitalFinancialCoordination",
);

export default function DigitalFinancialCoordinationPage() {
  return (
    <CompanyPage
      content={digitalFinancialCoordinationContent}
      structuredData={createPageStructuredData(
        "ipsResearchDigitalFinancialCoordination",
      )}
    />
  );
}
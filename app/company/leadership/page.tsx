import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { leadershipContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyLeadership");

export default function LeadershipPage() {
  return (
    <CompanyPage
      content={leadershipContent}
      structuredData={createPageStructuredData("companyLeadership")}
    />
  );
}


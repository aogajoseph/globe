import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { missionContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyMission");

export default function MissionPage() {
  return (
    <CompanyPage
      content={missionContent}
      structuredData={createPageStructuredData("companyMission")}
    />
  );
}


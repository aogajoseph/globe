import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { missionAndVisionContent } from "../../../content/about";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyMissionAndVision");

export default function MissionAndVisionPage() {
  return (
    <CompanyPage
      content={missionAndVisionContent}
      structuredData={createPageStructuredData("companyMissionAndVision")}
    />
  );
}


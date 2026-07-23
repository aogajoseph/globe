import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { visionContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyVision");

export default function VisionPage() {
  return (
    <CompanyPage
      content={visionContent}
      structuredData={createPageStructuredData("companyVision")}
    />
  );
}


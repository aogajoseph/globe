import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { divisionsLandingContent } from "../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisions");

export default function DivisionsPage() {
  return (
    <CompanyPage
      content={divisionsLandingContent}
      structuredData={createPageStructuredData("divisions")}
    />
  );
}


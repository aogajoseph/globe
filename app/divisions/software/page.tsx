import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { softwareDivisionContent } from "../../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisionsSoftware");

export default function SoftwareDivisionPage() {
  return (
    <CompanyPage
      content={softwareDivisionContent}
      structuredData={createPageStructuredData("divisionsSoftware")}
    />
  );
}


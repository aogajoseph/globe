import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { mediaDivisionContent } from "../../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisionsMedia");

export default function MediaDivisionPage() {
  return (
    <CompanyPage
      content={mediaDivisionContent}
      structuredData={createPageStructuredData("divisionsMedia")}
    />
  );
}


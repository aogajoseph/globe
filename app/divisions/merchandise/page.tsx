import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { merchandiseDivisionContent } from "../../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisionsMerchandise");

export default function MerchandiseDivisionPage() {
  return (
    <CompanyPage
      content={merchandiseDivisionContent}
      structuredData={createPageStructuredData("divisionsMerchandise")}
    />
  );
}


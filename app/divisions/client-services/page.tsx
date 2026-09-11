import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { clientServicesDivisionContent } from "../../../content/divisions";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("divisionsClientServices");

export default function ClientServicesDivisionPage() {
  return (
    <CompanyPage
      content={clientServicesDivisionContent}
      structuredData={createPageStructuredData("divisionsClientServices")}
    />
  );
}


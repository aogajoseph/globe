import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { constitutionContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyConstitution");

export default function ConstitutionPage() {
  return (
    <CompanyPage
      content={constitutionContent}
      structuredData={createPageStructuredData("companyConstitution")}
    />
  );
}


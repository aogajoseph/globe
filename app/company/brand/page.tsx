import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { brandContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyBrand");

export default function BrandPage() {
  return (
    <CompanyPage
      content={brandContent}
      structuredData={createPageStructuredData("companyBrand")}
    />
  );
}


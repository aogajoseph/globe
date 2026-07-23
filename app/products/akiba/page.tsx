import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { akibaProductContent } from "../../../content/products";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("productsAkiba");

export default function AkibaPage() {
  return (
    <CompanyPage
      content={akibaProductContent}
      structuredData={createPageStructuredData("productsAkiba")}
    />
  );
}


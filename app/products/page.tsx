import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { productsLandingContent } from "../../content/products";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("products");

export default function ProductsPage() {
  return (
    <CompanyPage
      content={productsLandingContent}
      structuredData={createPageStructuredData("products")}
    />
  );
}


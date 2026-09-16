import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { productUpdatesCategoryContent } from "../../../content/blog";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsProductUpdates");

export default function ProductUpdatesPage() {
  return (
    <CompanyPage
      content={productUpdatesCategoryContent}
      structuredData={createPageStructuredData("newsProductUpdates")}
    />
  );
}


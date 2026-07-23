import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { newsCategoryContent } from "../../../content/news";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsProductUpdates");

export default function ProductUpdatesPage() {
  return (
    <CompanyPage
      content={newsCategoryContent.productUpdates}
      structuredData={createPageStructuredData("newsProductUpdates")}
    />
  );
}


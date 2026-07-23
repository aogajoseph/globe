import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { newsLandingContent } from "../../content/news";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("news");

export default function NewsPage() {
  return (
    <CompanyPage
      content={newsLandingContent}
      structuredData={createPageStructuredData("news")}
    />
  );
}


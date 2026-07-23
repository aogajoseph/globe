import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { newsCategoryContent } from "../../../content/news";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsEvents");

export default function EventsPage() {
  return (
    <CompanyPage
      content={newsCategoryContent.events}
      structuredData={createPageStructuredData("newsEvents")}
    />
  );
}


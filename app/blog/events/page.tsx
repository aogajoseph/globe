import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { eventsCategoryContent } from "../../../content/blog/events";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsEvents");

export default function EventsPage() {
  return (
    <CompanyPage
      content={eventsCategoryContent}
      structuredData={createPageStructuredData("newsEvents")}
    />
  );
}


import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { newsCategoryContent } from "../../../content/news";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsPressReleases");

export default function PressReleasesPage() {
  return (
    <CompanyPage
      content={newsCategoryContent.pressReleases}
      structuredData={createPageStructuredData("newsPressReleases")}
    />
  );
}


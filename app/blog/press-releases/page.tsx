import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { pressReleasesCategoryContent } from "../../../content/blog/press-releases";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsPressReleases");

export default function PressReleasesPage() {
  return (
    <CompanyPage
      content={pressReleasesCategoryContent}
      structuredData={createPageStructuredData("newsPressReleases")}
    />
  );
}


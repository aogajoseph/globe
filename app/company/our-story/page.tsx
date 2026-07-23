import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { ourStoryContent } from "../../../content/company";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("companyOurStory");

export default function OurStoryPage() {
  return (
    <CompanyPage
      content={ourStoryContent}
      structuredData={createPageStructuredData("companyOurStory")}
    />
  );
}


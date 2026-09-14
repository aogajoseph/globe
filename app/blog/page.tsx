import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { blogLandingContent } from "../../content/blog";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("blog");

export default function BlogPage() {
  return (
    <CompanyPage
      content={blogLandingContent}
      structuredData={createPageStructuredData("blog")}
    />
  );
}


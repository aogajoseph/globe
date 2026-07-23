import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { newsCategoryContent } from "../../../content/news";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("newsCompany");

export default function CompanyNewsPage() {
  return (
    <CompanyPage
      content={newsCategoryContent.companyNews}
      structuredData={createPageStructuredData("newsCompany")}
    />
  );
}


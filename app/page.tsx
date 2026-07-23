import { CompanyPage } from "../components/layout/company-page";
import { homePageContent } from "../content/home";
import { createPageMetadata, createPageStructuredData } from "../lib/seo";

export const metadata = createPageMetadata("home");

export default function AboutPage() {
  return (
    <CompanyPage
      content={homePageContent}
      structuredData={createPageStructuredData("home")}
    />
  );
}

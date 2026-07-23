import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { contactContent } from "../../content/contact";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("contact");

export default function ContactPage() {
  return (
    <CompanyPage
      content={contactContent}
      structuredData={createPageStructuredData("contact")}
    />
  );
}


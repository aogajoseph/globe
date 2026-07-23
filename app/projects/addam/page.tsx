import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { addamProjectContent } from "../../../content/projects";
import { createPageMetadata, createPageStructuredData } from "../../../lib/seo";

export const metadata: Metadata = createPageMetadata("projectsAddam");

export default function AddamPage() {
  return (
    <CompanyPage
      content={addamProjectContent}
      structuredData={createPageStructuredData("projectsAddam")}
    />
  );
}

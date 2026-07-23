import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { projectsLandingContent } from "../../content/projects";
import { createPageMetadata, createPageStructuredData } from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("projects");

export default function ProjectsPage() {
  return (
    <CompanyPage
      content={projectsLandingContent}
      structuredData={createPageStructuredData("projects")}
    />
  );
}

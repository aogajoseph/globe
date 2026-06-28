import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { projectsLandingContent } from "../../content/projects";

export const metadata: Metadata = {
  title: "Projects | Globe Technologies",
  description:
    "Explore long-term initiatives at Globe Technologies, beginning with Addam.",
};

export default function ProjectsPage() {
  return <InstitutionalPage content={projectsLandingContent} />;
}


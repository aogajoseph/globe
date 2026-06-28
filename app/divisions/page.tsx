import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { divisionsLandingContent } from "../../content/divisions";

export const metadata: Metadata = {
  title: "Divisions | Globe Technologies",
  description:
    "Explore Globe Software and Globe Media within the Globe Technologies company structure.",
};

export default function DivisionsPage() {
  return <InstitutionalPage content={divisionsLandingContent} />;
}

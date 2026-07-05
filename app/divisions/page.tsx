import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { divisionsLandingContent } from "../../content/divisions";

export const metadata: Metadata = {
  title: "Divisions | Globe Technologies",
  description:
    "Explore Globe Software and Globe Media within the Globe Technologies company structure.",
};

export default function DivisionsPage() {
  return <CompanyPage content={divisionsLandingContent} />;
}



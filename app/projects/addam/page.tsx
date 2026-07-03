import type { Metadata } from "next";
import { CompanyPage } from "../../../components/layout/company-page";
import { addamContent } from "../../../content/projects";

export const metadata: Metadata = {
  title: "Addam | Projects",
  description:
    "Addam is the initial long-term project placeholder within Globe Technologies.",
};

export default function AddamPage() {
  return <CompanyPage content={addamContent} />;
}


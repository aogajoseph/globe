import type { Metadata } from "next";
import { InstitutionalPage } from "../../../components/layout/company-page";
import { softwareDivisionContent } from "../../../content/divisions";

export const metadata: Metadata = {
  title: "Globe Software | Divisions",
  description:
    "Globe Software is the software division of Globe Technologies, focused on researching, designing, developing and maintaining software products and digital platforms.",
};

export default function SoftwareDivisionPage() {
  return <InstitutionalPage content={softwareDivisionContent} />;
}



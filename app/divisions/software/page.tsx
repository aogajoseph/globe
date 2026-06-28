import type { Metadata } from "next";
import { InstitutionalPage } from "../../../components/layout/institutional-page";
import { softwareDivisionContent } from "../../../content/divisions";

export const metadata: Metadata = {
  title: "Globe Software | Divisions",
  description:
    "Globe Software is the software division of Globe Technologies, focused on durable digital systems and infrastructure.",
};

export default function SoftwareDivisionPage() {
  return <InstitutionalPage content={softwareDivisionContent} />;
}

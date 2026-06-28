import type { Metadata } from "next";
import { InstitutionalPage } from "../../../components/layout/institutional-page";
import { mediaDivisionContent } from "../../../content/divisions";

export const metadata: Metadata = {
  title: "Globe Media | Divisions",
  description:
    "Globe Media is the media division of Globe Technologies, focused on researching, creating and publishing educational and creative media.",
};

export default function MediaDivisionPage() {
  return <InstitutionalPage content={mediaDivisionContent} />;
}



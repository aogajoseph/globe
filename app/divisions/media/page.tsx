import type { Metadata } from "next";
import { InstitutionalPage } from "../../../components/layout/institutional-page";
import { mediaDivisionContent } from "../../../content/divisions";

export const metadata: Metadata = {
  title: "Globe Media | Divisions",
  description:
    "Globe Media is the media division of Globe Technologies, focused on communication, publishing, and knowledge sharing.",
};

export default function MediaDivisionPage() {
  return <InstitutionalPage content={mediaDivisionContent} />;
}

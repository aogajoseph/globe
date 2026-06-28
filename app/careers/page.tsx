import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { careersContent } from "../../content/careers";

export const metadata: Metadata = {
  title: "Careers | Globe Technologies",
  description:
    "Explore careers at Globe Technologies, including life at Globe, culture, learning, wellness and recruitment.",
};

export default function CareersPage() {
  return <InstitutionalPage content={careersContent} />;
}

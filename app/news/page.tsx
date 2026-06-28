import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { newsLandingContent } from "../../content/news";

export const metadata: Metadata = {
  title: "News | Globe Technologies",
  description:
    "Read company news, product updates, press releases and events from Globe Technologies.",
};

export default function NewsPage() {
  return <InstitutionalPage content={newsLandingContent} />;
}

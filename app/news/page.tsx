import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { newsLandingContent } from "../../content/news";

export const metadata: Metadata = {
  title: "News | Globe Technologies",
  description:
    "Read company news, product updates, press releases and events from Globe Technologies.",
};

export default function NewsPage() {
  return <CompanyPage content={newsLandingContent} />;
}



import type { Metadata } from "next";

import { CompanyPage } from "../../components/layout/company-page";
import { ipsContent } from "../../content/ips";
import {
  createPageMetadata,
  createPageStructuredData,
} from "../../lib/seo";

export const metadata: Metadata = createPageMetadata("ips");

export default function IntellectualPropertyPage() {
  return (
    <CompanyPage
      content={ipsContent}
      structuredData={createPageStructuredData("ips")}
    />
  );
}
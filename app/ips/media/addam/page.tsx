import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";
import { addamContent } from "../../../../content/ips/media/addam";
import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata("ipsMediaAddam");

export default function AddamPage() {
  return (
    <CompanyPage
      content={addamContent}
      structuredData={createPageStructuredData("ipsMediaAddam")}
    />
  );
}
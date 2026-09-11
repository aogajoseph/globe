import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";
import { storeContent } from "../../../../content/ips/merchandise/store";
import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata("ipsMerchandise");

export default function StorePage() {
  return (
    <CompanyPage
      content={storeContent}
      structuredData={createPageStructuredData("ipsMerchandise")}
    />
  );
}
import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";
import { akibaContent } from "../../../../content/ips/software/akiba";
import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata("ipsSoftwareAkiba");

export default function AkibaPage() {
  return (
    <CompanyPage
      content={akibaContent}
      structuredData={createPageStructuredData("ipsSoftwareAkiba")}
    />
  );
}
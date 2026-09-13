import type { Metadata } from "next";

import { CompanyPage } from "../../../../components/layout/company-page";

import { villageCityEffectAfricaContent } from "../../../../content/ips/research/village-city-effect-africa";

import {
  createPageMetadata,
  createPageStructuredData,
} from "../../../../lib/seo";

export const metadata: Metadata = createPageMetadata(
  "ipsResearchVillageCityEffectAfrica",
);

export default function VillageCityEffectAfrica() {
  return (
    <CompanyPage
      content={villageCityEffectAfricaContent}
      structuredData={createPageStructuredData(
        "ipsResearchVillageCityEffectAfrica",
      )}
    />
  );
}
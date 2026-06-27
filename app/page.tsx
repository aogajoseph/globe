import { InstitutionSection } from "../components/layout/institution-section";
import { PlaceholderPage } from "../components/common/placeholder-page";

export default function HomePage() {
  return (
    <InstitutionSection
      title="Foundation Phase"
      subtitle="Globe Technologies website architecture"
      intro="This phase establishes the shared layout, design tokens, and reusable systems that future institutional pages will build on."
    >
      <PlaceholderPage
        title="Home"
        description="The homepage content is intentionally deferred until Phase 2."
      />
    </InstitutionSection>
  );
}

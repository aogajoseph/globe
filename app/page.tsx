import { InstitutionSection } from "../components/layout/institution-section";
import { PlaceholderPage } from "../components/common/placeholder-page";

export default function HomePage() {
  return (
    <InstitutionSection
      title="Foundation Phase"
      subtitle="Globe Technologies company platform"
      intro="This phase establishes the shared layout, design tokens, and reusable systems that future company pages will build on."
    >
      <PlaceholderPage
        title="Home"
        description="The homepage content is intentionally deferred until the company summary phase."
      />
    </InstitutionSection>
  );
}

import { InstitutionalPage } from "../../../components/layout/institutional-page";
import { newsCategoryContent } from "../../../content/news";

export default function EventsPage() {
  return <InstitutionalPage content={newsCategoryContent.events} />;
}

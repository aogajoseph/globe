import { CompanyPage } from "../../../components/layout/company-page";
import { newsCategoryContent } from "../../../content/news";

export default function EventsPage() {
  return <CompanyPage content={newsCategoryContent.events} />;
}



import type { Metadata } from "next";
import { CompanyPage } from "../../components/layout/company-page";
import { contactContent } from "../../content/contact";

export const metadata: Metadata = {
  title: "Contact | Globe Technologies",
  description:
    "Contact Globe Technologies for general enquiries, partnerships, careers, media and office location information.",
};

export default function ContactPage() {
  return <CompanyPage content={contactContent} />;
}



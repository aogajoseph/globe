import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/institutional-page";
import { contactContent } from "../../content/contact";

export const metadata: Metadata = {
  title: "Contact | Globe Technologies",
  description:
    "Contact Globe Technologies for general enquiries, partnerships, careers, media and office location information.",
};

export default function ContactPage() {
  return <InstitutionalPage content={contactContent} />;
}



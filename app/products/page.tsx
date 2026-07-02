import type { Metadata } from "next";
import { InstitutionalPage } from "../../components/layout/company-page";
import { productsLandingContent } from "../../content/products";

export const metadata: Metadata = {
  title: "Products | Globe Technologies",
  description:
    "Explore the product architecture for Globe Technologies, beginning with Akiba and prepared for future expansion.",
};

export default function ProductsPage() {
  return <InstitutionalPage content={productsLandingContent} />;
}



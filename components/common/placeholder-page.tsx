import { Badge } from "@/components/common/badge";
import { Card } from "@/components/common/card";
import { Paragraph } from "@/components/common/paragraph";

type PlaceholderPageProps = {
  title: string;
  description: string;
};

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <Card className="space-y-4">
      <Badge>Placeholder route</Badge>
      <h1 className="text-h2">{title}</h1>
      <Paragraph>{description}</Paragraph>
    </Card>
  );
}

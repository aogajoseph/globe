import { ImageSection } from "./image-section";

type PanoramicImageSectionProps = {
  src: string;
  alt?: string;
  id?: string;
  className?: string;
};

export function PanoramicImageSection(props: PanoramicImageSectionProps) {
  return <ImageSection {...props} variant="panoramic" />;
}

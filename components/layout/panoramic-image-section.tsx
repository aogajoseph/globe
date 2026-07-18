import { OptimizedImage } from "../common/optimized-image";
import { cn } from "../../lib/utils";

type PanoramicImageSectionProps = {
  src: string;
  alt?: string;
  id?: string;
  className?: string;
};

export function PanoramicImageSection({
  src,
  alt = "",
  id,
  className,
}: PanoramicImageSectionProps) {
  return (
    <figure id={id} className={cn("py-14 md:py-20", className)}>
      <div className="relative aspect-[21/9] max-h-44 w-full overflow-hidden rounded-sm sm:max-h-52 md:max-h-72 lg:max-h-none">
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, var(--container-width)"
        />
      </div>
    </figure>
  );
}

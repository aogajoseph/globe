import { OptimizedImage } from "../common/optimized-image";
import { cn } from "../../lib/utils";

export type ImageVariant = "panoramic" | "editorial" | "feature";

type ImageSectionProps = {
  src: string;
  alt?: string;
  id?: string;
  caption?: string;
  variant?: ImageVariant;
  className?: string;
};

const variantStyles: Record<
  ImageVariant,
  { figure: string; container: string }
> = {
  panoramic: {
    figure: "py-14 md:py-20",
    container:
      "relative aspect-[21/9] max-h-44 w-full overflow-hidden rounded-sm sm:max-h-52 md:max-h-72 lg:max-h-none",
  },
  editorial: {
    figure: "py-14 md:py-20",
    container:
      "relative aspect-[16/9] max-h-56 w-full overflow-hidden rounded-sm sm:max-h-64 md:max-h-80 lg:max-h-none",
  },
  feature: {
    figure: "py-14 md:py-20",
    container:
      "relative mx-auto aspect-[4/3] max-h-80 w-full max-w-2xl overflow-hidden rounded-sm md:max-h-96 lg:max-h-none",
  },
};

export function ImageSection({
  src,
  alt = "",
  id,
  caption,
  variant = "panoramic",
  className,
}: ImageSectionProps) {
  const styles = variantStyles[variant];

  return (
    <figure id={id} className={cn(styles.figure, className)}>
      <div className={styles.container}>
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={
            variant === "feature"
              ? "(max-width: 768px) 100vw, 42rem"
              : "(max-width: 768px) 100vw, var(--container-width)"
          }
        />
      </div>
      {caption ? (
        <figcaption className="mt-4 text-caption text-[rgb(var(--color-muted))]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

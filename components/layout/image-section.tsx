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
  fullBleed?: boolean;
};

const variantStyles: Record<
  ImageVariant,
  { figure: string; container: string }
> = {
  panoramic: {
    figure: "py-14 md:py-20",
    container:
      "relative aspect-[16/9] max-h-72 w-full overflow-hidden rounded-sm sm:max-h-80 md:max-h-[32rem] lg:max-h-none",
  },

  editorial: {
    figure: "py-14 md:py-20",
    container:
      "relative aspect-[14/9] w-full overflow-hidden rounded-sm",
  },

  feature: {
    figure: "py-14 md:py-20",
    container:
      "relative mx-auto aspect-[4.25/3] w-full max-w-2xl overflow-hidden rounded-sm",
  },
};

export function ImageSection({
  src,
  alt = "",
  id,
  caption,
  variant = "panoramic",
  className,
  fullBleed = false,
}: ImageSectionProps) {
  const styles = variantStyles[variant];

  return (
    <figure
      id={id}
      className={cn(styles.figure, className)}
    >
      <div
        className={cn(
          styles.container,
          fullBleed && "rounded-none",
        )}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          fill
          loading={variant === "feature" ? "eager" : "lazy"}
          className="object-cover object-center"
          sizes={
            variant === "feature"
              ? "(max-width: 768px) 100vw, 42rem"
              : "100vw"
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
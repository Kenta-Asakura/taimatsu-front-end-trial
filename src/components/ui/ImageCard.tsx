export type ImageCardVariant =
  'categories' | 'pickups' | 'brands' | 'articles' | 'feature'

/**
 * Per-variant sizing, measured directly in Figma (free tier — no Dev Mode inspector)
 * Single source of truth: a card reused across sections only needs its size
 * changed here once, not at every call site.
 */
const variantConfig: Record<
  ImageCardVariant,
  {
    align: 'left' | 'center'
    containerClassName: string
    imageClassName: string
  }
> = {
  // Category tile: image (60/90) sits centered inside a wider container (110/211) — not stretched.
  categories: {
    align: 'center',
    containerClassName: 'w-[110px] md:w-[211px]',
    imageClassName: 'h-[60px] w-[60px] md:h-[90px] md:w-[89px]',
  },
  // Pickups, Brands, and Articles card: image fills the container, portrait ratio.
  pickups: {
    align: 'left',
    containerClassName: 'w-[80px] md:w-[205px]',
    imageClassName: 'h-[80px] w-full md:h-[205px]',
  },
  brands: {
    align: 'left',
    containerClassName: 'w-[174px] md:w-[320px]',
    imageClassName: 'h-[109px] w-full md:h-[200px]',
  },
  articles: {
    align: 'left',
    containerClassName: 'w-[174px] md:w-[320px]',
    imageClassName: 'h-[174px] w-full md:h-[320px]',
  },
  feature: {
    align: 'left',
    containerClassName: 'w-full',
    imageClassName: 'w-full aspect-video',
  },
}

type ImageCardProps = {
  variant: ImageCardVariant
  imageSrc: string
  imageSrc2x?: string /** 2x-density export — added to srcSet so retina/high-DPI screens load the sharper asset instead of upscaling imageSrc. */
  imageAlt: string
  label: string
}

export function ImageCard({
  variant,
  imageSrc,
  imageSrc2x,
  imageAlt,
  label,
}: ImageCardProps) {
  const { align, containerClassName, imageClassName } = variantConfig[variant]
  const alignClasses =
    align === 'center' ? 'items-center text-center' : 'text-left'

  return (
    <div
      className={`flex flex-col gap-2 md:gap-5 ${alignClasses} ${containerClassName}`.trim()}
    >
      <img
        src={imageSrc}
        srcSet={imageSrc2x ? `${imageSrc} 1x, ${imageSrc2x} 2x` : undefined}
        alt={imageAlt}
        loading="lazy"
        className={`object-cover ${imageClassName}`}
      />
      <span className="text-label text-(--color-ink)">{label}</span>
    </div>
  )
}

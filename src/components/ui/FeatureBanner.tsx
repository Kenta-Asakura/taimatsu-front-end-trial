export type FeatureBannerItem = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  caption: string
}

type FeatureBannerProps = {
  categoryLabel: string
  heroItem: FeatureBannerItem
  secondaryItems: FeatureBannerItem[]
}

function FeatureCard({
  item,
  className = '',
  imageClassName = '',
}: {
  item: FeatureBannerItem
  className?: string
  imageClassName?: string
}) {
  return (
    <div className={`flex flex-col gap-2 md:gap-3 ${className}`.trim()}>
      <img
        src={item.imageSrc}
        srcSet={
          item.imageSrc2x
            ? `${item.imageSrc} 1x, ${item.imageSrc2x} 2x`
            : undefined
        }
        alt={item.imageAlt}
        loading="lazy"
        className={`w-full object-cover ${imageClassName}`.trim()}
      />
      <span className="text-body-md md:text-body-lg leading-normal font-bold text-(--color-ink)">
        {item.caption}
      </span>
    </div>
  )
}

// Category feature banner: a vertical (tategaki) category label beside one
// hero card and a row of secondary cards. On mobile the label sits only as
// tall as its own text, top-aligned beside a stacked hero-then-row layout;
// on desktop the same label stretches (`self-stretch`) to match the row's
// full height beside a hero-then-secondary-row layout — one flex structure
// covers both screenshots without breakpoint-specific branching.
export function FeatureBanner({
  categoryLabel,
  heroItem,
  secondaryItems,
}: FeatureBannerProps) {
  return (
    <div className="flex gap-4 md:gap-8">
      <span className="text-heading-sm md:text-heading-lg shrink-0 self-start font-bold text-(--color-ink) [text-orientation:upright] [writing-mode:vertical-rl] md:self-stretch">
        {categoryLabel}
      </span>

      <div className="flex flex-1 flex-col gap-3 md:flex-row md:gap-6">
        <FeatureCard
          item={heroItem}
          className="md:flex-1"
          imageClassName="aspect-video md:h-full md:aspect-auto"
        />
        <div className="flex flex-1 gap-3 md:gap-6">
          {secondaryItems.map((item, i) => (
            <FeatureCard
              key={i}
              item={item}
              className="flex-1"
              imageClassName="aspect-4/3 md:h-full md:aspect-auto"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

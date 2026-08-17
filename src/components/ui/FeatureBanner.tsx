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
  // 'single' renders one secondary item full-width; 'double' renders two.
  secondaryVariant?: 'single' | 'double'
}

function FeatureCard({
  item,
  className = '',
  imageClassName = '',
  textClassName = 'px-2 md:pl-0',
}: {
  item: FeatureBannerItem
  className?: string
  imageClassName?: string
  textClassName?: string
}) {
  return (
    <div
      className={`flex flex-col bg-(--color-surface) md:bg-inherit ${className}`.trim()}
    >
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
      <span
        className={`text-body-md md:text-body-lg py-2 leading-normal font-bold text-(--color-ink) md:pt-5 md:pb-0 ${textClassName}`.trim()}
      >
        {item.caption}
      </span>
    </div>
  )
}

// Vertical (tategaki) category label beside a hero card and a row of secondary cards.
export function FeatureBanner({
  categoryLabel,
  heroItem,
  secondaryItems,
  secondaryVariant = 'double',
}: FeatureBannerProps) {
  const shownItems =
    secondaryVariant === 'single' ? secondaryItems.slice(0, 1) : secondaryItems

  return (
    <div className="flex gap-7 md:gap-[58px]">
      <span className="text-body-lg md:text-heading-md shrink-0 self-start font-bold [text-orientation:upright] [writing-mode:vertical-rl] md:self-stretch">
        {categoryLabel}
      </span>

      <div className="flex flex-1 flex-col gap-[15px] md:flex-row md:gap-6">
        <FeatureCard
          item={heroItem}
          className="md:flex-1"
          imageClassName="min-h-[199px] max-h-[622px] md:h-full"
        />

        <div className="flex flex-1 gap-3 md:gap-6">
          {shownItems.map((item, i) => (
            <FeatureCard
              key={i}
              item={item}
              className="flex-1"
              imageClassName={
                secondaryVariant === 'double'
                  ? 'min-h-[95px] max-h-[187px] md:h-full'
                  : 'min-h-[199px] max-h-[622px] md:h-full'
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

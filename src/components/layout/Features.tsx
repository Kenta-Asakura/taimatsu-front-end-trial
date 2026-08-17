import { Chevron } from '@/components/ui/Chevron'
import {
  FeatureBanner,
  type FeatureBannerItem,
} from '@/components/ui/FeatureBanner'
import { LinkArrowButton } from '@/components/ui/LinkArrowButton'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type FeatureEntry = {
  category: string
  heroItem: FeatureBannerItem
  secondaryItems: FeatureBannerItem[]
  secondaryVariant?: 'single' | 'double'
}

type FeaturesProps = {
  entries: FeatureEntry[]
}

// Nav is derived from `entries` (kept 1:1, avoids nav/content drift) and
// stays inert, same static convention as HamburgerMenu/StoreSearch (see
// docs/decisions.md).
export function Features({ entries }: FeaturesProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader className="mb-10.5 md:mb-10">特集</SectionHeader>

      <div className="mb-10 md:mb-24">
        <ul className="scrollbar-features flex gap-5 overflow-x-auto pb-4 md:gap-4">
          {entries.map((entry, i) => (
            <li key={entry.category} className="shrink-0">
              <button
                type="button"
                className={`text-body-md md:text-body-lg inline-flex items-center gap-1 font-bold ${
                  i === 0 ? 'text-(--color-ink)' : 'text-(--color-ink-muted)'
                }`}
              >
                {entry.category}
                <Chevron
                  direction="down"
                  className="hidden md:ml-3 md:inline-block"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-10 md:gap-24">
        {entries.map((entry) => (
          <FeatureBanner
            key={entry.category}
            categoryLabel={entry.category}
            heroItem={entry.heroItem}
            secondaryItems={entry.secondaryItems}
            secondaryVariant={entry.secondaryVariant}
          />
        ))}
      </div>

      <div className="mt-8 flex justify-end md:mt-2.5">
        <span className="inline-block">
          <LinkArrowButton>もっと見る</LinkArrowButton>
        </span>
      </div>
    </div>
  )
}

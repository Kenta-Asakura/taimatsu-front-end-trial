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
}

type FeaturesProps = {
  entries: FeatureEntry[]
}

// Nav is derived from `entries` (kept 1:1, avoids nav/content drift) and
// stays inert, same static convention as HamburgerMenu/StoreSearch (see
// docs/decisions.md).
export function Features({ entries }: FeaturesProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <SectionHeader>特集</SectionHeader>

      <div className="border-b border-(--color-border)">
        <ul className="flex gap-6 overflow-x-auto md:gap-10">
          {entries.map((entry, i) => (
            <li key={entry.category} className="shrink-0">
              <button
                type="button"
                className={`text-body-md md:text-body-lg inline-flex items-center gap-1 py-3 font-bold ${
                  i === 0 ? 'text-(--color-ink)' : 'text-(--color-ink-muted)'
                }`}
              >
                {entry.category}
                <Chevron direction="down" className="hidden md:inline-block" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-(--spacing-row-gap-mobile) md:gap-(--spacing-row-gap-desktop)">
        {entries.map((entry) => (
          <FeatureBanner
            key={entry.category}
            categoryLabel={entry.category}
            heroItem={entry.heroItem}
            secondaryItems={entry.secondaryItems}
          />
        ))}
      </div>

      <div className="flex justify-end">
        <span className="inline-block">
          <LinkArrowButton>もっと見る</LinkArrowButton>
        </span>
      </div>
    </div>
  )
}

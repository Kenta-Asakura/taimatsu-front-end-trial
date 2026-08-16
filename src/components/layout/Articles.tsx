import { ImageCard } from '@/components/ui/ImageCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type ArticleEntry = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  label: string
}

type ArticlesProps = {
  entries: ArticleEntry[]
}

// Content lives with the page, not here — same presentation-only pattern
// as Categories/Brands/Features/NewProducts/Pickups.
export function Articles({ entries }: ArticlesProps) {
  return (
    <div className="flex flex-col gap-3">
      <SectionHeader>Articles</SectionHeader>

      <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
        {entries.map((entry, i) => (
          <ImageCard
            key={i}
            variant="articles"
            imageSrc={entry.imageSrc}
            imageSrc2x={entry.imageSrc2x}
            imageAlt={entry.imageAlt}
            label={entry.label}
          />
        ))}
      </div>
    </div>
  )
}

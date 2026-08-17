import { Button } from '@/components/ui/Button'
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
    <div className="flex flex-col">
      <SectionHeader className="mb-6 md:mb-10">読みもの</SectionHeader>

      <div className="flex flex-wrap justify-center gap-x-[15px] gap-y-[21px] md:gap-(--spacing-card-gap-desktop)">
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

      <div className="mt-7.75 flex justify-center md:mt-12">
        <Button variant="secondary">もっと見る</Button>
      </div>
    </div>
  )
}

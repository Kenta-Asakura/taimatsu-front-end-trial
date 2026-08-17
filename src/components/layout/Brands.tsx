import { Button } from '@/components/ui/Button'
import { ImageCard } from '@/components/ui/ImageCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type BrandEntry = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  label: string
}

type BrandsProps = {
  entries: BrandEntry[]
  storeLabels: string[]
}

// Content lives with the page, not here — same presentation-only pattern
// as Categories/Features/NewProducts.
export function Brands({ entries, storeLabels }: BrandsProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader>いろいろなブランド</SectionHeader>

      <div className="mt-6 flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
        {entries.map((entry, i) => (
          <ImageCard
            key={i}
            variant="brands"
            imageSrc={entry.imageSrc}
            imageSrc2x={entry.imageSrc2x}
            imageAlt={entry.imageAlt}
            label={entry.label}
          />
        ))}
      </div>

      <div className="mt-12 flex w-full flex-col justify-center gap-3 self-stretch md:mt-8 md:flex-row md:gap-[24px]">
        {storeLabels.map((label, i) => (
          <Button key={i} variant="secondary">
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

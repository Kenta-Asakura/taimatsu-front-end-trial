import { ImageCard } from '@/components/ui/ImageCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type PickupEntry = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  label: string
}

type PickupsProps = {
  entries: PickupEntry[]
}

// Content lives with the page, not here — same presentation-only pattern
// as Categories/Brands/Features/NewProducts.
export function Pickups({ entries }: PickupsProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader className="mb-6">ピックアップ</SectionHeader>

      <div className="flex flex-wrap justify-center gap-x-(--spacing-card-gap-mobile) gap-y-(--spacing-row-gap-mobile) md:gap-x-(--spacing-card-gap-desktop) md:gap-y-(--spacing-row-gap-desktop)">
        {entries.map((entry, i) => (
          <ImageCard
            key={i}
            variant="pickups"
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

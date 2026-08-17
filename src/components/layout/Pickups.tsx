import { ImageCard } from '@/components/ui/ImageCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type PickupEntry = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  label: string
}

type PickupsProps = {
  entriesDesktop: PickupEntry[]
  entriesMobile: PickupEntry[]
}

function PickupsGrid({ entries }: { entries: PickupEntry[] }) {
  return (
    <>
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
    </>
  )
}

// Mobile and desktop use different repeat counts, so each gets its own
// entries array and grid, toggled via Tailwind rather than JS.
export function Pickups({ entriesDesktop, entriesMobile }: PickupsProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader className="mb-6">ピックアップ</SectionHeader>

      <div className="flex flex-wrap justify-center gap-x-(--spacing-card-gap-mobile) gap-y-(--spacing-row-gap-mobile) md:hidden">
        <PickupsGrid entries={entriesMobile} />
      </div>

      <div className="hidden flex-wrap justify-center gap-x-(--spacing-card-gap-desktop) gap-y-(--spacing-row-gap-desktop) md:flex">
        <PickupsGrid entries={entriesDesktop} />
      </div>
    </div>
  )
}

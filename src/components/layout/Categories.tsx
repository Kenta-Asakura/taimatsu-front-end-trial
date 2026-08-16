import { ImageCard } from '@/components/ui/ImageCard'

export type CategoryEntry = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  label: string
}

type CategoriesProps = {
  entries: CategoryEntry[]
}

// Content lives with the page (App.tsx), not here — this component stays
// presentation-only, so a future CMS/Shopify data source only needs to
// change the caller, not this component.
export function Categories({ entries }: CategoriesProps) {
  return (
    <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
      {entries.map((entry, i) => (
        <ImageCard
          key={i}
          variant="categories"
          imageSrc={entry.imageSrc}
          imageSrc2x={entry.imageSrc2x}
          imageAlt={entry.imageAlt}
          label={entry.label}
        />
      ))}
    </div>
  )
}

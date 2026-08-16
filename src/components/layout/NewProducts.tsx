import { Button } from '@/components/ui/Button'
import { Chevron } from '@/components/ui/Chevron'
import { ProductCard } from '@/components/ui/ProductCard'
import { SectionHeader } from '@/components/ui/SectionHeader'

export type NewProduct = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
  badgeLabel?: string
  name: string
  price: number
}

type NewProductsProps = {
  products: NewProduct[]
}

// Product data is owned by the page (App.tsx), not this component — see
// docs/decisions.md. This stays presentation-only: layout + the static
// chevron/CTA chrome.
export function NewProducts({ products }: NewProductsProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <SectionHeader>New Products</SectionHeader>
        <button
          type="button"
          aria-label="次の商品"
          className="hidden shrink-0 md:block"
        >
          <Chevron direction="right" />
        </button>
      </div>

      {/* Desktop row is capped to exactly 6 cards' width (6 × 12.875rem
          card + 5 × 1.5rem gap = 84.75rem) so cards beyond the 6th are only
          reachable by scrolling; mobile drops the cap and wraps instead
          (see docs/decisions.md). */}
      <div className="scrollbar-thin-ink flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:max-w-[84.75rem] md:flex-nowrap md:justify-start md:gap-(--spacing-card-gap-desktop) md:overflow-x-auto md:pb-5">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="main">もっと見る</Button>
      </div>
    </div>
  )
}

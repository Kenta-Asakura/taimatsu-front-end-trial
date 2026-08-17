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

// Content lives with the page, not here — same presentation-only pattern
// as Categories/Brands/Features/Pickups/Articles.
export function NewProducts({ products }: NewProductsProps) {
  return (
    <div className="flex flex-col">
      <SectionHeader className="mb-6 md:mb-5">新商品</SectionHeader>

      {/* Desktop is capped to 6 cards wide; the rest scroll instead of
          wrapping like mobile does (see docs/decisions.md). */}
      <div className="relative">
        <div className="scrollbar-products mb-6 flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:max-w-339 md:flex-nowrap md:justify-start md:gap-(--spacing-card-gap-desktop) md:overflow-x-auto md:pb-5">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

        <button
          type="button"
          aria-label="次の商品"
          className="absolute top-35 -right-7.25 hidden shrink-0 translate-y-2/4 transform lg:block"
        >
          <Chevron direction="right" className="h-7.5 w-[15px]" />
        </button>
      </div>

      <div className="flex justify-center">
        <Button variant="main">もっと見る</Button>
      </div>
    </div>
  )
}

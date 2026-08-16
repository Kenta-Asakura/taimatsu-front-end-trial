import { useState } from 'react'

import FavoritesIcon from '@/assets/icons/favorites.svg?react'

type ProductCardProps = {
  imageSrc: string
  imageSrc2x?: string // 2x-density export
  imageAlt: string
  badgeLabel?: string // Top-right overlay, e.g. "NEW" — omit when the product has no badge.
  name: string // Yen amount as a number; formatted and suffixed with "円" at render time.
  price: number
}

// Favorites toggle: local useState per card. The icon itself is static;
// the surrounding circle's background swaps between beige-100 (off) and
// beige-200 (on).
export function ProductCard({
  imageSrc,
  imageSrc2x,
  imageAlt,
  badgeLabel,
  name,
  price,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="flex h-60.75 w-27.75 shrink-0 flex-col md:h-77.25 md:w-51.5">
      <div className="relative">
        <img
          src={imageSrc}
          srcSet={imageSrc2x ? `${imageSrc} 1x, ${imageSrc2x} 2x` : undefined}
          alt={imageAlt}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
        {badgeLabel && (
          <span className="bg-brand-red-dark md:text-body-sm absolute top-0 left-0 px-1.25 py-0.75 text-center text-[11px] font-extrabold text-(--color-white) md:min-w-12.5">
            {badgeLabel}
          </span>
        )}
      </div>

      <p className="text-body-sm md:text-body-md mt-1.75 leading-normal text-(--color-ink) md:mt-3.5">
        {name}
      </p>

      <div className="mt-auto flex items-center justify-between">
        <p className="flex flex-col items-start leading-normal text-(--color-ink)">
          <span className="md:text-body-xs text-[8px]">配送料無料</span>

          <span className="flex items-baseline gap-px">
            <span className="text-body-sm md:text-body-lg font-bold">
              {price.toLocaleString('ja-JP')}
            </span>
            <span className="text-body-xs md:text-body-sm">円</span>
          </span>
        </p>

        <button
          type="button"
          aria-pressed={isFavorite}
          aria-label={isFavorite ? 'お気に入りから削除' : 'お気に入りに追加'}
          onClick={() => setIsFavorite((favorite) => !favorite)}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full md:h-8 md:w-8 ${
            isFavorite ? 'bg-(--color-beige-200)' : 'bg-(--color-beige-100)'
          }`}
        >
          <FavoritesIcon
            aria-hidden="true"
            className="text-beige-200 h-3 w-3 fill-(--color-white) md:h-4.25 md:w-4.25"
          />
        </button>
      </div>
    </div>
  )
}

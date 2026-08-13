import SearchIcon from '@/assets/icons/search.svg?react'
import ProfileIcon from '@/assets/icons/profile.svg?react'
import FavoritesIcon from '@/assets/icons/favorites.svg?react'
import CartIcon from '@/assets/icons/cart.svg?react'
import FaqIcon from '@/assets/icons/faq.svg?react'
import InfoIcon from '@/assets/icons/info.svg?react'

type MainNavProps = {
  className?: string
}

// Header's right-side icon cluster. Named MainNav per direct request —
// distinct from the deleted ui/MainNav (unrelated Photosnap leftover).
//
// All icons decorative/inert, same convention as ProductCard's favorites
// icon (see docs/decisions.md). Cart badge "0" is static, not live state.
export function MainNav({ className = '' }: MainNavProps) {
  return (
    <div className={`flex items-center gap-5 md:gap-8 ${className}`.trim()}>
      <SearchIcon aria-hidden="true" className="size-5" />

      <ProfileIcon aria-hidden="true" className="size-5" />

      <FavoritesIcon aria-hidden="true" className="size-5" />

      <span className="relative inline-flex size-5">
        <CartIcon aria-hidden="true" className="size-5" />

        <span
          aria-hidden="true"
          className="text-body-xs absolute -top-1 left-[55%] -translate-x-1/2 leading-none font-semibold text-(--color-ink)"
        >
          0
        </span>
      </span>

      <FaqIcon aria-hidden="true" className="size-5" />

      <InfoIcon aria-hidden="true" className="hidden size-5 md:block" />
    </div>
  )
}

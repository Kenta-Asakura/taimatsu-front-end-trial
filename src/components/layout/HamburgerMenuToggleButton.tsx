import { forwardRef } from 'react'
import HamburgerIcon from '@/assets/icons/hamburger.svg?react'

type HamburgerMenuToggleButtonProps = {
  isOpen: boolean
  onToggle: () => void
  className?: string
}

// Icon-only toggle — open state and panel content live in HamburgerMobileMenu.
export const HamburgerMenuToggleButton = forwardRef<
  HTMLButtonElement,
  HamburgerMenuToggleButtonProps
>(function HamburgerMenuToggleButton(
  { isOpen, onToggle, className = '' },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-expanded={isOpen}
      aria-controls="hamburger-menu-panel"
      aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
      onClick={onToggle}
      className={`shrink-0 ${className}`.trim()}
    >
      <HamburgerIcon aria-hidden="true" className="h-2.5 w-3" />
    </button>
  )
})

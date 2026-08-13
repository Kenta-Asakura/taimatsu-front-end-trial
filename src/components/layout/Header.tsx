import { useCallback, useRef, useState } from 'react'
import { BrandLogo } from '@/components/ui/BrandLogo'
import { Container } from '@/components/ui/Container'
import { HamburgerMenuToggleButton } from './HamburgerMenuToggleButton'
import { HamburgerMobileMenu } from './HamburgerMobileMenu'
import { HeaderLinks } from './HeaderLinks'
import { MainNav } from './MainNav'
import { SearchBar } from './SearchBar'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const handleToggle = useCallback(() => {
    setIsMenuOpen((open) => !open)
  }, [])

  const handleClose = useCallback(() => {
    setIsMenuOpen(false)
    toggleRef.current?.focus()
  }, [])

  return (
    <header className="border-b border-(--color-border) bg-(--color-surface) md:bg-gray-200 md:pr-12.5 md:pl-13.5">
      <Container className="max-w-[1624px] py-[15px] md:px-0 md:py-5.5">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-(--radius-custom-sm) focus:bg-(--color-surface) focus:px-4 focus:py-2 focus:text-(--color-ink)"
        >
          本文へスキップ
        </a>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4.25 md:gap-9.25">
            <HamburgerMenuToggleButton
              ref={toggleRef}
              isOpen={isMenuOpen}
              onToggle={handleToggle}
              className="md:hidden"
            />
            <BrandLogo />
            <HeaderLinks className="hidden md:flex" />
          </div>

          <MainNav />
        </div>

        <SearchBar className="mx-(--spacing-gutter-mobile) mt-[15px]" />
      </Container>

      <HamburgerMobileMenu isOpen={isMenuOpen} onClose={handleClose} />
    </header>
  )
}

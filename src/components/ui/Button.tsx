import type { ReactNode } from 'react'

export type ButtonVariant = 'main' | 'secondary' | 'tertiary'

// Universal across every variant: all three are bordered boxes with the same
const baseClasses =
  'inline-flex items-center justify-center text-body-md md:text-body-lg font-bold text-(--color-ink) border border-(--color-border) rounded-(--radius-custom-sm) h-(--spacing-button-height-mobile) md:h-(--spacing-button-height-desktop)'

// main/secondary share the same width: fixed per the design at both
// breakpoints — full-width/fluid on mobile (container-driven, matches the mobile frame), fixed 240px on desktop.
const wideClasses = 'w-full px-6 md:w-60'

// tertiary is the smaller, fixed-width box at both breakpoints (64px mobile / 96px desktop).
const narrowClasses = 'w-16 px-2 md:w-24'

const variantClasses: Record<ButtonVariant, string> = {
  main: `${wideClasses} bg-(--color-cta-surface)`,
  secondary: `${wideClasses}`, // No background utility — stays transparent so the section's own
  tertiary: `${narrowClasses} bg-(--color-brand-black) text-(--color-white)`,
}

type ButtonProps = {
  variant: ButtonVariant
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function Button({
  variant,
  children,
  href,
  onClick,
  className = '',
}: ButtonProps) {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  // This is a single static page with no real destinations yet — omitting href always renders a real <button>, never
  // a placeholder href="#" anchor, so link purpose stays honest (WCAG 2.4.4).
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}

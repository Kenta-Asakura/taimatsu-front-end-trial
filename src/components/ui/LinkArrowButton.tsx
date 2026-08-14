import type { ReactNode } from 'react'
import { Chevron } from './Chevron'

type LinkArrowButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  className?: string
}

export function LinkArrowButton({
  children,
  href,
  onClick,
  className = '',
}: LinkArrowButtonProps) {
  // Default font styling is color-ink-muted with bold, override if needed
  const classes =
    `w-full inline-flex items-center justify-between gap-1 text-body-md md:text-body-lg font-bold text-(--color-ink-muted) ${className}`.trim()
  const content = (
    <>
      {children}
      <Chevron direction="right" className="shrink-0" />
    </>
  )

  // This is a single static page with no real destinations yet (see
  // docs/decisions.md) — omitting href always renders a real <button>, never
  // a placeholder href="#" anchor, so link purpose stays (WCAG 2.4.4) compliant.
  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  )
}

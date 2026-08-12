import type { ReactNode } from 'react'

type SectionProps = {
  children: ReactNode
  className?: string
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section
      className={`mt-(--spacing-section-gap-mobile) mb-(--spacing-section-gap-mobile) md:mt-(--spacing-section-gap-desktop) md:mb-(--spacing-section-gap-desktop) ${className}`.trim()}
    >
      {children}
    </section>
  )
}

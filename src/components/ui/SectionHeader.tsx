import type { ReactNode } from 'react'

type SectionHeaderProps = {
  className?: string
  children: ReactNode
}

export function SectionHeader({
  className = '',
  children,
}: SectionHeaderProps) {
  return (
    <h2
      className={`text-heading-sm md:text-heading-lg text-(--color-ink-muted) ${className}`.trim()}
    >
      {children}
    </h2>
  )
}

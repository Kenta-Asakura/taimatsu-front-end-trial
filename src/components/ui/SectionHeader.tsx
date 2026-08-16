import type { ReactNode } from 'react'

type SectionHeaderProps = {
  children: ReactNode
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-heading-sm md:text-heading-lg text-(--color-ink-muted)">
      {children}
    </h2>
  )
}

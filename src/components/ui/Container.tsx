import type { ReactNode } from 'react'

export type ContainerVariant = 'content' | 'fluid'

// 'content' is always full available width, capped at the desktop ceiling
// (see --container-content-max in index.css), and applies the responsive
// side gutters. 'fluid' is always 100% width with no padding — for
// full-bleed sections that nest a 'content' Container inside for their text.
const variantClasses: Record<ContainerVariant, string> = {
  content:
    'w-full mx-auto items-center max-w-(--container-content-max) px-(--spacing-gutter-mobile) md:px-(--spacing-gutter-desktop)',
  fluid: 'w-full',
}

type ContainerProps = {
  variant?: ContainerVariant
  className?: string
  children: ReactNode
}

export function Container({
  variant = 'content',
  className = '',
  children,
}: ContainerProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </div>
  )
}

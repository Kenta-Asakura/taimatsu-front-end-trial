import AccordionIcon from '@/assets/icons/accordion.svg?react'

type ChevronProps = {
  /** 'right' matches the default orientation; 'down' rotates it 90°. */
  direction?: 'right' | 'down'
  className?: string
}

export function Chevron({ direction = 'right', className = '' }: ChevronProps) {
  return (
    <AccordionIcon
      aria-hidden="true"
      className={`h-[12px] w-[12px] font-medium text-(--color-ink) ${
        direction === 'down' ? 'rotate-90' : ''
      } ${className}`.trim()}
    />
  )
}

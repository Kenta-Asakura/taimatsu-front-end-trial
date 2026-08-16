import AccordionIcon from '@/assets/icons/accordion.svg?react'

type ChevronProps = {
  /** 'right' matches the default orientation; 'down'/'left' rotate it 90°/180°. */
  direction?: 'right' | 'down' | 'left'
  className?: string
}

const directionClass = {
  right: '',
  down: 'rotate-90',
  left: 'rotate-180',
}

export function Chevron({ direction = 'right', className = '' }: ChevronProps) {
  return (
    <AccordionIcon
      aria-hidden="true"
      className={`h-[12px] w-[12px] font-medium text-(--color-ink) ${directionClass[direction]} ${className}`.trim()}
    />
  )
}

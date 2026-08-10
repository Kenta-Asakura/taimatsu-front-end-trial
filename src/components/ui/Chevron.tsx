import accordionIcon from '@/assets/icons/accordion.svg'

type ChevronProps = {
  /** 'right' matches the exported asset as-is; 'down' rotates it 90°. */
  direction?: 'right' | 'down'
  className?: string
}

// Reuses the exported accordion.svg rather than inlining path data — the asset
// stays the single source of truth if the designer swaps it later. Rotation
// covers both observed uses: link-button chevron (right) and the seasonal
// section's static dropdown affordance (down).
export function Chevron({ direction = 'right', className = '' }: ChevronProps) {
  return (
    <img
      src={accordionIcon}
      alt=""
      aria-hidden="true"
      className={`h-4 w-auto ${direction === 'down' ? 'rotate-90' : ''} ${className}`.trim()}
    />
  )
}

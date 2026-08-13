type HeaderLinksProps = {
  className?: string
}

// Three groups, dividers between — visual grouping only, not semantic.
const linkGroups: readonly (readonly string[])[] = [
  ['婦人服', '紳士服', 'こども服'],
  ['コスメ・ケア', '生活雑貨', '家具・収納・家電'],
  ['食品'],
]

// Desktop-only; mobile uses HamburgerMenu. Inert <button>s, not href="#" —
// same convention as Button/LinkButton (see docs/decisions.md).
export function HeaderLinks({ className = '' }: HeaderLinksProps) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-6">
        {linkGroups.flatMap((group, groupIndex) => [
          groupIndex > 0 && (
            <li key={`divider-${groupIndex}`} aria-hidden="true">
              <span className="block h-4 w-px bg-(--color-border)" />
            </li>
          ),
          ...group.map((label) => (
            <li key={label}>
              <button
                type="button"
                className="text-body-lg text-nowrap text-(--color-ink)"
              >
                {label}
              </button>
            </li>
          )),
        ])}
      </ul>
    </nav>
  )
}

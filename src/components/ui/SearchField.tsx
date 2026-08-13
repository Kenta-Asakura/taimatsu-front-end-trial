import { useId } from 'react'
import { Button } from './Button'
import { SearchInput } from './SearchInput'

type SearchFieldProps = {
  placeholder?: string
  className?: string
}

// Reused search field across sections — distinct shape from layout/SearchBar
// (label, border, button), sharing only the icon+input via SearchInput.
//
// Search button reuses Button's tertiary variant (see App.tsx's demo).
// Inert like every control on this page (see docs/decisions.md).
export function SearchField({
  placeholder = '店名、住所',
  className = '',
}: SearchFieldProps) {
  const inputId = useId()

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className="text-body-sm mb-1 block text-(--color-ink)"
      >
        キーワードで探す
      </label>
      <div className="flex items-stretch gap-2">
        <SearchInput
          id={inputId}
          placeholder={placeholder}
          className="flex-1 rounded-(--radius-custom-sm) border border-(--color-border) px-3"
        />
        <Button variant="tertiary">検索</Button>
      </div>
    </div>
  )
}

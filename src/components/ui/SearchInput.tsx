import searchIcon from '@/assets/icons/search.svg'

type SearchInputProps = {
  id?: string
  placeholder?: string
  className?: string
}

// Shared icon+input pairing — everything else (dropdown, border, button,
// label) differs per usage; see layout/SearchBar and ui/SearchField.
//
// Inert like every control on this page (see docs/decisions.md).
export function SearchInput({
  id,
  placeholder,
  className = '',
}: SearchInputProps) {
  return (
    <div
      className={`flex items-center rounded-(--radius-custom-sm) border ${className}`.trim()}
    >
      <img
        src={searchIcon}
        alt=""
        aria-hidden="true"
        className="h-4 w-auto shrink-0"
      />
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="text-body-sm w-full text-(--color-ink-muted) placeholder:text-gray-100 focus:outline-none"
      />
    </div>
  )
}

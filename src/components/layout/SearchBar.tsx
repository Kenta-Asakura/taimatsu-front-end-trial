import { Chevron } from '@/components/ui/Chevron'
import { SearchInput } from '@/components/ui/SearchInput'

type SearchBarProps = {
  className?: string
}

// Mobile-only (md:hidden is intrinsic). Dropdown is specific to this row —
// see ui/SearchField for the reused bordered+button version; both share the
// icon+input pairing via ui/SearchInput.
//
// Inert like every control on this page (see docs/decisions.md).
export function SearchBar({ className = '' }: SearchBarProps) {
  return (
    <div
      className={`flex h-8.75 items-stretch gap-3.5 md:hidden ${className}`.trim()}
    >
      <label className="text-body-sm flex w-25.5 shrink-0 items-center justify-between border-transparent bg-gray-50 px-2 py-2.5 text-(--color-ink-muted)">
        <select
          defaultValue="all"
          className="appearance-none bg-transparent focus:outline-none"
        >
          <option value="all">すべて</option>
        </select>

        <Chevron direction="down" />
      </label>

      <SearchInput
        placeholder="キーワードで探す"
        className="w-61.75 flex-1 gap-1.5 border-transparent bg-gray-50 px-3.5"
      />
    </div>
  )
}

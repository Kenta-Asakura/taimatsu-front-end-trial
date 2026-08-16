import { useId } from 'react'
import { Button } from '@/components/ui/Button'
import { SearchInput } from '@/components/ui/SearchInput'
import { LinkArrowButton } from '@/components/ui/LinkArrowButton'
import { SectionHeader } from '@/components/ui/SectionHeader'

const browseLinks = [
  '近隣店舗から探す',
  '都道府県から探す',
  'サービスから探す',
  '取り扱い商品から探す',
]

// Inert like every control on this page (see docs/decisions.md).
export function StoreSearch() {
  const inputId = useId()

  return (
    <div className="flex flex-col gap-6">
      <SectionHeader>店舗を探す</SectionHeader>

      <div className="flex flex-col gap-3">
        <label
          htmlFor={inputId}
          className="text-body-xs md:text-body-sm block text-(--color-ink-muted)"
        >
          キーワードで探す
        </label>

        <div className="flex h-12 items-stretch gap-1.75 md:h-13 md:gap-3">
          <SearchInput
            id={inputId}
            placeholder="店名、住所"
            className="flex-1 rounded-(--radius-custom-sm) border border-(--color-border) bg-(--color-white) px-3 md:bg-transparent"
          />
          <Button variant="tertiary" className="h-full md:h-full">
            検索
          </Button>
        </div>
      </div>

      <ul className="-mx-(--spacing-gutter-mobile) flex flex-col flex-wrap md:mx-0 md:flex-row">
        {browseLinks.map((label) => (
          <li
            key={label}
            className="align-center flex min-h-15.25 flex-1 border-b border-(--color-border) px-[15px] transition-colors duration-200 hover:border-(--color-ink-muted) md:w-[320px] md:border-b-[3px] md:border-transparent"
          >
            <LinkArrowButton>{label}</LinkArrowButton>
          </li>
        ))}
      </ul>
    </div>
  )
}

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
        
        <div className="flex items-stretch gap-1.75 md:gap-3 h-12 md:h-13">
          <SearchInput
            id={inputId}
            placeholder="店名、住所"
            className="flex-1 rounded-(--radius-custom-sm) border border-(--color-border) px-3 bg-(--color-white) md:bg-transparent"
          />
          <Button variant="tertiary" className='h-full md:h-full'>検索</Button>
        </div>
      </div>

      <ul className="flex flex-wrap flex-col md:flex-row -mx-(--spacing-gutter-mobile) md:mx-0">
        {browseLinks.map((label) => (
          <li
            key={label}
            className="flex-1 flex align-center min-h-15.25 md:w-[320px] px-[15px] border-b md:border-b-[3px] border-(--color-border) md:border-transparent transition-colors duration-200 hover:border-(--color-ink-muted)"
          >
            <LinkArrowButton>{label}</LinkArrowButton>
          </li>
        ))}
      </ul>
    </div>
  )
}

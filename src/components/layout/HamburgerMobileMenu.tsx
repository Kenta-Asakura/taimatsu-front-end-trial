import { useEffect } from 'react'
import CloseIcon from '@/assets/icons/close.svg?react'
import PlusIcon from '@/assets/icons/plus.svg?react'
import categoryThumb from '@/assets/images/nav-product-category@2x.jpg'
import { LinkArrowButton } from '@/components/ui/LinkArrowButton'

// Every row shares one repeated placeholder thumbnail
const categoryLinks = [
  '婦人・レディース',
  '紳士・メンズ',
  'こども',
  'コスメ・ケア',
  '生活雑貨',
  '家具・収納・家電',
  '食品',
]

const infoLinks = [
  'おすすめ情報',
  'お買い得',
  'ReBrand Brandの資源循環',
  'カタログ',
]

const utilityLinks = [
  '店舗を探す',
  'ネトストアの便利なサービス',
  'Brand計画について',
  'Brandの募金券',
]

type HamburgerMobileMenuProps = {
  isOpen: boolean
  onClose: () => void
}

// Escape restores focus to the toggle via onClose; <main> is marked inert
// Category/info/utility rows are inert <button>s, "+"/chevron decorative
export function HamburgerMobileMenu({
  isOpen,
  onClose,
}: HamburgerMobileMenuProps) {
  useEffect(() => {
    if (!isOpen) return

    const main = document.getElementById('main-content')
    main?.setAttribute('inert', '')
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      main?.removeAttribute('inert')
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      id="hamburger-menu-panel"
      role="dialog"
      aria-modal="true"
      className="text-body-md fixed inset-0 z-50 min-h-dvh overflow-y-auto bg-(--color-surface) text-(--color-ink-muted)"
    >
      <div className="flex h-[56px] items-center border-b border-(--color-border) px-[15px] py-5.75">
        <button type="button" onClick={onClose} aria-label="メニューを閉じる">
          <CloseIcon
            aria-hidden="true"
            className="h-[10.5px] w-auto text-(--color-brand-black)"
          />
        </button>
      </div>

      <ul className="font-bold">
        {categoryLinks.map((label) => (
          <li
            key={label}
            className="flex h-20 items-center border-b border-(--color-border)"
          >
            <img
              src={categoryThumb}
              alt=""
              aria-hidden="true"
              className="w-20 shrink-0 self-stretch object-cover"
            />

            <button
              type="button"
              className="flex flex-1 items-center justify-between pr-4.25 pl-2.5"
            >
              {label}
              <PlusIcon
                aria-hidden="true"
                className="size-3 text-(--color-ink)"
              />
            </button>
          </li>
        ))}
      </ul>

      <ul className="font-bold">
        {infoLinks.map((label) => (
          <li
            key={label}
            className="flex h-20 items-center border-b border-(--color-border) pr-4.25 pl-2.5"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between"
            >
              {label}
              <PlusIcon aria-hidden="true" className="size-3" />
            </button>
          </li>
        ))}
      </ul>

      <ul>
        {utilityLinks.map((label) => (
          <li
            key={label}
            className="flex h-20 items-center border-b border-(--color-border) pr-4.25 pl-2.5"
          >
            <LinkArrowButton className="font-normal text-(--color-ink)">
              {label}
            </LinkArrowButton>
          </li>
        ))}
      </ul>
    </div>
  )
}

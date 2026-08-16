import { BrandLogo } from '@/components/ui/BrandLogo'
import { Container } from '@/components/ui/Container'
import { SocialLinks } from '@/components/ui/SocialLinks'

const linkColumns: readonly (readonly string[])[] = [
  [
    '店舗情報',
    'イベント',
    'ローカルニッポン',
    'BRAND SUPPORT',
    '空間設計',
    'よくある質問',
  ],
  [
    'ブランドの家',
    'ブランド&Cafe',
    'キャンプ場',
    'Found BRAND',
    'BRAND BOOKS',
    'BRAND HOTEL',
  ],
  [
    'BRAND APP',
    'カタログ',
    'BRAND CARD',
    'BRAND GIFT CARD',
    '法人のお客様へ',
    'Tax-Free Services',
  ],
  [
    'ニュースリリース',
    '採用情報',
    'ブランドメッセージ',
    'ブランドについて',
    '株式会社計画',
    '特定商取引法に関する表示・利用規約等',
  ],
]

const legalLinks = ['プライバシーポリシー', '外部送信ポリシー', '特定商取引法']

// Inert <button>s, same convention as HeaderLinks/LinkArrowButton (WCAG 2.4.4).
export function Footer() {
  return (
    <footer className="bg-(--color-gray-50)">
      <Container className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-8">
          {/* `contents` on mobile un-boxes this wrapper so BrandLogo/SocialLinks
              become direct flex items of the outer container and can be
              reordered independently (mobile: logo, links, social — desktop:
              logo+social grouped, links beside). A second <SocialLinks>
              instance was tried instead but duplicates its icons' SVG
              pattern/image ids, breaking the second instance's fills. */}
          <div className="contents md:flex md:flex-col md:gap-6">
            <BrandLogo className="order-1 h-8 w-32 md:order-none md:h-9 md:w-36" />
            <SocialLinks className="order-3 md:order-none" />
          </div>

          <div className="order-2 flex flex-col gap-8 md:order-none md:flex-row md:gap-16">
            {linkColumns.map((links, columnIndex) => (
              <ul
                key={columnIndex}
                className="flex flex-row flex-wrap gap-x-4 gap-y-3 md:flex-col md:gap-3"
              >
                {links.map((label) => (
                  <li key={label}>
                    <button
                      type="button"
                      className="text-body-sm leading-normal text-(--color-ink-muted)"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:mt-16 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map((label) => (
              <li key={label}>
                <button
                  type="button"
                  className="text-body-sm leading-normal text-(--color-ink-muted)"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <p className="text-body-sm leading-normal text-(--color-ink-muted)">
            Copyright ©BRAND Co., Ltd.
          </p>
        </div>
      </Container>
    </footer>
  )
}

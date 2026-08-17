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
    <footer className="bg-gray-50">
      <Container className="pt-6 pb-40.5 xl:pt-12.25 xl:pb-16.25">
        <div className="footer-grid min-h-57.5">
          <div className="md:max-w-67">
            <BrandLogo className="h-7.25 w-24 [grid-area:logo] max-xl:mb-5.25 xl:h-[39px] xl:w-32" />
          </div>

          <div className="mb-6 flex flex-col flex-wrap gap-6 [grid-area:links] xl:mb-10.5 xl:flex-row">
            {linkColumns.map((links, columnIndex) => (
              <ul
                key={columnIndex}
                className="flex flex-1 flex-row flex-wrap gap-x-4 xl:flex-col xl:gap-3 xl:gap-y-3"
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

          <ul className="flex flex-wrap gap-x-4 gap-y-2 [grid-area:legal] xl:self-center">
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

          <div className="md:max-w-67 md:content-end">
            <SocialLinks className="mb-10 items-end [grid-area:social] max-xl:mt-8.25 xl:mb-9" />
          </div>

          <p className="text-body-sm leading-normal text-(--color-ink-muted) [grid-area:copyright] xl:self-center xl:justify-self-end">
            Copyright ©BRAND Co., Ltd.
          </p>
        </div>
      </Container>
    </footer>
  )
}

type TopBannerProps = {
  className?: string
}

// Site-wide promotional strip. Copy and colors are approximated from a
// screenshot, not measured in Figma Dev Mode — reusing existing tokens
// (--color-brand-red, --color-cta-surface) rather than inventing new ones.
// Exact banner height/spacing/highlight-box values are unverified; flag in
// docs/design-questions.md once the real frame is available.
export function TopBanner({ className = '' }: TopBannerProps) {
  return (
    <div
      className={`bg-(--color-surface) text-(--color-brand-red) ${className}`.trim()}
    >
      <p className="text-link flex flex-wrap items-center justify-center gap-x-2 gap-y-1 px-(--spacing-gutter-mobile) py-2 text-center">
        <span className="font-bold">ネットストア限定</span>
        <span>対象の小物商品 税込5000円以上購入で</span>
        <span className="rounded-(--radius-custom-sm) bg-(--color-cta-surface) px-2 py-0.5 font-bold">
          配送料無料
        </span>
      </p>
    </div>
  )
}

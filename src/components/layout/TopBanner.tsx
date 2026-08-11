export function TopBanner() {
  return (
    <div
      className={
        'border-b border-(--color-gray-100) bg-(--color-surface) px-[55px] py-[5px] md:border-(--color-white) md:bg-(--color-gray-100) md:py-2.5'
      }
    >
      <p className="text-body-xs md:text-body-sm flex flex-wrap items-center justify-center gap-x-2 gap-y-1 font-bold">
        <span className="whitespace-nowrap text-(--color-brand-red)">
          ネットストア限定
        </span>
        <span className="whitespace-nowrap text-(--color-gray-500)">
          対象の小物商品 税込5000円以上購入で
        </span>
        <span className="text-body-md md:text-body-lg whitespace-nowrap text-(--color-brand-red)">
          配送料無料
        </span>
      </p>
    </div>
  )
}

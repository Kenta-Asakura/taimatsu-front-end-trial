import teesImg from '@/assets/images/sale-sample.jpg'
import teesImg2x from '@/assets/images/sale-sample@2x.jpg'
import saleImg from '@/assets/images/sale.jpg'
import saleImg2x from '@/assets/images/sale@2x.jpg'
import type { PickupEntry } from '@/components/layout/Pickups'

const SALE: PickupEntry = {
  imageSrc: saleImg,
  imageSrc2x: saleImg2x,
  imageAlt: 'SALE',
  label: 'SALE',
}

const TEES: PickupEntry = {
  imageSrc: teesImg,
  imageSrc2x: teesImg2x,
  imageAlt: '夏を快適にするTシャツ・ボトムス',
  label: '夏を快適にするTシャツ・ボトムス',
}

// Demo content repeats one photo; each entry is independently editable.
export const PICKUPS: PickupEntry[] = [
  SALE,
  ...Array(5).fill(TEES),
  SALE,
  ...Array(5).fill(TEES),
]

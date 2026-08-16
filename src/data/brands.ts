import brandsImg from '@/assets/images/brands.jpg'
import brandsImg2x from '@/assets/images/brands@2x.jpg'
import type { BrandEntry } from '@/components/layout/Brands'

// Demo content repeats one photo; each entry is independently editable.
export const BRANDS: BrandEntry[] = [
  {
    imageSrc: brandsImg,
    imageSrc2x: brandsImg2x,
    imageAlt: '',
    label: 'IDÉE SHOP Online',
  },
  {
    imageSrc: brandsImg,
    imageSrc2x: brandsImg2x,
    imageAlt: '',
    label: 'IDÉE SHOP Online',
  },
  {
    imageSrc: brandsImg,
    imageSrc2x: brandsImg2x,
    imageAlt: '',
    label: 'IDÉE SHOP Online',
  },
  {
    imageSrc: brandsImg,
    imageSrc2x: brandsImg2x,
    imageAlt: '',
    label: 'IDÉE SHOP Online',
  },
]

export const BRAND_STORE_LABELS = ['店舗情報', '店舗情報', '店舗情報']

import productImg from '@/assets/images/product.jpg'
import productImg2x from '@/assets/images/product@2x.jpg'
import type { NewProduct } from '@/components/layout/NewProducts'

const PRODUCT: NewProduct = {
  imageSrc: productImg,
  imageSrc2x: productImg2x,
  imageAlt: '',
  badgeLabel: 'NEW',
  name: 'ワイヤレスヘッドホン　ノイズキャンセル機能付',
  price: 6990,
}

// Demo content repeats one photo; each entry is independently editable.
// 6 per the design spec — the scrollbar is a responsive safety net for when
// space is constrained, not something the demo data needs to force-trigger.
export const NEW_PRODUCTS: NewProduct[] = Array(6).fill(PRODUCT)

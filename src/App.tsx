import heroImg from '@/assets/images/hero.jpg'
import heroImg2x from '@/assets/images/hero@2x.jpg'
import categoriesImg from '@/assets/images/product-category-image.jpg'
import categoriesImg2x from '@/assets/images/product-category-image@2x.jpg'
import teesImg from '@/assets/images/sale-sample.jpg'
import teesImg2x from '@/assets/images/sale-sample@2x.jpg'
import brandsImg from '@/assets/images/brands.jpg'
import brandsImg2x from '@/assets/images/brands@2x.jpg'
import articlesImg from '@/assets/images/articles.jpg'
import articlesImg2x from '@/assets/images/articles@2x.jpg'
import cosmeticsImg from '@/assets/images/cosmetics.jpg'
import cosmeticsImg2x from '@/assets/images/cosmetics@2x.jpg'
import seasonalImg from '@/assets/images/seasonal-recommendation.jpg'
import seasonalImg2x from '@/assets/images/seasonal-recommendation@2x.jpg'
import clothingImg from '@/assets/images/clothing-cotton-inner.jpg'
import clothingImg2x from '@/assets/images/clothing-cotton-inner@2x.jpg'
import kidsImg from '@/assets/images/kids-and-maternity-clothes.jpg'
import kidsImg2x from '@/assets/images/kids-and-maternity-clothes@2x.jpg'
import productImg from '@/assets/images/product.jpg'
import productImg2x from '@/assets/images/product@2x.jpg'

import { Button } from '@/components/ui/Button'
import { LinkArrowButton } from './components/ui/LinkArrowButton'
import { ImageCard } from '@/components/ui/ImageCard'
import { Container } from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { TopBanner } from './components/layout/TopBanner'
import { AnnouncementList } from './components/layout/AnnouncementList'
import { Categories, type CategoryEntry } from './components/layout/Categories'
import { Features, type FeatureEntry } from './components/layout/Features'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import {
  FullWidthHero,
  type FullWidthHeroProps,
} from './components/layout/FullWidthHero'
import { NewProducts, type NewProduct } from './components/layout/NewProducts'
import { StoreSearch } from './components/layout/StoreSearch'

// Header is real; everything below is still scaffold-verification —
// replaced section-by-section as each one is built.

// Each section repeats its one real card as many times as the design shows
const PICKUPS_COUNT = 12
const BRANDS_COUNT = 4
const BRAND_STORE_COUNT = 3
const ARTICLES_COUNT = 4

// Same "one real asset repeated" convention as NEW_PRODUCTS below — only
// the label/alt vary per category for now.
const CATEGORY_LABELS = [
  '婦人・レディース',
  '紳士・メンズ',
  'こども',
  'コスメ・ケア',
  'アロマ・ルームフレグランス',
  '生活雑貨',
  '家具・収納・家電',
  '収納用品・収納ケース',
  '収納棚・収納ラック',
  '寝具',
  'ベッド・マットレス',
  '食品',
]

const CATEGORIES: CategoryEntry[] = CATEGORY_LABELS.map((label) => ({
  imageSrc: categoriesImg,
  imageSrc2x: categoriesImg2x,
  imageAlt: label,
  label,
}))

// Only one real hero photo exists, so all three slides repeat it for now —
// see docs/design-questions.md.
const HERO_SLIDES: FullWidthHeroProps[] = Array.from({ length: 3 }, () => ({
  imageSrc: heroImg,
  imageSrc2x: heroImg2x,
  imageAlt: '清々しく、軽快。風を通す服',
}))

// 6 visible at once on desktop; 7+ reachable by horizontal scroll — see
// NewProducts.tsx/docs/decisions.md. Content lives here (the "page"), not
// in the layout component — see decisions.md's CMS-content note.
const NEW_PRODUCTS: NewProduct[] = Array.from({ length: 8 }, () => ({
  imageSrc: productImg,
  imageSrc2x: productImg2x,
  imageAlt: '',
  badgeLabel: 'NEW',
  name: 'ワイヤレスヘッドホン　ノイズキャンセル機能付',
  price: 6990,
}))

// One entry per nav category, in display order — see Features.tsx for why
// the nav itself is derived from this list rather than duplicated.
const FEATURES: FeatureEntry[] = [
  {
    category: '季節のおすすめ',
    heroItem: {
      imageSrc: seasonalImg,
      imageSrc2x: seasonalImg2x,
      imageAlt: '',
      caption: 'かぼちゃ・さつまいも・栗のお菓子',
    },
    secondaryItems: [
      {
        imageSrc: seasonalImg,
        imageSrc2x: seasonalImg2x,
        imageAlt: '',
        caption: 'かぼちゃ・さつまいも・栗のお菓子',
      },
      {
        imageSrc: seasonalImg,
        imageSrc2x: seasonalImg2x,
        imageAlt: '',
        caption: 'かぼちゃ・さつまいも・栗のお菓子',
      },
    ],
  },
  {
    category: '衣料品',
    heroItem: {
      imageSrc: clothingImg,
      imageSrc2x: clothingImg2x,
      imageAlt: '',
      caption: 'さらっとなのは、綿だから。さらっと綿インナー',
    },
    secondaryItems: [
      {
        imageSrc: clothingImg,
        imageSrc2x: clothingImg2x,
        imageAlt: '',
        caption: 'さらっとなのは、綿だから。さらっと綿インナー',
      },
      {
        imageSrc: clothingImg,
        imageSrc2x: clothingImg2x,
        imageAlt: '',
        caption: 'さらっとなのは、綿だから。さらっと綿インナー',
      },
    ],
  },
  {
    category: 'こども・マタニティ',
    heroItem: {
      imageSrc: kidsImg,
      imageSrc2x: kidsImg2x,
      imageAlt: '',
      caption: '【キッズ】肌ごこちよく過ごせる秋服 こどものためのこども服',
    },
    secondaryItems: [
      {
        imageSrc: kidsImg,
        imageSrc2x: kidsImg2x,
        imageAlt: '',
        caption: '【キッズ】肌ごこちよく過ごせる秋服 こどものためのこども服',
      },
      {
        imageSrc: kidsImg,
        imageSrc2x: kidsImg2x,
        imageAlt: '',
        caption: '【キッズ】肌ごこちよく過ごせる秋服 こどものためのこども服',
      },
    ],
  },
  {
    category: 'コスメ・ケア',
    heroItem: {
      imageSrc: cosmeticsImg,
      imageSrc2x: cosmeticsImg2x,
      imageAlt: '',
      caption: '発酵導入シリーズ｜いい肌に、なる準備。',
    },
    secondaryItems: [
      {
        imageSrc: cosmeticsImg,
        imageSrc2x: cosmeticsImg2x,
        imageAlt: '',
        caption: '発酵導入シリーズ｜いい肌に、なる準備。',
      },
      {
        imageSrc: cosmeticsImg,
        imageSrc2x: cosmeticsImg2x,
        imageAlt: '',
        caption: '発酵導入シリーズ｜いい肌に、なる準備。',
      },
    ],
  },
]

// Page IA (top to bottom): Header, Notice, Hero, Categories, New Products,
// Pickups, Features, Brands, Articles, Store Search, Footer. Sections with
// no component yet render a labeled placeholder so the running scaffold
// shows the real page order/rhythm; they're swapped for real content as
// each one ships on its own branch.
function App() {
  return (
    <>
      <TopBanner />
      <Header />

      <main
        id="main-content"
        className="flex flex-col bg-(--color-surface) md:bg-(--color-gray-200)"
      >
        <section>
          <AnnouncementList />
        </section>

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <SectionHeader>Buttons</SectionHeader>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="main">主要ボタン</Button>
              <Button variant="secondary">サブボタン</Button>
              <Button variant="tertiary">検索</Button>
              <LinkArrowButton>Test</LinkArrowButton>
            </div>
          </Container>
        </section>

        {/* --- Real page sections, in page order --- */}

        {/* Hero */}
        <section>
          <FullWidthHero slides={HERO_SLIDES} />
        </section>

        {/* Categories */}
        <section className="border-b border-(--color-border) py-[24px] md:pt-[64px] md:pb-[98px]">
          <Container className="flex flex-col">
            <Categories entries={CATEGORIES} />
          </Container>
        </section>

        {/* New Products */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container>
            <NewProducts products={NEW_PRODUCTS} />
          </Container>
        </section>

        {/* Pickups */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <SectionHeader>Pickups</SectionHeader>
            <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: PICKUPS_COUNT }, (_, i) => (
                <ImageCard
                  key={i}
                  variant="pickups"
                  imageSrc={teesImg}
                  imageSrc2x={teesImg2x}
                  imageAlt=""
                  label="夏を快適にするTシャツ・ボトムス"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Features */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container>
            <Features entries={FEATURES} />
          </Container>
        </section>

        {/* Brands */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <SectionHeader>Brands</SectionHeader>
            <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: BRANDS_COUNT }, (_, i) => (
                <ImageCard
                  key={i}
                  variant="brands"
                  imageSrc={brandsImg}
                  imageSrc2x={brandsImg2x}
                  imageAlt=""
                  label="IDÉE SHOP Online"
                />
              ))}
            </div>
            <div className="flex w-full flex-col gap-(--spacing-card-gap-mobile) self-stretch md:flex-row md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: BRAND_STORE_COUNT }, (_, i) => (
                <Button key={i} variant="secondary">
                  店舗情報
                </Button>
              ))}
            </div>
          </Container>
        </section>

        {/* Articles */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <SectionHeader>Articles</SectionHeader>
            <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: ARTICLES_COUNT }, (_, i) => (
                <ImageCard
                  key={i}
                  variant="articles"
                  imageSrc={articlesImg}
                  imageSrc2x={articlesImg2x}
                  imageAlt=""
                  label="「レモンの爽やかなパスタソース」をかけるだけ。 洋食屋さん風のごちそうアレンジ"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Store Search */}
        <section className="bg-gray-50 pt-15 md:bg-inherit md:py-(--spacing-section-gap-desktop)">
          <Container>
            <StoreSearch />
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App

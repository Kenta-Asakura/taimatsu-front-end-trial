import categoriesImg from '@/assets/images/product-category-image.jpg'
import categoriesImg2x from '@/assets/images/product-category-image@2x.jpg'
import teesImg from '@/assets/images/sale-sample.jpg'
import teesImg2x from '@/assets/images/sale-sample@2x.jpg'
import brandsImg from '@/assets/images/brands.jpg'
import brandsImg2x from '@/assets/images/brands@2x.jpg'
import articlesImg from '@/assets/images/articles.jpg'
import articlesImg2x from '@/assets/images/articles@2x.jpg'
import seasonalImg from '@/assets/images/seasonal-recommendation.jpg'
import seasonalImg2x from '@/assets/images/seasonal-recommendation@2x.jpg'
import productImg from '@/assets/images/product.jpg'
import productImg2x from '@/assets/images/product@2x.jpg'

import { Button } from '@/components/ui/Button'
import { LinkArrowButton } from './components/ui/LinkArrowButton'
import { ProductCard } from '@/components/ui/ProductCard'
import { ImageCard } from '@/components/ui/ImageCard'
import { Container } from '@/components/ui/Container'
import { TopBanner } from './components/layout/TopBanner'
import { AnnouncementList } from './components/layout/AnnouncementList'
import { Header } from './components/layout/Header'
// import { Chevron } from './components/ui/Chevron'

// Header is real; everything below is still scaffold-verification —
// replaced section-by-section as each one is built.

// Each section repeats its one real card as many times as the design shows
const CATEGORIES_COUNT = 12
const NEW_PRODUCTS_COUNT = 6
const PICKUPS_COUNT = 12
const BRANDS_COUNT = 4
const ARTICLES_COUNT = 4

// Page IA (top to bottom): Header, Notice, Hero, Categories, New Products,
// Pickups, Features, Brands, Articles, Store Search, Footer. Sections with
// no component yet render a labeled placeholder so the running scaffold
// shows the real page order/rhythm; they're swapped for real content as
// each one ships on its own branch.
function Placeholder({ label }: { label: string }) {
  return (
    <Container>
      <p className="text-body-sm text-(--color-ink-muted)">{label} — pending</p>
    </Container>
  )
}

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

        <Container className="flex flex-col gap-1">
          <h1 className="text-heading-lg text-(--color-ink)">
            Component scaffold
          </h1>
          <p className="text-body-md leading-normal text-(--color-ink-muted)">
            Placeholder copy — verifying tokens/components render correctly
            against real assets.
          </p>
        </Container>

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Buttons</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="main">主要ボタン</Button>
              <Button variant="secondary">サブボタン</Button>
              <Button variant="tertiary">検索</Button>
              <LinkArrowButton>Test</LinkArrowButton>
            </div>
          </Container>
        </section>

        {/* --- Real page sections, in page order --- */}

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Placeholder label="Hero" />
        </section>

        {/* Categories */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Categories</h2>
            <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: CATEGORIES_COUNT }, (_, i) => (
                <ImageCard
                  key={i}
                  variant="categories"
                  imageSrc={categoriesImg}
                  imageSrc2x={categoriesImg2x}
                  imageAlt=""
                  label="家具・収納・家電"
                />
              ))}
            </div>
          </Container>
        </section>

        {/* New Products */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">New Products</h2>
            <div className="flex flex-wrap justify-center gap-(--spacing-card-gap-mobile) md:gap-(--spacing-card-gap-desktop)">
              {Array.from({ length: NEW_PRODUCTS_COUNT }, (_, i) => (
                <ProductCard
                  key={i}
                  imageSrc={productImg}
                  imageSrc2x={productImg2x}
                  imageAlt=""
                  badgeLabel="NEW"
                  name="ワイヤレスヘッドホン　ノイズキャンセル機能付"
                  price={6990}
                />
              ))}
            </div>
          </Container>
        </section>

        {/* Pickups */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Pickups</h2>
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
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Features</h2>
            <ImageCard
              variant="feature"
              imageSrc={seasonalImg}
              imageSrc2x={seasonalImg2x}
              imageAlt=""
              label="かぼちゃ・さつまいも・栗のお菓子"
            />
          </Container>
        </section>

        {/* Brands */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Brands</h2>
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
          </Container>
        </section>

        {/* Articles */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">Articles</h2>
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
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Placeholder label="Store Search" />
        </section>

        <footer>
          <Placeholder label="Footer" />
        </footer>
      </main>
    </>
  )
}

export default App

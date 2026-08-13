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
// import productImg from '@/assets/images/product.jpg'

import { Button } from '@/components/ui/Button'
// import { ProductCard } from '@/components/ui/ProductCard'
import { ImageCard } from '@/components/ui/ImageCard'
import { Container } from '@/components/ui/Container'
import { TopBanner } from './components/layout/TopBanner'
import { AnnouncementList } from './components/layout/AnnouncementList'
import { Header } from './components/layout/Header'

// Header is real; everything below is still scaffold-verification —
// replaced section-by-section as each one is built.

// Each section repeats its one real card as many times as the design shows
const CATEGORIES_COUNT = 12
const PICKUPS_COUNT = 12
const BRANDS_COUNT = 4
const ARTICLES_COUNT = 4

// Page IA (top to bottom): Header, Notice, Hero, Categories, New Products,
// Pickups, Features, Brands, Articles, Store Finder, Footer. Sections with
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

      <main id="main-content" className="flex flex-col">
        <section className="py-[15px] md:py-6">
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
            </div>
          </Container>
        </section>

        {/* --- Real page sections, in page order --- */}

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Placeholder label="Hero" />
        </section>

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

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          {/* <Container className="flex flex-col gap-3">
            <h2 className="text-heading-md text-(--color-ink)">New Products</h2>
            <div className="grid max-w-40 gap-3">
              <ProductCard imageSrc={productImg} imageAlt="" badgeLabel="NEW" name="商品名" price={3980} />
            </div>
          </Container> */}
          <Placeholder label="New Products" />
        </section>

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

        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Placeholder label="Store Finder" />
        </section>

        <footer>
          <Placeholder label="Footer" />
        </footer>

        {/* <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <h2 className="text-heading-md text-(--color-ink)">Seasonal header (static, non-interactive)</h2>
          <div className="flex items-center justify-between text-(--color-ink)">
            <span className="text-body-md md:text-body-lg font-bold leading-normal">季節のおすすめ</span>
            <Chevron direction="down" />
          </div>
        </section> */}
      </main>
    </>
  )
}

export default App

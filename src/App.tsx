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
// import { Chevron } from '@/components/ui/Chevron'
// import { ProductCard } from '@/components/ui/ProductCard'
import { ImageCard } from '@/components/ui/ImageCard'
import { Container } from '@/components/ui/Container'

// Scaffold-verification view only — exercises the §1.3 component set against
// real exported assets with clearly-placeholder copy (no final content yet).
// Replaced once real sections (Header/Hero/.../Footer) are built.

// Each section repeats its one real card as many times as the design shows —
// not varied/random content, matching the design file's repeated placeholder cards.
const CATEGORIES_COUNT = 12
const PICKUPS_COUNT = 12
const BRANDS_COUNT = 4
const ARTICLES_COUNT = 4

function App() {
  return (
    <main className="flex flex-col gap-10 py-10">
      <header>
        <Container className="flex flex-col gap-1">
          <h1 className="text-heading-lg text-(--color-ink)">
            Component scaffold
          </h1>
          <p className="text-body text-(--color-ink-muted)">
            Placeholder copy — verifying tokens/components render correctly
            against real assets.
          </p>
        </Container>
      </header>

      <section>
        <Container className="flex flex-col gap-3">
          <h2 className="text-heading-md text-(--color-ink)">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="main">主要ボタン</Button>
            <Button variant="secondary">サブボタン</Button>
            <Button variant="tertiary">検索</Button>
          </div>
        </Container>
      </section>

      <section>
        <Container className="flex flex-col gap-3">
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

      <section>
        <Container className="flex flex-col gap-3">
          <h2 className="text-heading-md text-(--color-ink)">Pickups cards</h2>
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

      <section>
        <Container className="flex flex-col gap-3">
          <h2 className="text-heading-md text-(--color-ink)">Brands cards</h2>
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

      <section>
        <Container className="flex flex-col gap-3">
          <h2 className="text-heading-md text-(--color-ink)">Books</h2>
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

      <section>
        <Container className="flex flex-col gap-3">
          <h2 className="text-heading-md text-(--color-ink)">Feature card</h2>
          <ImageCard
            variant="feature"
            imageSrc={seasonalImg}
            imageSrc2x={seasonalImg2x}
            imageAlt=""
            label="かぼちゃ・さつまいも・栗のお菓子"
          />
        </Container>
      </section>

      {/* <section className="flex flex-col gap-3">
        <h2 className="text-heading-md text-(--color-ink)">New product card</h2>
        <div className="grid max-w-40 gap-3">
          <ProductCard imageSrc={productImg} imageAlt="" badgeLabel="NEW" name="商品名" price={3980} />
        </div>
      </section> */}

      {/* Demonstrates both variants directly — content clamps to the design's
          max-width, fluid always spans the true viewport edge to edge. No
          wrapping Container here on purpose: main no longer constrains
          width, so both variants are exactly what a real page would see. */}
      <section className="flex flex-col gap-3">
        <Container>
          <h2 className="text-heading-md text-(--color-ink)">Container</h2>
        </Container>
        <div className="flex flex-col gap-2">
          <Container className="bg-(--color-cta-surface) py-2">
            <p className="text-body">
              content — full width, capped at max-width 1352px
            </p>
          </Container>

          <Container variant="fluid" className="bg-(--color-beige-200) py-2">
            <p className="text-body px-4">fluid — always full width</p>
          </Container>
        </div>
      </section>

      {/* <section className="flex flex-col gap-3">
        <h2 className="text-heading-md text-(--color-ink)">Seasonal header (static, non-interactive)</h2>
        <div className="flex items-center justify-between text-(--color-ink)">
          <span className="text-label">季節のおすすめ</span>
          <Chevron direction="down" />
        </div>
      </section> */}
    </main>
  )
}

export default App

import { Container } from '@/components/ui/Container'
import { TopBanner } from './components/layout/TopBanner'
import { AnnouncementList } from './components/layout/AnnouncementList'
import { Articles } from './components/layout/Articles'
import { Brands } from './components/layout/Brands'
import { Categories } from './components/layout/Categories'
import { Features } from './components/layout/Features'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { FullWidthHero } from './components/layout/FullWidthHero'
import { NewProducts } from './components/layout/NewProducts'
import { Pickups } from './components/layout/Pickups'
import { StoreSearch } from './components/layout/StoreSearch'

import { ARTICLES } from '@/data/articles'
import { BRANDS, BRAND_STORE_LABELS } from '@/data/brands'
import { CATEGORIES } from '@/data/categories'
import { FEATURES } from '@/data/features'
import { HERO_SLIDES } from '@/data/hero'
import { NEW_PRODUCTS } from '@/data/newProducts'
import { PICKUPS } from '@/data/pickups'

// Page IA (top to bottom): Header, Notice, Hero, Categories, New Products,
// Pickups, Features, Brands, Articles, Store Search, Footer.
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
          <Container>
            <Pickups entries={PICKUPS} />
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
          <Container>
            <Brands entries={BRANDS} storeLabels={BRAND_STORE_LABELS} />
          </Container>
        </section>

        {/* Articles */}
        <section className="pt-(--spacing-section-gap-mobile) pb-(--spacing-section-gap-mobile) md:pt-(--spacing-section-gap-desktop) md:pb-(--spacing-section-gap-desktop)">
          <Container>
            <Articles entries={ARTICLES} />
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

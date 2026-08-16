import { Container } from '../ui/Container'
import { Chevron } from '@/components/ui/Chevron'

const ACTIVE_DOT_INDEX = 0

export type FullWidthHeroProps = {
  imageSrc: string
  imageSrc2x?: string
  imageAlt: string
}

type Props = {
  slides: FullWidthHeroProps[]
}

export function FullWidthHero({ slides }: Props) {
  return (
    <div aria-label="ヒーロー">
      <Container variant="fluid">
        <div className="flex h-81.25 items-center justify-center gap-3 overflow-hidden md:h-160 md:gap-6">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.imageSrc}
              srcSet={
                slide.imageSrc2x
                  ? `${slide.imageSrc} 1x, ${slide.imageSrc2x} 2x`
                  : undefined
              }
              alt={slide.imageAlt}
              className={'h-full shrink object-cover'}
            />
          ))}
        </div>

        {/* Slider nav — desktop only, styling only, see decisions.md */}
        <nav
          aria-label="スライドナビゲーション"
          className="mt-5.5 hidden items-center justify-center gap-3 md:flex"
        >
          <button type="button" aria-label="前のスライド" className="shrink-0">
            <Chevron direction="left" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`h-2 w-2 rounded-full ${
                  i === ACTIVE_DOT_INDEX
                    ? 'bg-gray-600 ring-1 ring-gray-600 ring-offset-1 ring-offset-gray-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button type="button" aria-label="次のスライド" className="shrink-0">
            <Chevron direction="right" />
          </button>
        </nav>
      </Container>
    </div>
  )
}

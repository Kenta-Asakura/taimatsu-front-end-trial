import heroImg from '@/assets/images/hero.jpg'
import heroImg2x from '@/assets/images/hero@2x.jpg'
import type { FullWidthHeroProps } from '@/components/layout/FullWidthHero'

// Demo content repeats one photo; each slide is independently editable.
export const HERO_SLIDES: FullWidthHeroProps[] = [
  {
    imageSrc: heroImg,
    imageSrc2x: heroImg2x,
    imageAlt: '清々しく、軽快。風を通す服',
  },
  {
    imageSrc: heroImg,
    imageSrc2x: heroImg2x,
    imageAlt: '清々しく、軽快。風を通す服',
  },
  {
    imageSrc: heroImg,
    imageSrc2x: heroImg2x,
    imageAlt: '清々しく、軽快。風を通す服',
  },
]

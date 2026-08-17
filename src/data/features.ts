import seasonalImg from '@/assets/images/seasonal-recommendation.jpg'
import seasonalImg2x from '@/assets/images/seasonal-recommendation@2x.jpg'
import clothingImg from '@/assets/images/clothing-cotton-inner.jpg'
import clothingImg2x from '@/assets/images/clothing-cotton-inner@2x.jpg'
import kidsImg from '@/assets/images/kids-and-maternity-clothes.jpg'
import kidsImg2x from '@/assets/images/kids-and-maternity-clothes@2x.jpg'
import cosmeticsImg from '@/assets/images/cosmetics.jpg'
import cosmeticsImg2x from '@/assets/images/cosmetics@2x.jpg'
import type { FeatureEntry } from '@/components/layout/Features'

// One entry per nav category, in display order — see Features.tsx for why
// the nav itself is derived from this list rather than duplicated.
export const FEATURES: FeatureEntry[] = [
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
    ],
    secondaryVariant: 'single',
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

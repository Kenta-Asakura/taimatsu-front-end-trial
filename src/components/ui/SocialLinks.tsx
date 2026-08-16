import type { FC, SVGProps } from 'react'
import InstagramIcon from '@/assets/icons/social-ig.svg?react'
import XIcon from '@/assets/icons/social-x.svg?react'
import FacebookIcon from '@/assets/icons/social-fb.svg?react'
import TiktokIcon from '@/assets/icons/social-tiktok.svg?react'
import LineIcon from '@/assets/icons/social-line.svg?react'
import YoutubeIcon from '@/assets/icons/social-yt.svg?react'

type SocialLink = {
  name: string
  Icon: FC<SVGProps<SVGSVGElement>>
  href?: string
}

const socialLinks: SocialLink[] = [
  { name: 'Instagram', Icon: InstagramIcon },
  { name: 'X', Icon: XIcon },
  { name: 'Facebook', Icon: FacebookIcon },
  { name: 'TikTok', Icon: TiktokIcon },
  { name: 'LINE', Icon: LineIcon },
  { name: 'YouTube', Icon: YoutubeIcon },
]

type SocialLinksProps = {
  className?: string
}

// No real profile URLs yet — same inert-when-no-href pattern as Button/LinkArrowButton (WCAG 2.4.4).
export function SocialLinks({ className = '' }: SocialLinksProps) {
  return (
    <ul
      className={`flex items-center justify-between max-xl:max-w-90.75 md:gap-x-5 ${className}`.trim()}
    >
      {socialLinks.map(({ name, Icon, href }) => (
        <li key={name}>
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <Icon aria-hidden="true" className="h-7 w-7" />
            </a>
          ) : (
            <button type="button" aria-label={name}>
              <Icon aria-hidden="true" className="h-7 w-7" />
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}

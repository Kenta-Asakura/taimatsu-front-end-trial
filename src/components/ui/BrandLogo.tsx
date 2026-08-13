import Logo from '@/assets/icons/logo.svg?react'

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <a href="/" aria-label="ブランド">
      <Logo
        aria-hidden="true"
        className={`h-4.75 w-16 md:h-8.25 md:w-34.25 ${className}`.trim()}
      />
    </a>
  )
}

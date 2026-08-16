# Decisions & Assumptions

Rationale for calls made without designer sign-off, so they read as decisions rather than oversights.

## Typography token architecture

- **Convention:** a `--text-*` token bakes in `--line-height` / `--font-weight` only when Figma specifies an explicit value for that style. When Figma marks line-height/letter-spacing as "not set" (Auto), the token stays size-only and the missing property is composed at the call site with a Tailwind utility (`leading-*`, `font-*`) instead of guessing a baked-in default. This keeps "unspecified in the design" visually distinct from "specified as normal" in the codebase.
- **Token consolidation from the second typography pass** — five newly sampled Figma text styles resolved to three existing tokens plus one new one, rather than five new tokens:
  - "Product label" (14px/400/1.5) → identical to `--text-body`; reused, no new token.
  - "Footer links" (12px/400, line-height unset) → identical to `--text-link`; reused, no new token.
  - "Notification" banner (12px/700, line-height unset) → same size as `--text-link`, but bold. `--text-link` doesn't bake in a weight, so this composes as `text-link font-bold` at the call site rather than adding a token.
  - "Pickup section category label" (16px/700/1.5, reused across other cards) → new token, `--text-label`. Same size+weight as `--text-cta` (16px/700) by coincidence, but kept separate: `--text-cta` is a single-line button label with no baked line-height; `--text-label` is a reused paragraph-style label with an explicit 1.5 line-height. Collapsing them would couple two things that may diverge later.
- **Heading line-height of 1 (100%)** is per spec, confirmed with the design as given rather than assumed. Not yet visually verified against real (possibly-wrapping) Japanese headline copy at 375px — flagged in `docs/design-questions.md`.
- **No letter-spacing tokens added.** Sampled styles specify "normal" tracking, not a custom value — nothing to encode.

## Container primitive

- **`content` variant is always full available width, capped at a desktop ceiling — no mobile floor.** Figma's container frame also listed a "mb min-width" of 362px; that was implemented first as a literal `min-width`, which forced ~21px of horizontal overflow at a 320px viewport (below the WCAG 1.4.10 reflow floor) — flagged in `design-questions.md`. Corrected on direct instruction: the container should always be full available width up to the max, not clamped to a floor wider than some viewports. `min-width` removed; `max-width` behavior unchanged.
- **The `max-w-(--container-content-max)` value is 1728px, not the 1352px Figma reports — this is intentional, not a mismatch.** With global `box-sizing: border-box`, `max-width` includes the element's own padding, so a literal `max-width: 1352px` with the 188px desktop gutter as padding was leaving only 976px for actual content — caught by inspecting the rendered content area in DevTools against the Figma value. Figma's 1352px is the _content_ width, excluding the side gutters. `1352 + 2×188 = 1728` (an exact 108rem), so the token is set to 1728px: once the 188px padding is subtracted on each side, the inner content area lands exactly on the spec'd 1352px.
- **`fluid` variant is unconstrained on purpose** — always `w-full`, no padding, no min/max-width. For full-bleed sections (background bands, edge-to-edge imagery) that nest a `content` Container inside for the actual text/controls, rather than trying to make one container serve both jobs.

## Icons

- **SVG icons import via svgr (`?react`), not `<img src>`** — renders as an inline `<svg>`, stylable directly via `className`/`aria-hidden`. Established in `Chevron`, `MainNav`, `HamburgerMobileMenu`'s close icon, `ProductCard`'s favorites icon; applies to new icon usages going forward, not yet retrofitted everywhere.
- Most icon assets hardcode stroke/fill color rather than `currentColor`, so svgr alone doesn't make color themeable — see `ProductCard`'s favorites icon for the pattern when that's actually needed (SVG/svgr config updated too).

## Header

- **Old `ui/MainNav.jsx`, `ui/Nav.tsx` deleted.** Foreign Frontend-Mentor "Photosnap" tutorial leftovers — broken asset import paths (`../assets/shared/...`, nonexistent in this project), English placeholder content ("Get an invite", generic Stories/Features/Pricing links), BEM class names with no matching CSS. Unrelated to this project; replaced by the real `layout/MainNav.tsx` (icon cluster) and `layout/HeaderLinks.tsx` (nav links) built from the actual design.
- **Menu row interactivity: every category/info/utility row in the open mobile menu is a real, inert `<button>` (no onClick), same as the "+"/chevron icons being decorative.** A working accordion (rows that actually expand) would be a second interactive element beyond the assessment's single scoped hamburger menu. If the accordion behavior turns out to be in scope, wiring it in later is a small change (state + conditional render), not a rearchitecture.
- **SearchBar's `<select>`/`<input>` are real, focusable form controls with no `onChange`/submit handler** — not `disabled`. Matches the existing "form controls are styled but inert" assumption below, applied literally rather than by disabling the controls (disabling would be a worse a11y demonstration for no scope benefit).
- **Mobile menu overlay is full-viewport and opaque, `<main>` is marked `inert` while it's open, but sibling header content (TopBanner/BrandLogo/HeaderLinks/MainNav) is not.** Targeting `<main>` specifically (not `#root`) keeps the toggle button itself reachable/focusable — inerting an ancestor of the toggle would make it un-clickable to close. Full visual coverage means the un-inerted header siblings aren't visible, but they're still technically tabbable behind the panel. A complete fix needs the open state lifted to a component that can target only the _other_ header children, which isn't needed by anything else right now — flagged as a known follow-up, not silently shipped as "solved."
- **No animation on menu open/close.** `motion-safe:animate-in`/`fade-in` (Tailwind Animate plugin) aren't installed in this project; adding the dependency wasn't in scope for this change. Follow-up if polish time allows.
- **`BrandLogo` stayed in `ui/`** (an existing empty stub was already there) even though the rest of the Header build landed in `layout/` — it's a small, genuinely reusable atom (a footer would plausibly reuse it too), unlike `MainNav`/`HeaderLinks`/`SearchBar`/`HamburgerMenu`, which are Header-specific composites.

## ProductCard

- **Favorites icon is a real toggle, not decorative** — local `useState<boolean>` per card, `aria-pressed` on the button. The heart is an svgr component (`favorites.svg?react`, same pattern as `Chevron`) and keeps its own static stroke color unchanged; the circular button wrapping it (`rounded-full`) swaps background color between `--color-beige-100` (off) and `--color-beige-200` (on). Built on explicit instruction; supersedes the earlier "inert to stay within one interactive element" assumption once documented here.

## NewProducts

- **Content ownership split: layout components with per-instance content (e.g. `NewProducts`) take that content as props from `App.tsx`; static layout components with no variable content (e.g. `StoreSearch`, whose browse-link list is fixed chrome) keep owning their own data.** `App.tsx` acts as the "page" — the place a CMS/Shopify section's data would actually come from — while the component stays presentation-only. Chrome that isn't per-instance content (section heading text, the "もっと見る" button label, the static chevron) stays owned by the component, not lifted into props, since it's not something a CMS would vary per placement.

## Hero

- **Caption text is not re-rendered in HTML — it's already baked into `hero.jpg`/`hero@2x.jpg`.** First pass duplicated it as an absolutely-positioned overlay on top of the photo, which visibly double-rendered the "清々しく、軽快。" line (one copy from the JPG's own pixels, one from the HTML overlay) once actually inspected in-browser. Removed the overlay; the `<img alt>` carries the equivalent text for screen readers instead.
- **Only one real hero photo exists, so the desktop 3-slide track and the mobile single view all render the same asset** — same "one real asset repeated" convention as `App.tsx`'s other sections (see `docs/design-questions.md`).
- **`FullWidthHero` takes a `slides: HeroSlide[]` prop (image + alt per slide), not a bare `slideCount`** — same content-ownership split as `Categories`/`NewProducts`/`Features`. Slides aren't guaranteed to be identical outside this demo, so each gets its own real `alt`; none are `aria-hidden`. The demo data in `App.tsx` still repeats the one real hero photo across all three entries (see `docs/design-questions.md`), but that's a data choice, not something the component assumes.
- **The slider nav (prev/next arrows + dots) is static markup only, no click/swipe handling** — explicit instruction for this component, not a scope-avoidance default like the hamburger-menu precedent elsewhere in this doc.
- **The nav wrapper is a `<nav aria-label>`, not `role="presentation"`.** `role="presentation"` is for elements with no semantic meaning of their own; this wrapper contains real, focusable `<button>`s (prev/next), so hiding the group's role fights its own children rather than describing them. The pagination dots inside stay plain `aria-hidden` spans, not a `<ul>` — they're identical, valueless indicators with no distinct destination, so a list would announce "list of N" with nothing useful in it.
- **All desktop slides share one explicit height (`md:h-[790px]`) instead of `aspect-square`.** `aspect-square` ties each slide's height to its own width, so the 290px peek slides rendered visibly shorter than the 790px active one — the peeks looked cropped/misaligned next to it. Same height across all three, width varies instead.
- **Slides use the standard `imageSrc`/`imageSrc2x` → `srcSet` pattern** (see `ImageCard`/`ProductCard`), same as every other section. An earlier layout displayed slides at 790px — wider than the `1x` export (640px) — which caused upscale blur when density-descriptor selection picked the `1x` asset; that's why `src2x`-only was used at the time. Slides now render at 640px (`h-160`), matching the `1x` export's native size, so the standard pattern applies again.

## Prior assumptions (carried from initial scaffold)

- Figma frame widths (375 / 768 / 1440) are reference points, not hard breakpoints; layout adapts at content-driven breakpoints between them.
- Undrawn interaction states (hover/focus/active/disabled) are designed to a documented convention and open to revision.
- Colors are implemented as specified even where contrast is marginal; violations are reported, not silently corrected.
- Single page, no routing, no form submission — form controls (if any) are styled but inert.

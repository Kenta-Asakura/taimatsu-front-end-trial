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

## Card components

- **`PickupCard` and `ProductCategoryCard` consolidated into one `ImageCard`.** Both were "image + caption below" with only alignment differing (left vs. center) — comparing them against two more card instances from the design (an external-link banner and a wide feature banner) showed the real shape is one component with modifiers (`align`, optional `href`/`external`), not four near-duplicate components. All caption text sits below the image, no overlay-on-image variant. `ProductCard` stays separate: it has a badge, price row, and favorites icon — structurally different, not a caption variant.
- **Sizing moved from per-call-site props to a `variant` prop on `ImageCard` itself.** These cards repeat across multiple sections (category grid, pickup rail, brand banners), so the four measured sizes (`category`/`pickup`/`banner`/`feature`) now live in one `variantConfig` map inside the component instead of being passed as raw Tailwind classes at every usage — a size correction is a one-line change in one file, not a hunt across every call site. `align`/`containerClassName`/`imageClassName` are no longer public props. Measured directly from Figma Dev Mode:
  - **`category`** — container 110×88 (mobile) / 211×120 (desktop); image 60×60 / 90×90, centered — genuinely smaller than its own container, not stretched to fill.
  - **`pickup`** — container 80×135 (mobile) / 205×265 (desktop); image fills the container.
  - **`banner`** (external-link cards, e.g. IDÉE SHOP) — container 174×129 (mobile) / 320×240 (desktop); image 174×109 / 320×200 — full width, shorter than the container to leave room for the caption below.
  - **`feature`** (wide banners, e.g. seasonal recommendation) — still using the `aspect-video` placeholder from before; exact dimensions not yet measured, deliberately deferred. Flag in design-questions.md and confirm before finalizing.
- **External-link cards (`href` + `external`) open in a new tab and get an sr-only "(外部サイトに遷移します)" suffix appended to the accessible name.** The design bakes the same Japanese text into the image itself, which is invisible to assistive tech — the sr-only text is the accessible equivalent, not a duplicate of visible content.

## Container primitive

- **`content` variant is always full available width, capped at a desktop ceiling — no mobile floor.** Figma's container frame also listed a "mb min-width" of 362px; that was implemented first as a literal `min-width`, which forced ~21px of horizontal overflow at a 320px viewport (below the WCAG 1.4.10 reflow floor) — flagged in `design-questions.md`. Corrected on direct instruction: the container should always be full available width up to the max, not clamped to a floor wider than some viewports. `min-width` removed; `max-width` behavior unchanged.
- **The `max-w-(--container-content-max)` value is 1728px, not the 1352px Figma reports — this is intentional, not a mismatch.** With global `box-sizing: border-box`, `max-width` includes the element's own padding, so a literal `max-width: 1352px` with the 188px desktop gutter as padding was leaving only 976px for actual content — caught by inspecting the rendered content area in DevTools against the Figma value. Figma's 1352px is the _content_ width, excluding the side gutters. `1352 + 2×188 = 1728` (an exact 108rem), so the token is set to 1728px: once the 188px padding is subtracted on each side, the inner content area lands exactly on the spec'd 1352px.
- **`fluid` variant is unconstrained on purpose** — always `w-full`, no padding, no min/max-width. For full-bleed sections (background bands, edge-to-edge imagery) that nest a `content` Container inside for the actual text/controls, rather than trying to make one container serve both jobs.

## Prior assumptions (carried from initial scaffold)

- Figma frame widths (375 / 768 / 1440) are reference points, not hard breakpoints; layout adapts at content-driven breakpoints between them.
- Undrawn interaction states (hover/focus/active/disabled) are designed to a documented convention and open to revision.
- Colors are implemented as specified even where contrast is marginal; violations are reported, not silently corrected.
- Single page, no routing, no form submission — form controls (if any) are styled but inert.

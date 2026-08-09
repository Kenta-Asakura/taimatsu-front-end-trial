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

## Prior assumptions (carried from initial scaffold)

- Figma frame widths (375 / 768 / 1440) are reference points, not hard breakpoints; layout adapts at content-driven breakpoints between them.
- Undrawn interaction states (hover/focus/active/disabled) are designed to a documented convention and open to revision.
- Colors are implemented as specified even where contrast is marginal; violations are reported, not silently corrected.
- Single page, no routing, no form submission — form controls (if any) are styled but inert.

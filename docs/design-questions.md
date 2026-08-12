# Design Questions

Open questions for the designer, logged as they come up during token extraction and build. See `docs/decisions.md` for the assumption made in the meantime.

## Typography

- **CJK line-height under "Auto".** Several text styles (footer links, notification banner, product label pre-consolidation) list line-height and letter-spacing as "not set" in Figma. "Not set" means Figma's Auto, which is computed from the Latin font (Inter) — but the actual rendered content is Japanese, falling back to Hiragino Kaku Gothic ProN / Noto Sans JP, a different font with different vertical metrics. The Auto value in the Figma canvas will not necessarily match what the browser renders once real Japanese copy is in place. Can you confirm the intended line-height for CJK body/label text, or should I treat "Auto" as "measure it in-browser and pin whatever reads correctly"?
- **Heading line-height at exactly 100%.** `heading-lg` (32px) and `heading-md` (26px) both specify line-height: 100%. Confirmed intentional per your note — flagging that this will look tight if either heading wraps to two lines at 375px width. Will verify visually once real headline copy is in; if a heading regularly wraps, may need a mobile-only exception.
- **Letter-spacing.** Confirmed "normal" (no tracking) across sampled styles — no negative tracking on the bold headings. No tokens added for this; noting here in case a later frame turns out to specify tracking that was missed in the initial pass.

## Structure / Layout

- ~~Container mobile min-width (362px) vs. the 320px WCAG 1.4.10 reflow floor~~ — resolved: container has no mobile floor, always full available width up to the desktop max. See `decisions.md`.
- (carried over from the project plan, not yet asked) What happens between 768–1024px if only mobile and desktop frames exist in the file?
- Is the header sticky on scroll, and if so does its appearance change?
- Mobile menu: full-screen overlay vs. slide-in drawer — not drawn in the file; see `docs/decisions.md` for the assumption in use.

## AnnouncementList

- Spacing/border/text size are estimated, not measured in Figma.

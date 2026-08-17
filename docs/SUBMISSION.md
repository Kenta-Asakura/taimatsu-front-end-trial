# Submission Notes

This is a summary of my decisions, assumptions, challenges, and UX/UI suggestions while building this project. More detailed notes are in [`decisions.md`](./decisions.md) and [`design-questions.md`](./design-questions.md) if needed.

## Key decisions

- I built the design tokens (colors, type, spacing) in Tailwind v4 by sampling values directly from Figma, then implemented the layout mobile-first to follow Tailwind's own development style and breakpoints. Breakpoints follow the content rather than sticking strictly to the 393/1728 Figma frames.
- The project is responsive across both desktop and mobile breakpoints. I made it as responsive as possible while focusing my styling on desktop and mobile specifically. In-between screen sizes get minimal responsiveness but no dedicated styling, since that wasn't part of the scope and would have taken more time.
- The mobile hamburger menu is the one required interactive element (open/close, focus trap, background inert while open). Everything else that looks interactive, like the search form, the menu's "+" rows, and the hero slider arrows, is real markup styled to spec but without click/submit behavior wired up. I kept them enabled rather than disabled so the accessibility tree still reads correctly.
- I also added a working favorites toggle on the product cards (local state, `aria-pressed`) as a second real interaction, since I had the time for it.
- For links without a real destination yet (like the "See more" buttons), I used `<button>` instead of `<a>` with a blank or `#` href. A blank `href` is bad for the accessibility tree, since it reads as a real link that goes nowhere, so a button communicates the actual state more honestly.
- Content is data-driven. Each section pulls its content from `src/data/*.ts` and passes it into presentation-only layout components. `App.tsx` works like the page that a CMS would eventually populate, so swapping content later shouldn't require touching component code.
- I used a branch-per-component and PR workflow even though I was working solo, so the PR history itself shows the process, not just the final result.

## Assumptions

- Undrawn states (hover/focus/active/disabled) were designed to one consistent convention across the site, and I'm open to revising them.
- This is a single page with no routing. Form controls and any buttons outside the scoped interaction are real markup with no submit/click behavior.
- Where only one real photo asset was available, I reused it across a section's cards or slides instead of leaving it blank. This is just a demo-data choice, not a claim about what the final content should be.

## UX/UI Improvements

### New Products

- The 「もっと見る」(See more) button is unnecessary because the products are already displayed in a horizontal slider, allowing users to scroll and view more products.
  - It would make sense if the button linked to the New Products page.
- Having both horizontal scrolling and an accordion button feels redundant because they serve a similar purpose. Based on the design, I think the horizontal scroll looks better.
- In the Pickup section, the rows always start with the Sale image card on both desktop and mobile.

### Brands

- The secondary button heights are inconsistent, which could make the UI harder to maintain (not consistent with other secondary button height).
- The store information button is repeated for every brand, which does not look ideal. I suggest making each brand image card a link to the corresponding store instead.
- The 「もっと見る」(See more) button is missing, which would allow users to view more stores.

### Articles

- The 「もっと見る」(See more) button is inconsistent with the same button used in the Features section. This may be intentional in the design.

## My Take on the Project

- I first created an implementation plan with the help of Claude Code, using its interview mode to clarify my preferences and approach.
- I tokenized the design and built a design system out of it using Tailwind's `@theme` variables (colors, type, spacing), instead of hardcoding values throughout the components.
- Writing a clear, well-structured prompt made a real difference in the results I got, something I already knew from studying for the Claude Certified Architect certification.
- I designed each layout/section component to be easy to edit, including text, images, and variations where needed.
- Components use variants (e.g. size, alignment, card type) instead of one-off duplicated components, which keeps the code DRY and makes the components easier to manage from a CMS.
- The structure is CMS/Shopify-ready.
- I separated concerns between data, components, and layouts/sections.
- I followed DRY principles to avoid unnecessary duplication.
- I set up linting, formatting, and GitHub Actions CI, which runs on pull and push to help prevent issues.
- Small UI components have minimal styling, making them reusable and easy to override when used inside larger components. The styling follows the common design specifications.
- Images support 1x and 2x resolutions.
  - SVGs are used for icons with SVGR.
  - Images use `<img>`, and I used JPEG instead of PNG where appropriate for performance.
- The main app acts as the connection point for selecting layout components. If a CMS is connected, layouts could be made interchangeable by the user.
- Section/layout components are also structured so their content can be interchangeable through a CMS.
- I did not add React Router because this is a static SPA. For a full-stack project, I would consider Next.js instead.
- The project uses TypeScript for type safety.
- I considered accessibility and SEO, with a Lighthouse score of 90+.
- I used semantic HTML tags (`<nav>`, `<main>`, `<button>`, `<header>`, `<footer>`, etc.) throughout instead of generic `<div>`s, so the accessibility tree reflects the actual structure of the page.

## Challenges

- Time constraint: most of the development happened after work and on weekends, during Obon season. Obon is normally a break for everyone in Japan, but my company kept regular working days, so I didn't have that extra time off to lean on.
- It had also been some time since I had worked on this type of project, as I had recently been focusing more on learning concepts through certifications.
- Implementing a CMS-oriented development approach with Tailwind CSS was new to me. I have done similar development using CSS/SCSS before.
- I used Claude Code as an AI assistant. I understand the fundamentals, but I am still relatively new to using it, so there is a lot more I can learn to achieve smoother and better results.
- Overall, it was a fun and valuable experience, and I learned a lot throughout the process.

## AI Usage

- As I started running out of time, I used Claude Code to build the base of some components. I then reviewed the generated code and adjusted the styling to match the design specifications.
- I am also aware that a Figma MCP connection can be used to translate design files into code more quickly.
  - This could be leveraged with a Figma subscription.
  - I think it has a lot of potential to bootstrap a project quickly and save development time.
  - However, understanding HTML and CSS is still essential for understanding the actual behavior and layout of a site rather than simply guessing or relying on generated code.

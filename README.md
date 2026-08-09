# TAIMATSU — Frontend Technical Assessment

A static site built from a Figma design, implemented mobile-first with a single interactive element (a mobile hamburger menu).

**Live:** https://taimatsu-front-end-trial.vercel.app/

**Status:** project scaffold complete. Design tokens and page sections are pending Figma import.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first `@theme` tokens, no `tailwind.config.js`)
- [oxlint](https://oxc.rs/) for linting, [Prettier](https://prettier.io/) for formatting

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Scripts

| Script                 | Purpose                                       |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the dev server                          |
| `npm run build`        | Type-check and build for production           |
| `npm run preview`      | Preview the production build locally          |
| `npm run lint`         | Run oxlint                                    |
| `npm run typecheck`    | Run `tsc --noEmit`                            |
| `npm run format`       | Format the codebase with Prettier             |
| `npm run format:check` | Check formatting without writing (used in CI) |

CI (`.github/workflows/ci.yml`) runs `format:check` → `lint` → `typecheck` → `build` on every PR and push to `main`.

## Project structure

```
docs/            Design questions and documented decisions/assumptions
src/
├── assets/      Images, icons
├── components/
│   ├── layout/  Header, Footer, MobileMenu, MenuToggle
│   ├── sections/ Page-specific sections (Hero, Features, ...)
│   └── ui/      Shared primitives (Container, Button, SectionHeading, Icon)
├── data/        Static content (e.g. navigation.ts)
├── hooks/       Small single-purpose hooks (useLockBodyScroll, useEscapeKey)
├── styles/      theme.css — Tailwind `@theme` design tokens
├── App.tsx
└── main.tsx
```

## AI usage

Claude (Anthropic) was used to help plan the project structure, scaffold the tooling (Vite/Tailwind/TS config, CI, lint/format setup), and review accessibility decisions. Implementation choices, design judgments, and the questions raised for the designer are my own.

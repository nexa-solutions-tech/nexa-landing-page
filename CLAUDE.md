# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server with HMR
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Tech Stack

- React 18 + TypeScript, Vite 6, Tailwind CSS 3
- Framer Motion for animations
- Radix UI primitives (toggle, toggle-group, slot)
- `class-variance-authority` for component variants
- Lucide React for icons

## Architecture

Single-page landing page for **Nexa** (a healthcare clinic management platform). All content is in **Brazilian Portuguese (pt-BR)**.

### Path Alias

`@` maps to `src/` (configured in `vite.config.js`). Always use `@/` imports.

### Section-Based Structure

Each page section lives in `src/sections/<SectionName>/` with:
- `index.tsx` — Main section component (named export matching folder name)
- `components/` — Section-specific sub-components

Sections are composed in `src/App.tsx` in render order: Navbar → Hero → BenefitsSection → Testimonials → Stats → Pricing → FoundersNote → Integrations → Comparison → AIEfficiency → FAQ → CTA → Footer.

### Shared Components (`src/components/`)

Reusable components are barrel-exported from `src/components/index.ts`. Key categories:
- **Layout:** `Section`, `SectionContainer`, `SectionHeader`, `SectionBadge`
- **UI:** `Card`, `Button`, `CTAButton`, `PricingCard`, `TestimonialCard`, `BenefitCard`, `QuoteCard`, `Badge`, `FadeIn`
- **Decorative:** `GradientBlob`, `GradientLine`, `LightRays`

### Patterns

- `FadeIn` component wraps elements for scroll-triggered animations (uses `framer-motion` `useInView`)
- `Section` component standardizes section padding/gap with variant props
- Tailwind theme extends colors via CSS custom properties (`hsl(var(--primary))` pattern)
- Dark theme by default (black background, white text) — design uses gradients and glows extensively
- Data is co-located with components as constants (no separate data files or API calls)
- Fonts: Inter (primary via `font-inter`), Poppins (`font-poppins`)

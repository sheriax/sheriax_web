# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Sheriax Solutions company website (sheriax.com). Primarily serves as the marketing site for the company and its flagship product **Kizu** (AI finance app). Built with Next.js 16 App Router, React 19, Tailwind CSS 4, and Framer Motion.

## Commands

```bash
pnpm dev          # Start dev server (localhost:3000)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # ESLint (next/core-web-vitals + next/typescript)
```

Package manager is **pnpm** (v10.28.0, locked via `packageManager` field).

## Architecture

### Routing (App Router)

- `/` - Homepage: Hero + Kizu features + services spotlight + testimonials
- `/kizu` - Kizu product page with waitlist form, pricing, FAQ
- `/services` - Services index + sub-pages: `ai-ml`, `web-development`, `mobile-app`, `seo`, `ar-vr`
- `/about` - Company info
- `/contact` - Contact form (sends email via Resend)
- `/privacy`, `/terms` - Legal pages

### API Routes

- `POST /api/contact` - Contact form handler, sends email via Resend to `hi@sheriax.com`
- `POST /api/waitlist` - Proxy to `kizu.in/api/wishlist` for Kizu waitlist signups

### Layout Chain

`RootLayout` (fonts, metadata, JSON-LD structured data, ThemeProvider) -> `Layout` component (Header + Footer wrapper) -> Page content

### Key Patterns

- **Theme**: `next-themes` with class-based dark/light mode. CSS custom properties defined in `globals.css` (`:root` for light, `.dark` for dark). Default theme is light.
- **Motion wrapper**: `src/components/ui/motion.tsx` re-exports framer-motion with `'use client'` directive. Import from `@/components/ui/motion` instead of `framer-motion` directly.
- **Animation convention**: Scroll-triggered fade-in using `initial={{ opacity: 0, y: 20 }}` + `whileInView` + `viewport={{ once: true }}` throughout all pages.
- **Icons**: lucide-react for all icons.
- **Path alias**: `@/*` maps to `./src/*`.

### Brand Colors (Kizu)

CSS variables in `globals.css`:
- `--kizu-orange: #FF7043` (primary brand)
- `--kizu-coral: #FF8A65` (secondary)
- `--kizu-warm: #FFAB91`
- `--kizu-success: #4CAF50`

Hardcoded hex values `#FF7043` and `#FF8A65` are used directly in component classes throughout (e.g., `bg-[#FF7043]`, `text-[#FF7043]`).

### Environment Variables

Required in `.env` (see `.env.example`):
- `RESEND_API_KEY` - Resend email service key (server-only, used in `/api/contact`)
- `KIZU_WISHLIST_API_URL` - Kizu waitlist API URL (currently hardcoded to `kizu.in/api/wishlist` in the route)

### SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` for search engine config
- JSON-LD structured data (Organization + SoftwareApplication) in root layout
- OpenGraph and Twitter Card metadata in root layout

## Content Rules

- All Kizu-related content uses a **medical metaphor**: financial problems = "wounds", analysis = "diagnosis", fixes = "healing", financial score = "health score"
- All public-facing materials must include: **"DPIIT Recognized Startup - Government of India"**

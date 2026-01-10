# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a Next.js 15 company website for Sheriax Solutions, built with TypeScript, Tailwind CSS v4, and Framer Motion. The site showcases technology services including AI/ML, web development, mobile apps, SEO, and AR/VR.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Architecture & Structure

### App Router Structure
- Uses Next.js 15 App Router with file-based routing
- Pages are in `app/` directory following Next.js 13+ conventions
- API routes in `app/api/` (currently has contact form endpoint)
- Global layout in `app/layout.tsx` with metadata and theme provider

### Key Architecture Patterns

**Layout Architecture:**
- Root layout (`app/layout.tsx`) → Custom Layout component (`components/Layout.tsx`) → Page content
- ThemeProvider wraps entire app for dark/light mode switching
- Custom gradients and background layers applied at root level

**Component Structure:**
- Reusable components in `components/` directory
- UI utilities in `components/ui/` (currently motion wrapper for framer-motion)
- Service-specific pages under `app/services/[service]/page.tsx`

**Motion & Animations:**
- Framer Motion wrapped in `components/ui/motion.tsx` for client-side usage
- Consistent animation patterns: `initial={{ opacity: 0, y: 20 }}` with viewport triggers
- **Important Rule:** Do not add animations on texts that make them not readable

### Theme System
- Custom theme provider in `components/ThemeProvider.tsx`
- Supports light/dark themes with localStorage persistence
- Uses system preference as fallback
- Tailwind CSS v4 with custom CSS variables

### Styling Approach
- Tailwind CSS v4 (PostCSS-based, no traditional config file)
- Custom fonts: Geist Sans and Geist Mono from Google Fonts
- Consistent design tokens: blue-500, purple-500, green-500 for accents
- Border styling: `border border-white/10` for subtle borders
- Background patterns: radial and linear gradients

## Email Integration

Contact form uses Resend API:
- API route: `app/api/contact/route.ts`
- Requires `RESEND_API_KEY` environment variable
- Sends emails to `hi@sheriax.com`
- Form validation for required fields (name, email, message)

## Content & Assets

**Images:**
- Stored in `public/images/` with descriptive names
- Logo assets in `public/logo/`
- Images are unoptimized (see `next.config.ts`)

**Service Pages:**
- Individual service pages: ai-ml, web-development, mobile-app, seo, ar-vr
- Each has dedicated hero images and content

## Development Guidelines

### File Naming
- Use kebab-case for route segments (`/services/ai-ml/`)
- Component files use PascalCase (`ServiceCard.tsx`)
- Utility files use camelCase or kebab-case

### Import Patterns
```typescript
// Use @ alias for project root imports
import Component from '@/components/Component';
import { motion } from '@/components/ui/motion';
```

### Component Patterns
- Use `'use client'` directive for client-side components
- Lucide React icons consistently used throughout
- TypeScript strict mode enabled

### Animation Guidelines
- Use `viewport={{ once: true }}` for performance
- Stagger animations with delay increments (0.2s)
- Consistent easing and duration patterns
- **Critical:** Ensure text animations maintain readability

## Environment Setup

Required environment variables:
```bash
RESEND_API_KEY=your_resend_api_key
```

Copy `.env.example` to `.env` and add your actual API key.

## Next.js Configuration

- Images are unoptimized for static export compatibility
- TypeScript strict mode enabled
- ESLint with Next.js recommended config
- No static export currently (removed to enable API routes)

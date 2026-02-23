# Sheriax Websites — Implementation Plan (Updated for 2026)

**Scope:** sheriax.com (parent brand) + sprint.sheriax.com (Sprint Studio)
**Stack:** Next.js 16+ (App Router), React 19+, TypeScript 5+, Tailwind CSS v4, Framer Motion 12+, Turborepo 2+
**Deployment:** Vercel (sheriax.com) + Vercel subdomain or separate project (sprint.sheriax.com)
**Workspace:** Single monorepo with two apps
**Package Manager:** pnpm 10.x (via corepack)

---

## 1. MONOREPO STRUCTURE

```
sheriax-web/
├── apps/
│   ├── main/                    # sheriax.com (Next.js 16)
│   │   ├── app/
│   │   │   ├── layout.tsx       # Root layout (fonts, metadata, analytics)
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── about/
│   │   │   │   └── page.tsx     # About / Founder story
│   │   │   ├── kizu/
│   │   │   │   └── page.tsx     # Kizu product showcase (links to kizu.in)
│   │   │   ├── sprint/
│   │   │   │   └── page.tsx     # Sprint Studio overview (links to sprint.sheriax.com)
│   │   │   ├── contact/
│   │   │   │   └── page.tsx     # Contact page
│   │   │   ├── privacy/
│   │   │   │   └── page.tsx     # Privacy policy
│   │   │   └── terms/
│   │   │       └── page.tsx     # Terms of service
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   └── MobileMenu.tsx
│   │   │   ├── home/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── WhatWeBuild.tsx
│   │   │   │   ├── Products.tsx
│   │   │   │   ├── Numbers.tsx
│   │   │   │   └── CTA.tsx
│   │   │   ├── about/
│   │   │   │   ├── FounderStory.tsx
│   │   │   │   ├── Timeline.tsx
│   │   │   │   └── Team.tsx
│   │   │   └── shared/
│   │   │       ├── Button.tsx
│   │   │       ├── Badge.tsx
│   │   │       ├── Card.tsx
│   │   │       └── SectionHeader.tsx
│   │   ├── lib/
│   │   │   ├── constants.ts     # Company info, links, metadata
│   │   │   └── utils.ts
│   │   ├── public/
│   │   │   ├── logo/
│   │   │   ├── images/
│   │   │   ├── og-image.png
│   │   │   └── favicon.ico
│   │   ├── next.config.ts       # TypeScript config (next.config.js deprecated)
│   │   ├── postcss.config.mjs   # Tailwind v4 uses PostCSS
│   │   ├── globals.css          # Tailwind v4 CSS-first config
│   │   ├── tsconfig.json
│   │   └── package.json
│   │
│   └── sprint/                  # sprint.sheriax.com (Next.js 16)
│       ├── app/
│       │   ├── layout.tsx       # Root layout
│       │   ├── page.tsx         # Homepage (main offer page)
│       │   ├── india/
│       │   │   └── page.tsx     # India offer detail
│       │   ├── uae/
│       │   │   └── page.tsx     # UAE/international offer detail
│       │   ├── government/
│       │   │   └── page.tsx     # Government variant
│       │   ├── case-studies/
│       │   │   ├── page.tsx     # Case studies index
│       │   │   └── [slug]/
│       │   │       └── page.tsx # Individual case study
│       │   ├── book/
│       │   │   └── page.tsx     # Booking page (Cal.com embed)
│       │   ├── privacy/
│       │   │   └── page.tsx
│       │   └── terms/
│       │       └── page.tsx
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Navbar.tsx
│       │   │   ├── Footer.tsx
│       │   │   └── MobileMenu.tsx
│       │   ├── home/
│       │   │   ├── Hero.tsx
│       │   │   ├── PainPoints.tsx
│       │   │   ├── Packages.tsx
│       │   │   ├── Process.tsx
│       │   │   ├── CaseStudies.tsx
│       │   │   ├── FAQ.tsx
│       │   │   └── BookCTA.tsx
│       │   ├── offer/
│       │   │   ├── OfferHero.tsx
│       │   │   ├── Deliverables.tsx
│       │   │   ├── Timeline.tsx
│       │   │   └── PricingCard.tsx
│       │   └── shared/
│       │       ├── Button.tsx
│       │       ├── Badge.tsx
│       │       ├── Card.tsx
│       │       └── SectionHeader.tsx
│       ├── lib/
│       │   ├── constants.ts
│       │   ├── case-studies.ts  # Case study data
│       │   └── utils.ts
│       ├── public/
│       │   ├── logo/
│       │   ├── images/
│       │   ├── og-image.png
│       │   └── favicon.ico
│       ├── next.config.ts
│       ├── postcss.config.mjs   # Tailwind v4
│       ├── globals.css          # Tailwind v4 CSS-first config
│       ├── tsconfig.json
│       └── package.json
│
├── packages/
│   └── ui/                      # Shared design tokens (optional)
│       ├── colors.ts
│       ├── fonts.ts
│       └── index.ts
│
├── turbo.json                   # Turborepo 2.x config
├── package.json                 # Root workspace
├── pnpm-workspace.yaml          # pnpm workspaces
└── README.md
```

### Why monorepo, not a single Next.js app:
- sprint.sheriax.com needs its own subdomain, its own OG images, its own SEO identity
- Both apps deploy independently — a change to Sprint doesn't redeploy sheriax.com
- Shared design tokens keep them visually related without forcing them into one codebase
- In the IDE workspace, both projects are visible and editable simultaneously

### Package manager & tooling:
- Use **pnpm 10.x** with workspaces (enable via `corepack enable && corepack prepare pnpm@latest-10 --activate`)
- **Turborepo 2.x** for build orchestration (enhanced watch mode, improved caching)
- **Next.js 16** with Turbopack (stable, default bundler, 5-10x faster builds)
- **Tailwind CSS v4** with CSS-first configuration (no JS config file needed)
- **Vercel** for deployment (auto-detects monorepo structure)

---

## 2. UPDATED TECH STACK SPECIFICATIONS

### Core Dependencies (2026 Standards)

| Package | Version | Notes |
|---------|---------|-------|
| next | 16.1.6+ | Latest stable with Turbopack as default bundler |
| react | 19.0.0+ | React 19 stable with React Compiler support |
| react-dom | 19.0.0+ | |
| typescript | 5.7.3+ | Latest stable |
| tailwindcss | 4.1.18+ | CSS-first configuration (v4) |
| framer-motion | 12.0.0+ | React 19 compatible |
| lucide-react | 0.475.0+ | Icon library |

### Key Changes from Previous Plan:
1. **Next.js 16**: Turbopack is now stable and default (no webpack by default). Uses React 19.
2. **Tailwind CSS v4**: Configuration moves to CSS (`@import "tailwindcss"`) instead of `tailwind.config.ts`. Uses `@theme` blocks for customization.
3. **React 19**: Full support for React Compiler (automatic memoization), `use()` hook, and improved RSC.
4. **Turborepo 2.x**: Improved daemon, composable configuration, and better watch mode.

---

## 3. TAILWIND CSS v4 CONFIGURATION

Tailwind v4 uses CSS-first configuration. Replace the old `tailwind.config.ts` with `globals.css`:

```css
/* apps/main/app/globals.css */
@import "tailwindcss";

/* Sheriax Brand Theme */
@theme {
  /* Colors */
  --color-primary: #0A0A0A;
  --color-accent: #FF6B35;
  --color-accent-light: #FFF0E8;
  --color-surface: #FAFAFA;
  --color-surface-dark: #111111;
  --color-border: #E5E5E5;
  --color-border-dark: #2A2A2A;
  --color-text-muted: #6B7280;
  --color-success: #10B981;
  
  /* Fonts */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;
  
  /* Custom utilities */
  --spacing-section: 5rem;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #FAFAFA;
    --color-surface: #0A0A0A;
    --color-border: #2A2A2A;
  }
}

/* Custom components using @layer */
@layer components {
  .btn-primary {
    @apply bg-accent text-white px-6 py-3 rounded-lg font-medium 
           hover:bg-accent/90 transition-colors;
  }
}
```

PostCSS configuration (`postcss.config.mjs`):
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

---

## 4. SHERIAX.COM — PARENT BRAND SITE

### 4.1 BRAND IDENTITY

**Positioning:** "We build AI products and automation systems."
NOT a services company. NOT a web dev agency. A product studio that ships.

**Tone:** Confident, minimal, slightly technical. Think Linear.app or Vercel's own website — clean, modern, dark/light with crisp typography. No fluff, no stock photos, no "we are passionate about delivering value" language.

**Color palette:**
```
Primary:      #0A0A0A  (near-black, for backgrounds and text)
Accent:       #FF6B35  (Sheriax orange — already in use, keep it)
Accent-light: #FFF0E8  (orange tint for hover states)
Surface:      #FAFAFA  (light backgrounds)
Surface-dark: #111111  (dark mode backgrounds)
Border:       #E5E5E5  (light) / #2A2A2A (dark)
Text-muted:   #6B7280  (secondary text)
Success:      #10B981  (for Kizu health green)
```

**Typography:**
```
Headings: Inter (via next/font)
Body: Inter
Mono: JetBrains Mono (for any code/technical references)
```

**Logo:** Keep existing Sheriax logo. Ensure SVG version exists for crisp rendering.

---

### 4.2 PAGE-BY-PAGE SPECIFICATION

#### PAGE: Homepage (/)

**Goal:** In 10 seconds, a visitor knows what Sheriax is, sees what it builds, and has a path to learn more.

**Section 1: Hero**
```
Layout: Full-width, min-height 90vh
Background: Clean white or very subtle gradient, NO stock images
Content:
  - Badge: "DPIIT Recognized Startup"
  - Headline: "We build AI products that solve real problems."
  - Subheadline: "Sheriax is a product studio from Chennai. We design,
    build, and ship AI-powered products and automation systems."
  - Two CTAs:
    [See Our Work →]  (scrolls to Products section)
    [Work With Us →]  (links to sprint.sheriax.com)
  - Small text below CTAs: "Currently building Kizu — AI-powered financial recovery"
```

**Design notes:**
- NO hero image/illustration. Let the words breathe.
- Headline should be large (text-5xl md:text-6xl lg:text-7xl)
- Subtle entrance animation using Framer Motion (fade up, 300ms delay between elements)
- The badge should be a small pill shape with a subtle border
- Use Next.js 16 View Transitions for smooth page transitions

**Section 2: What We Build (Products)**
```
Layout: Two cards side by side (stack on mobile)

Card 1 — Kizu:
  - Kizu logo/icon (fox mascot, small)
  - Title: "Kizu"
  - Description: "AI-powered financial recovery. Scans receipts,
    detects money leaks, and guides you to financial wellness."
  - Badge: "Launching 2026"
  - Link: "Learn more →" (goes to /kizu which then links to kizu.in)

Card 2 — Sprint Studio:
  - Sprint icon (lightning bolt or sprint symbol)
  - Title: "Sprint Studio"
  - Description: "Fixed-scope AI automation sprints for agencies.
    Automate your delivery workflows in 14 days."
  - Badge: "Taking Clients"
  - Link: "View offers →" (goes to sprint.sheriax.com)
```

**Design notes:**
- Cards should have subtle border (`border border-border`), slight shadow on hover, and scale up slightly (`hover:scale-[1.02]`)
- Each card should feel like a product, not a service listing
- DO NOT add any other services (web dev, SEO, AR/VR, mobile app). Only Kizu and Sprint Studio.

**Section 3: Numbers / Social Proof (optional — only if you have real numbers)**
```
Layout: Horizontal row of 3-4 stats

Possible stats:
  - "500+" Kizu Waitlist
  - "10+" Sprints Delivered (if true, otherwise skip)
  - "2026" Founded (or use founding year)
  - "DPIIT" Recognized

Only include stats you can back up. Fake numbers destroy credibility.
```

**Section 4: About Teaser**
```
Layout: Text-left, optional image-right (of you as founder)

Content:
  - Small label: "About"
  - Headline: "Built in Chennai by Youhana Sheriff"
  - 2-3 sentences: Brief founder story. Why you started Sheriax.
    What drives you. Keep it personal and authentic.
  - Link: "Read more →" (goes to /about)
```

**Section 5: CTA / Footer lead-in**
```
Layout: Centered, contrasting background (dark if rest is light)

Content:
  - Headline: "Have a workflow problem? Let's sprint."
  - Subheadline: "We run fixed-scope 2-week automation sprints for agencies."
  - CTA: [Book a Discovery Call →] (links to sprint.sheriax.com/book)
```

---

#### PAGE: About (/about)

**Goal:** Build trust. Show the human behind the company.

**Section 1: Founder Hero**
```
- Your photo (professional but not corporate — real, approachable)
- Name: Youhana Sheriff
- Title: Founder & CEO, Sheriax Solutions
- 1-line: "Building AI products from Chennai for the world."
```

**Section 2: Story**
```
Write this in first person. 3-4 paragraphs max. Cover:
- Why you started Sheriax
- What you believe about technology
- Where Sheriax is headed

Tone: Authentic. NOT corporate. NOT "we leverage synergies."
Think personal blog post, not annual report.
```

**Section 3: Timeline (optional)**
```
Visual timeline of key milestones:
- Founded Sheriax
- DPIIT recognition
- First sprint client
- Launched Chatiko
- Building Kizu
- [Future]: Kizu launch, etc.
```

**Section 4: Team**
```
Show key people:
- Youhana Sheriff — Founder & CEO
- Nusrath — CMO
- Others if applicable

Each person: Photo + Name + Role + one-line. No LinkedIn-style bios.
```

---

#### PAGE: Kizu (/kizu)

**Goal:** This is NOT a replica of kizu.in. This is a brief showcase that links to the main Kizu site.

```
Content:
  - Kizu logo + mascot
  - Headline: "Kizu — Heal Your Financial Wounds"
  - 3-4 lines about what Kizu does
  - 3 feature cards (Receipt Scanning, Wound Detection, Health Score)
  - CTA: [Visit kizu.in →] (external link to kizu.in)
  - Secondary CTA: [Join the Waitlist →] (links to kizu.in waitlist)

This page exists so sheriax.com has a complete story.
Do NOT duplicate the full kizu.in content here.
```

---

#### PAGE: Sprint (/sprint)

**Goal:** Brief overview that redirects to sprint.sheriax.com

```
Content:
  - Sprint Studio logo/icon
  - Headline: "Sprint Studio — AI Automation in 14 Days"
  - 3-4 lines about the sprint model
  - The two packages summarized (Agency Sprint ₹1.5L, Discovery Sprint ₹50K)
  - CTA: [View Full Offers →] (links to sprint.sheriax.com)
  - Secondary CTA: [Book Discovery Call →] (links to sprint.sheriax.com/book)
```

---

#### PAGE: Contact (/contact)

```
Content:
  - Headline: "Get in touch"
  - Email: hello@sheriax.com (or whatever you use)
  - Location: Chennai, India
  - Social links: LinkedIn, Twitter/X, GitHub (if applicable)
  - Simple contact form: Name, Email, Message, Submit
    (use Formspree, Resend, or similar — no backend needed)
  - Note: "For Sprint Studio inquiries, book a call at sprint.sheriax.com"
```

---

### 4.3 NAVBAR & FOOTER

**Navbar:**
```
Left:  [Sheriax Logo]
Center/Right: Home | Kizu | Sprint Studio | About | Contact
Far right: [Book a Call →] (button, links to sprint.sheriax.com/book)

Mobile: Hamburger menu, same links
Behavior: Transparent on hero, white/solid on scroll (backdrop-blur)
```

**Footer:**
```
Layout: 4 columns on desktop, stacked on mobile

Col 1: Sheriax logo + tagline + "Made with 🧡 in India" + "DPIIT Recognized"
Col 2: Products — Kizu, Sprint Studio
Col 3: Company — About, Contact
Col 4: Legal — Privacy, Terms

Bottom bar: "© 2026 Sheriax Solutions. All rights reserved."
```

---

## 5. SPRINT.SHERIAX.COM — SPRINT STUDIO SITE

### 5.1 BRAND IDENTITY

Sprint Studio should feel related to Sheriax but have its own energy — faster, more direct, more sales-oriented. Think of it as the "business card" that closes deals.

**Color palette (extends Sheriax):**
```
Primary:      #0A0A0A
Accent:       #FF6B35  (same Sheriax orange)
Sprint-blue:  #3B82F6  (add a blue for Sprint-specific elements)
Surface:      #FAFAFA
Background:   #FFFFFF
```

**Tone:** Direct, no-nonsense, confident. Every sentence should either state a problem, present a solution, or push toward booking a call. No filler.

---

### 5.2 PAGE-BY-PAGE SPECIFICATION

#### PAGE: Homepage (/)

This is a **single long-form sales page**. It's the most important page on the site. Structure follows proven landing page flow: Problem → Solution → Proof → Process → FAQ → CTA.

**Section 1: Hero**
```
Badge: "Fixed-Scope AI Sprints"
Headline: "Automate Your Agency Workflows in 2 Weeks"
Subheadline: "Fixed-scope AI automation sprints for agencies that want
  faster reporting, cleaner handoffs, and fewer manual operations."
CTA: [Book Discovery Call →]  [View Offers ↓]
```

**Section 2: Pain Points**
```
Headline: "Manual workflows are killing delivery speed."

4 pain cards (icon + title + description):
1. "Leads fall through the cracks"
   No structured intake means missed follow-ups and inconsistent pipeline tracking.

2. "Reporting takes too long"
   Hours pulling data from multiple tools instead of delivering insights.

3. "Onboarding is inconsistent"
   Every new client gets a different experience because the process
   lives in people's heads, not systems.

4. "Follow-ups depend on memory"
   Critical tasks slip because there is no automated trigger system.
```

**Design:** Grid of 4 cards. Each has a subtle red/warning accent. These should feel like "diagnoses" — problems that hurt.

**Section 3: Sprint Packages**
```
Headline: "Our Sprint Packages"
Subheadline: "Two focused engagement formats designed for speed and clarity."

Card 1 — Agency AI Automation Sprint:
  Duration: 2 Weeks
  Price: ₹1,50,000 starting / AED 15,000+ for UAE
  Deliverables:
    - 2-3 workflows automated
    - SOP + handover documentation
    - Dashboard + reporting views
    - 2-week post-sprint support
  CTAs: [View Full Offer →] (links to /india)
         [Government Variant →] (links to /government)

Card 2 — Workflow Discovery Sprint:
  Duration: 3 Days
  Price: ₹50,000 starting / AED 2,500+ for UAE
  Deliverables:
    - Process audit of one workflow
    - Bottleneck + risk map
    - Automation opportunity matrix
    - 14-day implementation roadmap
  CTA: [Book Discovery Call →] (links to /book)

Sovereign AI Banner:
  Small banner below cards:
  "Sovereign AI Ready — Workflow automation designed for controlled
  infrastructure and compliance-sensitive government contexts."
  [View Government Offer →]
```

**Design:** Two cards side by side, equal height. Most popular card (2-week sprint) should be visually emphasized (border accent, "Popular" badge, or slightly larger).

**Section 4: Case Studies**
```
Headline: "Real Results, Not Theory"

3 case studies as cards:

1. VIT Project — Education Workflow
   "Built and shipped a structured automation workflow that reduced
   manual back-and-forth in task tracking."

2. Sheriax Internal — Ops Standardization
   "Core repetitive operations standardized into repeatable pipelines.
   Improved response consistency."

3. RFP Automation — Government Workflow
   "Fragmented RFP response process converted into structured pipeline:
   requirement extraction, owner assignment, deadline triggers."

Each card: Project type badge, title, 2-3 line description.
If you have specific metrics (% time saved, hours reduced), ADD THEM.
```

**Section 5: Process**
```
Headline: "How It Works"

4-step horizontal timeline (vertical on mobile):

Step 1 — Discovery (Days 1-2)
  "We audit your workflows and lock scope."

Step 2 — Build (Days 3-8)
  "Automation build-out, integrations, first QA pass."

Step 3 — Test (Days 9-12)
  "Edge-case handling, team review, pilot run."

Step 4 — Handover (Days 13-14)
  "Training, SOP docs, and support kickoff."
```

**Design:** Clean timeline with numbered circles, connecting lines, and brief text. Each step has a subtle background change.

**Section 6: FAQ**
```
Headline: "Frequently Asked Questions"

Accordion-style FAQ:

Q: Do you build custom apps in this sprint?
A: No. This sprint is for workflow automation only.
   Custom app development is a separate engagement.

Q: What are the payment terms?
A: 50% upfront at kickoff, 50% on handover.
   Discovery sprints are 100% upfront.

Q: Can you support compliance-sensitive use cases?
A: Yes. We have a dedicated government offer variant
   designed for sovereign-compliant infrastructure.

Q: What tools do you integrate with?
A: We work with your existing stack — CRMs, project management
   tools, reporting platforms, communication tools, and custom APIs.

Q: What happens after the sprint?
A: You get full ownership of all workflows, SOPs, and documentation.
   Optional monthly support retainer available.

Q: Do you work with international clients?
A: Yes. We serve India (INR pricing) and UAE/international clients
   (AED/USD pricing). Remote delivery.
```

**Section 7: Final CTA**
```
Background: Dark / contrasting
Headline: "Ready to Stop Doing Things Manually?"
Subheadline: "Book a 30-minute Discovery Call. We'll map your top
  workflow bottleneck and show a realistic 14-day plan."
CTA: [Schedule a Call →] (links to /book)
```

---

#### PAGE: India Offer (/india)

**Detailed version of the 2-week Agency AI Automation Sprint for Indian clients.**

```
Sections:
1. Offer Hero
   - Title: "Agency AI Automation Sprint"
   - Subtitle: "Automate your delivery workflows in 14 days"
   - Price: ₹1,50,000 starting
   - CTA: [Book Discovery Call]

2. What You Get (detailed deliverables)
   - 2-3 core workflows automated end-to-end
   - Standard Operating Procedures (SOPs) for every automated workflow
   - Dashboard with reporting views
   - Integration with your existing tool stack
   - 2 weeks post-sprint support
   - Full ownership of everything built

3. What We Automate (examples)
   - Client onboarding flows
   - Reporting and data aggregation
   - Lead intake and qualification
   - Internal task assignment and tracking
   - Follow-up and reminder triggers

4. Timeline (14-day breakdown with more detail)

5. Who This Is For
   - Digital marketing agencies
   - Consulting firms
   - SaaS companies with ops bottlenecks
   - Any team doing 5+ hours/week of manual reporting

6. Pricing Details
   - Base: ₹1,50,000
   - Additional workflows: ₹40,000-60,000 per workflow
   - Monthly retainer (optional): ₹30,000/month
   - Payment: 50% upfront, 50% on handover

7. CTA: [Book Discovery Call]
```

---

#### PAGE: UAE Offer (/uae)

**Same structure as /india but with UAE pricing and context.**

```
Key differences:
- Price: AED 15,000+ starting
- Additional workflows: AED 5,000-8,000
- Monthly retainer: AED 3,500/month
- Context: Reference to UAE agency landscape, compliance needs
- Mention timezone overlap with India (easy collaboration)
```

---

#### PAGE: Government Variant (/government)

```
Sections:
1. Hero
   - Badge: "Sovereign AI Ready"
   - Title: "AI Automation for Government Workflows"
   - Subtitle: "Designed for controlled infrastructure
     and compliance-sensitive contexts"

2. What Makes This Different
   - On-premise / sovereign cloud deployment
   - No data leaves controlled infrastructure
   - Compliance-aware workflow design
   - Audit trails built into every automation
   - Documentation meets government standards

3. Use Cases
   - RFP response pipeline automation
   - Document routing and approval workflows
   - Citizen service request tracking
   - Internal reporting and MIS automation
   - Tender management workflows

4. Engagement Model
   - Same 14-day sprint framework
   - Additional security review phase
   - Government pricing: Custom (contact for quote)

5. CTA: [Request a Briefing →]
```

---

#### PAGE: Case Studies (/case-studies)

```
Index page listing all case studies as cards.
Each card links to /case-studies/[slug] with full detail.

Individual case study page structure:
- Client/project type
- The Problem (what was broken)
- Our Approach (what we did in 14 days)
- The Result (what changed — use metrics if possible)
- Key Automations Built (bullet list)
- Timeline (how the 14 days were spent)
- Quote from client (if available)
```

---

#### PAGE: Book (/book)

```
Simple page with Cal.com embed.
- Headline: "Book a Discovery Call"
- Subheadline: "30 minutes. We'll map your top workflow
  bottleneck and give you a concrete plan."
- Cal.com scheduling widget (embed via iframe or React component)
- Below the widget: "Not ready for a call? Email us at sprint@sheriax.com"
```

---

### 5.3 NAVBAR & FOOTER

**Navbar:**
```
Left: [Sheriax Sprint Studio] (logo text, links to /)
Right: Offers | Case Studies | FAQ | [Book a Call →] (button)

Mobile: Hamburger
Behavior: Same as main site — transparent on hero, solid on scroll
```

**Footer:**
```
Minimal:
Left: "Sheriax Sprint Studio" + "Made with dedication in India"
Center: Links — Sprint Offers | Government Variant | FAQ
Right: "sprint.sheriax.com" + link to sheriax.com

Bottom: "© 2026 Sheriax Product Studio. All rights reserved."
```

---

## 6. SHARED DESIGN SYSTEM

### 6.1 Component Patterns

Both sites share the same design DNA. These components should look and behave identically across both apps:

**Button:**
```tsx
// Primary: filled orange
// Secondary: outlined
// Ghost: no border, text only
// Sizes: sm, md, lg

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  href?: string        // renders as <a> if provided
  children: React.ReactNode
  rightIcon?: boolean  // adds → arrow
}
```

**Badge:**
```tsx
// Small pill for labels like "DPIIT Recognized", "Launching 2026", "Popular"
// Variants: default (gray border), accent (orange), success (green), blue

interface BadgeProps {
  variant: 'default' | 'accent' | 'success' | 'blue'
  children: React.ReactNode
}
```

**Card:**
```tsx
// Standard card with optional hover effect
// Used for products, features, case studies, packages

interface CardProps {
  hover?: boolean      // scale + shadow on hover
  bordered?: boolean   // subtle border
  padded?: boolean     // default padding
  children: React.ReactNode
}
```

**SectionHeader:**
```tsx
// Consistent section header pattern
// Used at the top of every section

interface SectionHeaderProps {
  label?: string        // Small caps label above headline
  title: string         // Main headline
  description?: string  // Supporting text
  align?: 'left' | 'center'
}
```

### 6.2 Spacing Scale

Use Tailwind v4's default spacing scale consistently:
```
Section padding:      py-20 (desktop) / py-12 (mobile)
Between sections:     No gap (padding handles it)
Card padding:         p-6 or p-8
Card gap in grid:     gap-6 or gap-8
Text stack gap:       space-y-4
Max content width:    max-w-7xl mx-auto px-6
Narrow content:       max-w-3xl mx-auto px-6 (for text-heavy pages)
```

### 6.3 Animation

Use Framer Motion 12 sparingly. Less is more.

```tsx
// Standard fade-up on scroll (use for every section)
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
}

// Stagger children (use for card grids)
const stagger = {
  whileInView: { transition: { staggerChildren: 0.1 } }
}

// Do NOT use:
// - Parallax scrolling
// - Animated backgrounds
// - Complex SVG morphing
// - Anything that makes the page feel slow
```

### 6.4 Responsive Breakpoints

Follow Tailwind v4 defaults:
```
sm:   640px    (large phones)
md:   768px    (tablets)
lg:   1024px   (small laptops)
xl:   1280px   (desktops)
2xl:  1536px   (large screens)
```

Key responsive behaviors:
- 2-column card grids → 1-column on mobile
- Navbar links → hamburger on mobile (< md)
- Hero headline: text-5xl → text-3xl on mobile
- Section padding reduces on mobile
- Footer columns stack on mobile

---

## 7. SEO & METADATA

### 7.1 sheriax.com

```tsx
// app/layout.tsx
export const metadata = {
  title: {
    default: 'Sheriax Solutions — AI Products & Automation',
    template: '%s | Sheriax'
  },
  description: 'We build AI products and automation systems. Makers of Kizu and Sprint Studio. DPIIT Recognized Startup from Chennai, India.',
  keywords: ['AI products', 'automation', 'Chennai startup', 'Sheriax', 'Kizu', 'Sprint Studio'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sheriax.com',
    siteName: 'Sheriax Solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image'
  }
}
```

Page-specific titles:
```
/           → "Sheriax Solutions — AI Products & Automation"
/about      → "About | Sheriax"
/kizu       → "Kizu — AI Financial Recovery | Sheriax"
/sprint     → "Sprint Studio — AI Automation Sprints | Sheriax"
/contact    → "Contact | Sheriax"
```

### 7.2 sprint.sheriax.com

```tsx
export const metadata = {
  title: {
    default: 'Sheriax Sprint Studio — AI Automation Sprints for Agencies',
    template: '%s | Sprint Studio'
  },
  description: 'Fixed-scope AI automation sprints. Automate your agency workflows in 2 weeks. Starting at ₹1,50,000.',
  openGraph: {
    url: 'https://sprint.sheriax.com',
    siteName: 'Sheriax Sprint Studio',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  }
}
```

Page-specific titles:
```
/            → "Sheriax Sprint Studio — AI Automation Sprints for Agencies"
/india       → "Agency AI Sprint — India | Sprint Studio"
/uae         → "Agency AI Sprint — UAE | Sprint Studio"
/government  → "Government AI Automation | Sprint Studio"
/case-studies → "Case Studies | Sprint Studio"
/book        → "Book a Call | Sprint Studio"
```

---

## 8. TECHNICAL DECISIONS (Updated for 2026)

### 8.1 What to use

| Need | Solution | Why |
|------|----------|-----|
| Framework | Next.js 16+ (App Router) | Turbopack stable (5x faster builds), React 19 support, View Transitions |
| Language | TypeScript 5.7+ | Latest features, strict mode |
| Styling | Tailwind CSS v4 | CSS-first config, 5x faster builds, modern CSS features |
| Animation | Framer Motion 12 | React 19 compatible, View Transition support |
| Icons | Lucide React | Tree-shakeable, modern |
| Forms | Formspree or Resend | No backend needed |
| Booking | Cal.com embed | Already in use, works well |
| Analytics | Vercel Analytics | Lightweight, privacy-friendly |
| Deployment | Vercel | Turbopack native, edge network |
| Font loading | next/font | Optimized, no layout shift |
| Monorepo | Turborepo 2.x | Improved caching, watch mode, composable configs |

### 8.2 What NOT to use

- No CMS (content is minimal, just hardcode it)
- No database (use static generation)
- No authentication
- No heavy animation libraries (GSAP, Three.js)
- No Chakra UI / Material UI / any component library (Tailwind is enough)
- No blog (not yet — add later if needed)
- **No tailwind.config.ts** (use CSS-first config in v4)

### 8.3 Performance targets (Next.js 16 + Turbopack)

```
Lighthouse score: 95+ on all four metrics
LCP: < 1.2s (Turbopack optimizes this)
CLS: 0
INP: < 200ms
Bundle size: < 80KB JS per page (React 19 Compiler helps)
```

Achieve this by:
- Using next/image for all images (WebP/AVIF automatic)
- Static generation (SSG) for all pages
- Turbopack tree-shaking
- Font subsetting via next/font
- CSS-first Tailwind (no JS runtime)
- React Compiler for automatic memoization

---

## 9. CONTENT TO WRITE (BEFORE CODING)

Before touching any code, write this content in a Google Doc or Notion:

### For sheriax.com:
- [ ] Hero headline and subheadline (final copy)
- [ ] About page: Founder story (3-4 paragraphs, first person)
- [ ] Company timeline (key dates and milestones)
- [ ] Kizu description (3-4 lines for the product card)
- [ ] Sprint Studio description (3-4 lines for the product card)
- [ ] Contact details (email, location, socials)

### For sprint.sheriax.com:
- [ ] Hero headline and subheadline
- [ ] 4 pain point cards (title + description each)
- [ ] Package descriptions (deliverables, pricing, terms)
- [ ] Case study content (problem → approach → result for each)
- [ ] Government variant content
- [ ] UAE-specific pricing and context
- [ ] FAQ answers (6-8 questions)
- [ ] Booking page copy

### Assets needed:
- [ ] Sheriax logo (SVG, light and dark variants)
- [ ] Sprint Studio logo/wordmark (SVG)
- [ ] Your headshot (for About page)
- [ ] Team photos (for About page)
- [ ] Kizu mascot image (for product card)
- [ ] OG images for both sites (1200x630px)
- [ ] Favicon for both sites

---

## 10. BUILD ORDER

Follow this sequence. Do NOT jump ahead.

### Phase 1: Foundation (Day 1)
```
1. Initialize monorepo with pnpm 10.x workspaces + Turborepo 2.x
   - corepack enable && corepack prepare pnpm@latest-10 --activate
   - pnpm init
   - Create pnpm-workspace.yaml
   
2. Set up both Next.js 16 apps with App Router
   - pnpm create next-app@latest apps/main --typescript --tailwind --app --no-src-dir
   - pnpm create next-app@latest apps/sprint --typescript --tailwind --app --no-src-dir
   
3. Configure Tailwind v4 CSS-first setup
   - Remove tailwind.config.ts files
   - Create globals.css with @import "tailwindcss" and @theme blocks
   - Update postcss.config.mjs for @tailwindcss/postcss
   
4. Set up next/font (Inter)
5. Create shared components: Button, Badge, Card, SectionHeader
6. Verify both apps run locally with Turbopack
   - main on localhost:3000
   - sprint on localhost:3001
```

### Phase 2: sheriax.com (Days 2-3)
```
1. Build Navbar + Footer (responsive)
2. Build Homepage sections in order:
   - Hero
   - Products (Kizu + Sprint Studio cards)
   - Numbers (if you have real stats)
   - About teaser
   - CTA
3. Build About page
4. Build Kizu page (brief showcase + link to kizu.in)
5. Build Sprint page (brief overview + link to sprint.sheriax.com)
6. Build Contact page with form
7. Add privacy/terms pages (can be minimal for now)
8. SEO: metadata, OG images, sitemap
9. Test responsive, test Lighthouse, fix issues
```

### Phase 3: sprint.sheriax.com (Days 4-6)
```
1. Build Navbar + Footer
2. Build Homepage sections in order:
   - Hero
   - Pain Points
   - Packages
   - Case Studies
   - Process (timeline)
   - FAQ (accordion)
   - Final CTA
3. Build /india offer page
4. Build /uae offer page
5. Build /government page
6. Build /case-studies index + individual pages
7. Build /book page with Cal.com embed
8. Add privacy/terms pages
9. SEO: metadata, OG images, sitemap
10. Test responsive, test Lighthouse, fix issues
```

### Phase 4: Polish (Day 7)
```
1. Add Framer Motion animations (fade-up on scroll for all sections)
2. Add Next.js 16 View Transitions between pages
3. Cross-link both sites properly (sheriax.com ↔ sprint.sheriax.com)
4. Verify all external links (kizu.in, Cal.com, socials)
5. Dark mode (optional — only if time permits, light mode is fine)
6. Final responsive testing on real devices
7. Deploy both to Vercel
8. Configure domains:
   - sheriax.com → main app
   - sprint.sheriax.com → sprint app
```

---

## 11. WHAT TO REMOVE FROM CURRENT SITES

### From sheriax.com (remove these):
- [ ] Services page listing Web Dev, Mobile App, SEO, AR/VR
- [ ] Any reference to Chatiko (archive the app, don't feature it)
- [ ] Client testimonials about JavaScript/web development work
- [ ] Any "hire us for X" language that positions as a services shop
- [ ] Generic "A technology company that creates innovative solutions" tagline
- [ ] Old tailwind.config.js files (migrate to CSS-first v4)

### From sprint.sheriax.com (keep/improve these):
- [ ] The current page is actually solid — mostly keep the content
- [ ] Upgrade from static HTML to Next.js 16 for consistency
- [ ] Add the /india and /uae detailed offer pages (currently just india.html)
- [ ] Add proper case study pages (not just cards)
- [ ] Add /book page with Cal.com embed (currently inline)
- [ ] Fix: the current site says "Sheriax Product Studio" in footer — change to "Sheriax Sprint Studio"

---

## 12. IMPORTANT REMINDERS FOR THE AI IDE

When you open this in your AI IDE workspace:

1. **Start with the monorepo setup.** Don't skip to building pages before the foundation is solid. Use pnpm 10.x and Turborepo 2.x.

2. **Use Tailwind CSS v4 correctly.** There is no tailwind.config.ts in v4. All configuration happens in CSS using @import "tailwindcss" and @theme blocks.

3. **Leverage Next.js 16 features.** Use Turbopack (default), React 19 React Compiler (automatic memoization), and View Transitions for page navigation.

4. **Content first, code second.** Have all the text content ready in constants.ts before building components. Don't use placeholder "Lorem ipsum" — write real copy.

5. **Mobile-first.** Build every component mobile-first, then add desktop overrides. Most of your visitors (especially from India) will be on phones.

6. **No over-engineering.** These are marketing sites, not web apps. Static pages. No state management. No API routes (only when needed). No database. Keep it simple.

7. **Match the energy.** sheriax.com should feel calm, confident, premium. sprint.sheriax.com should feel energetic, direct, conversion-focused. Same design system, different energy.

8. **Test with real content.** If you don't have a headshot, use a placeholder but mark it clearly as TODO. Don't ship without replacing placeholders.

9. **Ship fast, iterate later.** Get both sites live in a week. You can polish endlessly later. A live site that's 80% perfect beats a local dev server that's 100% perfect.

10. **Use TypeScript strictly.** Enable strict mode in tsconfig.json. No `any` types. Define interfaces for all props.

---

## 13. PACKAGE VERSION REFERENCE

Use these exact versions or later in package.json files:

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.475.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^4.1.18",
    "@tailwindcss/postcss": "^4.1.18",
    "postcss": "^8.5.0",
    "typescript": "^5.7.3",
    "turbo": "^2.4.0"
  }
}
```

Root package.json should specify:
```json
{
  "packageManager": "pnpm@10.4.0",
  "engines": {
    "node": ">=22.0.0"
  }
}
```

---
# Sheriax company website review

Review date: 20 October 2026. Implementation and verification were performed locally. No deployment command was run.

## Scope and design

The main site now presents Sheriax as the company behind Tat’heer. The home page introduces the company, explains the problem and planned six-step journey, states development status, and provides company accountability and contact details. About and Contact are concise. React remains the implementation framework.

The design retains the Sheriax mark and Geist typefaces. Large, left-aligned typography, a warm paper background, restrained terracotta accents, an olive product section and a dark development-status section establish the company’s own identity. There are no product dashboard fragments, stock photographs, moving badges or decorative animations. The approved Tat’heer artwork is retained without redrawing; only source-file trailing whitespace is normalized; Arabic text is also shown as تطهير. No app screenshots or original 3D assets are used.

All primary product links go to the product website. Early access remains at `https://tatheer.money/#early-access`. Planned bank connections, scholarly guidance and recipient checks are explicitly unavailable. No launch date, app-store listing, endorsements, partnerships, certification, customer counts or security guarantees are claimed.

## Company evidence

The following company details are used:

- Legal name: Sheriax Solutions (OPC) Private Limited.
- Incorporation: 7 November 2024; CIN U62099TN2024OPC174546.
- Location: Chennai, Tamil Nadu, India. No street address is published.
- Contact: hi@sheriax.com, as specified by the company for public correspondence.

The legal name, date and CIN were checked against the Ministry of Corporate Affairs incorporation certificate in the company workspace at `10-Operations/proof-assets/company-registration/COI_Sheriax.pdf`. The location is supported by the GST registration certificate in the same directory. These are incorporation/registration records, not a claim of a new live MCA status search. The public contact address is hi@sheriax.com, as explicitly requested by the company. Mailbox configuration and delivery for this address have not been tested. No email was sent or delivery promised.

Unverified founder/team stories, traction and recognition claims were omitted. Legacy certificate data is not imported or rendered, and was left unchanged. No personal certificate information was copied into the website or this note.

## Routes and contact

Observed against the production build served locally:

- `/`, `/about`, `/contact`, `/privacy`, `/terms`: 200.
- `/kizu`, `/sprint`, `/services`: 404.
- `/kizu/anything`, `/sprint/anything`: 404.
- `/services/ai-ml`, `/services/web-development`, `/services/mobile-app`, `/services/seo`, `/services/ar-vr`: 404.
- `/api/waitlist`, `/api/contact`: 404 for both GET and POST.
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`: 200.

The service URLs had no remaining implementation but were still advertised by the old sitemap; those sitemap entries are removed. The main-site product pages and their exclusively used waitlist proxy are deleted. No unrelated product is redirected to Tat’heer. A useful custom 404 page is supplied, with the framework’s noindex response.

The old contact form had no action or submission handler and would submit its fields through a default GET request. It is replaced with a plain email link and a copyable address. The unused lead endpoint, agency fields, email-provider credential requirement and false-success path are removed. There is no form success/error UI because there is no form or delivery operation. Email-app availability and delivery remain outside the website; the page explains the copy-address alternative.

## Metadata, navigation and assets

Live host checks found `https://www.sheriax.com` returning 307 to `https://sheriax.com/`, which returned 200. The apex host is used consistently for canonical, social, sitemap, robots and organization URLs. Each retained page has its own title, description, canonical and social metadata. The sitemap contains exactly the five retained pages; no fabricated last-modified timestamps are emitted.

Navigation entries and legal links are maintained in `lib/constants.ts`. Header and footer consume them. The Tat’heer origin has one URL constant, with early-access and policy links derived from it.

The previous preview art is replaced by a generated PNG response at `/opengraph-image`, verified as 1200 × 630 pixels. It states the current company positioning and development stage. The approved product SVG was compared with its source file; only trailing whitespace was normalized. The existing Sheriax favicon was inspected and retained. Old main-site service photographs, product imagery, preview art and unused starter assets were removed after checking references. Sprint’s separate public files are untouched.

## Legal content and questions for review

Previously the main and Sprint sites rendered `PrivacyContent.tsx` and `TermsContent.tsx` from the shared UI package. The separate Markdown copies in that package were not the rendered content. The main site now renders its own local content; shared content and Sprint are unchanged.

Supported main-site corrections include the documented company identity and email, actual contact/signup flows, development status, removal of obsolete product-policy links, and links to Tat’heer’s existing privacy/terms pages. The unverified security-measures assertion was removed. The previous privacy rights text, project payment/responsibility clauses, deliverable/IP/portfolio clause, liability limitation and governing-law clause were retained rather than silently discarding substantive obligations. Project clauses are explicitly identified as applying to earlier agreements pending legal review, not a new offer of project work.

Legal review is still needed for:

1. Whether legacy client-responsibility/payment and IP/portfolio provisions should remain on the company website, move to an archived agreement, or be superseded. Confirm that any change preserves existing contractual rights.
2. The scope and enforceability of the retained liability and governing-law provisions for this informational website, and appropriate rights over company-site content. No new Tat’heer app licence or religious assurance has been drafted.
3. Actual hosting/CDN and email-provider processing, retention/deletion periods, subprocessors, international transfers and privacy-request procedures. These operational details were not invented.
4. The applicability and wording of the retained privacy-rights promises under the company’s actual processing arrangements.

The only remaining `services`/`portfolio` wording in the main-site source is in those retained legal clauses. Searches found no remaining Kizu, Sprint, agency, studio, automation, discovery-call or booking promotion in the main-site source. Historical planning documents and Sprint’s independent content remain outside this migration.

## Verification performed

- `pnpm install --frozen-lockfile`: passed. The lockfile changes are limited to the main importer: a direct dependency on the already present Markdown renderer and the main ESLint configuration version. Sprint’s importer and shared dependency snapshots are unchanged.
- `pnpm --filter sheriax_web build`: passed with Next.js 16.1.6; all nine generated routes completed.
- `pnpm --filter sheriax_web typecheck`: passed (`tsc --noEmit`).
- `pnpm --filter sheriax_web lint`: passed with no lint warnings/errors. The removed `next lint` command was replaced by ESLint CLI and native flat configs, and `eslint-config-next` was aligned with Next.js 16.1.6. This follows the [Next.js ESLint setup](https://nextjs.org/docs/app/api-reference/config/eslint).
- `git diff --check`: passed.
- Local HTTP assertions: retained-page status, unique canonicals, social URLs/dimensions, organization data, absence of forms and obsolete promotions, every internal link, retired GET/POST responses, noindex on 404s, the five sitemap locations, robots host/sitemap, both used brand assets and PNG dimensions passed.
- External destination checks: Tat’heer home, privacy and terms returned 200 with curl following their trailing-slash redirects. A direct Python external fetch was rejected with 403 by the remote host; browser navigation and curl verified those destinations independently. The primary CTA was clicked through to Tat’heer; the early-access CTA was clicked through, and the existing section and final anchor scroll were confirmed. No signup was submitted.
- Browser review: desktop widths 1280 and 1440, mobile width 390, and a 320px width stress check across all five pages. No horizontal overflow. Images load; headings, company details, email and legal paragraphs wrap within their containers. Home/product/status/contact/footer and legal layouts were visually inspected.
- Automated axe-core 4.10.3 checks: zero violations on Home, About, Contact, Privacy and Terms at mobile and desktop widths, using WCAG A/AA tags through 2.2 where available. These checks supplement manual keyboard and visual review; they are not a certification.
- Keyboard/menu review: visible skip link and focus outlines, keyboard menu open, Escape closes and returns focus, keyboard navigation updates active-page indication, navigation closes the menu, and crossing the desktop breakpoint closes stale mobile state. Hidden mobile links are absent from tab order.
- Reduced motion: the site has no animated content. Exercising its reduced-motion CSS rule yielded zero active animations and a zero-duration button transition. The browser tool does not expose OS reduced-motion emulation; the rule was temporarily activated for this check and restored.
- Main contact behaviour: verified mailto address and absence of forms; no email was sent. Removed endpoints return 404 rather than a false success.
- `apps/sprint` and `packages/ui`: no file changes. Their independent build was not rerun because shared code did not change.

A pre-existing pnpm warning about `onlyBuiltDependencies` being declared inside the main package remains; it is unrelated to this change. No company facts lacking evidence were added. Substantive legal items above remain for review before publication.

## Clean production build recheck

The production build was repeated after the initial Vercel deployment failure. A fresh checkout of commit `8237375`, without local environment files, installed dependencies or build output, passed `pnpm install --frozen-lockfile` and `pnpm turbo build --filter=sheriax_web --force`. Turborepo reported one successful task and zero cached tasks. This exercises the build command configured for Vercel without relying on the working checkout’s generated files.

The working checkout also passed `pnpm --filter sheriax_web build`, `pnpm --filter sheriax_web lint` and `pnpm --filter sheriax_web typecheck`. No application-code build failure was reproduced. The subsequent Vercel log identified the failure before compilation: the project selected discontinued Node.js 20.x. The main app now declares `engines.node: "24.x"` in its package manifest, matching the local Node.js 24 runtime. The main deployment instructions also specify 24.x. Root workspace and Sprint runtime settings are unchanged. Local validation does not establish that a remote deployment has completed.

## Files changed

The list below excludes the pre-existing instruction-file deletion, which is preserved.

- `.env.example`
- `DEPLOYMENT.md`
- `apps/main/app/about/layout.tsx`
- `apps/main/app/about/page.tsx`
- `apps/main/app/api/contact/route.ts`
- `apps/main/app/api/waitlist/route.ts`
- `apps/main/app/contact/layout.tsx`
- `apps/main/app/contact/page.tsx`
- `apps/main/app/globals.css`
- `apps/main/app/kizu/layout.tsx`
- `apps/main/app/kizu/page.tsx`
- `apps/main/app/layout.tsx`
- `apps/main/app/not-found.tsx`
- `apps/main/app/opengraph-image.tsx`
- `apps/main/app/page.tsx`
- `apps/main/app/privacy/page.tsx`
- `apps/main/app/robots.ts`
- `apps/main/app/sitemap.ts`
- `apps/main/app/sprint/page.tsx`
- `apps/main/app/terms/page.tsx`
- `apps/main/components/CompanyLegalPage.tsx`
- `apps/main/components/home/AboutTeaser.tsx`
- `apps/main/components/home/CTA.tsx`
- `apps/main/components/home/Hero.tsx`
- `apps/main/components/home/Numbers.tsx`
- `apps/main/components/home/Products.tsx`
- `apps/main/components/layout/Footer.tsx`
- `apps/main/components/layout/Navbar.tsx`
- `apps/main/eslint.config.mjs`
- `apps/main/lib/constants.ts`
- `apps/main/lib/legal-content.ts`
- `apps/main/lib/metadata.ts`
- `apps/main/next.config.ts`
- `apps/main/package.json`
- `apps/main/public/brand/tatheer.svg`
- `apps/main/public/file.svg`
- `apps/main/public/globe.svg`
- `apps/main/public/images/about-collaboration-studio.jpeg`
- `apps/main/public/images/about-team-innovation.jpeg`
- `apps/main/public/images/ai-ml-data-analysis.jpeg`
- `apps/main/public/images/ar-vr-immersive-experience.jpeg`
- `apps/main/public/images/contact-support-team.jpeg`
- `apps/main/public/images/hero-futuristic-city.jpeg`
- `apps/main/public/images/kizu/app_logo_transparent.png`
- `apps/main/public/images/kizu/app_mascot_transparent.png`
- `apps/main/public/images/kizu/app_mascot_with_bg.png`
- `apps/main/public/images/mobile-app-devices.jpeg`
- `apps/main/public/images/seo-analytics-dashboard.jpeg`
- `apps/main/public/images/services-showcase-holographic.jpeg`
- `apps/main/public/images/web-dev-responsive-design.jpeg`
- `apps/main/public/logo/Sheriax-Text-Logo.png`
- `apps/main/public/og-image-kizu.png`
- `apps/main/public/og-image.png`
- `apps/main/public/window.svg`
- `docs/main-site-review.md`
- `pnpm-lock.yaml`

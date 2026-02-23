# Deployment

## Cloudflare Pages (Sprint — Free)

The **Sprint** app is configured for static export and can be hosted on Cloudflare Pages for free (unlimited bandwidth, global CDN).

### Setup

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
2. Select your repository
3. Configure:
   - **Project name**: `sheriax-sprint` (or your choice)
   - **Root directory (advanced)**: `apps/sprint`
   - **Framework preset**: None (or Next.js Static HTML Export)
   - **Build command**: `cd ../.. && pnpm install && pnpm turbo build --filter=sprint`
   - **Build output directory**: `out`
   - **Deploy command** (Pages → Settings → Builds): `npx wrangler deploy` (uses `wrangler.jsonc` in apps/sprint pointing assets to `./out`)
   - **Node.js version**: 22 (Environment variables → add `NODE_VERSION` = `22`)
4. Deploy

### Custom domain

In the project → **Custom domains** → Add `sprint.sheriax.com`.

### Local static build

```bash
pnpm turbo build --filter=sprint
# Output: apps/sprint/out/
```

---

## Vercel (Main site — Monorepo)

This repo contains two Next.js apps. **Main** deploys to Vercel (SSR, API routes); **Sprint** can also use Vercel or Cloudflare Pages.

| App | Path | Package Name | Likely Domain |
|-----|------|--------------|---------------|
| **Main** (sheriax.com) | `apps/main` | `sheriax_web` | sheriax.com |
| **Sprint** (sprint.sheriax.com) | `apps/sprint` | `sprint` | sprint.sheriax.com |

## Setup Each Vercel Project

### 1. Main app (sheriax.com)

1. In [Vercel Dashboard](https://vercel.com/dashboard) → **Add New** → **Project**
2. Import the Git repo
3. **Project Settings** → **General**:
   - **Root Directory**: `apps/main` (edit, select from repo)
   - **Node.js Version**: `22.x` (or use `.nvmrc`)
   - **Framework Preset**: Next.js
4. **Build & Deployment**:
   - `vercel.json` in `apps/main` sets:
     - `installCommand`: `cd ../.. && pnpm install`
     - `buildCommand`: `cd ../.. && pnpm turbo build --filter=sheriax_web`
5. Add env vars (e.g. `RESEND_API_KEY`, `KIZU_WISHLIST_API_URL`) if needed
6. **Deploy**

### 2. Sprint app (sprint.sheriax.com) — Vercel or Cloudflare

For **Vercel**: Root Directory `apps/sprint`; `vercel.json` sets install/build commands.
For **Cloudflare Pages** (free): See Cloudflare section above. Sprint uses static export (`output: 'export'`).

## If Build Fails

- Confirm **Root Directory** is set for each project (`apps/main` or `apps/sprint`)
- Ensure **Node.js** is 22+ (Project Settings → General)
- Ensure **Package Manager** is pnpm (auto-detected from `pnpm-lock.yaml`)
- Check build logs; common issues:
  - Missing workspace packages → install must run from monorepo root (hence `cd ../..`)
  - Node version mismatch → set Node 22 in Vercel

## Local Builds

```bash
pnpm install
pnpm turbo build --filter=sheriax_web   # main
pnpm turbo build --filter=sprint        # sprint
```

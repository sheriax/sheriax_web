# Vercel Deployment (Monorepo)

This repo contains two Next.js apps that deploy as **separate Vercel projects**:

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

### 2. Sprint app (sprint.sheriax.com)

1. **Add New** → **Project** again (same repo)
2. **Root Directory**: `apps/sprint`
3. **Node.js Version**: `22.x`
4. `vercel.json` in `apps/sprint` sets:
   - `installCommand`: `cd ../.. && pnpm install`
   - `buildCommand`: `cd ../.. && pnpm turbo build --filter=sprint`
5. Add env vars if needed
6. **Deploy**

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

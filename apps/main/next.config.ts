import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // allow `next export` to work with images (harmless if not exporting)
  },
  // Removed static export to enable API routes and server functions on Vercel/Next dev server
};

export default nextConfig;

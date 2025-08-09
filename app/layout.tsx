import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sheriax Solutions – Technology beyond time',
  description:
    "Sheriax builds AI, ML, web, mobile, SEO, and AR/VR solutions. Crafting tomorrow's tech ecosystem with intuitive brilliance.",
  metadataBase: new URL('https://www.sheriax.com'),
  openGraph: {
    title: 'Sheriax Solutions – Technology beyond time',
    description:
      "Sheriax builds AI, ML, web, mobile, SEO, and AR/VR solutions. Crafting tomorrow's tech ecosystem with intuitive brilliance.",
    url: 'https://www.sheriax.com',
    siteName: 'Sheriax Solutions',
    images: [{ url: '/images/og-placeholder.jpg', width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(59,130,246,0.15)_0%,transparent_60%)]">
          <div className="bg-[linear-gradient(to_bottom,transparent,transparent_60%,rgba(0,0,0,0.02))]">
            {/* App layout wrapper */}
            <Layout>{children}</Layout>
          </div>
        </div>
      </body>
    </html>
  );
}

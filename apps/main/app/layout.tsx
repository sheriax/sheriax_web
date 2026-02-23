import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sheriax.com'),
  title: {
    default: 'Sheriax — AI Products & Automation',
    template: '%s | Sheriax'
  },
  description: 'We build AI products and automation systems. Makers of Kizu and Sprint Studio. DPIIT Recognized Startup, Chennai.',
  keywords: ['AI products', 'automation', 'Chennai startup', 'Sheriax', 'Kizu', 'Sprint Studio'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sheriax.com',
    siteName: 'Sheriax',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased grain`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

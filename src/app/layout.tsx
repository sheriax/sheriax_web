import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Kizu – Heal Your Financial Wounds | Sheriax Solutions',
    template: '%s | Sheriax Solutions',
  },
  description:
    'Stop the bleeding. Start healing. Kizu uses AI to scan your receipts, detect financial wounds, and heal your spending habits. Built by Sheriax Solutions.',
  metadataBase: new URL('https://www.sheriax.com'),
  keywords: [
    'Kizu',
    'financial recovery',
    'AI expense tracking',
    'receipt scanning',
    'financial health',
    'budget management',
    'subscription detection',
    'AI solutions',
    'Sheriax',
  ],
  authors: [{ name: 'Sheriax Solutions', url: 'https://www.sheriax.com' }],
  creator: 'Sheriax Solutions',
  publisher: 'Sheriax Solutions',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Kizu – Heal Your Financial Wounds | Sheriax Solutions',
    description:
      'Stop the bleeding. Start healing. Kizu uses AI to scan your receipts, detect financial wounds, and heal your spending habits.',
    url: 'https://www.sheriax.com',
    siteName: 'Sheriax Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kizu - AI-Powered Financial Recovery by Sheriax Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kizu – Heal Your Financial Wounds | Sheriax Solutions',
    description:
      'Stop the bleeding. Start healing. Kizu uses AI to scan your receipts, detect financial wounds, and heal your spending habits.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.sheriax.com',
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// JSON-LD Structured Data for Organization and Product
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sheriax Solutions',
  url: 'https://www.sheriax.com',
  logo: 'https://www.sheriax.com/logo/Sheriax-Logo.png',
  description:
    'Sheriax Solutions is the creator of Kizu, an AI-powered financial recovery tool. We also offer custom AI, web, mobile, and AR/VR development services.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-733-892-3502',
    contactType: 'customer service',
    email: 'contact@sheriax.com',
  },
  sameAs: [
    'https://linkedin.com/company/sheriax',
    'https://instagram.com/sheriax/',
    'https://x.com/sheriaxofficial',
    'https://facebook.com/sheriaxofficial',
  ],
};

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kizu',
  applicationCategory: 'FinanceApplication',
  description: 'AI-powered financial recovery app that scans receipts, detects money leaks, and helps you achieve financial wellness.',
  operatingSystem: 'iOS, Android, Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'INR',
  },
  author: {
    '@type': 'Organization',
    name: 'Sheriax Solutions',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productJsonLd),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="bg-[radial-gradient(1000px_500px_at_50%_-20%,rgba(59,130,246,0.15)_0%,transparent_60%)]">
            <div className="bg-[linear-gradient(to_bottom,transparent,transparent_60%,rgba(0,0,0,0.02))]">
              {/* App layout wrapper */}
              <Layout>{children}</Layout>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

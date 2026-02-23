import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kizu - AI-Powered Financial Recovery',
  description:
    'Stop the bleeding. Start healing. Kizu uses AI to scan your receipts, detect financial wounds, and heal your spending habits.',
  openGraph: {
    title: 'Kizu - Heal Your Financial Wounds',
    description:
      'AI-powered financial recovery. Scan receipts, detect money leaks, and achieve financial wellness.',
    url: 'https://www.sheriax.com/kizu',
    images: [
      {
        url: '/og-image-kizu.png',
        width: 1200,
        height: 630,
        alt: 'Kizu - AI-Powered Financial Recovery',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kizu - Heal Your Financial Wounds',
    description:
      'AI-powered financial recovery. Scan receipts, detect money leaks, and achieve financial wellness.',
    images: ['/og-image-kizu.png'],
  },
};

export default function KizuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

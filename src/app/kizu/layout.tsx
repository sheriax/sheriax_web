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
  },
};

export default function KizuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

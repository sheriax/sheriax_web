import './styles/globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sheriax | Technology Beyond Time',
  description:
    'A technology company that creates innovative solutions for the future.',
  applicationName: 'Sheriax',
  keywords: [
    'Sheriax',
    'Sheriax Technology',
    'Sheriax Technology Beyond Time',
    'Software Company',
  ],
  authors: {
    name: 'Sheriax Team',
  },
  twitter: {
    site: '@sheriax',
    creator: '@sheriax',
    title: 'Sheriax | Technology Beyond Time',
    description:
      'A technology company that creates innovative solutions for the future.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

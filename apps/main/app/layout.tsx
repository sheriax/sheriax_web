import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Sheriax Solutions — AI Products & Automation',
    template: '%s | Sheriax'
  },
  description: 'We build AI products and automation systems. Makers of Kizu and Sprint Studio. DPIIT Recognized Startup from Chennai, India.',
  keywords: ['AI products', 'automation', 'Chennai startup', 'Sheriax', 'Kizu', 'Sprint Studio'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sheriax.com',
    siteName: 'Sheriax Solutions',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="min-h-screen font-sans bg-surface text-primary">
            <Layout>{children}</Layout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

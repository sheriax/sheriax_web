import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services',
  description:
    'Boost your organic traffic with Sheriax SEO services. Technical audits, keyword strategy, on-page optimization, and performance monitoring.',
  keywords: [
    'SEO services',
    'search engine optimization',
    'technical SEO',
    'keyword research',
    'on-page SEO',
    'organic traffic',
  ],
  openGraph: {
    title: 'SEO Services - Sheriax Solutions',
    description:
      'Boost your organic traffic with Sheriax SEO services. Technical audits, keyword strategy, and on-page optimization.',
    url: 'https://www.sheriax.com/services/seo',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services/seo',
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

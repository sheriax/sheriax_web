import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore comprehensive technology services from Sheriax: AI & ML, web development, mobile apps, SEO optimization, and AR/VR solutions.',
  openGraph: {
    title: 'Services - Sheriax Solutions',
    description:
      'Explore comprehensive technology services from Sheriax: AI & ML, web development, mobile apps, SEO optimization, and AR/VR solutions.',
    url: 'https://www.sheriax.com/services',
  },
  twitter: {
    title: 'Services - Sheriax Solutions',
    description:
      'Explore comprehensive technology services: AI & ML, web development, mobile apps, SEO, and AR/VR.',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

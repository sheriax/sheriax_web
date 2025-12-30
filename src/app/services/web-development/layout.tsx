import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Development Services',
  description:
    'Professional web development by Sheriax. Modern, responsive websites and web applications using Next.js, React, and cutting-edge technologies.',
  keywords: [
    'web development',
    'Next.js development',
    'React development',
    'responsive design',
    'web applications',
  ],
  openGraph: {
    title: 'Web Development Services - Sheriax Solutions',
    description:
      'Professional web development by Sheriax. Modern, responsive websites and web applications using cutting-edge technologies.',
    url: 'https://www.sheriax.com/services/web-development',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services/web-development',
  },
};

export default function WebDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

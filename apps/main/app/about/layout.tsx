import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Sheriax Solutions – a multi-disciplinary technology studio building AI, web, mobile, and immersive products with intuitive brilliance.',
  openGraph: {
    title: 'About Sheriax Solutions',
    description:
      'Learn about Sheriax Solutions – a multi-disciplinary technology studio building AI, web, mobile, and immersive products with intuitive brilliance.',
    url: 'https://www.sheriax.com/about',
  },
  twitter: {
    title: 'About Sheriax Solutions',
    description:
      'Learn about Sheriax Solutions – a multi-disciplinary technology studio building AI, web, mobile, and immersive products.',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

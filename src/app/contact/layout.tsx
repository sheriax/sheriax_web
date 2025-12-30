import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Get in touch with Sheriax Solutions. Tell us about your project and we'll respond within 24 hours. Email, phone, and contact form available.",
  openGraph: {
    title: 'Contact Sheriax Solutions',
    description:
      "Get in touch with Sheriax Solutions. Tell us about your project and we'll respond within 24 hours.",
    url: 'https://www.sheriax.com/contact',
  },
  twitter: {
    title: 'Contact Sheriax Solutions',
    description:
      "Get in touch with Sheriax Solutions. Tell us about your project and we'll respond within 24 hours.",
  },
  alternates: {
    canonical: 'https://www.sheriax.com/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

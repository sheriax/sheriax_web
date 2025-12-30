import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AR/VR Development',
  description:
    'Immersive AR and VR experiences by Sheriax. Virtual reality applications, augmented reality solutions, and 3D interactive experiences.',
  keywords: [
    'AR development',
    'VR development',
    'augmented reality',
    'virtual reality',
    'immersive experiences',
    '3D applications',
  ],
  openGraph: {
    title: 'AR/VR Development - Sheriax Solutions',
    description:
      'Immersive AR and VR experiences by Sheriax. Virtual reality applications and augmented reality solutions.',
    url: 'https://www.sheriax.com/services/ar-vr',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services/ar-vr',
  },
};

export default function ARVRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

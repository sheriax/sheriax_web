import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mobile App Development',
  description:
    'Cross-platform mobile app development by Sheriax. Flutter and React Native apps for iOS and Android with beautiful UI and seamless performance.',
  keywords: [
    'mobile app development',
    'Flutter development',
    'React Native',
    'iOS app',
    'Android app',
    'cross-platform apps',
  ],
  openGraph: {
    title: 'Mobile App Development - Sheriax Solutions',
    description:
      'Cross-platform mobile app development by Sheriax. Flutter and React Native apps for iOS and Android.',
    url: 'https://www.sheriax.com/services/mobile-app',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services/mobile-app',
  },
};

export default function MobileAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

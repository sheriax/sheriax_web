import { Metadata } from 'next';
import { PrivacyContent } from '@sheriax/ui';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return <PrivacyContent />;
}

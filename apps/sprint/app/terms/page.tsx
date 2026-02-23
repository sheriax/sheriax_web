import { Metadata } from 'next';
import { TermsContent } from '@sheriax/ui';

export const metadata: Metadata = { title: 'Terms of Service' };

export default function TermsPage() {
  return <TermsContent />;
}

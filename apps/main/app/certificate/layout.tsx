import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certificate Verification',
  description:
    'Verify the authenticity of certificates issued by Sheriax Solutions. Enter your certificate ID to confirm it was issued by us.',
};

export default function CertificateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

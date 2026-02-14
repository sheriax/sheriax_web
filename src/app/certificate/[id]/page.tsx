import type { Metadata } from 'next';
import { getCertificate } from '@/lib/certificates';
import { CertificateView } from './CertificateView';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const cert = getCertificate(id);

  if (!cert) {
    return {
      title: 'Certificate Not Found',
      description: 'The certificate ID provided could not be verified.',
    };
  }

  return {
    title: `Certificate Verified – ${cert.id}`,
    description: `Verified certificate for ${cert.name} – ${cert.program} program (${cert.year}), issued by Sheriax Solutions.`,
    openGraph: {
      title: `Certificate Verified – ${cert.id}`,
      description: `Verified certificate for ${cert.name} – ${cert.program} program (${cert.year}), issued by Sheriax Solutions.`,
    },
  };
}

export default async function CertificatePage({ params }: PageProps) {
  const { id } = await params;
  const cert = getCertificate(id);

  return <CertificateView certificate={cert ?? null} id={id} />;
}

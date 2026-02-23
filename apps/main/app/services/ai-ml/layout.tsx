import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services',
  description:
    'Unlock the power of AI and ML with Sheriax. Custom machine learning models, computer vision, NLP, deep learning, predictive analytics, and AI automation.',
  keywords: [
    'AI services',
    'machine learning',
    'computer vision',
    'NLP',
    'deep learning',
    'predictive analytics',
  ],
  openGraph: {
    title: 'AI & Machine Learning Services - Sheriax Solutions',
    description:
      'Unlock the power of AI and ML with Sheriax. Custom machine learning models, computer vision, NLP, and predictive analytics.',
    url: 'https://www.sheriax.com/services/ai-ml',
  },
  alternates: {
    canonical: 'https://www.sheriax.com/services/ai-ml',
  },
};

export default function AIMLLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import Footer from '@/components/Footer';
import HeroSection from '@/pages/HeroSection/heroSection';
import ContactUsSection from '@/pages/contactUsSection/contactUsSection';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
        />
      </Head>
      <HeroSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}

import Head from 'next/head';
import Footer from '../components/Footer';
import HeroSection from '../pages/HeroSection/heroSection';
import AboutSection from '../pages/aboutSection/aboutSection';
import ContactUsSection from '../pages/contactUsSection/contactUsSection';

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
      <AboutSection />
      <ContactUsSection />
      <Footer />
    </>
  );
}

import React from 'react';
import styles from './heroSection.module.scss';
import Header from '../../components/Header';
import image from '../../constant/image';
import AboutSection from '../aboutSection/aboutSection';

const HeroSection = () => {
  return (
    <section
      id="heroSection"
      className={styles.heroSection}
    >
      <Header />
      <img
        className={styles.heroContentImage}
        src={image.logo.vectorBackdrop.src}
        alt="dummy image"
      />

      <div className={styles.heroContent}>
        <div className={styles.heroContent__text}>
          <h1>SHERIAX</h1>
          <p>TECHNOLOGY BEYOND TIME</p>
        </div>
        <div className={styles.heroContent__textRight}>
          <p className={styles.heroContent__textMobile}>
            Imagine a world where our innovations become as iconic as Doraemon's
            magical gadgets, Kitaratsu's ingenious contraptions, Wall-E's
            heartwarming charm, Eva's futuristic brilliance, and the daring
            heroics of Big Hero 6. From crafting solutions that feel like magic
            to inventing technologies that resonate with the spirit of beloved
            characters, we're here to redefine what's possible in the realm of
            tech.
          </p>
        </div>
      </div>
      <AboutSection />
    </section>
  );
};

export default HeroSection;

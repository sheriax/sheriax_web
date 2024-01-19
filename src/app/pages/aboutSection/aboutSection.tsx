import React from 'react';
import styles from './aboutSection.module.scss';
import image from '@/app/constant/image';

const AboutSection = () => {
  return (
    <section
      id="aboutSection"
      className={styles.aboutSection}
    >
      <h1>About Us</h1>
      <div className={styles.aboutSection__firstContent}>
        <div>
          <h1>Mission:</h1>
          <p>
            Igniting Tomorrow's Marvels Through Revolutionary Tech Adventures
          </p>
          <p>
            Embark on a thrilling tech adventure with us as we spearhead the
            charge into the next era of innovation. Our mission is clear: to
            unleash tomorrow's marvels through cutting-edge ML and AI
            technologies, creating wonders that captivate the imagination.
          </p>
          <p>
            Imagine a world where our innovations become as iconic as Doraemon's
            magical gadgets, Kitaratsu's ingenious contraptions, Wall-E's
            heartwarming charm, Eva's futuristic brilliance, and the daring
            heroics of Big Hero 6. From crafting solutions that feel like magic
            to inventing technologies that resonate with the spirit of beloved
            characters, we're here to redefine what's possible in the realm of
            tech.
          </p>
        </div>
        <div className={styles.imageDiv1}>
          <img
            className={styles.missionImage}
            src={image.aboutSection.mission.src}
            alt="dummy"
          />
        </div>
      </div>
      <div className={styles.aboutSection__lastContent}>
        <div>
          <img
            className={styles.visionImage}
            src={image.aboutSection.vision.src}
            alt="dummy"
          />
        </div>
        <div>
          <h1>Vision:</h1>
          <p>Crafting Tomorrow's Tech Ecosystem with Intuitive Brilliance</p>
          <p>
            Our vision is a symphony of intuitive brilliance, envisioning a
            future where technology seamlessly integrates into our lives.
            Picture a tech ecosystem that mirrors the imaginative wonders of our
            beloved characters.
          </p>

          <p>
            In this forthcoming era, our innovations don't merely fulfill
            requirements; they enhance every experience. We're dedicated to
            fashioning technology as trustworthy as Doraemon, as inventive as
            Kitaratsu, as eco-conscious as Wall-E, as forward-thinking as Eva,
            and as impactful as the camaraderie in Big Hero 6. Together, let's
            make tomorrow's tech an enchanting companion on life's journey.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

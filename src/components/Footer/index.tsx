import React from 'react';
import styles from './styles.module.scss';
import image from '@/constant/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__Content}>
        <div>
          <p className={styles.links}>LINKS</p>
          <a href="#heroSection">
            <p className={styles.links_text}>Home</p>
          </a>
          <a href="#aboutSection">
            <p className={styles.links_text}>About us</p>
          </a>
          <a href="#contactUsSection">
            <p className={styles.links_text}>Contact us</p>
          </a>
        </div>
        <div>
          <p className={styles.product}>PRODUCTS</p>
          <p className={styles.product_text}>Chatiko</p>
          <p className={styles.product_text}>Talky</p>
        </div>
        <div>
          <p className={styles.services}>SERVICES</p>
          <p className={styles.services_text}>AI & ML</p>
          <p className={styles.services_text}>Cross - Platform development</p>
          <p className={styles.services_text}>Web development</p>
        </div>
      </div>
      <div className={styles.footer__Links}>
        <div className={styles.footer__AllLinks}>
          <a
            href="https://www.facebook.com/sheriaxofficial"
            target="_blank"
          >
            <img
              src={image.footer.facebook.src}
              alt="facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/sheriax"
            target="_blank"
          >
            <img
              src={image.footer.instagram.src}
              alt="instagram"
            />
          </a>
          <a
            href="https://twitter.com/sheriaxofficial"
            target="_blank"
          >
            <img
              src={image.footer.twitter.src}
              alt="twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sheriax"
            target="_blank"
          >
            <img
              src={image.footer.linkedIn.src}
              alt="linkedIn"
            />
          </a>
        </div>
        <div className={styles.footer__LogoTitle}>
          <img
            src={image.logo.whiteSheriaxLogo.src}
            alt="sheriax"
          />
          <h1 className={styles.companyName}>SHERIAX</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;

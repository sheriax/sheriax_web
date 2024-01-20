import React from 'react';
import styles from './styles.module.scss';
import image from '@/app/constant/image';

const Header = () => {
  const navs = [
    {
      name: 'Home',
      id: '#heroSection',
    },
    {
      name: 'About us',
      id: '#aboutSection',
    },
    {
      name: 'Contact us',
      id: '#contactUsSection',
    },
  ];
  return (
    <section className={styles.header}>
      <div className={styles.companyLogoName}>
        <img
          src={image.logo.sheriaxLogo.src}
          alt="sheriax-logo"
        />
        <p className={styles.name}>SHERIAX</p>
      </div>
      <div className={styles.navs}>
        {navs.map((data) => (
          <a
            className={styles.a}
            href={data.id}
          >
            <p key={data.name}>{data.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Header;

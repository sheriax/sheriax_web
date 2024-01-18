import React from 'react';
import styles from '@/app/components/header/header.module.scss';
import image from '@/app/constant/image';

const Header = () => {
  const navs = [
    {
      name: 'Home',
    },
    {
      name: 'About us',
    },
    {
      name: 'Contact us',
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
          <p key={data.name}>{data.name}</p>
        ))}
      </div>
    </section>
  );
};

export default Header;

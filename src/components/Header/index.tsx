'use client';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import image from '@/constant/image';

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
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
    <nav className={styles.header}>
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
            key={data.name}
          >
            <p>{data.name}</p>
          </a>
        ))}
      </div>
      <div
        className={`${styles.mobileNavigationBars} ${
          hamburgerOpen ? styles.open : ''
        }`}
      >
        {navs.map((data) => (
          <a
            href={data.id}
            key={data.name}
          >
            {data.name}
          </a>
        ))}
      </div>
      <div
        className={`${styles.hamburger} ${hamburgerOpen ? styles.open : ''}`}
        onClick={() => setHamburgerOpen(!hamburgerOpen)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Header;

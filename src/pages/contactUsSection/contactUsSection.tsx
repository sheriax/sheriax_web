'use client';
import React, { useState } from 'react';

import styles from './contactUsSection.module.scss';
import FormInput from '@/components/Forminput';
import Button from '@/components/Button';
import image from '@/constant/image';

const ContactUsSection = () => {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contactUsSection"
      className={styles.contactUsSection}
    >
      <img
        className={styles.contactUsBgImage}
        src={image.contactUsSection.vectorContactUs.src}
        alt="dummy image"
      />
      <h1>Contact us</h1>
      <div className={styles.contactUsSection__formData}>
        <FormInput
          placeholder="Enter Name"
          type="text"
        />
        <FormInput
          placeholder="Enter Email"
          type="text"
        />
        <FormInput
          placeholder="Enter Message"
          type="text"
        />
        <Button
          text="Submit"
          loading={loading}
        />
      </div>
    </section>
  );
};

export default ContactUsSection;

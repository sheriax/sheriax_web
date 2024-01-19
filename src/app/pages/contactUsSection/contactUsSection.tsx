import React, { useState } from 'react';

import FormInput from '@/app/components/Forminput';
import styles from './contactUsSection.module.scss';
import Button from '@/app/components/Button';

const ContactUsSection = () => {
  //   const [loading, setLoading] = useState(false);

  return (
    <section
      id="contactUsSection"
      className={styles.contactUsSection}
    >
      <h1>Contact us</h1>
      <div className={styles.contactUsSection__formData}>
        <FormInput
          placeholder="Enter Name"
          type="text"
        />
        <FormInput
          placeholder="Enter Name"
          type="text"
        />
        <FormInput
          placeholder="Enter Name"
          type="text"
        />
        <Button
          text="Submit"
          //   loading={loading}
        />
      </div>
    </section>
  );
};

export default ContactUsSection;

import React from 'react';
import styles from './styles.module.scss';

interface Props {
  type: string;
  placeholder: string;
  className?: string;
  name?: string;
}

const FormInput: React.FC<Props> = ({ type, placeholder, className, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={styles.inputOption + ' ' + className}
      name={name}
    />
  );
};

export default FormInput;

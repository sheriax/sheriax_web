import React from 'react';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  text: string;
  loading?: boolean;
}

const Button: React.FC<Props> = ({ className, text, loading }) => {
  return (
    <button className={`${styles.btn} ${className}`}>
      {loading ? <div className={styles.progressbar}></div> : text}
    </button>
  );
};

export default Button;

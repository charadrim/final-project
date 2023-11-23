import Link from 'next/link';
import React from 'react';
import styles from '../page.module.css';

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <Link href="/">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;

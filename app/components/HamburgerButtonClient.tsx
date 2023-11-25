'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import LogoutButton from '../(auth)/logout/LogoutButton';
import HamburgerButton from '../components/HamburgerButton';
import styles from '../page.module.css';

export default function HamburgerButtonClient() {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <div className={styles.leftLinks}>
        <HamburgerButton onClick={toggleMenu} className={styles.hamburgerBtn} />
      </div>
      {showLinks && (
        <div className={styles.mobileLinks}>
          <div className={styles.mobileLinksMenu}>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
            <Link href="/recipes-admin">Admin</Link>
            <LogoutButton />
          </div>
        </div>
      )}
    </>
  );
}

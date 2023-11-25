import React from 'react';
import styles from '../page.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        {/* <div className="footerLogo">NutriVerse</div> */}
        <ul className={styles.footerLinks}>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <p className={styles.footerText}>
        © 2023 NutriVerse. All rights reserved.
      </p>
      <div className={styles.footerRight}>
        <ul className={styles.socialIcons}>
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"> </i>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"> </i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"> </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

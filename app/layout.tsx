import './globals.scss';
import { Metadata } from 'next';
import Link from 'next/link';
import Footer from './components/Footer';
import HamburgerButtonClient from './components/HamburgerButtonClient';
import Logo from './components/Logo';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'NutriVerse',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body>
          <div>
            <div>
              <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                  <Logo />
                </div>
                <nav className={styles.fixedNav}>
                  <div className={styles.divLinks}>

                    <Link href="/recipes">Recipes</Link>
                    <Link href="/create-recipe">Create Recipe</Link>
                    <Link href="/my-account">My Account</Link>
                  </div>
                </nav>
                <div className={styles.leftLinks}>
                  <div className={styles.hamburgerBtn}>
                    <HamburgerButtonClient />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div>{children}</div>
        </body>
        <div>
          <Footer />
        </div>
    </html>
  );
}

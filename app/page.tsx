import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroContainer}>
        <div className={styles.hero}>
          <Image
            src="/images/doodlyveggies.jpg"
            alt="Healthy Meals"
            width={1920}
            height={480}
          />
          <div className={styles.heroText}>
            <h1>Welcome to NutriVerse</h1>
            <p>Your Culinary Journey Begins Here</p>
            <div className={styles.heroCTAs}>
              <Link href="/recipes">
                <button className={styles.heroButton1}>
                  Discover New Recipes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Section 1: Discover New Recipes */}
        <section className={styles.discoverSection}>
          <Link href="/recipes">
            <h2>Discover New Recipes</h2>
          </Link>
          {/* Add content specific to this section */}
          <p>Explore a world of delicious recipes curated just for you!</p>
        </section>

        {/* Section 2: Create Your Own Recipe */}
        <section className={styles.createSection}>
          <Link href="/create-recipe">
            <h2>Create Your Own Recipe</h2>
          </Link>
          {/* Add content specific to this section */}
          <p>
            Unleash your creativity in the kitchen and share your unique recipes
            with the community.
          </p>
        </section>

        {/* Footer Section
        <footer className={styles.footer}>
          {/* Add content for the footer */}
        {/* <p>&copy; 2023 NutriVerse. All rights reserved.</p>
        </footer> */}
      </div>
    </main>
  );
}

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
            <div className={styles.heroButton1}>
              <Link href="/recipes">Discover New Recipes</Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <div className={styles.infoBackground}>
          <section className={styles.infoSection}>
            <div>
              <Image
                src="/images/soup.jpg"
                alt="Healthy Meals"
                width={1920}
                height={480}
              />
            </div>
          </section>
          <section className={styles.infoSection}>
            <div className={styles.infoSectionText}>
              <div className={styles.infoBlocks}>
                <h2>
                  Welcome to NutriVerse: Nourishing Your Health with
                  Hashimoto's-Friendly Recipes!
                </h2>
                <p>
                  Unlock the power of delicious and thyroid-friendly meals with
                  NutriVerse. Our curated recipes are crafted to support those
                  managing Hashimoto's, ensuring every bite is a step towards a
                  healthier you.
                </p>
              </div>
              <div className={styles.infoBlocks}>
                <h2>What NutriVerse Offers:</h2>
                <ul>
                  <li>
                    Tailored Recipes: Explore recipes designed for Hashimoto's,
                    blending flavor and nutrition seamlessly.
                  </li>
                  <li>
                    Create Your Profile: Join our community, create a profile,
                    and personalize your NutriVerse experience.
                  </li>
                  <li>
                    Share Your Recipes: Be a culinary influencer! Craft and
                    share your own Hashimoto's-friendly recipes.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.infoBackground}>
          <section className={styles.infoSection}>
            <div className={styles.infoSectionText}>
              <div className={styles.infoBlocks2}>
                <h2>Your Thyroid Health Matters:</h2>
                <p>
                  At NutriVerse, we believe eating well should never be a
                  compromise. Join us in creating a vibrant community of
                  individuals dedicated to wellness through mindful and
                  delightful cooking.
                </p>
              </div>
              <div className={styles.infoBlocks2}>
                <h2>Start Your NutriVerse Journey Today:</h2>
                <ul>
                <Link href="/recipes"><li>[Explore Recipes]</li></Link>
                <Link href="/register"><li>[Create Your Profile]</li></Link>
                <Link href="/create-recipe"><li>[Share Your Recipe]</li></Link>
                </ul>
              </div>
            </div>
          </section>
          <section className={styles.infoSection}>
            <div>
              <Image
                src="/images/lentils.jpg"
                alt="Healthy Meals"
                width={1920}
                height={480}
              />
            </div>
          </section>
        </div>
      </div>
  <div className={styles.containerBackground}>
      <div className={styles.container1}>

        <section className={styles.discoverSection}>
          <Link href="/recipes">
            <div>
              <h2>Discover New Recipes</h2>


              <p>Explore a world of delicious recipes curated just for you!</p>
            </div>
          </Link>
        </section>


        <section className={styles.createSection}>
          <Link href="/create-recipe">
            <div>
              <h2>Create Your Own Recipe</h2>


              <p>
                Unleash your creativity in the kitchen and share your unique
                recipes with the community.
              </p>
            </div>
          </Link>
        </section>


      </div></div>
    </main>
  );
}

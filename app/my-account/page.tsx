import Link from 'next/link';
// import MyCalendar from '../components/MyCalendar';
import styles from '../page.module.css';

export default function MyAccount() {
  return (
    <div>
      <div className={styles.pageTitle}>
        <h1 className={styles.heading}>My Account</h1>
        <div className={styles.description}>
          <p>
            Welcome to your NutriVerse account! Explore the features and manage
            your recipes here.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <h2>Your Recipes</h2>
              <p>View and manage your saved recipes.</p>
              <Link href="/recipes">Go to Recipes</Link>
            </div>
            <div className={styles.featureItem}>
              <h2>Create Recipe</h2>
              <p>
                Share your culinary creations with the NutriVerse community.
              </p>
              <Link href="/create-recipe">Create a Recipe</Link>
            </div>
            {/* Add more features as needed */}
          </div>
        </div>
        {/* <div className={styles.calendarCard}>
        <h2 className={styles.calendarTitle}>My Calendar</h2>
        <div className={styles.calendarContainer}>
          <MyCalendar />
        </div>
      </div> */}
      </div>
    </div>
  );
}

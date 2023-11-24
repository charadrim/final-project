import styles from '../page.module.css';

export default function AdminPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Admin Dashboard</h1>
        {/* Add any other header content or navigation if needed */}
      </header>

      <main className={styles.main}>
        <section className={`${styles.adminSection} ${styles.adminContent}`}>
          <h2 className={styles.sectionTitle}>Welcome, Admin!</h2>
          <p className={styles.sectionContent}>
            You have access to the admin dashboard. Manage your recipes and
            settings here.
          </p>

          {/* Add any specific content for the admin section */}
        </section>

        {/* Uncomment the following line if you want to include the MyRecipes component */}
        {/* <MyRecipes /> */}
      </main>

      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} NutriVerse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

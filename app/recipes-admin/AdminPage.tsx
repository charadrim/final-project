import styles from '../page.module.css';

export default function AdminPage() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
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
      </div>
    </main>
  );
}

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getRecipes } from '../../database/recipes';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Healthy Recipes',
  description: 'Discover delicious and thyroid-friendly recipes.',
};

export default async function RecipePage() {
  const recipes = await getRecipes();

  const modifiedRecipes = recipes.map((recipe) => {
    return { ...recipe };
  });

  return (
    <div className={styles.main}>
      <div className={styles.pageTitle}>
        <h1 className={styles.heading}>Healthy Recipes for Hashimoto's</h1>
      </div>
      <div className={styles.recipeContainer}>
        {modifiedRecipes.map((recipe) => (
          <div
            className={`${styles.recipeBox} ${styles.recipeCard}`}
            key={`recipe-div-${recipe.id}`}
          >
            <div className={styles.recipeBox}>
              <Link href={`/recipes/${recipe.id}`}>
                <div className={styles.recipeImage}>
                  <Image
                    src={`/images/${recipe.image}.jpg`}
                    alt={recipe.title}
                    width={200}
                    height={200}
                  />
                  <br />
                </div>
                <div className={styles.recipeTitle}>{recipe.title}</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

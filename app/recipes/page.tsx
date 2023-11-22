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
    // Subtract 8 from the id for display purposes

    return { ...recipe };
  });

  return (
    <div className={styles.recipePage}>
      <h1 className={styles.heading}>Healthy Recipes for Hashimoto's</h1>
      <div className={styles.recipeContainer}>
        {modifiedRecipes.map((recipe) => (
          <div className={styles.recipeBox} key={`recipe-div-${recipe.id}`}>
            <div className={styles.recipeBox}>
              <Link href={`/recipes/${recipe.id}`}>
                <Image
                  src={`/images/${recipe.image}.jpg`}
                  alt={recipe.title}
                  width={200}
                  height={200}
                />
                <br />
                {recipe.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

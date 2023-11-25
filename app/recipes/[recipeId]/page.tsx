import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getRecipe } from '../../../database/recipe';
import styles from '../../page.module.css';

type GenerateMetadataProps = {
  params: {
    recipeId: number;
  };
};

export function generateMetadata(props: GenerateMetadataProps) {
  const singleRecipe = getRecipe(Number(props.params.recipeId));

  return {
    title: singleRecipe ? singleRecipe.title : '',
  };
}

export default function RecipePage(props: GenerateMetadataProps) {
  const singleRecipe = getRecipe(Number(props.params.recipeId));

  if (!singleRecipe) {
    return notFound();
  }

  return (
    <div className={styles.main}>
      <div className={styles.singleRecipeBox}>
        <div>
          <div className={styles.singleRecipeContainer}>
            <div className={styles.singleRecipeCardBackground}>
              <div className={styles.singleRecipeCard}>
                <Image
                  src={`/images/${singleRecipe.image}.jpg`}
                  alt={singleRecipe.title}
                  width={500}
                  height={500}
                  data-test-id="recipe-image"
                />
              </div>
            </div>
            <div className={styles.recipeInfoBackground}>
              <div className={styles.recipeInfo}>
                <div>
                  <h1>{singleRecipe.title}</h1>
                  <h2>Description:</h2>
                  <p> {singleRecipe.description}</p>
                  <h2>Ingredients:</h2>
                  <div className={styles.recipeInfoUl}>
                    <ul>
                      {singleRecipe.ingredients.map((ingredients) => (
                        <li key={`ingredients-${ingredients}`}>
                          {ingredients}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <h2>Instructions:</h2>
                  <div className={styles.recipeInfoOl}>
                    <ol>
                      {singleRecipe.instructions.map((instructions) => (
                        <li key={`instructions-${instructions}`}>
                          {instructions}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

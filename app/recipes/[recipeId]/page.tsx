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
        <a>
          <div className={styles.singleRecipeContainer}>
            <Image
              src={`/images/${singleRecipe.image}.jpg`}
              alt={singleRecipe.title}
              width={500}
              height={500}
              data-test-id="recipe-image"
            />
            <h1>{singleRecipe.title}</h1>
            <p>Description: {singleRecipe.description}</p>
            <p>Ingredients: {singleRecipe.ingredients}</p>
            <p>Instructions: {singleRecipe.instructions}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

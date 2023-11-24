import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getUserBySessionToken,
  getUserInputBySessionToken,
} from '../../database/users';
import styles from '../page.module.css';
import CreateInputForm from './CreateRecipeForm';

export default async function InputPage() {
  // Task: Restrict access to the notes page and only display notes belonging to the current logged in user
  // 1. Check if the sessionToken cookie exists
  // 2. Query user with the sessionToken
  // 3. If the user exists, render the page
  // 4. If the user does not exist, redirect to the

  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));

  if (!user) redirect('/login?returnTo=/create-recipe');

  // Display the notes for the current logged in user
  const userInput = await getUserInputBySessionToken(sessionTokenCookie.value);

  console.log('Checking: ', userInput);

  return (
    <div className={styles.inputPage}>
      <h1 className={styles.heading}>Create your own recipe</h1>
      <div className={styles.inputCard}>
        <div className={styles.createInputForm}>
          <CreateInputForm userId={user.id} />
        </div>
      </div>
      <div className={styles.recipeList}>
        {userInput.length > 0 ? (
          <>
            <h2 className={styles.recipeTitle}>Recipe For {user.username}</h2>
            <ul className={styles.recipeUl}>
              {userInput.map((input) => (
                <li
                  key={`recipe-div-${input.inputId}`}
                  className={styles.recipeLi}
                >
                  {input.description}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2 className={styles.noRecipes}> No recipes yet</h2>
        )}
      </div>

      <div className={styles.relatedContent}>
        <a href="/recipes" className={styles.link}>
          <section className={styles.discoverSection2}>
            <p className={styles.relatedText}>
              Explore more recipes and cooking tips on our Recipes Page .
            </p>
          </section>
        </a>
      </div>
    </div>
  );
}

// <Link href="/recipes">
//   <h2>Discover New Recipes</h2>
// </Link>
// {/* Add content specific to this section */}
// <p>Explore a world of delicious recipes curated just for you!</p>

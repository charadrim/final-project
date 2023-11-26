import { cookies } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { getAllUserRecipes, getUserBySessionToken } from '../../database/users';
import styles from '../page.module.css';
import CreateRecipeForm from './CreateRecipeForm';

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
  const allUserRecipes = await getAllUserRecipes();

  // console.log('Checking: ', userInput);

  return (
    <div className={styles.main}>
      <div >
      <div className={styles.createRecipeBox}>
        <div className={styles.createRecipeContainer}>
            <div className={styles.createRecipeCardBackground}>
             <div className={styles.createRecipeCard}>
               <div className={styles.pageTitle}>
                 <h1 className={styles.heading}>Create your own recipe</h1>
              </div>

              <div className={styles.createInputForm}>
                <CreateRecipeForm userId={user.id} />
              </div>
            </div>
          </div></div>



        </div><div className={styles.createRecipeContainer1}><div className={styles.createRecipeCardBackground1}>
            <div className={styles.createRecipeInfo}>
              <div className={styles.createRecipeInfo}>
                {allUserRecipes.length > 0 ? (
                  <>
                    <h2 className={styles.createRecipeTitle}>
                      Recipes By {user.username}
                    </h2>
                    <ul className={styles.recipeUl1}>
                      {allUserRecipes.map((input) => (
                        <li key={`recipe-div-${input.userId}`}>
                          <div>{input.title}</div>
                          <div>{input.description}</div>
                          <div>{input.ingredients}</div>
                          <div>{input.instructions}</div>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <h2 className={styles.noRecipes}> No recipes yet</h2>
                )}
              </div>
            </div>
          </div>
          </div>

        <div>
          <div className={styles.createRecipeContainer2}>
            <section className={styles.discoverSection}>
              <Link href="/recipes">
                <div>
                  <h2>Get inspiration</h2>

                  {/* Add content specific to this section */}
                  <p>
                    Explore more recipes and cooking tips on our Recipes Page.
                  </p>
                </div>
              </Link>
            </section>
          </div>
        </div>
      </div>
      </div>
  );
}

// <Link href="/recipes">
//   <h2>Discover New Recipes</h2>
// </Link>
// {/* Add content specific to this section */}
// <p>Explore a world of delicious recipes curated just for you!</p>

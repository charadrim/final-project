import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  getUserBySessionToken,
  getUserInputBySessionToken,
} from '../../database/users';
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
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <CreateInputForm userId={user.id} />

      <br />
      <br />
      <br />
      <div>
        {userInput.length > 0 ? (
          <>
            <h2>Recipe For {user.username}</h2>
            <ul>
              {userInput.map((input) => (
                <li key={`recipe-div-${input.inputId}`}>{input.description}</li>
              ))}
            </ul>
          </>
        ) : (
          <h2> No recipes yet</h2>
        )}
      </div>
    </div>
  );
}

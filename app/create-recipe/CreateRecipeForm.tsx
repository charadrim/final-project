'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import styles from '../page.module.css';

export default function CreateInputForm({ userId }: { userId: number }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);

  const router = useRouter();

  async function handleCreateInput() {
    await fetch('/api/input', {
      method: 'POST',
      body: JSON.stringify({
        title,
        description,
        ingredients,
        instructions,
        userId,
      }),
    });
    router.refresh();
    setTitle('');
    setDescription('');
    setIngredients(['']);
    setInstructions(['']);
  }

  //   return (
  //     <form
  //       onSubmit={async (event) => {
  //         event.preventDefault();
  //         await handleCreateInput();
  //       }}
  //     >
  //       <label>
  //         Add Recipe:
  //         <input
  //           value={description}
  //           onChange={(event) => setDescription(event.currentTarget.value)}
  //         />
  //       </label>
  //       <br />
  //       <br />
  //       <button>Create +</button>
  //     </form>
  //   );
  // }

  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await handleCreateInput();
      }}
    >
      <label>
        <div className={styles.recipeInputTitle}>Add Title:</div>
        <br />
        <input
          value={title}
          className={styles.inputField}
          onChange={(event) => setTitle(event.currentTarget.value)}
        />
      </label>
      <label>
        <div className={styles.recipeInputTitle}>Add Description:</div>
        <br />
        <input
          value={description}
          className={styles.inputField}
          onChange={(event) => setDescription(event.currentTarget.value)}
        />
      </label>
      <br />

      <label>
        <div className={styles.recipeInputTitle}>Ingredients:</div>
        <br />
        {/* <input
          value={ingredients.join(',')}
          onChange={(event) =>
            setIngredients(event.currentTarget.value.split(','))
          }
        /> */}
        <textarea
          value={ingredients.join('\n')}
          className={styles.inputField}
          onChange={(event) =>
            setIngredients(event.currentTarget.value.split('\n'))
          }
        />
      </label>
      <br />

      <label>
        <div className={styles.recipeInputTitle}>Instructions:</div>
        <br />
        {/* <input
          value={instructions.join('\n')}
          onChange={(event) =>
            setInstructions(event.currentTarget.value.split(','))
          }
        /> */}
        <textarea
          value={instructions.join('\n')}
          className={styles.inputField}
          onChange={(event) =>
            setInstructions(event.currentTarget.value.split('\n'))
          }
        />
      </label>
      <br />

      <button className={styles.createButton}>Create</button>
    </form>
  );
}

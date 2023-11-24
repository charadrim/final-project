'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from '../page.module.css';

export default function CreateInputForm({ userId }: { userId: number }) {
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);

  const router = useRouter();

  async function handleCreateInput() {
    await fetch('/api/input', {
      method: 'POST',
      body: JSON.stringify({
        description,
        ingredients,
        instructions,
        userId,
      }),
    });
    router.refresh();
    setDescription('');
    setIngredients([]);
    setInstructions([]);
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
        Add Description:
        <br />
        <input
          value={description}
          className={styles.inputField}
          onChange={(event) => setDescription(event.currentTarget.value)}
        />
      </label>
      <br />

      <label>
        Ingredients:
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
        Instructions:
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

      <button className={styles.createButton}>Create +</button>
    </form>
  );
}

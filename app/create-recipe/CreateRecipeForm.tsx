'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
        <input
          value={description}
          onChange={(event) => setDescription(event.currentTarget.value)}
        />
      </label>
      <br />

      <label>
        Ingredients:
        {/* <input
          value={ingredients.join(',')}
          onChange={(event) =>
            setIngredients(event.currentTarget.value.split(','))
          }
        /> */}
        <textarea
          value={ingredients.join('\n')}
          onChange={(event) =>
            setIngredients(event.currentTarget.value.split('\n'))
          }
        />
      </label>
      <br />

      <label>
        Instructions:
        {/* <input
          value={instructions.join('\n')}
          onChange={(event) =>
            setInstructions(event.currentTarget.value.split(','))
          }
        /> */}
        <textarea
          value={instructions.join('\n')}
          onChange={(event) =>
            setInstructions(event.currentTarget.value.split('\n'))
          }
        />
      </label>
      <br />

      <button>Create +</button>
    </form>
  );
}

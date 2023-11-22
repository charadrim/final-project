import { cache } from 'react';
import { Input } from '../migrations/00004-createTableUserInput';
import { sql } from './connect';

export const createInput = cache(
  async (
    userId: number,
    description: string,
    ingredients: string[],
    instructions: string[],
  ) => {
    const [input] = await sql<Input[]>`
    INSERT INTO
      input (
        user_id,
        description,
        ingredients,
        instructions
      )
    VALUES
      (
        ${userId},
        ${description},
        ARRAY${ingredients},
        ARRAY${instructions}
      ) RETURNING *
  `;

    return input;
  },
);

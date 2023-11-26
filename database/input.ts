import { cache } from 'react';
import { Input } from '../migrations/00004-createTableUserInput';
import { sql } from './connect';

export const createInput = cache(
  async (
    userId: number,
    title: string,
    description: string,
    ingredients: string[],
    instructions: string[],
  ) => {
    const [input] = await sql<Input[]>`
    INSERT INTO
      input (
        user_id,
        title,
        description,
        ingredients,
        instructions
      )
    VALUES
      (
        ${userId},
        ${title},
        ${description},
        ${ingredients},
        ${instructions}
      ) RETURNING *
  `;

    return input;
  },
);

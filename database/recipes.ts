import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Recipe } from '../migrations/00002-createTableRecipes';

export const getRecipes = cache(async () => {
  const recipes = await sql<Recipe[]>`
    SELECT
      *
    FROM
      recipes
  `;
  return recipes;
});

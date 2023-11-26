import { cache } from 'react';
import { sql } from '../database/connect';
import { User } from '../migrations/00000-createTablesUsers';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export type Input = {
  userId: number;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
};

export const createUser = cache(
  async (email: string, username: string, passwordHash: string) => {
    const [user] = await sql<User[]>`
    INSERT INTO users
      (email, username, password_hash)
    VALUES
      (${email}, ${username.toLowerCase()}, ${passwordHash})
    RETURNING
    id,
    email,
    username

    `;
    return user;
  },
);

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
  SELECT
  id,
  username,
  password_hash
  FROM
  users
  WHERE
  username = ${username.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        *
      FROM
        users
      WHERE
        username = ${username.toLowerCase()}
    `;
    return user;
  },
);

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now ()
      )
  `;
  return user;
});

export const getUserInputBySessionToken = cache(async (token: string) => {
  const input = await sql<Input[]>`
    SELECT
      input.id AS input_id,
      input.title AS title,
      input.description AS description,
      input.ingredients AS ingredients,
      input.instructions AS instructions,
      users.username AS username
    FROM
      input
      INNER JOIN users ON input.user_id = users.id
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now ()
      )
  `;
  return input;
});

export const getAllUserRecipes = cache(async () => {
  const input = await sql<Input[]>`
    SELECT
      input.id AS input_id,
      input.title AS title,
      input.description AS description,
      input.ingredients AS ingredients,
      input.instructions AS instructions,
      users.username AS username
    FROM
      input
      INNER JOIN users ON input.user_id = users.id


  `;
  return input;
});

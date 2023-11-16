import { cache } from 'react';
import { sql } from '../database/connect';
import { User } from '../migrations/00000-createTablesusers';

export type UserWithPasswordHash = User & {
  passwordHash: string;
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

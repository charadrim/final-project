import { Sql } from 'postgres';

export type User = {
  id: number;
  email: string;
  username: string;
  passwordHash: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE users (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) NOT NULL UNIQUE,
    username VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(100) NOT NULL
    );
 `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE users
  `;
}

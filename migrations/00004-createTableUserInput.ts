import { Sql } from 'postgres';

export type Input = {
  id: number;
  userId: number;
  description: string;
  ingredients: string[];
  instructions: string[];
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE input (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        image VARCHAR(100) NOT NULL,
        description text NOT NULL,
        ingredients text[] NOT NULL,
        instructions text[] NOT NULL
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE input `;
}

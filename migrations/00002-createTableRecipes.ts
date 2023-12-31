import { Sql } from 'postgres';

export type Recipe = {
  id: number;
  title: string;
  image: string;
  slug: string | null;
  description: string;
  ingredients: string[];
  instructions: string[];
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE recipes (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(100) NOT NULL,
        image VARCHAR(100) NOT NULL,
        slug text,
        description text NOT NULL,
        ingredients text[] NOT NULL,
        instructions text[] NOT NULL
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE recipes `;
}

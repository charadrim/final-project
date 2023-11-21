import { Sql } from 'postgres';

export type Recipe = {
  id: number;
  title: string;
  image: string;
  slug: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE recipes (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title VARCHAR(100) NOT NULL,
        image VARCHAR(100) NOT NULL,
        slug text
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE recipes `;
}

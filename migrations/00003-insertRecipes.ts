import { Sql } from 'postgres';

const recipes = [
  {
    id: 1,
    title: 'Quinoa Salad with Roasted Vegetables',
    image: 'quinoa',
    slug: 'quinoa-salad',
  },
  {
    id: 2,
    title: 'Baked Salmon with Lemon and Dill',
    image: 'salmon',
    slug: 'baked-salmon',
  },
  {
    id: 3,
    title: 'Sweet Potato and Chickpea Curry',
    image: 'curry',
    slug: 'sweet-potato-chickpea-curry',
  },
  {
    id: 4,
    title: 'Kale and Avocado Salad',
    image: 'kale',
    slug: 'kale-avocado-salad',
  },
  {
    id: 5,
    title: 'Quinoa Stuffed Bell Peppers',
    image: 'pepper',
    slug: 'quinoa-stuffed-peppers',
  },
  {
    id: 6,
    title: 'Grilled Chicken and Vegetable Skewers',
    image: 'skewers',
    slug: 'grilled-chicken-vegetable-skewers',
  },
  {
    id: 7,
    title: 'Roasted Brussels Sprouts with Balsamic Glaze',
    image: 'brussels',
    slug: 'roasted-brussels-sprouts',
  },
  {
    id: 8,
    title: 'Berry and Spinach Smoothie Bowl',
    image: 'smoothie',
    slug: 'berry-spinach-smoothie-bowl',
  },
];

export async function up(sql: Sql) {
  for (const recipe of recipes) {
    await sql`
      INSERT INTO recipes (
          title,
          image,
          slug
        )
      VALUES
        (
          ${recipe.title},
          ${recipe.image},
          ${recipe.slug}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const recipe of recipes) {
    await sql`
      DELETE FROM recipes
      WHERE
        id = ${recipe.id}
    `;
  }
}

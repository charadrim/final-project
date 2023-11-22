const recipes = [
  {
    id: 1,
    title: 'Quinoa Salad with Roasted Vegetables',
    image: 'quinoa',
    slug: 'quinoa-salad',
    description:
      'A refreshing quinoa salad with a medley of roasted vegetables, creating a delightful blend of flavors and textures.',
    ingredients: [
      'Quinoa',
      'Assorted vegetables (bell peppers, cherry tomatoes, zucchini)',
      'Olive oil',
      'Salt and pepper',
    ],
    instructions: [
      'Preheat the oven to 400°F (200°C).',
      'Cook quinoa according to package instructions and let it cool.',
      'Toss assorted vegetables with olive oil, salt, and pepper. Roast in the oven until golden brown.',
      'Mix roasted vegetables with cooked quinoa.',
      'Serve chilled and enjoy!',
    ],
  },
  {
    id: 2,
    title: 'Baked Salmon with Lemon and Dill',
    image: 'salmon',
    slug: 'baked-salmon',
    description:
      'Succulent salmon baked to perfection with the bright flavors of lemon and dill, creating a simple yet elegant dish.',
    ingredients: [
      'Salmon fillets',
      'Fresh lemon',
      'Fresh dill',
      'Salt and pepper',
    ],
    instructions: [
      'Preheat the oven to 375°F (190°C).',
      'Place salmon fillets on a baking sheet.',
      'Squeeze fresh lemon juice over the salmon and sprinkle with chopped dill, salt, and pepper.',
      'Bake until the salmon is cooked through and flakes easily with a fork.',
      'Serve with additional lemon wedges.',
    ],
  },
  {
    id: 3,
    title: 'Sweet Potato and Chickpea Curry',
    image: 'curry',
    slug: 'sweet-potato-chickpea-curry',
    description:
      'A hearty and flavorful curry featuring sweet potatoes and chickpeas in a rich, aromatic sauce.',
    ingredients: [
      'Sweet potatoes',
      'Chickpeas',
      'Coconut milk',
      'Curry spices (turmeric, cumin, coriander)',
    ],
    instructions: [
      'In a pot, sauté sweet potatoes until slightly tender.',
      'Add chickpeas, coconut milk, and curry spices.',
      'Simmer until sweet potatoes are fully cooked and flavors meld together.',
      'Serve over rice or with naan bread.',
    ],
  },
  {
    id: 4,
    title: 'Kale and Avocado Salad',
    image: 'kale',
    slug: 'kale-avocado-salad',
    description:
      'A nutrient-packed salad with kale, creamy avocado, and a zesty dressing for a refreshing and healthy meal.',
    ingredients: ['Kale', 'Avocado', 'Cherry tomatoes', 'Lemon vinaigrette'],
    instructions: [
      'Massage kale to soften it.',
      'Toss kale with sliced avocado and halved cherry tomatoes.',
      'Drizzle with lemon vinaigrette.',
      'Allow flavors to meld before serving.',
    ],
  },
  {
    id: 5,
    title: 'Quinoa Stuffed Bell Peppers',
    image: 'pepper',
    slug: 'quinoa-stuffed-peppers',
    description:
      'Colorful bell peppers stuffed with quinoa, black beans, corn, and spices, creating a satisfying and nutritious dish.',
    ingredients: [
      'Bell peppers',
      'Quinoa',
      'Black beans',
      'Corn',
      'Taco seasoning',
    ],
    instructions: [
      'Cook quinoa and mix it with black beans, corn, and taco seasoning.',
      'Cut bell peppers in half and remove seeds.',
      'Stuff bell peppers with the quinoa mixture.',
      'Bake until peppers are tender.',
      'Serve and enjoy!',
    ],
  },
  {
    id: 6,
    title: 'Grilled Chicken and Vegetable Skewers',
    image: 'skewers',
    slug: 'grilled-chicken-vegetable-skewers',
    description:
      'Tender grilled chicken skewers paired with a variety of colorful vegetables, creating a delicious and wholesome meal.',
    ingredients: [
      'Chicken breast',
      'Bell peppers',
      'Red onion',
      'Cherry tomatoes',
      'Olive oil',
      'Herbs and spices',
    ],
    instructions: [
      'Cut chicken into cubes and marinate with olive oil, herbs, and spices.',
      'Thread chicken and vegetables onto skewers.',
      'Grill until chicken is cooked through and vegetables are tender.',
      'Serve hot and enjoy!',
    ],
  },
  {
    id: 7,
    title: 'Roasted Brussels Sprouts with Balsamic Glaze',
    image: 'brussels',
    slug: 'roasted-brussels-sprouts',
    description:
      'Crispy roasted Brussels sprouts drizzled with a sweet and tangy balsamic glaze, creating a flavorful side dish.',
    ingredients: [
      'Brussels sprouts',
      'Olive oil',
      'Balsamic glaze',
      'Salt and pepper',
    ],
    instructions: [
      'Preheat the oven to 400°F (200°C).',
      'Trim and halve Brussels sprouts.',
      'Toss with olive oil, salt, and pepper.',
      'Roast until golden brown and crispy.',
      'Drizzle with balsamic glaze before serving.',
    ],
  },
  {
    id: 8,
    title: 'Berry and Spinach Smoothie Bowl',
    image: 'smoothie',
    slug: 'berry-spinach-smoothie-bowl',
    description:
      'A vibrant and nutritious smoothie bowl packed with berries, spinach, and wholesome toppings.',
    ingredients: [
      'Mixed berries',
      'Spinach',
      'Banana',
      'Greek yogurt',
      'Granola',
      'Chia seeds',
    ],
    instructions: [
      'Blend mixed berries, spinach, banana, and Greek yogurt until smooth.',
      'Pour into a bowl and top with granola and chia seeds.',
      'Customize with additional toppings as desired.',
      'Enjoy a delicious and energizing smoothie bowl!',
    ],
  },
];

export function getRecipes() {
  return recipes;
}

export function getRecipe(id: number) {
  return recipes.find((recipe) => recipe.id === id);
}

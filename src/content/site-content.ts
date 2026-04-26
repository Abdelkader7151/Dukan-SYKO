export const siteNav = [
  { href: "/", label: "Home" },
  { href: "/restaurant", label: "Restaurant" },
  { href: "/dukan", label: "Dukan" },
  { href: "/story", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const heroContent = {
  eyebrow: "Brooklyn, New York",
  brandWord: "SYKO",
  brandSubword: "Syrian & Korean Cuisine",
  headline: "Two cultures. One neighborhood destination.",
  description:
    "A premium digital home connecting SYKO Restaurant and Dukan SYKO Marketplace through food, market culture, and Brooklyn community.",
  ctaPrimary: { href: "/restaurant", label: "Go to Restaurant" },
  ctaSecondary: { href: "/dukan", label: "Go to Dukan" },
};

export const sharedHighlights = [
  "Halal Syrian and Korean dishes",
  "Housemade mezze and banchan",
  "Middle Eastern bakery offerings",
  "Market-first pantry categories",
];

export const restaurantInfo = {
  title: "SYKO Restaurant",
  description:
    "A modern Syrian-Korean restaurant experience with dine-in, delivery, and takeout rooted in warmth and craft.",
  address: "126 Windsor Place, Brooklyn, NY 11215",
  phone: "(929) 424-0423",
  email: "brooklynsyko@gmail.com",
  hours: [
    "Tuesday - Sunday: 11:00 AM - 10:00 PM",
    "Weekend brunch specials until 2:30 PM",
    "Closed Monday",
  ],
  menuHighlights: [
    "Syrian & Korean mains",
    "Fresh market-ready specials",
    "Housemade mezze",
    "Housemade banchan",
    "Bakery and pita selections",
  ],
};

export type RestaurantMenuCategory =
  | "Cold Appetizer"
  | "Hot Appetizer"
  | "Salads"
  | "Sandwiches"
  | "Main Course"
  | "Desserts";

export type RestaurantMenuChoice = "Syrian Menu" | "Korean Menu" | "SYKO FUSION";

export type RestaurantMenuItem = {
  name: string;
  category: RestaurantMenuCategory;
  description: string;
  price: string;
  menuChoice?: RestaurantMenuChoice;
  tags?: string[];
  note?: string;
};

export const restaurantMenuItems: RestaurantMenuItem[] = [
  {
    category: "Cold Appetizer",
    name: "Hummus",
    description: "Pureed chickpeas, tahini, and lemon.",
    price: "$10",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Baba Ghanoush",
    description: "Roasted eggplant, tahini, lemon, and garlic.",
    price: "$10",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Muhammara",
    description: "Red bell peppers, crushed walnuts, and pomegranate molasses.",
    price: "$11",
    tags: ["Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Labneh",
    description: "Strained yogurt, mint, and garlic.",
    price: "$10",
    tags: ["Gluten free", "Vegetarian"],
  },
  {
    category: "Cold Appetizer",
    name: "Potato Salad",
    description: "Boiled potato, parsley, scallion, olive oil, and lemon juice.",
    price: "$10",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Grape Leaves",
    description: "Hand rolled grape leaves stuffed with rice and vegetables.",
    price: "$10.50",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Spinach Salad",
    description: "Chopped spinach, onions, lemon, and pomegranate seeds.",
    price: "$10.50",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Dip Combo",
    description: "Choice of 4 cold appetizers.",
    price: "$16.50",
  },
  {
    category: "Hot Appetizer",
    name: "Kibbeh",
    description: "Cracked wheat dough stuffed with spiced meat, pine nuts, and onions.",
    price: "$14",
  },
  {
    category: "Hot Appetizer",
    name: "Cheese Roll",
    description: "Filo dough with feta cheese, mozzarella cheese, onions, and parsley.",
    price: "$11.50",
    tags: ["Vegetarian"],
  },
  {
    category: "Hot Appetizer",
    name: "Meat Roll",
    description: "Filo dough with onion and meat.",
    price: "$12",
  },
  {
    category: "Hot Appetizer",
    name: "Spicy Potato",
    description: "Diced fried potato sauteed with cilantro, garlic, and pepper paste.",
    price: "$11",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Hot Appetizer",
    name: "Falafel",
    description: "Fried ground chickpeas with onions, garlic, tahini sauce, and Syrian spices.",
    price: "$11",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Hot Appetizer",
    name: "Fried Cauliflower",
    description: "Fried cauliflower, lemon juice, olive oil, cilantro, and tahini sauce.",
    price: "$11.50",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Hot Appetizer",
    name: "French Fries",
    description: "Hand-cut freshly fried potato.",
    price: "$6.50",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Hot Appetizer",
    name: "Shrimp",
    description: "Sauteed with cilantro, garlic, and lemon.",
    price: "$14",
    tags: ["Gluten free"],
  },
  {
    category: "Hot Appetizer",
    name: "Sujok Arayes",
    description: "Sujok and cheese spread between toasted pita.",
    price: "$13.50",
  },
  {
    category: "Salads",
    name: "Fattoush",
    description:
      "Lettuce, tomato, cucumber, onions, sumac, fried pita, olive oil, and pomegranate molasses.",
    price: "$13",
    tags: ["Vegetarian", "Vegan"],
    note: "Ask for no fried pita chips to make it gluten free.",
  },
  {
    category: "Sandwiches",
    name: "Meat Shawarma",
    description: "Thinly sliced marinated beef, tomato, onions, and tahini sauce.",
    price: "$13.50",
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Chicken Shawarma",
    description: "Thinly sliced marinated chicken, garlic paste, and pickles.",
    price: "$13.50",
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Sujok",
    description: "Minced beef Syrian sausage, tomato, garlic paste, and pickles.",
    price: "$14",
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Shish Taouk",
    description:
      "Marinated and cubed chicken chunks with french fries, garlic paste, pickles, and tomatoes.",
    price: "$14.50",
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Chicken Kebab",
    description:
      "Marinated and cubed chicken chunks with french fries, hummus, tomatoes, onion, and pickles.",
    price: "$14.50",
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Cauliflower",
    description:
      "Fried cauliflower with cilantro, garlic, lemon, hummus, onions, mint, tomato, pickles, and tahini sauce.",
    price: "$12",
    tags: ["Vegetarian", "Vegan"],
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Falafel",
    description:
      "Fried ground chickpeas, tomato, cucumber, mint, turnip pickles, and tahini sauce.",
    price: "$12",
    tags: ["Vegetarian", "Vegan"],
    note: "Meal upgrade with fries available for +$5.50.",
  },
  {
    category: "Sandwiches",
    name: "Sujok Egg + Cheese",
    description:
      "Minced beef Syrian sausage, garlic paste, french fries, and pickles on toasted hero bread.",
    price: "$15.50",
  },
  {
    category: "Sandwiches",
    name: "Chicken Chops",
    description:
      "Marinated chicken with french fries, garlic paste, pickles, and tomatoes on toasted hero bread.",
    price: "$16",
  },
  {
    category: "Main Course",
    name: "Vegetarian Plate",
    description:
      "Grape leaves, falafel, fried cauliflower, one salad choice, and two cold appetizer dip choices.",
    price: "$22.50",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
    note: "Muhammara is not gluten free and labneh is not vegan.",
  },
  {
    category: "Main Course",
    name: "Shish Taouk",
    description: "Marinated and cubed chicken breast served with garlic paste and pickles.",
    price: "$24.50",
    note: "Entree includes your choice of rice or french fries.",
  },
  {
    category: "Main Course",
    name: "Chicken Chops",
    description:
      "Deboned marinated chicken thighs served with hummus, rice or fries, and assorted pickles and vegetables.",
    price: "$24.50",
    note: "Entree includes your choice of rice or french fries.",
  },
  {
    category: "Main Course",
    name: "Falafel Platter",
    description:
      "8 pieces of falafel with hummus or baba ghanoush and assorted pickles and vegetables.",
    price: "$20",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
    note: "Entree includes your choice of rice or french fries.",
  },
  {
    category: "Main Course",
    name: "Meat/Chicken Shawarma Hummus Platter",
    description:
      "Hummus topped with your protein choice and served with rice or fries plus assorted pickles and vegetables.",
    price: "$23",
    tags: ["Gluten free"],
    note: "Entree includes your choice of rice or french fries.",
  },
  {
    category: "Desserts",
    name: "Baklava",
    description: "Traditional layered pastry with nuts and syrup.",
    price: "$9",
  },
  {
    category: "Cold Appetizer",
    name: "Kimchi",
    description: "Traditional napa cabbage kimchi.",
    price: "$7",
    menuChoice: "Korean Menu",
  },
  {
    category: "Cold Appetizer",
    name: "Beansprouts",
    description: "Seasoned Korean bean sprout banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Spinach",
    description: "Seasoned spinach banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Shiitake Mushrooms",
    description: "Soy-marinated shiitake mushroom banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Pickled Raddish",
    description: "Tangy pickled Korean radish.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Pickled Garlic",
    description: "Sweet and savory pickled garlic cloves.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Zucchini",
    description: "Lightly seasoned Korean zucchini banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Carrots",
    description: "Korean-style seasoned carrot banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Cucumber Kimchi",
    description: "Crunchy cucumber kimchi banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Fishcakes",
    description: "Classic Korean fishcake side dish.",
    price: "$7",
    menuChoice: "Korean Menu",
  },
  {
    category: "Cold Appetizer",
    name: "Broccoli",
    description: "Korean-style broccoli banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Cold Appetizer",
    name: "Cauliflower",
    description: "Korean-style cauliflower banchan.",
    price: "$7",
    menuChoice: "Korean Menu",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Hot Appetizer",
    name: "Fried Tofu w/ Kimchi",
    description: "Fried tofu sauteed with onions, garlic, and house kimchi.",
    price: "$11",
    menuChoice: "Korean Menu",
  },
  {
    category: "Hot Appetizer",
    name: "Chicken Poppers (Korean Fried Chicken Bites)",
    description: "Plain or house spicy and tangy sauce (mild).",
    price: "$13.50",
    menuChoice: "Korean Menu",
  },
  {
    category: "Hot Appetizer",
    name: "Japchae",
    description:
      "Vermicelli noodles, carrots, spinach, shiitake mushrooms, red bell pepper, sesame oil, soy sauce, and sesame seed.",
    price: "$12.50",
    menuChoice: "Korean Menu",
  },
  {
    category: "Hot Appetizer",
    name: "Mandu",
    description: "Dumplings with chicken, kimchi, pork, or vegetable filling.",
    price: "$13",
    menuChoice: "Korean Menu",
  },
  {
    category: "Hot Appetizer",
    name: "Stir Fried Shrimp",
    description: "Peeled and sauteed shrimp with ginger, garlic, and qochujang.",
    price: "$14",
    menuChoice: "Korean Menu",
    tags: ["Gluten free"],
  },
  {
    category: "Salads",
    name: "Korean Lettuce Salad",
    description:
      "Romaine hearts, cucumber kimchi, gochugaru, sesame oil, fish sauce, scallions, and soy sauce.",
    price: "$13",
    menuChoice: "Korean Menu",
  },
  {
    category: "Sandwiches",
    name: "Chicken Fatboy",
    description: "Korean pancake, rice, chicken, lettuce, and bibim sauce.",
    price: "$16",
    menuChoice: "Korean Menu",
    note: 'All sandwiches are served with "Yangyumjang".',
  },
  {
    category: "Sandwiches",
    name: "Bulgogi Fatboy",
    description: "Korean pancake, bulgogi, rice, lettuce, and bibim sauce.",
    price: "$16",
    menuChoice: "Korean Menu",
    note: 'All sandwiches are served with "Yangyumjang".',
  },
  {
    category: "Sandwiches",
    name: "Tofu Kimchi Fatboy",
    description: "Korean pancake, pan-seared tofu and kimchi, rice, lettuce, and bibim sauce.",
    price: "$16",
    menuChoice: "Korean Menu",
    note: 'Kimchi has fish sauce; vegetarians can substitute cucumber kimchi.',
  },
  {
    category: "Sandwiches",
    name: "Bulgogi Egg + Cheese",
    description: "Choice of chicken or beef bulgogi, egg, and cheese on toasted hero bread.",
    price: "$16",
    menuChoice: "Korean Menu",
  },
  {
    category: "Sandwiches",
    name: "Chicken Popper Sandwich",
    description:
      "House chicken poppers with Korean coleslaw, pickled radish, and fries on toasted hero bread.",
    price: "$16",
    menuChoice: "Korean Menu",
  },
  {
    category: "Sandwiches",
    name: "Vegetable Kimbap",
    description: "Spinach, shiitake mushrooms, carrots, pickled radish, and zucchini.",
    price: "$11",
    menuChoice: "Korean Menu",
    tags: ["Vegetarian", "Vegan"],
    note: "Can be gluten free if shiitake mushrooms are substituted.",
  },
  {
    category: "Sandwiches",
    name: "Bulgogi Kimbap",
    description:
      "Rice, beef bulgogi, spinach, pickled radish, shiitake mushrooms, zucchini, and carrots.",
    price: "$12.50",
    menuChoice: "Korean Menu",
  },
  {
    category: "Sandwiches",
    name: "Chicken Kimbap",
    description:
      "Rice, chicken bulgogi, spinach, pickled radish, shiitake mushrooms, zucchini, and carrots.",
    price: "$12.50",
    menuChoice: "Korean Menu",
  },
  {
    category: "Sandwiches",
    name: "Spam Kimbap",
    description:
      "Rice, spam, egg, pickled radish, spinach, carrots, and shiitake mushrooms.",
    price: "$12.50",
    menuChoice: "Korean Menu",
    note: "Can be gluten free if shiitake mushrooms are substituted.",
  },
  {
    category: "Sandwiches",
    name: "Tuna Kimbap",
    description: "Rice, tuna, imitation crab, pickled radish, carrots, and shiitake mushrooms.",
    price: "$13",
    menuChoice: "Korean Menu",
    note: "Can be gluten free if shiitake mushrooms are substituted.",
  },
  {
    category: "Sandwiches",
    name: "Crispy Chicken Kimbap",
    description:
      "Rice, chicken poppers, cheese, pickled radish, spinach, carrots, and shiitake mushrooms.",
    price: "$13.50",
    menuChoice: "Korean Menu",
  },
  {
    category: "Main Course",
    name: "Bibimbap",
    description:
      "Rice, spinach, carrots, zucchini, shiitake mushrooms, bean sprouts, and a sunny side up egg.",
    price: "$20.50",
    menuChoice: "Korean Menu",
    tags: ["Vegetarian"],
    note: "Can be vegan without egg. Can be gluten free if shiitake mushrooms are substituted.",
  },
  {
    category: "Main Course",
    name: "Beef Bulgogi",
    description: "Marinated beef with side of rice and choice of 2 banchan.",
    price: "$25",
    menuChoice: "Korean Menu",
    note: "Each entree includes 2 banchan and plain rice. Kimchi fried rice +$4.",
  },
  {
    category: "Main Course",
    name: "Chicken Bulgogi",
    description: "Marinated chicken with side of rice and choice of 2 banchan.",
    price: "$25",
    menuChoice: "Korean Menu",
    note: "Each entree includes 2 banchan and plain rice. Kimchi fried rice +$4.",
  },
  {
    category: "Main Course",
    name: "Tofu Kimchi",
    description: "Deep fried tofu with pan-seared kimchi, side of rice, and choice of 2 banchan.",
    price: "$24.50",
    menuChoice: "Korean Menu",
    note: "Each entree includes 2 banchan and plain rice. Kimchi fried rice +$4.",
  },
  {
    category: "Main Course",
    name: "Shrimp Korean Plate",
    description:
      "Peeled and sauteed shrimp with carrots, onions, scallion, ginger, garlic, and gochujang, with rice and 2 banchan.",
    price: "$26",
    menuChoice: "Korean Menu",
    note: "Each entree includes 2 banchan and plain rice. Kimchi fried rice +$4.",
  },
  {
    category: "Main Course",
    name: "Chicken Chops Korean Plate",
    description: "Grilled chicken chops served with rice and 2 banchan.",
    price: "$24.50",
    menuChoice: "Korean Menu",
    note: "Each entree includes 2 banchan and plain rice. Kimchi fried rice +$4.",
  },
  {
    category: "Desserts",
    name: "Hotteok Korean Sweet Pancakes",
    description: "Traditional Korean sweet pancakes.",
    price: "$7.50",
    menuChoice: "Korean Menu",
    tags: ["Vegetarian", "Vegan"],
  },
  {
    category: "Main Course",
    name: "SYKO Falafel Bowl",
    description: "Hummus topped with cucumber kimchi and falafels.",
    price: "$16.50",
    menuChoice: "SYKO FUSION",
    tags: ["Gluten free", "Vegetarian", "Vegan"],
  },
  {
    category: "Main Course",
    name: "SYKO Kibbeh Bowl",
    description: "Labneh topped with kibbeh and cucumber kimchi.",
    price: "$16.50",
    menuChoice: "SYKO FUSION",
  },
  {
    category: "Hot Appetizer",
    name: "SYKO Box Sampler",
    description:
      "Cheese roll, meat roll, kibbeh, falafel, pork dumpling, veggie dumpling, chicken poppers, and sujok arayes.",
    price: "$21",
    menuChoice: "SYKO FUSION",
  },
  {
    category: "Main Course",
    name: "SYKO Falafel Pizza",
    description: "Scallion pancake topped with labneh, falafel, cucumber kimchi, and mint.",
    price: "$22",
    menuChoice: "SYKO FUSION",
    tags: ["Vegetarian"],
  },
  {
    category: "Main Course",
    name: "SYKO Shawarma Pizza",
    description: "Scallion pancake topped with hummus, meat shawarma, onions, tomato, and beansprouts.",
    price: "$22",
    menuChoice: "SYKO FUSION",
  },
];

export const dukanInfo = {
  title: "Dukan SYKO Marketplace",
  description:
    "A neighborhood dukan where Middle Eastern and Asian grocery culture meet in curated categories and weekly finds.",
  address: "214A Prospect Park West, Brooklyn, NY 11215",
  phone: "(929) 441-4306",
  email: "brooklyndukan@gmail.com",
  hours: ["Daily: 9:00 AM - 10:00 PM"],
  categories: [
    "Weekly Sales",
    "Beans & Peas",
    "Pita Bread & Bakery",
    "Coffee & Tea",
    "Condiments",
    "Dried Fruit & Vegetables",
    "Grains, Rice & Wheat",
    "Olives & Pickles",
    "Ramen & Noodles",
    "Korean Banchan / Packaged",
    "Syrian Cold Appetizers / Packaged",
    "New Arrivals",
  ],
};

export const storyTimeline = [
  {
    year: "1880s",
    title: "Syrian migration to the U.S.",
    detail:
      "Early Syrian communities helped shape Little Syria on Washington Street in New York.",
  },
  {
    year: "1884 - 1903",
    title: "Korean communities establish roots",
    detail:
      "Korean migration expanded in New York, with communities growing in Queens and Manhattan.",
  },
  {
    year: "2022",
    title: "Cultural fusion through cuisine",
    detail:
      "SYKO launched in Brooklyn, bringing Syrian and Korean traditions together through food.",
  },
  {
    year: "2024",
    title: "Expansion into Dukan SYKO",
    detail:
      "The market experience expanded with Dukan SYKO, connecting pantry culture and neighborhood life.",
  },
];

export const footerData = {
  legal: "© 2026 SYKO",
  note: "Syrian and Korean cultures, crafted for Brooklyn.",
};


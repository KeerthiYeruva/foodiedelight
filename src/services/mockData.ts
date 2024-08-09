// src/services/mockData.ts

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Ocean's Delight",
    description: "Seafood and more",
    location: "123 Ocean Avenue",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    categories: ["Seafood"],
    menuItems: [
      {
        id: 1,
        name: "Grilled Salmon",
        price: 20,
        description: "Freshly grilled salmon with lemon butter sauce.",
      },
      {
        id: 2,
        name: "Fish Tacos",
        price: 15,
        description: "Crispy fish tacos with slaw and spicy mayo.",
      },
    ],
  },
  {
    id: 2,
    name: "Mountain Retreat",
    description: "Hearty mountain meals",
    location: "456 Mountain Road",
    image:
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    categories: ["Hearty", "Mountain"],
    menuItems: [
      {
        id: 3,
        name: "Beef Stew",
        price: 18,
        description: "Slow-cooked beef stew with vegetables.",
      },
      {
        id: 4,
        name: "Lamb Chops",
        price: 25,
        description: "Grilled lamb chops with rosemary and garlic.",
      },
    ],
  },
  {
    id: 3,
    name: "Urban Bistro",
    description: "Modern urban cuisine",
    location: "789 City Lane",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    categories: ["Urban", "Modern"],
    menuItems: [
      {
        id: 5,
        name: "Avocado Toast",
        price: 12,
        description: "Crispy toast with fresh avocado spread.",
      },
      {
        id: 6,
        name: "Quinoa Salad",
        price: 10,
        description: "Healthy quinoa salad with vegetables.",
      },
    ],
  },
  {
    id: 4,
    name: "Café Sunrise",
    description: "Breakfast & Brunch",
    location: "321 Sunny Street",
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    categories: ["Breakfast", "Brunch"],
    menuItems: [
      {
        id: 7,
        name: "Pancakes",
        price: 8,
        description: "Fluffy pancakes with syrup and butter.",
      },
      {
        id: 8,
        name: "Omelette",
        price: 10,
        description: "Three-egg omelette with cheese and vegetables.",
      },
    ],
  },
  {
    id: 5,
    name: "Tropical Haven",
    description: "Island Cuisine",
    location: "987 Beach Blvd",
    image:
      "https://images.unsplash.com/photo-1528889488123-3e51bcbc0581?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    categories: ["Tropical", "Island"],
    menuItems: [
      {
        id: 9,
        name: "Coconut Shrimp",
        price: 18,
        description: "Crispy shrimp with a coconut coating.",
      },
      {
        id: 10,
        name: "Pineapple Fried Rice",
        price: 15,
        description: "Fried rice with pineapple, ham, and vegetables.",
      },
    ],
  },
];

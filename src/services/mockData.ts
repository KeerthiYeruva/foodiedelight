export interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  categories: string[];
  menuItems: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const mockRestaurants: Restaurant[] = [
  {
    id: 1,
    name: "Ocean's Delight",
    description: "Seafood and more",
    location: "123 Ocean Avenue",
    image: "https://example.com/ocean.jpg",
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
    image: "https://example.com/mountain.jpg",
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
];

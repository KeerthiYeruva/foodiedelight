interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
  categories: string[];
  menuItems: MenuItem[];
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

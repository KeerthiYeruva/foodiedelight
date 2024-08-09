import { mockRestaurants } from "./mockData";

let restaurants: Restaurant[] = [...mockRestaurants];

export const getRestaurants = async (): Promise<Restaurant[]> => {
  return new Promise((resolve) => setTimeout(() => resolve(restaurants), 500));
};

export const addRestaurant = async (
  restaurant: Restaurant
): Promise<Restaurant> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      restaurant.id = restaurants.length + 1;
      restaurants.push(restaurant);
      resolve(restaurant);
    }, 500);
  });
};

export const updateRestaurant = async (
  updatedRestaurant: Restaurant
): Promise<Restaurant> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      restaurants = restaurants.map((restaurant) =>
        restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant
      );
      resolve(updatedRestaurant);
    }, 500);
  });
};

export const deleteRestaurant = async (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      restaurants = restaurants.filter((restaurant) => restaurant.id !== id);
      resolve();
    }, 500);
  });
};

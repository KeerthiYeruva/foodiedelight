import React, { createContext, useState, useContext, useEffect } from "react";
import { Restaurant } from "../services/mockData";
import {
  getRestaurants,
  addRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from "../services/restaurantApi";

interface RestaurantContextType {
  restaurants: Restaurant[];
  addRestaurant: (restaurant: Restaurant) => Promise<void>;
  updateRestaurant: (restaurant: Restaurant) => Promise<void>;
  deleteRestaurant: (id: number) => Promise<void>;
}

const RestaurantContext = createContext<RestaurantContextType | undefined>(
  undefined
);

export const useRestaurants = (): RestaurantContextType => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurants must be used within a RestaurantProvider");
  }
  return context;
};

export const RestaurantProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestaurants().then(setRestaurants);
  }, []);

  const handleAddRestaurant = async (restaurant: Restaurant) => {
    const newRestaurant = await addRestaurant(restaurant);
    setRestaurants([...restaurants, newRestaurant]);
  };

  const handleUpdateRestaurant = async (restaurant: Restaurant) => {
    const updatedRestaurant = await updateRestaurant(restaurant);
    setRestaurants(
      restaurants.map((r) =>
        r.id === updatedRestaurant.id ? updatedRestaurant : r
      )
    );
  };

  const handleDeleteRestaurant = async (id: number) => {
    await deleteRestaurant(id);
    setRestaurants(restaurants.filter((r) => r.id !== id));
  };

  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        addRestaurant: handleAddRestaurant,
        updateRestaurant: handleUpdateRestaurant,
        deleteRestaurant: handleDeleteRestaurant,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

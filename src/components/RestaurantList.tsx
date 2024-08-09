// src/components/RestaurantList.tsx

import React from "react";
import { useRestaurants } from "../context/RestaurantContext";

const RestaurantList: React.FC = () => {
  const { restaurants, deleteRestaurant } = useRestaurants();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Restaurant List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {restaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="p-4 bg-white rounded shadow-md flex justify-between items-center"
          >
            <div>
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.description}</p>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
            </div>
            <button
              onClick={() => deleteRestaurant(restaurant.id)}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantList;

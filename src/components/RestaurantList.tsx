import React, { useEffect, useState } from "react";
import { getRestaurants, deleteRestaurant, Restaurant } from "../services/api";
import { Link } from "react-router-dom";

const RestaurantList: React.FC = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        setRestaurants(data);
      } catch (error) {
        console.error("Failed to fetch restaurants", error);
      }
    };

    fetchRestaurants();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await deleteRestaurant(id);
      setRestaurants(restaurants.filter((restaurant) => restaurant.id !== id));
    } catch (error) {
      console.error("Failed to delete restaurant", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="bg-white p-4 rounded shadow-md">
          <div className="flex justify-between items-center mb-2">
            <Link
              to={`/restaurants/${restaurant.id}`}
              className="text-lg font-semibold text-blue-600"
            >
              {restaurant.name}
            </Link>
            <div>
              <Link
                to={`/edit/${restaurant.id}`}
                className="text-blue-500 mr-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(restaurant.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
          <p className="text-gray-600">{restaurant.description}</p>
          <p className="text-gray-500 text-sm">{restaurant.location}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;

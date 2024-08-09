import React, { useState } from "react";
import { useRestaurants } from "../context/RestaurantContext";

interface RestaurantListProps {
  searchTerm: string;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ searchTerm }) => {
  const { restaurants, deleteRestaurant } = useRestaurants();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const displayedRestaurants = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Restaurant List</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedRestaurants.map((restaurant) => (
          <li
            key={restaurant.id}
            className="p-4 bg-white rounded shadow-md flex flex-col items-start"
          >
            {restaurant.image && (
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
            )}
            <div>
              <h3 className="text-xl font-semibold">{restaurant.name}</h3>
              <p className="text-sm text-gray-600">{restaurant.description}</p>
              <p className="text-sm text-gray-600">{restaurant.location}</p>
              <div className="mt-2">
                <span className="text-sm font-medium text-gray-700">
                  Categories:
                </span>
                <ul className="list-disc list-inside">
                  {restaurant.categories.map((category) => (
                    <li key={category} className="text-sm text-gray-600">
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <button
              onClick={() => deleteRestaurant(restaurant.id)}
              className="bg-red-600 text-white p-2 rounded hover:bg-red-700 mt-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="bg-gray-300 p-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RestaurantList;

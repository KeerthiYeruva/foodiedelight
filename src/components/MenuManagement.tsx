import React, { useState, useEffect } from "react";
import MenuItemForm from "./MenuItemForm";
import { useRestaurants } from "../context/RestaurantContext";

const MenuManagement: React.FC = () => {
  const { restaurants, updateRestaurant } = useRestaurants();
  const [selectedRestaurantId, setSelectedRestaurantId] = useState<
    number | null
  >(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState<MenuItem | null>(
    null
  );
  const [isAddingOrEditing, setIsAddingOrEditing] = useState(false);

  useEffect(() => {
    if (restaurants.length > 0 && selectedRestaurantId === null) {
      setSelectedRestaurantId(restaurants[0].id);
    }
  }, [restaurants, selectedRestaurantId]);

  const selectedRestaurant = restaurants.find(
    (r) => r.id === selectedRestaurantId
  );

  const handleEdit = (menuItem: MenuItem) => {
    setSelectedMenuItem(menuItem);
    setIsAddingOrEditing(true);
  };

  const handleDelete = (menuItemId: number) => {
    if (!selectedRestaurant) return;

    const updatedMenuItems = selectedRestaurant.menuItems.filter(
      (item) => item.id !== menuItemId
    );

    updateRestaurant({ ...selectedRestaurant, menuItems: updatedMenuItems });
  };

  const handleSubmit = (menuItem: MenuItem) => {
    if (!selectedRestaurant) return;

    const updatedMenuItems = selectedMenuItem
      ? selectedRestaurant.menuItems.map((item) =>
          item.id === menuItem.id ? menuItem : item
        )
      : [...selectedRestaurant.menuItems, menuItem];

    updateRestaurant({ ...selectedRestaurant, menuItems: updatedMenuItems });
    setIsAddingOrEditing(false);
    setSelectedMenuItem(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Manage Menu Items
      </h2>

      <div className="mb-6">
        <label
          htmlFor="restaurant-select"
          className="block text-lg font-medium text-gray-700"
        >
          Select Restaurant:
        </label>
        <select
          id="restaurant-select"
          value={selectedRestaurantId || ""}
          onChange={(e) => setSelectedRestaurantId(Number(e.target.value))}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
        >
          <option value="">Select Restaurant</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>

      {selectedRestaurant && !isAddingOrEditing && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedRestaurant.menuItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {item.name}
              </h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-gray-800 font-bold mt-2">
                ${item.price.toFixed(2)}
              </p>
              <div className="mt-4 flex space-x-2">
                <button
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRestaurant && !isAddingOrEditing && (
        <button
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mt-4"
          onClick={() => setIsAddingOrEditing(true)}
        >
          Add New Menu Item
        </button>
      )}

      {isAddingOrEditing && (
        <MenuItemForm
          existingMenuItem={selectedMenuItem || undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setIsAddingOrEditing(false);
            setSelectedMenuItem(null);
          }}
        />
      )}
    </div>
  );
};

export default MenuManagement;

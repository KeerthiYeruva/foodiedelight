// src/pages/AdminDashboard.tsx

import React, { useState } from "react";
import RestaurantList from "../components/RestaurantList";
import RestaurantForm from "../components/RestaurantForm";
import MenuItemForm from "../components/MenuItemForm";
import { MenuItem } from "../services/mockData";

const AdminDashboard: React.FC = () => {
  const [isAddingRestaurant, setIsAddingRestaurant] = useState(false);
  const [isAddingMenuItem, setIsAddingMenuItem] = useState(false);

  const handleMenuItemSubmit = (menuItem: MenuItem) => {
    console.log("Menu Item Submitted:", menuItem);
    setIsAddingMenuItem(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {isAddingRestaurant ? (
        <RestaurantForm onSubmit={() => setIsAddingRestaurant(false)} />
      ) : (
        <button
          onClick={() => setIsAddingRestaurant(true)}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add New Restaurant
        </button>
      )}

      {isAddingMenuItem ? (
        <MenuItemForm
          onSubmit={handleMenuItemSubmit}
          onCancel={() => setIsAddingMenuItem(false)}
        />
      ) : (
        <button
          onClick={() => setIsAddingMenuItem(true)}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Add New Menu Item
        </button>
      )}

      <RestaurantList />
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from "react";
import RestaurantList from "../components/RestaurantList";
import RestaurantForm from "../components/RestaurantForm";
import MenuItemForm from "../components/MenuItemForm";
import { MenuItem } from "../services/mockData";
import SearchBar from "../components/SearchBar";

const AdminDashboard: React.FC = () => {
  const [isAddingRestaurant, setIsAddingRestaurant] = useState(false);
  const [isAddingMenuItem, setIsAddingMenuItem] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleMenuItemSubmit = (menuItem: MenuItem) => {
    console.log("Menu Item Submitted:", menuItem);
    setIsAddingMenuItem(false);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

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

      <RestaurantList searchTerm={searchTerm} />
    </div>
  );
};

export default AdminDashboard;

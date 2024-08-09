import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantList from "../components/RestaurantList";
import SearchBar from "../components/SearchBar";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="flex space-x-4">
        <button
          onClick={() => navigate("/add-restaurant")}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add New Restaurant
        </button>
        <button
          onClick={() => navigate("/add-menu-item")}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Add New Menu Item
        </button>
      </div>

      <RestaurantList searchTerm={searchTerm} />
    </div>
  );
};

export default AdminDashboard;

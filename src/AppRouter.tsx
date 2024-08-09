import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import RestaurantForm from "./components/RestaurantForm";
import MenuItemForm from "./components/MenuItemForm";
import MenuManagement from "./components/MenuManagement";
import Navbar from "./components/Navbar";

const AppRouter: React.FC = () => {
  const handleMenuItemSubmit = (menuItem: MenuItem) => {
    // Logic to handle the menu item submission
    console.log("Menu Item Submitted:", menuItem);
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4 max-w-6xl">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/add-restaurant" element={<RestaurantForm />} />
          <Route
            path="/add-menu-item"
            element={<MenuItemForm onSubmit={handleMenuItemSubmit} />}
          />
          <Route path="/manage-menu" element={<MenuManagement />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;

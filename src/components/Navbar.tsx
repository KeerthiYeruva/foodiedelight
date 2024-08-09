import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-lg">
    <div className="container mx-auto flex justify-between items-center flex-wrap">
      <Link to="/" className="text-white text-2xl font-bold">
        FOODIE DELIGHT
      </Link>
      <div className="flex space-x-4">
        <Link
          to="/add"
          className="bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Add Restaurant
        </Link>
        <Link
          to="/menu"
          className="bg-white text-blue-700 font-semibold py-2 px-4 rounded hover:bg-blue-600 hover:text-white transition"
        >
          Manage Menu
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">
        FOODIEDELIGHT
      </Link>
      <Link to="/add" className="text-white ml-4">
        Add Restaurant
      </Link>
    </div>
  </nav>
);

export default Navbar;

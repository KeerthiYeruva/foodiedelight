// src/components/Navbar.tsx

import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav className="bg-blue-600 p-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center flex-wrap">
      <Link to="/" className="text-white text-xl font-bold">
        FOODIEDELIGHT
      </Link>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <Link
            to="/add"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
          >
            Add Restaurant
          </Link>
          <Link
            to="/menu"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
          >
            Manage Menu
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

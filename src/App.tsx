// src/App.tsx

import React from "react";
import AdminDashboard from "./pages/AdminDashboard";
import { RestaurantProvider } from "./context/RestaurantContext";
import ErrorBoundary from "./components/ErrorBoundary";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="App">
      <RestaurantProvider>
        <ErrorBoundary>
          <Navbar />
          <div className="container mx-auto p-4 max-w-6xl">
            <AdminDashboard />
          </div>
        </ErrorBoundary>
      </RestaurantProvider>
    </div>
  );
};

export default App;

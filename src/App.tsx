import React from "react";
import { RestaurantProvider } from "./context/RestaurantContext";
import ErrorBoundary from "./components/ErrorBoundary";
import AppRouter from "./AppRouter"; // Import the new AppRouter

const App: React.FC = () => {
  return (
    <div className="App">
      <RestaurantProvider>
        <ErrorBoundary>
          <AppRouter />
        </ErrorBoundary>
      </RestaurantProvider>
    </div>
  );
};

export default App;

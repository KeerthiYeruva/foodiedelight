import React from "react";
import RestaurantForm from "../components/RestaurantForm";
import { addRestaurant, Restaurant } from "../services/api";
import { useNavigate } from "react-router-dom";

const AddRestaurant: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = async (values: Omit<Restaurant, "id">) => {
    try {
      await addRestaurant(values);
      navigate("/");
    } catch (error) {
      console.error("Failed to add restaurant", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-4">Add New Restaurant</h2>
      <RestaurantForm
        initialValues={{ name: "", description: "", location: "" }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddRestaurant;

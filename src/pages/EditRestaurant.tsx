// src/pages/EditRestaurant.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import RestaurantForm from "../components/RestaurantForm";
import { getRestaurant, updateRestaurant, Restaurant } from "../services/api";

const EditRestaurant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Omit<Restaurant, "id">>({
    name: "",
    description: "",
    location: "",
  });

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        if (id) {
          const data = await getRestaurant(parseInt(id));
          setRestaurant({
            name: data.name,
            description: data.description,
            location: data.location,
          });
        }
      } catch (error) {
        console.error("Failed to fetch restaurant", error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleSubmit = async (values: Omit<Restaurant, "id">) => {
    try {
      if (id) {
        await updateRestaurant(parseInt(id), values);
        navigate("/");
      }
    } catch (error) {
      console.error("Failed to update restaurant", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-4">Edit Restaurant</h2>
      <RestaurantForm initialValues={restaurant} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditRestaurant;

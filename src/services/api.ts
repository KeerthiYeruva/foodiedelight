import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with your backend API

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  location: string;
}

export const getRestaurants = async (): Promise<Restaurant[]> => {
  const response = await axios.get<Restaurant[]>(`${API_BASE_URL}/restaurants`);
  return response.data;
};

export const getRestaurant = async (id: number): Promise<Restaurant> => {
  const response = await axios.get<Restaurant>(
    `${API_BASE_URL}/restaurants/${id}`
  );
  return response.data;
};

export const addRestaurant = async (
  data: Omit<Restaurant, "id">
): Promise<Restaurant> => {
  const response = await axios.post<Restaurant>(
    `${API_BASE_URL}/restaurants`,
    data
  );
  return response.data;
};

export const updateRestaurant = async (
  id: number,
  data: Omit<Restaurant, "id">
): Promise<Restaurant> => {
  const response = await axios.put<Restaurant>(
    `${API_BASE_URL}/restaurants/${id}`,
    data
  );
  return response.data;
};

export const deleteRestaurant = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/restaurants/${id}`);
};

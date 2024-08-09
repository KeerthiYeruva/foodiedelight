import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useRestaurants } from "../context/RestaurantContext";

const RestaurantForm: React.FC<{
  existingRestaurant?: Restaurant;
  onSubmit?: () => void;
}> = ({ existingRestaurant, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { addRestaurant, updateRestaurant } = useRestaurants();
  const [image, setImage] = useState<File | null>(null);
  const [categories, setCategories] = useState<string[]>(
    existingRestaurant?.categories || []
  );

  const availableCategories = ["Italian", "Chinese", "Mexican", "Seafood"];

  const formik = useFormik({
    initialValues: {
      name: existingRestaurant?.name || "",
      description: existingRestaurant?.description || "",
      location: existingRestaurant?.location || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Restaurant Name is required"),
      description: Yup.string().required("Description is required"),
      location: Yup.string().required("Location is required"),
    }),
    onSubmit: async (values) => {
      setIsSubmitting(true);

      const restaurant = {
        id: existingRestaurant?.id || 0,
        ...values,
        image: image
          ? URL.createObjectURL(image)
          : existingRestaurant?.image || "",
        categories,
        menuItems: existingRestaurant?.menuItems || [],
      };

      if (existingRestaurant) {
        await updateRestaurant(restaurant);
      } else {
        await addRestaurant(restaurant);
      }

      setIsSubmitting(false);
      setSuccessMessage("Restaurant saved successfully!");

      if (onSubmit) {
        onSubmit();
      }

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(null), 3000);
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setImage(file);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategories = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setCategories(selectedCategories);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="space-y-4 bg-white p-6 rounded shadow-md max-w-full md:max-w-2xl mx-auto"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Restaurant Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.description}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location:
        </label>
        <input
          id="location"
          name="location"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
        {formik.touched.location && formik.errors.location ? (
          <div className="text-red-600 text-sm mt-1">
            {formik.errors.location}
          </div>
        ) : null}
      </div>

      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Image:
        </label>
        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label
          htmlFor="categories"
          className="block text-sm font-medium text-gray-700"
        >
          Categories:
        </label>
        <select
          multiple
          value={categories}
          onChange={handleCategoryChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        >
          {availableCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isSubmitting && <div className="text-blue-600">Loading...</div>}
      {successMessage && (
        <div className="text-green-600 mt-2">{successMessage}</div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </form>
  );
};

export default RestaurantForm;

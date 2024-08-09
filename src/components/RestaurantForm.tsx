// src/components/RestaurantForm.tsx
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Restaurant } from "../services/api";

interface RestaurantFormProps {
  initialValues: Omit<Restaurant, "id">;
  onSubmit: (
    values: Omit<Restaurant, "id">,
    image: File | null
  ) => Promise<void>;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [image, setImage] = useState<File | null>(null);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values, image);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-lg mx-auto p-4 bg-white rounded shadow-md">
          {/* Other form fields */}
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4 w-full"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RestaurantForm;

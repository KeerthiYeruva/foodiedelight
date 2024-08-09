import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Restaurant } from "../services/api";

interface RestaurantFormProps {
  initialValues: Omit<Restaurant, "id">;
  onSubmit: (values: Omit<Restaurant, "id">) => Promise<void>;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.string().required("Location is required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await onSubmit(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <Field name="name" className="w-full p-2 border border-gray-300" />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <Field
              name="description"
              as="textarea"
              className="w-full p-2 border border-gray-300"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Location</label>
            <Field
              name="location"
              className="w-full p-2 border border-gray-300"
            />
            <ErrorMessage
              name="location"
              component="div"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded"
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

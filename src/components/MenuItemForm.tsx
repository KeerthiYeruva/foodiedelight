// src/components/MenuItemForm.tsx

import React, { useState } from "react";
import { MenuItem } from "../services/mockData";

interface MenuItemFormProps {
  existingMenuItem?: MenuItem;
  onSubmit: (menuItem: MenuItem) => void;
  onCancel?: () => void;
}

const MenuItemForm: React.FC<MenuItemFormProps> = ({
  existingMenuItem,
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = useState(existingMenuItem?.name || "");
  const [price, setPrice] = useState(existingMenuItem?.price || 0);
  const [description, setDescription] = useState(
    existingMenuItem?.description || ""
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const menuItem: MenuItem = {
      id: existingMenuItem?.id || 0,
      name,
      price,
      description,
    };

    onSubmit(menuItem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Menu Item Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price:
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Enter item price"
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description"
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white p-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default MenuItemForm;

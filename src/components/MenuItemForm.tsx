import React, { useState, useEffect } from "react";

interface MenuItemFormProps {
  onSubmit: (menuItem: MenuItem) => void;
  onCancel?: () => void;
  existingMenuItem?: MenuItem;
}

const MenuItemForm: React.FC<MenuItemFormProps> = ({
  onSubmit,
  onCancel,
  existingMenuItem,
}) => {
  const [name, setName] = useState(existingMenuItem?.name || "");
  const [price, setPrice] = useState(existingMenuItem?.price || 0);
  const [description, setDescription] = useState(
    existingMenuItem?.description || ""
  );

  useEffect(() => {
    if (existingMenuItem) {
      setName(existingMenuItem.name);
      setPrice(existingMenuItem.price);
      setDescription(existingMenuItem.description);
    }
  }, [existingMenuItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const menuItem: MenuItem = {
      id: existingMenuItem?.id || Date.now(),
      name,
      price,
      description,
    };

    onSubmit(menuItem);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-700"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-lg font-medium text-gray-700"
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
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-lg font-medium text-gray-700"
        >
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description"
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default MenuItemForm;

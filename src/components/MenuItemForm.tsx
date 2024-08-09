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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Menu Item Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item name"
          required
        />
      </div>

      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          placeholder="Enter item price"
          required
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter item description"
          required
        />
      </div>

      <button type="submit">Submit</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default MenuItemForm;

import { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  // Single handler for all three inputs using the input's name attribute as the key
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default browser page refresh

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price), // Store price as a number
    };

    onAddPlant(newPlant); // Pass up to App → triggers POST request

    // Reset form fields after submission
    setFormData({ name: "", image: "", price: "" });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          step="0.01"
          min="0"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <button type="submit">Add to Inventory</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
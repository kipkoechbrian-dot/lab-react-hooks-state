import { useState } from "react";

// Displays a single plant with a toggleable stock status button
// Note: sold-out toggle is local state only — not persisted to backend
function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleStockToggle() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${Number(plant.price).toFixed(2)}</p>

      {/* className="primary" gives the green style; removed when out of stock */}
      <button
        onClick={handleStockToggle}
        className={inStock ? "primary" : ""}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
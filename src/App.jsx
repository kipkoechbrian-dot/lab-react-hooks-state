import { useState } from "react";
import { sampleProducts } from "./components/ProductList";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const filteredItems =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((item) => item.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>🛒 Shopping App</h1>

      {/* ✅ FIXED TO MATCH TEST */}
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* FILTER */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      {/* PRODUCTS */}
      <ul>
        {filteredItems.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredItems.map((item) => (
            <li key={item.id}>
              {item.name} ({item.category})
              <button
                data-testid={`product-${item.id}`}
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </li>
          ))
        )}
      </ul>

      {/* ✅ FIXED TITLE */}
      <h2>Shopping Cart</h2>

      {/* CART ITEMS */}
      {cart.map((item, index) => (
        <p key={index}>{item.name} is in your cart</p>
      ))}
    </div>
  );
}
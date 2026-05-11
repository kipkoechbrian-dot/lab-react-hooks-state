import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import DarkModeToggle from "./components/DarkModeToggle";

const sampleProducts = [
  { id: 1, name: "Apple",    category: "Fruits",     price: 1.50 },
  { id: 2, name: "Banana",   category: "Fruits",     price: 0.99 },
  { id: 3, name: "Carrot",   category: "Vegetables", price: 0.75 },
  { id: 4, name: "Broccoli", category: "Vegetables", price: 1.25 },
  { id: 5, name: "Milk",     category: "Dairy",      price: 2.49 },
  { id: 6, name: "Cheese",   category: "Dairy",      price: 3.99 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("All");
  const [cart, setCart]         = useState([]);

  const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];

  const filteredProducts =
    category === "All"
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category);

  function handleAddToCart(product) {
    setCart((prev) => [...prev, product]);
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <DarkModeToggle darkMode={darkMode} onToggle={() => setDarkMode((prev) => !prev)} />
      <h1>Product Shop</h1>

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        <ul>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </ul>
      )}

      <Cart cart={cart} />
    </div>
  );
}

export { sampleProducts };
export default App;
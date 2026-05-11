function ProductCard({ product, onAddToCart }) {
  return (
    <li data-testid={`product-${product.id}`}>
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </li>
  );
}

export default ProductCard;

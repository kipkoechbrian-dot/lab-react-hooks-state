function Cart({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Shopping Cart ({cart.length})</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} is in your cart</li>
        ))}
      </ul>
      {cart.length > 0 && <p>Total: ${total.toFixed(2)}</p>}
    </div>
  );
}

export default Cart;
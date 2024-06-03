import React from 'react';

const Cart = ({ cart, updateCart, removeFromCart }) => {
  const handleQuantityChange = (product, quantity) => {
    updateCart(product, quantity);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="cart">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.product.id} className="cart-item">
              <img src={item.product.image} alt={item.product.name} />
              <h2>{item.product.name}</h2>
              <p>${item.product.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.product, parseInt(e.target.value))}
                min="1"
              />
              <button onClick={() => removeFromCart(item.product)}>Remove</button>
            </div>
          ))
        )}
        {cart.length > 0 && <button onClick={() => alert('Purchase finalized!')}>Finalize Purchase</button>}
      </div>
    </div>
  );
};

export default Cart;

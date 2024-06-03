import React from 'react';

const Cart = ({ cart, updateCart, removeFromCart }) => {
  const handleQuantityChange = (product, quantity) => {
    updateCart(product, quantity);
  };

  return (
    <div className="container">
      <h1 className="my-4">Shopping Cart</h1>
      <div className="row">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map(item => (
            <div key={item.product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img src={item.product.image} className="card-img-top" alt={item.product.name} />
                <div className="card-body">
                  <h5 className="card-title">{item.product.name}</h5>
                  <p className="card-text">${item.product.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.product, parseInt(e.target.value))}
                    min="1"
                    className="form-control mb-2"
                  />
                  <button onClick={() => removeFromCart(item.product)} className="btn btn-danger">Remove</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {cart.length > 0 && <button onClick={() => alert('Purchase finalized!')} className="btn btn-success">Finalize Purchase</button>}
    </div>
  );
};

export default Cart;

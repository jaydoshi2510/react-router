import React, { useState } from 'react';
import products from '../data/products';

const ProductList = ({ addToCart }) => {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  return (
    <div className="container">
      <h1 className="my-4">Products</h1>
      <div className="row">
        {products.map((product, index) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">${product.price}</p>
                <input
                  type="number"
                  value={quantities[index]}
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                  min="1"
                  className="form-control mb-2"
                />
                <button onClick={() => addToCart(product, quantities[index])} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

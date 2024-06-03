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
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <input
              type="number"
              value={quantities[index]}
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
              min="1"
            />
            <button onClick={() => addToCart(product, quantities[index])}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1Image from '../pages/Clothing1.jpg';
import Product2Image from '../pages/Clothing2.jpg';
import Product3Image from '../pages/Clothing3.jpeg';
import Product4Image from '../pages/Clothing4.jpg';
import Product5Image from '../pages/Clothing5.jpg';

const Clothing  = ({ addToCart }) => {
  

  const clothingProducts = [
    { id: 1, name: 'T-shirt', description: 'A comfortable cotton t-shirt.', image: Product1Image, price: 24.99 },
    { id: 2, name: 'Jeans', description: 'Stylish denim jeans.', image: Product2Image, price: 49.99 },
    { id: 3, name: 'Jacket', description: 'A warm and cozy jacket.', image: Product3Image, price: 89.99 },
    { id: 4, name: 'Sneakers', description: 'Sporty and comfortable sneakers.', image: Product4Image, price: 59.99 },
    { id: 5, name: 'Hat', description: 'A trendy hat.', image: Product5Image, price: 19.99 },
  ];

  return (
    <div>
      <h2>Clothing</h2>
      {/* List of clothing products */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', overflowX: 'auto' }}>
        {clothingProducts.map((product) => (
          <div key={product.id} style={{ width: '200px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', flexShrink: 0 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '16px', height: '50px', margin: '0 0 10px 0' }}>{product.name}</h3>
            <div style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>
              <p style={{ margin: '0' }}>{product.description}</p>
            </div>
            <p style={{ fontSize: '14px', margin: '10px 0' }}>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ marginBottom: '10px', width: '100%', padding: '5px 0' }}>Add to Cart</button>
            <Link to={`/product/clothing/${product.id}`} style={{ display: 'block', textDecoration: 'none', color: '#007bff' }}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothing;

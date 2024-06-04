import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1Image from '../pages/Electronics1.jpg';
import Product2Image from '../pages/Electronics2.jpg';
import Product3Image from '../pages/Electronics3.jpg';
import Product4Image from '../pages/Electronics4.jpg';
import Product5Image from '../pages/Electronics5.jpg';

const Electronics = ({ addToCart }) => {
  
  const electronicsProducts = [
    { id: 1, name: 'Kindle e-reader', description: 'Amazon Kindle devices enable users to browse, buy, download, and read e-books, newspapers, magazines and other digital media via wireless networking to the Kindle Store.', image: Product1Image, price: 19.99 },
    { id: 2, name: 'Apple Watch Ultra', description: 'The Apple Watch Ultra hardware is generally similar to the main Apple Watch line (with the first-generation model based on Apple Watch Series 8), but is differentiated by their rugged titanium casing, a larger 49 mm band, and a larger display with a flat crystal and higher brightness of up to 2,000 nits.', image: Product2Image, price: 29.99 },
    { id: 3, name: 'Samsung Galaxy S21', description: 'Samsung Galaxy S21 is a series of high-end Android smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series.', image: Product3Image, price: 799.99 },
    { id: 4, name: 'Sony WH-1000XM4', description: 'Sony WH-1000XM4 are wireless noise-cancelling headphones that provide excellent sound quality, long battery life, and effective noise cancellation.', image: Product4Image, price: 349.99 },
    { id: 5, name: 'DJI Mavic Air 2', description: 'The DJI Mavic Air 2 is a foldable drone that offers high-end performance with exceptional image quality and advanced flight modes.', image: Product5Image, price: 999.99 },
  ];

  return (
    <div>
      <h2>Electronics</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', overflowX: 'auto' }}>
        {electronicsProducts.map((product) => (
          <div key={product.id} style={{ width: '200px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', flexShrink: 0 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '16px', height: '50px', margin: '0 0 10px 0' }}>{product.name}</h3>
            <div style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>
              <p style={{ margin: '0' }}>{product.description}</p>
            </div>
            <p style={{ fontSize: '14px', margin: '10px 0' }}>${product.price}</p>
            <button onClick={() => addToCart(product)} style={{ marginBottom: '10px', width: '100%', padding: '5px 0' }}>Add to Cart</button>
            <Link to={`/product/electronics/${product.id}`} style={{ display: 'block', textDecoration: 'none', color: '#007bff' }}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

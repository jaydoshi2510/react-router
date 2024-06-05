import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Product1Image from '../pages/Electronics1.jpg';
import Product2Image from '../pages/Electronics2.jpg';
import Product3Image from '../pages/Electronics3.jpg';
import Product4Image from '../pages/Electronics4.jpg';
import Product5Image from '../pages/Electronics5.jpg';
import ProductModal from './ProductModal';
import '../pages/product.css';

const Electronics = ({ addToCart }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
  const [quantities, setQuantities] = useState({}); // State to manage quantities for each product
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product for modal

  const electronicsProducts = [
    { id: 1, name: 'Kindle e-reader', description: 'Amazon Kindle devices enable users to browse, buy, download, and read e-books, newspapers, magazines and other digital media via wireless networking to the Kindle Store.', image: Product1Image, price: 19.99 },
    { id: 2, name: 'Apple Watch Ultra', description: 'The Apple Watch Ultra hardware is generally similar to the main Apple Watch line (with the first-generation model based on Apple Watch Series 8), but is differentiated by their rugged titanium casing, a larger 49 mm band, and a larger display with a flat crystal and higher brightness of up to 2,000 nits.', image: Product2Image, price: 29.99 },
    { id: 3, name: 'Samsung Galaxy S21', description: 'Samsung Galaxy S21 is a series of high-end Android smartphones designed, developed, marketed, and manufactured by Samsung Electronics as part of its Galaxy S series.', image: Product3Image, price: 799.99 },
    { id: 4, name: 'Sony WH-1000XM4', description: 'Sony WH-1000XM4 are wireless noise-cancelling headphones that provide excellent sound quality, long battery life, and effective noise cancellation.', image: Product4Image, price: 349.99 },
    { id: 5, name: 'DJI Mavic Air 2', description: 'The DJI Mavic Air 2 is a foldable drone that offers high-end performance with exceptional image quality and advanced flight modes.', image: Product5Image, price: 999.99 },
  ];

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id] || 1; // Default quantity is 1 if not specified
    addToCart({ ...product, quantity });
    setShowPopup(true); // Show pop-up when a product is added to cart
    setTimeout(() => setShowPopup(false), 2000); // Hide pop-up after 2 seconds
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Electronics</h2>
      <div className="product-container">
        {electronicsProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Link to="#" onClick={() => handleShowDetails(product)} style={{ textDecoration: 'none', color: '#000' }}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <div className="product-description">
                <p style={{ margin: '0' }}>{product.description}</p>
              </div>
              <p className="product-price">${product.price}</p>
            </Link>
            <input type="number" value={quantities[product.id] || 1} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} style={{ width: '50px', marginBottom: '10px' }} />
            <button onClick={() => handleAddToCart(product)} style={{ marginBottom: '10px', width: '100%', padding: '5px 0' }}>Add to Cart</button>
            <button onClick={() => handleShowDetails(product)} className="details-button">Details</button>
          </div>
        ))}
      </div>
      {/* Pop-up */}
      {showPopup && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#007bff', color: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
          Product added to cart!
        </div>
      )}
      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Electronics;

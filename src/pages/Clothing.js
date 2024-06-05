import React, { useState } from 'react';
import Product1Image from '../pages/Clothing1.jpg';
import Product2Image from '../pages/Clothing2.jpg';
import Product3Image from '../pages/Clothing3.jpeg';
import Product4Image from '../pages/Clothing4.jpg';
import Product5Image from '../pages/Clothing5.jpg';
import ProductModal from './ProductModal';
import '../pages/product.css';

const Clothing = ({ addToCart }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
  const [quantities, setQuantities] = useState({
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
  }); // State to manage quantities for each product, with default quantity set to 1

  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product for modal

  const clothingProducts = [
    { id: 1, name: 'T-shirt', description: 'A comfortable cotton t-shirt.', image: Product1Image, price: 24.99 },
    { id: 2, name: 'Jeans', description: 'Stylish denim jeans.', image: Product2Image, price: 49.99 },
    { id: 3, name: 'Jacket', description: 'A warm and cozy jacket.', image: Product3Image, price: 89.99 },
    { id: 4, name: 'Sneakers', description: 'Sporty and comfortable sneakers.', image: Product4Image, price: 59.99 },
    { id: 5, name: 'Hat', description: 'A trendy hat.', image: Product5Image, price: 19.99 },
  ];

  const handleQuantityChange = (productId, quantity) => {
    setQuantities({ ...quantities, [productId]: quantity });
  };

  const handleAddToCart = (product) => {
    const quantity = quantities[product.id]; // No need to check if it exists since we set default to 1
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
      <h2>Clothing</h2>
      {/* List of clothing products */}
      <div className="product-container">
        {clothingProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-description">
              <p>{product.description}</p>
            </div>
            <p className="product-price">${product.price}</p>
            <input type="number" value={quantities[product.id]} onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))} className="product-quantity" />
            <button onClick={() => handleAddToCart(product)} className="product-button">Add to Cart</button>
            <button onClick={() => handleShowDetails(product)} className="details-button">Details</button>
          </div>
        ))}
      </div>
      {/* Pop-up */}
      {showPopup && (
        <div className="popup">
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

export default Clothing;

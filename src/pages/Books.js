import React, { useState } from 'react';
import Book1Image from '../pages/Book1.jpg';
import Book2Image from '../pages/Book2.jpg';
import Book3Image from '../pages/Book3.jpg';
import Book4Image from '../pages/Book4.jpg';
import Book5Image from '../pages/Book5.jpg';
import ProductModal from './ProductModal';
import '../pages/product.css';

const Books = ({ addToCart }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage pop-up visibility
  const [cart, setCart] = useState({}); // State to manage the quantity of products in the cart
  const [selectedProduct, setSelectedProduct] = useState(null); // State to manage selected product for modal

  const bookProducts = [
    { id: 1, name: 'Thats The Way We Met', description: 'Aditya and Riya could never imagine life without each other. Since their accidental meeting two years ago, they have been inseparable until an unexpected tragedy promises to change the course of their lives forever.', image: Book1Image, price: 19.99 },
    { id: 2, name: 'Few Things Left Unsaid', description: 'Few Things Left Unsaid is about the story of two college mates, Aditya and Riya. They both fall in love after they meet up through their friends. They both were taking some time to express their things; once they both expressed, they moved into the next level in few days.', image: Book2Image, price: 24.99 },
    { id: 3, name: 'How To Win Friend & Influence People', description: 'The book emphasizes the importance of showing genuine interest in others, listening actively, and making others feel important and appreciated. It also suggests that to influence others, one should avoid arguments, admit mistakes, and let others take credit for ideas or work.', image: Book3Image, price: 15.99 },
    { id: 4, name: 'Things Fall Apart', description: 'Things Fall Apart is the debut novel of Nigerian author Chinua Achebe, first published in 1958. It depicts the events of pre-colonial life in Igboland, a cultural area in modern-day southeastern Nigeria, and the subsequent appearance of European missionaries and colonial forces in the late 19th century.', image: Book4Image, price: 22.99 },
    { id: 5, name: '1984', description: 'ineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwells ninth and final book completed in his lifetime.', image: Book5Image, price: 17.99 },
  ];

  const handleAddToCart = (product, quantity) => {
    const updatedCart = { ...cart };
    updatedCart[product.id] = quantity;
    setCart(updatedCart);
    addToCart(product, quantity);
    setShowPopup(true); // Show pop-up when a product is added to cart
    setTimeout(() => setShowPopup(false), 2000); // Hide pop-up after 2 seconds
  };

  const handleChangeQuantity = (product, quantity) => {
    const updatedCart = { ...cart };
    updatedCart[product.id] = quantity;
    setCart(updatedCart);
  };

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <h2>Books</h2>
      {/* List of book products */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', overflowX: 'auto' }}>
        {bookProducts.map((product) => (
          <div key={product.id} style={{ width: '200px', textAlign: 'center', border: '1px solid #ddd', borderRadius: '5px', padding: '10px', flexShrink: 0 }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '16px', height: '50px', margin: '0 0 10px 0' }}>{product.name}</h3>
            <div style={{ height: '100px', overflow: 'hidden', textOverflow: 'ellipsis', marginBottom: '10px' }}>
              <p style={{ margin: '0' }}>{product.description}</p>
            </div>
            <p style={{ fontSize: '14px', margin: '10px 0' }}>${product.price}</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <input type="number" min="1" value={cart[product.id] || 1} onChange={(e) => handleChangeQuantity(product, parseInt(e.target.value))} style={{ width: '50px', textAlign: 'center', marginRight: '5px' }} />
              <button onClick={() => handleAddToCart(product, cart[product.id] || 1)} style={{ padding: '5px 10px' }}>Add to Cart</button>
            </div>
            <button onClick={() => handleShowDetails(product)} style={{ padding: '5px 10px' }}>Details</button>
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

export default Books;

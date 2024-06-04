import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Book1Image from '../pages/Book1.jpg';
import Book2Image from '../pages/Book2.jpg';
import Book3Image from '../pages/Book3.jpg';
import Book4Image from '../pages/Book4.jpg';
import Book5Image from '../pages/Book5.jpg';

const Books  = ({ addToCart }) => {

  const bookProducts = [
    { id: 1, name: 'Thats The Way We Met', description: 'Aditya and Riya could never imagine life without each other. Since their accidental meeting two years ago, they have been inseparable until an unexpected tragedy promises to change the course of their lives forever.', image: Book1Image, price: 19.99 },
    { id: 2, name: 'Few Things Left Unsaid', description: 'Few Things Left Unsaid is about the story of two college mates, Aditya and Riya. They both fall in love after they meet up through their friends. They both were taking some time to express their things; once they both expressed, they moved into the next level in few days.', image: Book2Image, price: 24.99 },
    { id: 3, name: 'How To Win Friend & Influence People', description: 'The book emphasizes the importance of showing genuine interest in others, listening actively, and making others feel important and appreciated. It also suggests that to influence others, one should avoid arguments, admit mistakes, and let others take credit for ideas or work.', image: Book3Image, price: 15.99 },
    { id: 4, name: 'Things Fall Apart', description: 'Things Fall Apart is the debut novel of Nigerian author Chinua Achebe, first published in 1958. It depicts the events of pre-colonial life in Igboland, a cultural area in modern-day southeastern Nigeria, and the subsequent appearance of European missionaries and colonial forces in the late 19th century.', image: Book4Image, price: 22.99 },
    { id: 5, name: '1984', description: 'ineteen Eighty-Four is a dystopian novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949 by Secker & Warburg as Orwells ninth and final book completed in his lifetime.', image: Book5Image, price: 17.99 },
  ];

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
            <button onClick={() => addToCart(product)} style={{ marginBottom: '10px', width: '100%', padding: '5px 0' }}>Add to Cart</button>
            <Link to={`/product/books/${product.id}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;

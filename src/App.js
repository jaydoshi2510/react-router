import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Cart from './pages/Cart';
import Account from './pages/Account';
import Home from './pages/Home';
import Electronics from './pages/Electronics'; 
import Clothing from './pages/Clothing'; 
import Books from './pages/Books'; 


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [setAccount] = useState({ name: '', address: '' });

  const addToCart = (product, quantity) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
        setCartItems(cartItems.map(item =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        ));
    } else {
        setCartItems([...cartItems, { product, quantity }]);
    }
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(cartItems.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const removeCartItem = productId => {
    setCartItems(cartItems.filter(item => item.product.id !== productId));
  };

  const updateAccount = (name, address) => {
    setAccount({ name, address });
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Shopping Site</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/Electronics">Electronics</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Clothing">Clothing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Books">Books</Link>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Cart">Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Account">Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Electronics" element={<Electronics addToCart={addToCart} />} />
          <Route path="/Clothing" element={<Clothing addToCart={addToCart} />} />
          <Route path="/Books" element={<Books addToCart={addToCart} />} /> 
          <Route path="/Cart" element={<Cart cart={cartItems} updateCart={updateCartItem} removeFromCart={removeCartItem} />} />
          <Route path="/Account" element={<Account updateAccount={updateAccount} />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

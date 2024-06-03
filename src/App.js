import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Home from './pages/Home';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.product.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { product, quantity }];
      }
    });
  };

  const updateCart = (product, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (product) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" render={() => <ProductList addToCart={addToCart} />} />
          <Route path="/cart" render={() => <Cart cart={cart} updateCart={updateCart} removeFromCart={removeFromCart} />} />
          <Route path="/account" component={Account} />
          <Route component={() => <div>404 Not Found</div>} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

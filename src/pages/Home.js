import React from 'react';
import { Link } from 'react-router-dom';
import welcomeImage from '../pages/Welcome-image.jpg'; 

const Home = () => (
  <div className="container">
    <div className="jumbotron">
      <h1 className="display-4">Welcome to the Shopping Site</h1>
      <p className="lead">Explore our wide range of products and start shopping today!</p>
      <hr className="my-4" />
      <p>Find everything you need at affordable prices.</p>
    </div>
    <div className="text-center">
      <img src={welcomeImage} alt="Welcome" style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  </div>
);

export default Home;

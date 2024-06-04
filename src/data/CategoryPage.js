import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = () => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/electronics">Electronics</Link>
        </li>
        <li>
          <Link to="/clothing">Clothing</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default CategoryPage;

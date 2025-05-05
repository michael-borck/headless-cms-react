import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
        <h1><Link to="/">Headless Blog</Link></h1>
        <p>Powered by React + WordPress Headless CMS</p>
      </div>
    </header>
  );
}

export default Header;
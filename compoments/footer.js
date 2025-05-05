import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Headless Blog Demo</p>
      </div>
    </footer>
  );
}

export default Footer;
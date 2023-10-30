import React from 'react';
import './assets/noFound.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-text">404</h1>
        <p className="not-found-description">Page not found</p>
        <Link to='/' className='home-back'>Back to home</Link>
      </div>
    </div>
  );
}

export default NotFound;

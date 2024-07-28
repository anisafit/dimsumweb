// src/components/Navigation.js
import React from 'react';
import './Navigation.css'; // Tambahkan import CSS untuk styling spesifik navigasi

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src="/images/logodimsum.jpg" alt="Dimsum Logo" />
        </div>
        <ul className="nav-menu">
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => setCurrentPage('home')}>Home</li>
          <li className={currentPage === 'products' ? 'active' : ''} onClick={() => setCurrentPage('products')}>Products</li>
          <li className={currentPage === 'contact' ? 'active' : ''} onClick={() => setCurrentPage('contact')}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

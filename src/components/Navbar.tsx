import React from 'react';
import logo from '../assets/react.svg'; // Replace with actual logo if available

export const Navbar = () => (
  <nav className="navbar">
    <div className="navbar__left">
      <img src={logo} alt="ProVital Logo" className="navbar__logo-img" />
      <span className="navbar__logo-text">ProVital</span>
    </div>
    <ul className="navbar__links">
      <li>List your practice</li>
      <li>For Employers</li>
      <li>Courses</li>
      <li>Books</li>
      <li>Speakers</li>
      <li>Doctors</li>
    </ul>
    <div className="navbar__right">
      <div className="navbar__login">Login / Signup <span className="navbar__dropdown-arrow">▼</span></div>
      {/* Dropdown menu can be implemented here if needed */}
    </div>
  </nav>
); 
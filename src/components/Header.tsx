import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo.png'; // Replace with actual logo if available
import { FiMenu, FiX } from 'react-icons/fi';

export const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__left">
          <img src={logo} alt="ProVital Logo" className="header__logo-img" />
          <span className="header__logo-text">ProVital</span>
        </div>
        <div className="header__spacer" />
        <ul className="header__links">
          <li>List your practice</li>
          <span className="header__divider">|</span>
          <li>For Employers</li>
          <span className="header__divider">|</span>
          <li>Courses</li>
          <span className="header__divider">|</span>
          <li>Books</li>
          <span className="header__divider">|</span>
          <li>Speakers</li>
          <span className="header__divider">|</span>
          <li>Doctors</li>
          <span className="header__divider">|</span>
          <li
            className="header__login-dropdown"
            ref={dropdownRef}
            onClick={() => setDropdownOpen((open) => !open)}
            style={{ position: 'relative', cursor: 'pointer' }}
          >
            Login / Signup <span className="header__dropdown-arrow">▼</span>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                <div className="header__dropdown-row">
                  <span>Doctor</span>
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
                <div className="header__dropdown-row">
                  <span>Patients</span>
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
            )}
          </li>
        </ul>
        <button className="header__hamburger" onClick={() => setMobileMenuOpen(true)}>
          <FiMenu size={28} />
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="header__mobile-menu">
          <div className="header__mobile-menu-header">
            <img src={logo} alt="ProVital Logo" className="header__logo-img" />
            <span className="header__logo-text">ProVital</span>
            <button className="header__mobile-menu-close" onClick={() => setMobileMenuOpen(false)}>
              <FiX size={28} />
            </button>
          </div>
          <div className="header__dropdown-menu header__dropdown-menu--mobile">
            <div className="header__dropdown-row">
              <span>Doctor</span>
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
            <div className="header__dropdown-row">
              <span>Patients</span>
              <a href="#">Login</a>
              <a href="#">Sign up</a>
            </div>
          </div>
          <ul className="header__mobile-links">
            <li>Doctors <span className="header__mobile-arrow">→</span></li>
            <li>List your practice <span className="header__mobile-arrow">→</span></li>
            <li>For Employers <span className="header__mobile-arrow">→</span></li>
            <li>Courses <span className="header__mobile-arrow">→</span></li>
            <li>Books <span className="header__mobile-arrow">→</span></li>
            <li>Speakers <span className="header__mobile-arrow">→</span></li>
          </ul>
        </div>
      )}
    </header>
  );
}; 
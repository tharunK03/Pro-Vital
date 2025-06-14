import React from 'react';
import { FiSearch, FiMapPin, FiCreditCard } from 'react-icons/fi';
import './SearchBar.scss';

export const SearchBar = () => (
  <form className="searchbar">
    <div className="searchbar__input-group">
      <FiSearch className="searchbar__input-icon" />
      <input type="text" placeholder="Condition, procedure, speciality..." />
    </div>
    <div className="searchbar__input-group">
      <FiMapPin className="searchbar__input-icon" />
      <input type="text" placeholder="City, state, or zipcode" />
    </div>
    <div className="searchbar__input-group">
      <FiCreditCard className="searchbar__input-icon" />
      <input type="text" placeholder="Insurance carrier" />
    </div>
    <button type="submit" className="searchbar__button">Find now</button>
  </form>
); 
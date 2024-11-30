import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Ensure this is your CSS file for styling

const Nav = () => {
  
  return (
    <nav className="main-navbar">
      <ul className="nav-list">
        <li>
          <Link to="/" className="main-nav-link">Home</Link>
        </li>
        <li>
          <Link to="/counseling" className="main-nav-link">Counseling</Link>
        </li>
        <li>
          <Link to="/donate" className="main-nav-link">Donate</Link>
        </li>
        <li>
          <Link to="/contact-us" className="main-nav-link">Contact Us</Link>
        </li>
        <li>
          <Link to="/guided-exercises" className="main-nav-link">Guided Exercises</Link>
        </li>
      </ul>
    </nav>
  );
  
};

export default Nav;

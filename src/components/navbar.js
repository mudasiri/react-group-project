import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import Nav from 'react-bootstrap/Nav';

function Navbar() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="nav-brand">
          <Link to="/" className="nav-img"><img src="planet.png" alt="logo" /></Link>
          <h2>Space Travelers&apos; Hub </h2>
        </div>
        <Nav className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Rockets</NavLink></li>
          <li><NavLink to="/missions" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Missions</NavLink></li>
          <span>|</span>
          <li><NavLink to="/myProfile" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>My Profile</NavLink></li>
        </Nav>
      </nav>
      <hr className="horizontal" />
    </div>

  );
}

export default Navbar;

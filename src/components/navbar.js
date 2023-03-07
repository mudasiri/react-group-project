import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className="nav-bar">
            <Link to="/" className="nav-brand"><img src="planet.png"/> </Link>
       <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Rockets</NavLink></li>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Missions</NavLink></li>
        <div>|</div>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>My Profile</NavLink></li>
      </ul>
        </nav>
    )
}

export default Navbar;
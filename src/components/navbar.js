import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar(){
    return(
       <div className="container">
         <nav className="nav-bar">
            <div className="nav-brand">
            <Link to="/" className="nav-brand"><img src="planet.png"/></Link>
            <h2>Space Travelers' Hub </h2>
            </div>
       <ul className="nav-links">
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Rockets</NavLink></li>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>Missions</NavLink></li>
        <span>|</span>
        <li><NavLink to="/categories" className={({ isActive }) => (isActive ? 'active-link nav-link' : 'nav-link')}>My Profile</NavLink></li>
      </ul>
        </nav>
        <hr className="horizontal"></hr>
       </div>
        
    )
}

export default Navbar;
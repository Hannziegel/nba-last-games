import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowBackCircle, IoSearchCircle } from 'react-icons/io5';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav container">
    <NavLink to="/teams" className="arrow-back">
      <IoArrowBackCircle className="icon-arrow-back" />
    </NavLink>
    <ul className="nav-ul">
      <li className="nav-li">
        <NavLink to="/teams">TEAMS</NavLink>
      </li>
    </ul>
    <div className="nav-configurations">
      <IoSearchCircle className="icon-search" />
    </div>
  </nav>
);

export default Navbar;

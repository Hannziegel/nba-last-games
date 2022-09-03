import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowBackCircle, IoSearchCircle } from 'react-icons/io5';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav container">
    <div className="arrow-back">
      <IoArrowBackCircle className="icon-arrow-back" />
    </div>
    <ul className="nav-ul">
      <li className="nav-li">
        <NavLink to="/teams">TEAMS</NavLink>
      </li>
      <li className="nav-li">
        <NavLink to="/team-last-games">Team Last Games</NavLink>
      </li>
    </ul>
    <div className="nav-configurations">
      <IoSearchCircle className="icon-search" />
    </div>
  </nav>
);

export default Navbar;

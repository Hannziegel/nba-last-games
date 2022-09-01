import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav container">
    <div className="arrow-back">
      <span>&lt;</span>
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
      <span>&gt;</span>
    </div>
  </nav>
);

export default Navbar;

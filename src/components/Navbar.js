import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoArrowBackCircle } from 'react-icons/io5';
import nbalogo from '../assets/imgs/nba-logo-2.png';
import '../styles/Navbar.css';

const Navbar = () => (
  <nav className="nav container">
    <div className="nav-configurations">
      <img className="league-img" alt="League" src={nbalogo} />
    </div>
    <NavLink to="/teams" className="arrow-back">
      {useLocation().pathname === '/teams' ? 'Teams' : <IoArrowBackCircle className="icon-arrow-back" />}
    </NavLink>
  </nav>
);

export default Navbar;

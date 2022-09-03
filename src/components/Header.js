import React from 'react';
import nbalogo from '../assets/imgs/nba-logo-2.png';

const Header = () => (
  <div className="league-container">
    <img className="league-img" alt="League" src={nbalogo} />
    <div className="league-info-container">
      <h2 className="league-name">NBA League</h2>
      <p className="league-number-teams">38 teams</p>
    </div>
  </div>
);

export default Header;

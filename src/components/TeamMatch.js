import React from 'react';
import '../styles/Teams.css';

const TeamMatch = () => (
  <div className="team-match-container">
    <div className="home-team">
      <img className="home-team-img" alt="Home team logo" />
      <div className="math-team-container">
        <h4 className="home-team-name">Team name</h4>
        <p className="home-team-score">110</p>
      </div>
    </div>
    <div>VS.</div>
    <div className="away-team">
      <img className="away-team-img" alt="Away team logo" />
      <div className="math-team-container">
        <h4 className="away-team-name">Team name</h4>
        <p className="away-team-score">90</p>
      </div>
    </div>
  </div>
);

export default TeamMatch;

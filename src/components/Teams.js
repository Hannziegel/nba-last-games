import React from 'react';
import Team from './Team';
import '../styles/Teams.css';

const Teams = () => (
  <div className="page-container container">
    <div className="league-container">
      <img className="league-img" alt="League" />
      <div className="league-info-container">
        <h2 className="league-name">NBA League</h2>
        <p className="league-number-teams">38 teams</p>
      </div>
    </div>
    <div className="section-title">Teams in NBA</div>
    <div className="teams-container">
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
      <Team />
    </div>
  </div>
);

export default Teams;

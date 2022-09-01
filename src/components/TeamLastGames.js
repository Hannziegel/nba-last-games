import React from 'react';
import Header from './Header';
import TeamMatch from './TeamMatch';
import '../styles/Teams.css';

const TeamLastGames = () => (
  <div className="team-match-page container">
    <Header />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
  </div>
);

export default TeamLastGames;

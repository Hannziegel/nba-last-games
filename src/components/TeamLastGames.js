import React from 'react';
import Team from './Team';
import TeamMatch from './TeamMatch';
import '../styles/Teams.css';

const TeamLastGames = () => (
  <div className="team-match-page container">
    <Team />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
    <TeamMatch />
  </div>
);

export default TeamLastGames;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Teams.css';

const TeamMatch = (props) => {
  const {
    teamLastGames,
  } = props;

  return (
    <div
      className="team-match-thumb"
      style={{ backgroundImage: `url(${teamLastGames.strThumb})` }}
    >
      <div className="team-match-container">
        <div className="home-team">
          <div className="match-team-info">
            <h4 className="home-team-name">{teamLastGames.strHomeTeam}</h4>
            <p className="home-team-score">{teamLastGames.intHomeScore}</p>
          </div>
        </div>
        <div className="vs">VS.</div>
        <div className="away-team">
          <div className="match-team-info">
            <h4 className="away-team-name">{teamLastGames.strAwayTeam}</h4>
            <p className="away-team-score">{teamLastGames.intAwayScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMatch.propTypes = {
  teamLastGames: PropTypes.shape({
    strHomeTeam: PropTypes.string,
    intHomeScore: PropTypes.string,
    strAwayTeam: PropTypes.string,
    intAwayScore: PropTypes.string,
    strThumb: PropTypes.string,
  }).isRequired,
};

export default TeamMatch;

import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Teams.css';

const TeamMatch = (props) => {
  const {
    strHomeTeam,
    intHomeScore,
    strAwayTeam,
    intAwayScore,
    strThumb,
  } = props;

  return (
    <div
      className="team-match-thumb"
      style={{ backgroundImage: `url(${strThumb})` }}
    >
      <div className="team-match-container">
        <div className="home-team">
          <div className="match-team-info">
            <h4 className="home-team-name">{strHomeTeam}</h4>
            <p className="home-team-score">{intHomeScore}</p>
          </div>
        </div>
        <div className="vs">VS.</div>
        <div className="away-team">
          <div className="match-team-info">
            <h4 className="away-team-name">{strAwayTeam}</h4>
            <p className="away-team-score">{intAwayScore}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamMatch.propTypes = {
  strHomeTeam: PropTypes.string.isRequired,
  intHomeScore: PropTypes.string.isRequired,
  strAwayTeam: PropTypes.string.isRequired,
  intAwayScore: PropTypes.string.isRequired,
  strThumb: PropTypes.string.isRequired,
};

export default TeamMatch;

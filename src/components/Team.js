import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Teams.css';
import { IoArrowForwardCircle } from 'react-icons/io5';

const Team = (props) => {
  const { strTeam, intFormedYear, strTeamBadge } = props;

  return (
    <NavLink to="/team-last-games" className="team-container">
      <IoArrowForwardCircle className="button-arrow-right" />
      <img className="team-badge-img" alt="team badge" src={strTeamBadge} />
      <h3 className="team-name">{strTeam}</h3>
      <span className="team-info">{intFormedYear}</span>
    </NavLink>
  );
};

Team.propTypes = {
  strTeam: PropTypes.string.isRequired,
  intFormedYear: PropTypes.string.isRequired,
  strTeamBadge: PropTypes.string.isRequired,
};

export default Team;

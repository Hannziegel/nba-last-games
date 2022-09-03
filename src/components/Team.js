import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Teams.css';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Team = (props) => {
  const { strTeam, intFormedYear, strTeamBadge } = props;

  return (
    <div className="team-container">
      <IoIosArrowDroprightCircle className="button-arrow-right" />
      <img className="team-badge-img" alt="team badge" src={strTeamBadge} />
      <h3 className="team-name">{strTeam}</h3>
      <span className="team-info">{intFormedYear}</span>
    </div>
  );
};

Team.propTypes = {
  strTeam: PropTypes.string.isRequired,
  intFormedYear: PropTypes.string.isRequired,
  strTeamBadge: PropTypes.string.isRequired,
};

export default Team;

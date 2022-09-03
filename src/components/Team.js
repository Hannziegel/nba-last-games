import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Teams.css';
import { useDispatch } from 'react-redux';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { getTeamLastGame } from '../redux/teamLastGames';

const Team = (props) => {
  const sinceText = 'Since ';
  const {
    idTeam, strTeam, intFormedYear, strTeamBadge,
  } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTeamLastGame(idTeam));
  };

  return (
    <NavLink to="/team-last-games" className="team-container" onClick={handleClick}>
      <IoArrowForwardCircle className="button-arrow-right" />
      <img className="team-badge-img" alt="team badge" src={strTeamBadge} />
      <h3 className="team-name">{strTeam}</h3>
      <span className="team-info">
        {sinceText}
        {intFormedYear}
      </span>
    </NavLink>
  );
};

Team.propTypes = {
  idTeam: PropTypes.string.isRequired,
  strTeam: PropTypes.string.isRequired,
  intFormedYear: PropTypes.string.isRequired,
  strTeamBadge: PropTypes.string.isRequired,
};

export default Team;

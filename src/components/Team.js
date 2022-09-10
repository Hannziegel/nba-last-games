import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import '../styles/Teams.css';
import { useDispatch } from 'react-redux';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { getTeamLastGame } from '../redux/teamLastGames';

const Team = (props) => {
  const sinceText = 'Since ';
  const { team } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getTeamLastGame(team.idTeam));
  };

  return (
    <NavLink to={`/${team.strTeam}`} className="team-container" onClick={handleClick}>
      <IoArrowForwardCircle className="button-arrow-right" />
      <img className="team-badge-img" alt="team badge" src={team.strTeamBadge} />
      <h3 className="team-name">{team.strTeam}</h3>
      <span className="team-info">
        {sinceText}
        {team.intFormedYear}
      </span>
    </NavLink>
  );
};

Team.propTypes = {
  team: PropTypes.shape({
    idTeam: PropTypes.string,
    strTeam: PropTypes.string,
    intFormedYear: PropTypes.string,
    strTeamBadge: PropTypes.string,
  }).isRequired,
};

export default Team;

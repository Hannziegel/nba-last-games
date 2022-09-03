import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../redux/teams';
import Team from './Team';
import Header from './Header';
import '../styles/Teams.css';

const Teams = () => {
  const teamsList = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!teamsList.length) dispatch(getTeams());
  }, []);

  return (
    <div className="page-container container">
      <Header />
      <div className="section-title">Teams in NBA</div>
      <div className="teams-container">
        {
          teamsList.map((team) => (
            <Team
              key={team.strTeam}
              strTeam={team.strTeam}
              intFormedYear={team.intFormedYear}
              strTeamBadge={team.strTeamBadge}
              idTeam={team.idTeam}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Teams;

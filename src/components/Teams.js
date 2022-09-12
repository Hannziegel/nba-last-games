import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeams } from '../redux/teams';
import Team from './Team';
import Header from './Header';
import '../styles/Teams.css';

const Teams = () => {
  const teamsList = useSelector((state) => state.teams.teams);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (!teamsList.length) dispatch(getTeams());
  }, []);

  const filterTeams = teamsList.filter(
    (teams) => !search || new RegExp(search.toLowerCase()).test(teams.strTeam.toLowerCase()),
  );

  return (
    <div className="page-container container">
      <Header />
      {/*       <div className="section-title">TEAMS IN NBA</div> */}
      <input type="search" value={search} onChange={(event) => { setSearch(event.target.value); }} className="searchBar" placeholder="Search..." />
      <div className="teams-container container">
        {
          filterTeams.map((team) => (
            <Team
              key={team.strTeam}
              team={team}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Teams;

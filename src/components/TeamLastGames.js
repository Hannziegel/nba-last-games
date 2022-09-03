import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import TeamMatch from './TeamMatch';
import '../styles/Teams.css';
import { getTeamLastGame } from '../redux/teamLastGames';

const TeamLastGames = () => {
  const teamLastGamesList = useSelector((state) => state.teamLastGames);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!teamLastGamesList.length) dispatch(getTeamLastGame());
  }, []);

  return (
    <div className="team-match-page container">
      <Header />
      <div className="team-matches-container">
        {
          teamLastGamesList.map((teamLastGames) => (
            <TeamMatch
              key={teamLastGames.idEvent}
              strEvent={teamLastGames.strEvent}
              strHomeTeam={teamLastGames.strHomeTeam}
              intHomeScore={teamLastGames.intHomeScore}
              strAwayTeam={teamLastGames.strAwayTeam}
              intAwayScore={teamLastGames.intAwayScore}
              strThumb={teamLastGames.strThumb}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TeamLastGames;

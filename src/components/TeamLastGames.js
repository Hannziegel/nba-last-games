import { useSelector } from 'react-redux';
import Header from './Header';
import TeamMatch from './TeamMatch';
import '../styles/Teams.css';

const TeamLastGames = () => {
  const teamLastGamesList = useSelector((state) => state.teamLastGames.teamLastGames);

  return (
    <div className="team-match-page container">
      <Header />
      <div className="team-matches-container">
        {
          teamLastGamesList.map((teamLastGames) => (
            <TeamMatch
              key={teamLastGames.idEvent}
              teamLastGames={teamLastGames}
            />
          ))
        }
      </div>
    </div>
  );
};

export default TeamLastGames;

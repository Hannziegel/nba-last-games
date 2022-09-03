import { useSelector } from 'react-redux';
import nbalogo from '../assets/imgs/nba-logo-2.png';

const Header = () => {
  const teamStr = ' Teams';
  let teamsList = useSelector((state) => state.teams);
  if (!teamsList.length) {
    teamsList = [{ strLeague: 'error' }];
  }

  return (
    <div className="league-container">
      <img className="league-img" alt="League" src={nbalogo} />
      <div className="league-info-container">
        <h2 className="league-name">
          {teamsList[0].strLeague}
        </h2>
        <p className="league-number-teams">
          {teamsList.length}
          {teamStr}
        </p>
      </div>
    </div>
  );
};

export default Header;

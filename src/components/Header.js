import { useSelector } from 'react-redux';

const Header = () => {
  const teamStr = ' Teams';
  let teamsList = useSelector((state) => state.teams.teams);
  if (!teamsList.length) {
    teamsList = [{ strLeague: 'Loading' }];
  }

  return (
    <div className="league-container">
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

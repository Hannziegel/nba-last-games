import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../Redux/configureStore'; // eslint-disable-line
import TeamMatch from '../components/TeamMatch';

describe('App js testing', () => {
  const teamLastGames = {
    strHomeTeam: 'PropTypes.string',
    intHomeScore: 'PropTypes.string',
    strAwayTeam: 'PropTypes.string',
    intAwayScore: 'PropTypes.string',
    strThumb: 'PropTypes.string',
  };

  test('Renders App', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <TeamMatch teamLastGames={teamLastGames} />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

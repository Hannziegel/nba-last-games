import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../Redux/configureStore';
import Team from '../components/Team';

describe('App js testing', () => {
  const team = {
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
            <Team team={team} />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

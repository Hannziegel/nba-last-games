import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import store from '../redux/configureStore'; // eslint-disable-line
import Header from '../components/Header';

describe('Team test', () => {
  test('snapshot for Team', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Header />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

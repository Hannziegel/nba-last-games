import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../Redux/configureStore'; // eslint-disable-line
import Navbar from '../App';

describe('App js testing', () => {
  test('Renders App', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

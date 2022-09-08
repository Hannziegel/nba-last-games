import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../redux/configureStore';
import App from '../App';

describe('App testing', () => {
  test('snapshot for App', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});

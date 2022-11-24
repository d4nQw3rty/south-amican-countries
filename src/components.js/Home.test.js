import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Home from './Home';

describe('Home', () => {
  test('renders Home component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

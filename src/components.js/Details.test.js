import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Details from './Details';

describe('Details', () => {
  test('renders Details component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Details />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

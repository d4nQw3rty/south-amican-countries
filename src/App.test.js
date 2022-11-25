import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';

describe('App', () => {
  test('renders App component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});

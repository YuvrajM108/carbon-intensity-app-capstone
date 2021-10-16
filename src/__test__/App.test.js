import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

describe('Renders App component and checks if elements are present', () => {
  test('it should display the header in the navbar', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const navHeader = screen.getByText(/CARBON INTENSITY TRACKER/i);
    expect(navHeader).toBeInTheDocument();
  });

  test('it should display the name of the country', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const gbHeader = screen.getByText(/GREAT BRITAIN/i);
    expect(gbHeader).toBeInTheDocument();
  });

  test('it should display the name of the region known as England', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const engHeader = screen.getByText(/ENGLAND/i);
    expect(engHeader).toBeInTheDocument();
  });

  test('it should display the name of the region known as Scotland', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const scotHeader = screen.getByText(/SCOTLAND/i);
    expect(scotHeader).toBeInTheDocument();
  });

  test('it should display the name of the region known as Wales', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    const walHeader = screen.getByText(/WALES/i);
    expect(walHeader).toBeInTheDocument();
  });
});

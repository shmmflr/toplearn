import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import App from './Containers/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

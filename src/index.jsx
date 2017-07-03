// Import React and Local Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import '../public/styles/main.scss';
import reducer from './Reducers/reducer';
import App from './Components/App';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

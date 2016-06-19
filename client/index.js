import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.js';
import App from './App.js';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
);

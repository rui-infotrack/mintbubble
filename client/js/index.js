// polyfills
require('es6-promise').polyfill(); // for fetch API in IE 9

// fetch API
require('isomorphic-fetch');

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';

window.onload = () => {
  const root = document.createElement('div');
  root.id = 'app';
  document.body.appendChild(root);
  ReactDOM.render((
    <App />
  ), document.getElementById('app'));
};

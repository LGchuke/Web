import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';


render(
  <AppContainer>
    <App name='igoist' />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
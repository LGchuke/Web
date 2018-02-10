import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContainer } from 'react-hot-loader';


if (module.hot) {
  module.hot.accept(() => {
    ReactDOM.render(
      <AppContainer>
        <App name='igoist' />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App name='igoist' />
    </AppContainer>,
    document.getElementById('app')
  );
};

// if (module.hot) {
//   module.hot.accept();
// }
render();
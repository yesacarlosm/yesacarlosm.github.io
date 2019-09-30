import React from 'react';
import { HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import AppRouter from 'components/AppRouter';

function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
}

export default hot(module)(App);

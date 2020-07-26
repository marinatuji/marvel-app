import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from '../../routes';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;

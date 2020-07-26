import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../../components/Header';
import HeaderList from '../../components/HeaderList';
// import Home from '../Home';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <Router exact path="/">
        {/* <Home /> */}
        <HeaderList />
      </Router>
    </div>
  );
}

export default App;

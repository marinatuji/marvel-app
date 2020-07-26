import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router exact path="/">
        <Header />
      </Router>
    </div>
  );
}

export default App;

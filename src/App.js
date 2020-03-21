import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './styles/styles.scss';
import './vendor/pictonic/css/pictonic.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Ticket from './components/Ticket';
import Selector from './components/Selector';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Selector />
      </div>
    </Router>
  );
}

export default App;

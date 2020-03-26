import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/styles.scss';
import './vendor/pictonic/css/pictonic.scss';
import Navigation from './components/Navigation';
import Selector from './components/Selector';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <Selector />
      </div>
    </Router>
  );
}

export default App;

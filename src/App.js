import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/styles.scss';
import './vendor/pictonic/css/pictonic.scss';
import Navigation from './components/Navigation';
import Selector from './components/Selector';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';

function App() {
  const [pageColor, setColor] = useState(window.location.pathname === '/' ? 'light' : 'dark');
  const changeDarkColor = () => {
    setColor('dark')
  }
  return (
    <Router>
      <div className="App">
        <Header color={pageColor} />
        <ScrollToTop />
        <Navigation handleClick={changeDarkColor} />
        <Selector />
      </div>
    </Router>
  );
}

export default App;

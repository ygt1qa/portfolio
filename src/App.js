import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import './styles/styles.scss';
import './vendor/pictonic/css/pictonic.scss';
import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Ticket from './components/Ticket';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
      <Ticket />
    </div>
  );
}

export default App;

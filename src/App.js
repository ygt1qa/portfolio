import React from 'react';
import './styles/styles.scss';
import './vendor/pictonic/css/pictonic.scss';
import Content from './components/Content';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Content />
    </div>
  );
}

export default App;

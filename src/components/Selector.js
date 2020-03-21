import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from './About';
import Content from './Content';
import Work from './Work';
import Skill from './Skill';

function Selector() {
  return (
    <div className="content__container">
      <Route exact path="/" component={Content}></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/work" component={Work}></Route>
      <Route path="/skill" component={Skill}></Route>
    </div>
  )
}

export default Selector
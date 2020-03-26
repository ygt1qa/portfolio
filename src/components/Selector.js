import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from './About';
import Content from './Content';
import Work from './Work';
import Skill from './Skill';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// onChangeに渡すコールバック
const handleLocationChange = (prevState, nextState) => {
  if (nextState.location.action !== "POP") {
    window.scrollTo(0, 0);
  }
};

function Selector() {
  return (
    <div className="content__container">
      <Route render={(children) => (
        <TransitionGroup>
          <CSSTransition
            key={children.location.key}
            timeout={1000}
            classNames="fade"
          >
            <Switch location={children.location}>
              <Route exact path="/" component={Content} onChange={handleLocationChange}></Route>
              <Route path="/about" component={About} onChange={handleLocationChange}></Route>
              <Route path="/work" component={Work} onChange={handleLocationChange}></Route>
              <Route path="/skill" component={Skill} onChange={handleLocationChange}></Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
    </div>
  )
}

export default Selector
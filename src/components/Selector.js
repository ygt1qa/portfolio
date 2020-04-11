import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./About";
import Content from "./Content";
import Work from "./Work";
import Skill from "./Skill";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function Selector() {
  return (
    <div className="content__container">
      <Route
        render={(children) => (
          <TransitionGroup>
            <CSSTransition
              key={children.location.key}
              timeout={400}
              classNames="fade"
            >
              <Switch location={children.location}>
                <Route exact path="/" component={Content}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/work" component={Work}></Route>
                <Route path="/skill" component={Skill}></Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </div>
  );
}

export default Selector;

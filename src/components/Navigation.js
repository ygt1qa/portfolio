import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navBar">
      <div className="navBar__button">
        <NavLink to="about" className="btn__about" onClick={props.handleClick}>
          ABOUT
        </NavLink>
        <NavLink to="work" className="btn__work" onClick={props.handleClick}>
          WORK
        </NavLink>
        <NavLink to="skill" className="btn__skill" onClick={props.handleClick}>
          SKILL
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;

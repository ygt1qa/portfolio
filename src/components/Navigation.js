import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const [active, setActive] = useState();

  const handleClick = (e) => {
    props.handleClick();
    setActive(e.target.value);
  };

  return (
    <div className="navBar">
      <div className="navBar__button">
        <NavLink
          to="about"
          className={"btn__about" + " " + (active === "about" ? "active" : "")}
          value="about"
          onClick={handleClick}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="work"
          className={"btn__work" + " " + (active === "work" ? "active" : "")}
          value="work"
          onClick={handleClick}
        >
          WORK
        </NavLink>
        <NavLink
          to="skill"
          className={"btn__skill" + " " + (active === "skill" ? "active" : "")}
          value="skill"
          onClick={handleClick}
        >
          SKILL
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
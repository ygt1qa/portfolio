import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navBar">
      <div className="navBar__button">
        <NavLink to="about" className="btn__about">ABOUT</NavLink>
        <NavLink to="work" className="btn__work">WORK</NavLink>
        <NavLink to="skill" className="btn__skill">SKILL</NavLink>
      </div>

      <div className="navBar__contact">
        <ul className="social__links">
          <li><a href="#"><span className="icon-mail"></span></a></li>
          <li><a href="#"><span className="icon-twitter-3"></span></a></li>
          <li><a href="#"><span className="icon-facebook"></span></a></li>
          <li><a href="#"><span className="icon-github-01"></span></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
import React from 'react';

function Navigation() {
  return (
    <div className="navBar">
      <div className="navBar__button">
        <button className="btn__about">ABOUT</button>
        <button className="btn__work">WORK</button>
        <button className="btn__skills">SKILLS</button>
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
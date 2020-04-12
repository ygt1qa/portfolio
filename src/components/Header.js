import React from "react";

function Header(props) {
  return (
    <header className={"header " + "header__" + props.color}>
      <h4 className="header__home">
        <a href="/portfolio/">HOME</a>
      </h4>
    </header>
  );
}

export default Header;

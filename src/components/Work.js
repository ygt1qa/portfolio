import React, { useEffect } from "react";
import Footer from "./Footer";
import Resume from "./Resume";

function Work() {
  useEffect(() => {
    document.body.classList.add("loading");
    document.body.classList.remove("loaded");
    return () => {
      document.body.classList.add("loaded");
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <div className="content content--main">
      <div className="outer">
        <header className="content__header content__header--intro content__header--outer">
          <div className="section-title">
            <h2 className="big-title">What I WORKED</h2>
            <h2 className="main-title">MY WORKS</h2>
          </div>
        </header>
        <Resume />
      </div>
      <Footer />
    </div>
  );
}

export default Work;

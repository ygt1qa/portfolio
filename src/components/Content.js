import React, { useEffect } from "react";
import Ticket from "./Ticket";

function Content() {
  useEffect(() => {
    return () => {
      document.body.classList.add("loaded");
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <div className="content content--main">
      <div className="content__inner">
        <div className="content">
          <header className="content__header content__header--intro">
            <h2 className="content__subtitle typo--heading">
              <span className="typo--shift">YASUYUKI</span>
              <br />
              <span className="typo--shift">OKASAKA</span>
              <br />
              <br />
              <span className="typo--shift">WEB</span>
              <br />
              <span className="typo--shift">DEVELOPER</span>
            </h2>
          </header>
          <div className="content__text content__text--intro">
            <div className="content__textCol content__textCol--intro">
              <p>
                This site is my portfolio site, and described myself, my skills,
                and my past. So this site is my alter ego as web developer!
              </p>
            </div>
            <div className="content__textCol content__textCol--intro">
              <p>Regarding my information, this site keep you updated :)</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Ticket /> */}
    </div>
  );
}

export default Content;

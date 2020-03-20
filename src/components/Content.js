import React from 'react';

function Content() {
  return (
    <div className="content__container">
      <div className="content content--main">
        <div className="content__inner">
          <div className="content">
            <header className="content__header content__header--intro">
              <h2 className="content__subtitle typo--heading">
                <span className="typo--shift">YASUYUKI</span><br />
                <span className="typo--shift">OKASAKA</span><br /><br />
                <span className="typo--shift">WEB</span><br />
                <span className="typo--shift">DEVELOPER</span>
              </h2>
            </header>
            <div className="content__text content__text--intro">
              <div className="content__textCol content__textCol--intro">
                <p>about me</p>
              </div>
              <div className="content__textCol content__textCol--intro">
                <p>about me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;

import React from "react";

const Footer = () => {
  const now = new Date();

  return (
    <footer className="content__footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__content--left">
            <p className="footer__desc">CREATIVE BACK-END DEVELOPER</p>
          </div>
          <div className="footer__content--right">
            <p className="footer__desc">
              BORN {now.getFullYear() - 1994} YEARS AGO
            </p>
          </div>
        </div>
        <div className="footer__row">
          <ul className="footer__nav">
            <li>
              <a href="mailto:ygt1qa8@gmail.com">
                <span className="icon-mail"></span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/ygt1qa8">
                <span className="icon-twitter-3"></span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/ygt1qa">
                <span className="icon-facebook"></span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ygt1qa">
                <span className="icon-github-01"></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

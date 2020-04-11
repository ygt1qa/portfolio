import React, { useEffect } from "react";
import backIcon from "../vendor/img/f_f_business_4_svg_f_business_4_0nbg.svg";
import frontIcon from "../vendor/img/f_f_business_56_svg_f_business_56_0nbg.svg";
import designIcon from "../vendor/img/f_f_object_26_svg_f_object_26_0nbg.svg";
import profile from "../vendor/img/aviary-image-1523007487695_1_1.jpg";
import Footer from "./Footer";

function About() {
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
            <h2 className="big-title">What I Do</h2>
            <h2 className="main-title">ABOUT ME</h2>
          </div>
        </header>
        <div className="content__about--main">
          <div className="content__image">
            <img src={profile} className="profile__photo" />
          </div>
          <div className="profile__content">
            <p className="text-big">
              ーHello, My name is YASUYUKI OKASAKA!
              <br />
              I'm enthusiastic web developer, and good at backend.
              <br />
              <br />
              I live in Japan, Hyogo, and work at Osaka now.
              <br />
              Where I live, there is a quiet residential area, so it is a nice
              place to live.
              <br />
              <br />
              I like to study something!! <br />
              Recently, I am interested in Web design and learning now.
            </p>
          </div>
        </div>
        <div className="content__about--icon">
          <div className="row">
            <div className="col-md-3">
              <img src={backIcon} alt="front"></img>
              <h3>BACK END</h3>
              <span className="good">I'm good at!!</span>
            </div>
            <div className="col-md-3">
              <img src={frontIcon} alt="back"></img>
              <h3>FRONT END</h3>
            </div>
            <div className="col-md-3 studying">
              <img src={designIcon} alt="back"></img>
              <h3>WEB DESIGN</h3>
              <span className="studying">Now studying!!</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;

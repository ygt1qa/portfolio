import React from 'react';
import backIcon from '../vendor/img/f_f_business_4_svg_f_business_4_0nbg.svg';
import frontIcon from '../vendor/img/f_f_business_56_svg_f_business_56_0nbg.svg';
import designIcon from '../vendor/img/f_f_object_26_svg_f_object_26_0nbg.svg';
import Header from './Header';

function About() {
  return (
    <div className="content content--main">
      <Header color={'dark'} />
      <div className="outer">
        <header className="content__header content__header--intro content__header--outer">
          <div className="section-title">
            <h2 className="big-title">What we do</h2>
            <h2 className="main-title">ABOUT US</h2>
            <p className="text-big centered">
              ーHello, My name is YASUYUKI OKASAKA!<br />
                I'm enthusiastic web developer, and good at backend.<br /><br />
                I live in Japan, Hyogo, and work at Osaka now.<br /><br />
                I like to study something!! <br />
                Recently, I am interested in Web design and learning now.
              </p>
          </div>
        </header>
        <div className="row">
          <div className="col-md-3">
            <img src={backIcon} alt="front"></img>
            <h3>BACK END</h3>
          </div>
          <div className="col-md-3">
            <img src={frontIcon} alt="back"></img>
            <h3>FRONT END</h3>
          </div>
          <div className="col-md-3 studying">
            <img src={designIcon} alt="back"></img>
            <h3>WEB DESIGN</h3>
            <span className="studying">NOW STUDYING!!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
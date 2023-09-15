import React from "react";
import { ThemeLangContext } from "../Context/Context";
import { useContext } from "react";

function Hero() {
  const { text, lang } = useContext(ThemeLangContext);

  return (
    <div className="hero">
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-line">
            <div className="line"></div>
            <p>Doğan Keleş</p>
          </div>
          <div className="aboutMe">
            <h1>{text.hero.mainTitle}</h1>
            <p>{text.hero.aboutMe}</p>
          </div>

          <div className="cvLinks">
            <a className="hireMe" href="mailto:dgnkls.47@gmail.com">
              {text.hero.hire}
            </a>
            <div className="gitHubLink">
              <img src="./icons/github.svg" alt="Github icon" />
              <a href="https://github.com/dogan-keles">Github</a>
            </div>
            <div className="linkedinLink ">
              <img src="./icons/LinkedIn.svg" alt="Linkedin icon" />
              <a href="https://linkedin.com/in/dogan-keles">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="cvImg">
          <img src="./icons/cvfoto.jpg" />
        </div>
      </div>
    </div>
  );
}
export default Hero;

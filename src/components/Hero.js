import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-section">
        <div className="hero-left">
          <div className="hero-line">
            <div className="line"></div>
            <p>Doğan Keleş</p>
          </div>
          <div className="aboutMe">
            <h1>Creative thinker Minimalism lover</h1>
            <p>
              Hi, I’m Doğan. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          </div>

          <div className="cvLinks">
            <a className="hireMe" href="mailto:dgnkls.47@gmail.com">
              E-posta
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

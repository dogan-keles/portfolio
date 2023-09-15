import React from "react";
import { useContext } from "react";
import { ThemeLangContext } from "../Context/Context";

function Footer() {
  const { text } = useContext(ThemeLangContext);
  return (
    <div className="contactContainer">
      <h3>{text.footer.mainTitle}</h3>
      <div className="contactLinks">
        <div className="emailLink">
          <img src="./icons/isaretparmagi.svg" />
          <a href="#">dgnkls.47@gmail.com</a>
        </div>
        <div className="personalLinks">
          <a id="blog" href="#">
            Personal Blog
          </a>
          <a id="github" href="https://github.com/dogan-keles">
            Github
          </a>
          <a id="linkedin" href="https://www.linkedin.com/in/dogan-keles/">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;

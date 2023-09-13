import React from "react";

function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="logo">
          <div>D</div>
        </div>
        <div className="navbarLinks">
          <nav>
            <a id="skills" href="#skills">
              Skills
            </a>
            <a id="projects" href="#projects">
              Projects
            </a>
            <a id="contactLink" href="#">
              Hire me
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Navbar;

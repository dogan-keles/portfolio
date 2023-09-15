import React from "react";
import { useContext } from "react";
import { ThemeLangContext } from "../Context/Context";

function Skills() {
  const { text, Lang, setLang } = useContext(ThemeLangContext);

  return (
    <>
      <h2 id="skillsTitle">Skills</h2>
      <div className="skillsContainer">
        {text.skills.skillList.map((skill, i) => {
          return (
            <div className="skillItem">
              <div key={skill.id} className="skillList">
                <h3> {text.skills.skillList[i].title}</h3>
                <div className="skillDescription">
                  {text.skills.skillList[i].description}{" "}
                </div>
              </div>
            </div>
          );
        })}
        <div className="horizontalLine"></div>
      </div>
    </>
  );
}
export default Skills;

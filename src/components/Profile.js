import React from "react";
import { ThemeLangContext } from "../Context/Context";
import { useContext } from "react";

function Profile() {
  const { text, lang } = useContext(ThemeLangContext);
  return (
    <div className="profileContainer">
      <div>
        <h2 className="profileTitle">{text.profile.mainTitle}</h2>
      </div>
      <div className="profileText">
        <div className="profileInfos">
          <div>
            <h3 className="proTitle">{text.profile.profileTitle}</h3>
          </div>

          <div className="personalInfos">
            <div className="birthday">
              <h4>{text.profile.birth}</h4>
              <p>08.08.1994</p>
            </div>
            <div className="residence">
              <h4>{text.profile.city}</h4>
              <p>İstanbul</p>
            </div>
            <div className="education">
              <h4>{text.profile.education}</h4>
              <p>{text.profile.educationDetails}</p>
            </div>
            <div className="role">
              <h4>{text.profile.position} </h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="profileAbout">
          <h3 className="proTitle">{text.profile.aboutMe}</h3>
          <p>{text.profile.aboutMe}</p>
          <p>{text.profile.info}</p>
        </div>
      </div>
      <div className="horizontalLine"></div>
    </div>
  );
}

export default Profile;

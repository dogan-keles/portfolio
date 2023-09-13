import React from "react";

function Profile() {
  return (
    <div className="profileContainer">
      <div>
        <h2 className="profileTitle">Profile</h2>
      </div>
      <div className="profileText">
        <div className="profileInfos">
          <div>
            <h3 className="proTitle">Profile</h3>
          </div>

          <div className="personalInfos">
            <div className="birthday">
              <h4>Doğum Tarihi:</h4>
              <p>08.08.1994</p>
            </div>
            <div className="residence">
              <h4>İkamet Şehri:</h4>
              <p>İstanbul</p>
            </div>
            <div className="education">
              <h4>Eğitim Durumu:</h4>
              <p>
                İstanbul Teknik Üniversitesi, Geomatik Mühendisliği, Lisans,
                2022
              </p>
            </div>
            <div className="role">
              <h4>Tercih Ettiği Rol: </h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="profileAbout">
          <h3 className="proTitle">About Me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
      <div className="horizontalLine"></div>
    </div>
  );
}

export default Profile;

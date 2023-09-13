import React, { useEffect } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useContext } from "react";
import { ThemeLangContext } from "../Context/Context";
import { langData } from "../Sources/Languages";
function Header(props) {
  const { darkMode, setDarkMode, lang, text, setLang, handleSwitch } =
    useContext(ThemeLangContext);

  return (
    <div className="header">
      <div className="toggle">
        <DarkModeToggle
          mode={darkMode}
          size="sm"
          inactiveTrackColor="#3A3A3A"
          inactiveTrackColorOnHover="#5c5c5c"
          inactiveTrackColorOnActive="#cbd5e1"
          activeTrackColor="#4731D3"
          activeTrackColorOnHover="#1e293b"
          activeTrackColorOnActive="#4731D3"
          inactiveThumbColor="#FFE86E"
          activeThumbColor="#FFE86E"
          onChange={() => {
            setDarkMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
          }}
        />

        <p>GECE MODU |</p>

        <button className="lang" onClick={handleSwitch}>
          {text.header.langSwitchBtn[0]}
        </button>
      </div>
    </div>
  );
}

export default Header;

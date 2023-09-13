import React, { useEffect } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";

function Header(props) {
  const [darkMode, setDarkMode] = useState("dark");

  const modeOn = () => {
    setDarkMode(!darkMode);
    console.log("toggle tıklandı.", darkMode);
  };
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
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
            setDarkMode(darkMode === "dark" ? "light" : "dark");
          }}
        />

        <p>GECE MODU |</p>
      </div>
    </>
  );
}
export default Header;

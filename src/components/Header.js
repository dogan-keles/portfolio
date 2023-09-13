import React, { useEffect } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";
import { useContext } from "react";
import { themeLangContext } from "../Context/Context";

function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = JSON.parse(localStorage.getItem("theme"));
    return savedTheme || "light";
  });

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", JSON.stringify(darkMode));
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

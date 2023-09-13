import React, { useEffect } from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";
import { useState } from "react";
import { useContext } from "react";
import { themeLangContext } from "../Context/Context";

function Header() {
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

import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { data } from "../components/Data";
import { langData } from "../Sources/Languages";

export const ThemeLangContext = createContext();

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState("en");
  const [projects, setProjects] = useState({});
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

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", data)
      .then((res) => {
        setProjects(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSwitch = () => {
    setLang(lang === "en" ? "tr" : "en");
    console.log("Dil Seçeneği Değişti | Current Language has been changed!");
  };
  const text = langData[lang];
  return (
    <ThemeLangContext.Provider
      value={{
        darkMode,
        projects,
        setProjects,
        setDarkMode,
        lang,
        setLang,
        handleSwitch,
        text,
      }}
    >
      {children}
    </ThemeLangContext.Provider>
  );
};

export default ContextProvider;

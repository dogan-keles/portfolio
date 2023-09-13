import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Hero />

      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

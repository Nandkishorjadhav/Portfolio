import './App.css'
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ThemeProvider from './components/ThemeProvider'
import Experience from './components/Experience';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

return (
    <ThemeProvider>
      <div className="relative">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </ThemeProvider>
  );
};

export default App;
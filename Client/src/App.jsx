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
import Modal from './components/Modal';
import Hackathons from './components/Hackathons';
import Resume from './components/Resume';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isHackathonsOpen, setIsHackathonsOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);

return (
    <ThemeProvider>
      <div className="relative">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        <Home 
          onOpenHackathons={() => setIsHackathonsOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenExperience={() => setIsExperienceOpen(true)}
        />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />

        {/* Modals */}
        <Modal
          isOpen={isHackathonsOpen}
          onClose={() => setIsHackathonsOpen(false)}
          title="🏆 Hackathons & Awards"
        >
          <Hackathons />
        </Modal>

        <Modal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
          title="📋 Resume & CV"
        >
          <Resume />
        </Modal>

        <Modal
          isOpen={isExperienceOpen}
          onClose={() => setIsExperienceOpen(false)}
          title="💼 Experience & Journey"
        >
          <Experience />
        </Modal>
      </div>
    </ThemeProvider>
  );
};

export default App;
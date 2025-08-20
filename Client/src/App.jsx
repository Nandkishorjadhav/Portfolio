import { useState } from 'react'
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skill.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App

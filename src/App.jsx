import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className= "min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Nandkishor Jadhav 👋</h1>
        <p className="text-lg md:text-xl text-gray-300">
          Full-Stack Developer | Web Enthusiast | Problem Solver
        </p>
      </header>

      {/* About */}
      <section className="max-w-2xl text-center mb-10">
        <p className="text-gray-400 leading-relaxed">
          Welcome to my portfolio! 🚀 Here you’ll find my projects, skills, and
          experiences. I love building modern web apps with React, Spring Boot,
          and exploring AI & Machine Learning.
        </p>
      </section>
    </div>
  );
}

export default App

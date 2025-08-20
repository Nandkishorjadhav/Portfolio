// Home.js
import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaLaptopCode
} from "react-icons/fa";

const Home = () => {
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white px-6 pt-16">
      {/* Hero Content */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nandkishor Jadhav</span> 👋
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          A passionate <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Full-Stack Developer</span> 🚀 
          exploring <b>Web Development</b>, <b>AI/ML</b>, and building impactful projects.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => handleScrollToSection('about')}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full text-lg shadow-lg shadow-purple-500/25 transition duration-300 hover:transform hover:scale-105"
          >
            About Me
          </button>
          <button 
            onClick={() => handleScrollToSection('projects')}
            className="px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-purple-600/20 hover:to-pink-600/20 rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105 border border-purple-500/20"
          >
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Hero Image */}
      <div className="mt-12">
        <div className="w-72 sm:w-96 h-72 sm:h-96 mx-auto bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 animate-pulse">
          <FaLaptopCode className="text-8xl text-white" />
        </div>
      </div>
    </section>
  );
}

export default Home;
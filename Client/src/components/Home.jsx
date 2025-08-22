// Home.js
import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter,
  FaLaptopCode
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const Home = () => {
  const { isDarkMode } = useTheme();

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

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';
  
  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-slate-600';
  const nameGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  return (
    <section id="home" className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-br ${bgGradient} ${textColor} px-6 pt-16`}>
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className={`bg-gradient-to-r ${nameGradient} bg-clip-text text-transparent`}>Nandkishor Jadhav</span> 👋
        </h1>
        
        <p className={`text-lg sm:text-xl ${subTextColor} leading-relaxed mb-6`}>
          A passionate <span className={`font-semibold bg-gradient-to-r ${nameGradient} bg-clip-text text-transparent`}>Full-Stack Developer</span> 🚀 
          exploring <b>Web Development</b>, <b>AI/ML</b>, and building impactful projects.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button 
            onClick={() => handleScrollToSection('about')}
            className={`px-6 py-3 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25'
                : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25'
            } text-white rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105`}
          >
            About Me
          </button>
          <button 
            onClick={() => handleScrollToSection('projects')}
            className={`px-6 py-3 bg-gradient-to-r ${
              isDarkMode
                ? 'from-gray-700 to-gray-800 hover:from-cyan-600/20 hover:to-blue-600/20 border-cyan-500/20'
                : 'from-gray-200 to-gray-300 hover:from-blue-600/20 hover:to-indigo-600/20 border-blue-500/20 text-slate-800'
            } rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105 border`}
          >
            View Projects
          </button>
        </div>

        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? 'hover:text-blue-400' : 'hover:text-indigo-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="mt-12">
        <div className={`w-72 sm:w-96 h-72 sm:h-96 mx-auto bg-gradient-to-br ${
          isDarkMode 
            ? 'from-cyan-600 to-blue-600 shadow-cyan-500/25'
            : 'from-blue-600 to-indigo-600 shadow-blue-500/25'
        } rounded-full flex items-center justify-center shadow-2xl animate-pulse`}>
          <FaLaptopCode className="text-8xl text-white" />
        </div>
      </div>
    </section>
  );
};
export default Home;
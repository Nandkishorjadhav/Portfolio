// About.js
import React from "react";
import { FaGithub, FaRobot } from "react-icons/fa";
import { 
  HiOutlineDesktopComputer,
  HiOutlineLightBulb
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const About = () => {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';
  
  const cardBg = isDarkMode
    ? 'bg-gray-800/50 border-cyan-500/20 shadow-cyan-500/10'
    : 'bg-white/80 border-blue-500/20 shadow-blue-500/10';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-slate-600';
  const titleGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgGradient} p-6 pt-20`}>
      <div className={`${cardBg} backdrop-blur-md border shadow-2xl rounded-2xl max-w-3xl w-full p-10 text-center transform transition duration-500 hover:scale-105`}>
        
        <h1 className={`text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>About Me</h1>
        
        <p className={`text-lg ${subTextColor} mb-6 leading-relaxed`}>
          Hi 👋, I'm <span className={`font-semibold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>Nandkishor Jadhav</span>,
          a passionate developer exploring <b className={textColor}>Full-Stack Web Development</b>,
          <b className={textColor}>Machine Learning</b>, and <b className={textColor}>Creative Coding</b>.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className={`p-6 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-600 to-blue-600 shadow-cyan-500/25'
              : 'from-blue-600 to-indigo-600 shadow-blue-500/25'
          } rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="flex items-center justify-center mb-3">
              <HiOutlineDesktopComputer className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Web Dev</h3>
            <p className="text-sm text-white/90 mt-2">Building interactive websites with React, Node.js & Spring Boot.</p>
          </div>
          <div className={`p-6 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-blue-600 to-cyan-600 shadow-blue-500/25'
              : 'from-indigo-600 to-blue-600 shadow-indigo-500/25'
          } rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="flex items-center justify-center mb-3">
              <FaRobot className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">AI & ML</h3>
            <p className="text-sm text-white/90 mt-2">Exploring AI, Data Science & Machine Learning applications.</p>
          </div>
          <div className={`p-6 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-600 to-blue-600 shadow-cyan-500/25'
              : 'from-blue-600 to-indigo-600 shadow-blue-500/25'
          } rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105`}>
            <div className="flex items-center justify-center mb-3">
              <HiOutlineLightBulb className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Projects</h3>
            <p className="text-sm text-white/90 mt-2">Creating impactful projects like quiz apps, chatbots, and CMS.</p>
          </div>
        </div>

        <div className="mt-10">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25'
                : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25'
            } text-white text-lg rounded-full shadow-lg transition duration-300 hover:transform hover:scale-105`}
          >
            <FaGithub />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
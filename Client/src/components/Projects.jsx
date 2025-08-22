// Projects.js
import React from "react";
import { FaGithub, FaRobot } from "react-icons/fa";
import { 
  HiOutlineDesktopComputer,
  HiOutlineBriefcase,
  HiOutlineExternalLink
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Projects = () => {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';
  
  const titleGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';

  return (
    <section id="projects" className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>My Projects</h2>
        <p className={`text-center ${subTextColor} mb-12`}>Some of my recent work</p>
        
        <div className="text-center">
          <p className={`${textColor} text-lg`}>Projects section coming soon! 🚀</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
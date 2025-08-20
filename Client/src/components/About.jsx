// About.js
import React from "react";
import { FaGithub, FaRobot } from "react-icons/fa";
import { 
  HiOutlineDesktopComputer,
  HiOutlineLightBulb
} from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-6 pt-20">
      <div className="bg-gray-800/50 backdrop-blur-md border border-purple-500/20 shadow-2xl shadow-purple-500/10 rounded-2xl max-w-3xl w-full p-10 text-center transform transition duration-500 hover:scale-105">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">About Me</h1>
        
        {/* Subheading */}
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Hi 👋, I'm <span className="font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nandkishor Jadhav</span>,
          a passionate developer exploring <b className="text-white">Full-Stack Web Development</b>,
          <b className="text-white">Machine Learning</b>, and <b className="text-white">Creative Coding</b>.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-md hover:shadow-lg shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <HiOutlineDesktopComputer className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Web Dev</h3>
            <p className="text-sm text-white/90 mt-2">Building interactive websites with React, Node.js & Spring Boot.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-md hover:shadow-lg shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <FaRobot className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">AI & ML</h3>
            <p className="text-sm text-white/90 mt-2">Exploring AI, Data Science & Machine Learning applications.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-md hover:shadow-lg shadow-purple-500/25 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center justify-center mb-3">
              <HiOutlineLightBulb className="text-3xl text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white">Projects</h3>
            <p className="text-sm text-white/90 mt-2">Creating impactful projects like quiz apps, chatbots, and CMS.</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg rounded-full shadow-lg shadow-purple-500/25 hover:from-purple-700 hover:to-pink-700 transition duration-300 hover:transform hover:scale-105"
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
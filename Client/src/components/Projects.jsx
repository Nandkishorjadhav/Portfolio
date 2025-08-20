// Projects.js
import React from "react";
import { FaGithub, FaRobot } from "react-icons/fa";
import { 
  HiOutlineDesktopComputer,
  HiOutlineBriefcase,
  HiOutlineExternalLink
} from "react-icons/hi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      icon: <HiOutlineDesktopComputer />,
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "AI Chatbot",
      description: "Intelligent chatbot using machine learning and natural language processing",
      tech: ["Python", "TensorFlow", "Flask", "NLP"],
      icon: <FaRobot />,
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Modern task management application with real-time updates",
      tech: ["React", "Firebase", "Tailwind", "PWA"],
      icon: <HiOutlineBriefcase />,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">My Projects</h2>
        <p className="text-center text-gray-400 mb-12">Here are some of my recent works</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl text-white">{project.icon}</div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-indigo-600/20 text-indigo-300 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a href={project.github} className="flex items-center gap-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                  <FaGithub />
                  Code
                </a>
                <a href={project.demo} className="flex items-center gap-1 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                  <HiOutlineExternalLink />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
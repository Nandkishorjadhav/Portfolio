import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const { isDarkMode } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const bgGradient = isDarkMode
    ? "from-slate-900 via-cyan-900 to-slate-900"
    : "from-blue-50 via-indigo-50 to-blue-50";

  const titleGradient = isDarkMode
    ? "from-cyan-400 to-blue-400"
    : "from-blue-600 to-indigo-600";

  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-slate-600";
  const cardBg = isDarkMode ? "bg-slate-800/80" : "bg-white/80";
  const cardBorder = isDarkMode ? "border-slate-700" : "border-gray-200";
  const buttonBg = isDarkMode
    ? "bg-slate-700/50 hover:bg-slate-600 active:bg-slate-500"
    : "bg-gray-200/50 hover:bg-gray-300 active:bg-gray-400";
  const modalBg = isDarkMode ? "bg-slate-800/90" : "bg-white/90";
  const modalBorder = isDarkMode ? "border-slate-600" : "border-gray-200";

  // Sample project data
  const projects = [
    {
      title: "Pragyaa Tech Event Website",
      description:
        "It is website of my college fest.",
      detailedDescription:
        "Project Three is a mobile-responsive dashboard built for data analytics, featuring interactive charts and real-time data updates. It uses D3.js for visualizations and integrates with a REST API for dynamic data fetching, optimized for both desktop and mobile devices.",
      technologies: [
        "React",
        "D3.js",
        "REST API",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      image: "https://via.placeholder.com/600x400?text=Project+Three",
      liveLink: "https://pragyaa-2k25.vercel.app/",
      sourceLink: "https://github.com/Nandkishorjadhav/Pragyaa-2k25",
    },
    {
      title: "HackNova Hackathon Project",
      description:
        "An e-commerce platform with advanced search and payment integration.",
      detailedDescription:
        "Project Two is a feature-rich e-commerce platform with advanced search capabilities powered by Elasticsearch and secure payment integration via Stripe. It offers a user-friendly interface, product filtering, and a seamless checkout experience.",
      technologies: [
        "React",
        "Elasticsearch",
        "Stripe",
        "Tailwind CSS",
        "Express",
      ],
      image: "https://via.placeholder.com/600x400?text=Project+Two",
      liveLink: "https://example.com/project-two",
      sourceLink: "https://github.com/Nandkishorjadhav/HackNova",
    },
    {
      title: "Tech AI Tools",
      description:
        "A modern web application built with React and Node.js, featuring real-time useful and free AI tools.",
      detailedDescription:
        "It includes all free AI tools in different category for different use with their link. It integrates a React frontend with a Node.js backend, leveraging WebSocket for seamless data updates. The app includes user authentication, real-time analytics, and a responsive design.",
      technologies: [
        "React",
        "Node.js",
        "WebSocket",
        "Tailwind CSS",
        "MongoDB",
      ],
      image: "https://via.placeholder.com/600x400?text=Project+One",
      liveLink: "https://example.com/project-one",
      sourceLink: "https://github.com/Nandkishorjadhav/Engineering-Exploration",
    },
  ];

  // Modal handlers
  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 100,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <section
      id="projects"
      className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6 flex items-center justify-center`}
    >
      <div
        className={`max-w-6xl mx-auto w-full ${isModalOpen ? "blur-md" : ""}`}
      >
        <h2
          className={`text-4xl md:text-5xl font-bold text-center bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}
        >
          My Projects
        </h2>
        <p className={`text-center ${subTextColor} mb-12 text-lg md:text-xl`}>
          Explore some of my recent work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative ${cardBg} ${cardBorder} border rounded-2xl p-4 md:p-6 shadow-md backdrop-blur-sm`}
              whileHover={{
                scale: 1.05,
                shadow: "lg",
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-full mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 md:h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1 text-center mb-6">
                  <h3
                    className={`text-2xl md:text-3xl font-semibold ${textColor} mb-4`}
                  >
                    {project.title}
                  </h3>
                  <p className={`${subTextColor} mb-6 text-sm md:text-base`}>
                    {project.description}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => openModal(project)}
                    className={`inline-block px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${titleGradient} hover:opacity-90 transition-opacity duration-300 cursor-pointer`}
                  >
                    View Project
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y < -100) {
                  closeModal();
                }
              }}
              className={`relative ${modalBg} ${modalBorder} border rounded-2xl p-6 md:p-8 max-w-3xl w-full mx-auto shadow-2xl backdrop-blur-sm`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <button
                onClick={closeModal}
                className={`absolute top-4 right-4 ${buttonBg} text-white p-2 rounded-full transition-all duration-300`}
                aria-label="Close modal"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h3
                className={`text-3xl md:text-4xl font-semibold ${textColor} mb-4`}
              >
                {selectedProject.title}
              </h3>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <p className={`${subTextColor} mb-6 text-base md:text-lg`}>
                {selectedProject.detailedDescription}
              </p>
              <div className="mb-6">
                <h4 className={`text-xl font-semibold ${textColor} mb-2`}>
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${cardBg} ${cardBorder} border ${subTextColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${titleGradient} hover:opacity-90 transition-opacity duration-300`}
                >
                  Live Demo
                </a>
                <a
                  href={selectedProject.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r ${
                    isDarkMode
                      ? "from-gray-600 to-gray-700"
                      : "from-gray-500 to-gray-600"
                  } hover:opacity-90 transition-opacity duration-300`}
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
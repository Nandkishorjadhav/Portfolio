import React from "react";
import { FaTrophy, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Hackathons = () => {
  const { isDarkMode } = useTheme();

  const hackathons = [
    {
      id: 1,
      title: "HackNova 2024",
      description: "Built an AI-powered e-commerce platform with real-time chat and payment integration.",
      date: "November 2024",
      location: "SGGSIE&T, Nanded",
      achievement: "🥇 Top 3 Winner",
      technologies: ["React", "Node.js", "MongoDB", "WebSockets", "AI"],
      link: "https://github.com/Nandkishorjadhav/HackNova",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Code Sprint 2024",
      description: "Developed a full-stack quiz application with real-time leaderboard and performance analytics.",
      date: "August 2024",
      location: "Online Event",
      achievement: "🏆 Finalist",
      technologies: ["React", "Spring Boot", "PostgreSQL", "WebSockets"],
      link: "https://github.com/Nandkishorjadhav/QuizMaster",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Tech Innovation Summit",
      description: "Created AI tools aggregator website with categorized free AI resources and links.",
      date: "June 2024",
      location: "Virtual Hackathon",
      achievement: "✨ Recognition Award",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      link: "https://github.com/Nandkishorjadhav/Engineering-Exploration",
      color: "from-pink-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`space-y-6 ${
        isDarkMode ? "text-white" : "text-slate-800"
      }`}
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaTrophy className={isDarkMode ? "text-yellow-400" : "text-yellow-500"} />
          Hackathons & Competitions
        </h3>
        <p
          className={`${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } text-lg`}
        >
          Active participant in coding challenges, with multiple wins and recognitions
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {hackathons.map((hackathon) => (
          <motion.div
            key={hackathon.id}
            variants={cardVariants}
            className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
              isDarkMode
                ? "bg-gradient-to-br from-[#1a1f3a] to-[#0f1419] border border-cyan-500/20 hover:border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                : "bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-400 shadow-lg shadow-blue-500/10"
            }`}
          >
            {/* Background Gradient Overlay */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-r ${hackathon.color}`}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4
                      className={`text-xl font-bold ${
                        isDarkMode
                          ? "text-cyan-300"
                          : "text-blue-600"
                      }`}
                    >
                      {hackathon.title}
                    </h4>
                    <span className="text-2xl">{hackathon.achievement.split(" ")[0]}</span>
                  </div>
                  <p
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {hackathon.achievement}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p
                className={`mb-4 leading-relaxed ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {hackathon.description}
              </p>

              {/* Meta Info */}
              <div
                className={`flex flex-wrap gap-4 mb-4 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <FaCalendarAlt
                    className={isDarkMode ? "text-cyan-400" : "text-blue-500"}
                  />
                  {hackathon.date}
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt
                    className={isDarkMode ? "text-cyan-400" : "text-blue-500"}
                  />
                  {hackathon.location}
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {hackathon.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      isDarkMode
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-blue-500/20 text-blue-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white/10">
                <a
                  href={hackathon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    isDarkMode
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                      : "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10"
      >
        <div
          className={`text-center p-4 rounded-xl ${
            isDarkMode
              ? "bg-[#1a1f3a]/50 border border-cyan-500/20"
              : "bg-blue-50/50 border border-blue-200"
          }`}
        >
          <div className={`text-2xl font-bold ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}>
            3+
          </div>
          <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Hackathons
          </div>
        </div>
        <div
          className={`text-center p-4 rounded-xl ${
            isDarkMode
              ? "bg-[#1a1f3a]/50 border border-cyan-500/20"
              : "bg-blue-50/50 border border-blue-200"
          }`}
        >
          <div className={`text-2xl font-bold ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}>
            3+
          </div>
          <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Awards
          </div>
        </div>
        <div
          className={`text-center p-4 rounded-xl ${
            isDarkMode
              ? "bg-[#1a1f3a]/50 border border-cyan-500/20"
              : "bg-blue-50/50 border border-blue-200"
          }`}
        >
          <div className={`text-2xl font-bold ${isDarkMode ? "text-cyan-400" : "text-blue-600"}`}>
            100+
          </div>
          <div className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Hours Coded
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hackathons;

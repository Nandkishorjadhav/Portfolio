import React from "react";
import { FaDownload, FaExternalLinkAlt, FaFile } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import Resumee from '../assets/Resume.pdf'

const Resume = () => {
  const { isDarkMode } = useTheme();

  const resumeUrl = "/Resume.pdf"; // Update with your actual resume URL

  return (
    <div className={isDarkMode ? "text-white" : "text-slate-800"}>
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <FaFile className={isDarkMode ? "text-cyan-400" : "text-red-600"} />
          Resume & CV
        </h3>
        <p
          className={`${
            isDarkMode ? "text-cyan-400" : "text-gray-600"
          } text-lg`}
        >
          Download my detailed resume to learn more about my professional experience
        </p>
      </div>

      {/* Main Resume Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative overflow-hidden rounded-2xl p-8 mb-8 ${
          isDarkMode
            ? "bg-gradient-to-br from-[#1a1f3a]/80 to-[#0f1419]/80 border border-red-500/30"
            : "bg-gradient-to-br from-red-50 to-orange-50 border border-red-300"
        }`}
      >
        {/* Decorative Background */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold ${
                  isDarkMode
                    ? "bg-gradient-to-br from-red-600 to-orange-600 text-white"
                    : "bg-gradient-to-br from-red-500 to-orange-500 text-white"
                }`}
              >
                CV
              </div>
              <div>
                <h4 className="text-2xl font-bold">Professional Resume</h4>
                <p
                  className={`${
                    isDarkMode ? "text-cyan-300" : "text-gray-600"
                  }`}
                >
                  Updated March 2025
                </p>
              </div>
            </div>

            <p
              className={`mb-4 leading-relaxed ${
                isDarkMode ? "text-cyan-200" : "text-gray-700"
              }`}
            >
              A comprehensive overview of my professional journey, technical skills, project experience,
              and educational background. This resume showcases my expertise in full-stack development,
              AI/ML, and my contributions to various technical projects and hackathons.
            </p>

            {/* Resume Highlights */}
            <ul
              className={`space-y-2 ${
                isDarkMode ? "text-cyan-200" : "text-gray-700"
              }`}
            >
              <li className="flex items-center gap-2">
                <span className={isDarkMode ? "text-cyan-400" : "text-red-600"}>✓</span>
                Full-Stack Development expertise with React, Node.js & MongoDB
              </li>
              {/* <li className="flex items-center gap-2">
                <span className={isDarkMode ? "text-cyan-400" : "text-red-600"}>✓</span>
                AI/ML projects and competitive programming experience
              </li>
              <li className="flex items-center gap-2">
                <span className={isDarkMode ? "text-cyan-400" : "text-red-600"}>✓</span>
                Hackathon recognition and leadership experience
              </li>
              <li className="flex items-center gap-2">
                <span className={isDarkMode ? "text-cyan-400" : "text-red-600"}>✓</span>
                Multiple deployed projects with real-world impact
              </li> */}
            </ul>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href={Resumee}
              download
              className={`flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 hover:shadow-xl hover:shadow-rose-500/50"
                  : "bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-700 hover:to-orange-700 hover:shadow-xl hover:shadow-rose-500/30"
              }`}
            >
              <FaDownload size={18} />
              Download PDF
            </a>

            <a
              href={Resumee}
              
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-8 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border-2 ${
                isDarkMode
                  ? "border-orange-500/50 text-orange-300 hover:border-orange-400 hover:bg-orange-500/10"
                  : "border-orange-400 text-orange-700 hover:border-orange-600 hover:bg-orange-100"
              }`}
            >
              <FaExternalLinkAlt size={18} />
              View Online
            </a>
          </div>
        </div>
      </motion.div>

      {/* Resume Sections Preview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { label: "Experience", icon: "💼", color: "red" },
          { label: "Education", icon: "🎓", color: "orange" },
          { label: "Skills", icon: "🛠️", color: "amber" },
          { label: "Projects", icon: "🚀", color: "rose" },
        ].map((section, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className={`p-4 text-center rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-[#1a1f3a]/50 border border-cyan-500/20 hover:border-cyan-400/50"
                : "bg-white/50 border border-gray-200 hover:border-red-400"
            }`}
          >
            <div className="text-3xl mb-2">{section.icon}</div>
            <div className={`text-sm font-medium ${isDarkMode ? "text-cyan-300" : "text-gray-700"}`}>
              {section.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`mt-8 p-6 rounded-xl border ${
          isDarkMode
            ? "bg-[#1a1f3a]/30 border-cyan-500/20 text-cyan-200"
            : "bg-purple-50/30 border-purple-300 text-gray-700"
        }`}
      >
        <p className="text-sm">
          <strong>📋 Format:</strong> PDF | <strong>📏 Length:</strong> 1 Page |{" "}
          <strong>⬆️ Latest Update:</strong> March 2025
        </p>
      </motion.div>
    </div>
  );
};

export default Resume;

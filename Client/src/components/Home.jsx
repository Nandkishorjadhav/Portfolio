import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaTrophy, FaFileAlt, FaBriefcase } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import profilePic from "../assets/myPhoto.webp";
import SplitText from "./SplitText";
import { motion } from "framer-motion";

const Home = ({ onOpenHackathons, onOpenResume, onOpenExperience }) => {
  const { isDarkMode } = useTheme();

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleAnimationComplete = () => {
    // console.log('All letters have animated!');
  };

  // Professional color theme - Rose/Amber/Slate
  const bgGradient = isDarkMode
    ? "from-slate-950 via-slate-900 to-slate-950"
    : "white";

  const bgClass = isDarkMode
    ? `bg-gradient-to-br ${bgGradient}`
    : "bg-white";

  const textColor = isDarkMode ? "text-slate-100" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-slate-400" : "text-slate-600";

  // Premium gradient - Rose to Amber
  const nameGradient = isDarkMode
    ? "from-rose-400 via-amber-400 to-rose-300"
    : "from-rose-700 via-amber-600 to-rose-600";

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center ${bgClass} ${textColor} px-4 sm:px-6 pt-0 pb-0`}
    >
      {/* Profile Photo on the Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
      >
        <div
          className={`relative group w-72 h-72 md:w-96 md:h-96`}
        >
          {/* Glow Background */}
          <div className="absolute -inset-4 rounded-full blur-2xl bg-gradient-to-r from-rose-500/10 to-amber-500/10 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
          
          {/* Main Image Container */}
          <div
            className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
              isDarkMode
                ? "border-rose-400/30 shadow-2xl shadow-rose-500/15"
                : "border-rose-500/30 shadow-2xl shadow-rose-400/15"
            } transition-all duration-500`}
          >
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </motion.div>

      {/* Details on the Right */}
      <div className="text-center max-w-5xl w-full md:w-1/2 md:text-left md:pl-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 flex flex-wrap justify-center md:justify-start items-center">
          <SplitText
            text="Hi, I'm "
            className={`bg-gradient-to-r ${nameGradient} bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold inline-block align-middle`}
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Nandkishor Jadhav"
            className={`bg-gradient-to-r ${nameGradient} bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold inline-block align-middle whitespace-nowrap`}
            delay={200} // Slightly delayed to follow "Hi, I'm"
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text=" 👋"
            className={`bg-gradient-to-r ${nameGradient} bg-clip-text text-4xl sm:text-5xl md:text-6xl font-bold inline-block align-middle`}
            delay={300} // Further delayed for sequential animation
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-80px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </h1>

        <p
          className={`text-lg sm:text-xl ${subTextColor} leading-relaxed mb-6`}
        >
          A passionate{" "}
          <span
            className={`font-semibold bg-gradient-to-r ${nameGradient} bg-clip-text text-transparent`}
          >
            Full-Stack Developer
          </span>{" "}
          🚀 exploring <b>Web Development</b>, <b>AI/ML</b>, and building
          impactful projects.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection("about")}
            className={`group relative px-6 py-3 rounded-full font-bold text-white transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl ${
              isDarkMode
                ? "bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-700 hover:to-amber-700 hover:shadow-rose-500/30"
                : "bg-gradient-to-r from-rose-700 to-amber-600 hover:from-rose-800 hover:to-amber-700 hover:shadow-rose-400/30"
            }`}
          >
            <span className="relative z-10">About Me →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-rose-700 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleScrollToSection("projects")}
            className={`group relative px-6 py-3 rounded-full font-bold transition-all duration-300 border-2 shadow-lg hover:shadow-xl ${
              isDarkMode
                ? "border-amber-600/40 text-amber-300 hover:border-amber-400 hover:bg-amber-600/10"
                : "border-amber-600/40 text-amber-700 hover:border-amber-700 hover:bg-amber-100/50"
            }`}
          >
            <span className="relative z-10">View Projects</span>
          </motion.button>
        </div>

        {/* Feature Buttons */}
        <div className="grid grid-cols-3 gap-2 mb-10 max-w-md">
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenHackathons}
            className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
              isDarkMode
                ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-400/30 hover:border-yellow-400/60 text-yellow-300 hover:shadow-lg hover:shadow-yellow-500/20"
                : "bg-gradient-to-br from-yellow-100 to-orange-100 border border-yellow-300 hover:border-yellow-500 text-yellow-700 hover:shadow-lg hover:shadow-yellow-500/20"
            }`}
          >
            <FaTrophy className="text-lg" />
            <span className="text-xs font-bold">Hackathons</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenResume}
            className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
              isDarkMode
                ? "bg-gradient-to-br from-rose-600/15 to-amber-600/15 border border-rose-500/30 hover:border-rose-400/50 text-rose-300 hover:shadow-lg hover:shadow-rose-500/20"
                : "bg-gradient-to-br from-rose-100/60 to-amber-100/60 border border-rose-400/40 hover:border-rose-500/60 text-rose-700 hover:shadow-lg hover:shadow-rose-400/20"
            }`}
          >
            <FaFileAlt className="text-lg" />
            <span className="text-xs font-bold">Resume</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenExperience}
            className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center justify-center gap-1 ${
              isDarkMode
                ? "bg-gradient-to-br from-rose-600/15 to-rose-500/15 border border-rose-500/30 hover:border-rose-400/50 text-rose-300 hover:shadow-lg hover:shadow-rose-500/20"
                : "bg-gradient-to-br from-rose-100/60 to-rose-100/60 border border-rose-400/40 hover:border-rose-500/60 text-rose-700 hover:shadow-lg hover:shadow-rose-400/20"
            }`}
          >
            <FaBriefcase className="text-lg" />
            <span className="text-xs font-bold">Experience</span>
          </motion.button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-3xl">
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 ${
              isDarkMode ? "text-red-400 hover:text-orange-400" : "text-red-600 hover:text-orange-600"
            }`}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 ${
              isDarkMode ? "text-red-400 hover:text-orange-400" : "text-red-600 hover:text-orange-600"
            }`}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2, rotate: 5 }}
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all duration-300 ${
              isDarkMode ? "text-red-400 hover:text-orange-400" : "text-red-600 hover:text-orange-600"
            }`}
          >
            <FaTwitter />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Home;
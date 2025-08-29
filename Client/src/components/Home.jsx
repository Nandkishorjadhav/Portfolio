import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";
import profilePic from "../assets/myPhoto.webp";
import SplitText from "./SplitText";

const Home = () => {
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

  // Background gradient with #393E46 + #00ADB5 for dark mode
  const bgGradient = isDarkMode
    ? "from-[#393E46] via-[#222831] to-[#00ADB5]"
    : "from-blue-50 via-indigo-50 to-blue-50";

  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-gray-300" : "text-slate-600";

  // Name gradient styling
  const nameGradient = isDarkMode
    ? "from-[#00ADB5] to-[#393E46]"
    : "from-blue-600 to-indigo-600";

  return (
    <section
      id="home"
      className={`min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-br ${bgGradient} ${textColor} px-4 sm:px-6 pt-0 pb-0`}
    >
      {/* Profile Photo on the Left */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div
          className={`relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-8 ${
            isDarkMode
              ? "border-[#00ADB5]/50 hover:border-[#00ADB5]"
              : "border-blue-500/40 hover:border-blue-600"
          } shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,173,181,0.6)]`}
        >
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

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

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-4 mb-10">
          <button
            onClick={() => handleScrollToSection("about")}
            className={`px-6 py-3 bg-gradient-to-r ${
              isDarkMode
                ? "from-[#00ADB5] to-[#393E46] hover:from-[#00ADB5]/80 hover:to-[#222831] shadow-[#00ADB5]/40"
                : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25"
            } text-white rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105`}
          >
            About Me
          </button>
          <button
            onClick={() => handleScrollToSection("projects")}
            className={`px-6 py-3 bg-gradient-to-r ${
              isDarkMode
                ? "from-gray-700 to-[#393E46] hover:from-[#00ADB5]/30 hover:to-[#222831]/80 border-[#00ADB5]/30"
                : "from-gray-200 to-gray-300 hover:from-blue-600/20 hover:to-indigo-600/20 border-blue-500/20 text-slate-800"
            } rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105 border`}
          >
            View Projects
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-3xl mb-5">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "hover:text-[#00ADB5]" : "hover:text-blue-600"
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "hover:text-[#00ADB5]" : "hover:text-indigo-600"
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isDarkMode ? "hover:text-[#00ADB5]" : "hover:text-blue-600"
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
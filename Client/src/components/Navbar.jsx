import React, { useState, useEffect } from "react";
import { 
  FaBars, 
  FaTimes,
  FaMoon,
  FaSun 
} from "react-icons/fa";
import { 
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCollection,
  HiOutlineAcademicCap,
  HiOutlineChatAlt
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = ['home', 'about', 'projects', 'skills','experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        } else {
          console.warn(`Section with id "${section}" not found`);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const navItems = [
    { name: 'Home', id: 'home', icon: <HiOutlineHome /> },
    { name: 'About', id: 'about', icon: <HiOutlineUser /> },
    { name: 'Projects', id: 'projects', icon: <HiOutlineCollection /> },
    { name: 'Skills', id: 'skills', icon: <HiOutlineAcademicCap /> },
    { name: 'Experience', id: 'experience', icon: <HiOutlineAcademicCap /> },
    { name: 'Contact', id: 'contact', icon: <HiOutlineChatAlt /> }
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 60;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      window.scrollTo({
        top: Math.min(offsetTop, maxScroll),
        behavior: "smooth"
      });
    } else {
      console.error(`Section with id "${sectionId}" not found`);
    }
  };

  const navBg = isDarkMode 
    ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20'
    : 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-blue-500/20';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const logoGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? navBg : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <button
              onClick={() => handleNavClick('home')}
              className={`relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-105 transition-all duration-500 ease-out`}
            >
              {/* Abstract Signature Shape */}
              <svg
                className="w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Circle with Gradient */}
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="url(#logoGradient)"
                  className="opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                />
                {/* Signature Path */}
                <path
                  d="M20 70 Q30 50, 50 50 T80 30 Q70 50, 50 70 T20 50 Q30 30, 50 30 T80 50"
                  stroke="url(#logoGradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-draw"
                />
                {/* Orbital Path Animation */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#logoGradient)"
                  strokeWidth="2"
                  strokeDasharray="10 5"
                  className="opacity-0 group-hover:opacity-30 group-hover:animate-spin-slow"
                />
                {/* Particle Sparks */}
                <circle
                  cx="80"
                  cy="20"
                  r="3"
                  fill="white"
                  className="opacity-0 group-hover:opacity-60 group-hover:animate-ping"
                />
                <circle
                  cx="20"
                  cy="80"
                  r="3"
                  fill="white"
                  className="opacity-0 group-hover:opacity-60 group-hover:animate-ping delay-200"
                />
                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: isDarkMode ? '#22d3ee' : '#2563eb' }} />
                    <stop offset="100%" style={{ stopColor: isDarkMode ? '#3b82f6' : '#4f46e5' }} />
                  </linearGradient>
                </defs>
              </svg>
              {/* NKJ Text Overlay */}
              <span
                className={`absolute text-xl sm:text-2xl font-bold text-white drop-shadow-md transform group-hover:scale-110 transition-transform duration-300`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                NKJ
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeSection === item.id
                    ? isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-600/20 hover:to-blue-600/20'
                      : 'text-gray-600 hover:text-slate-800 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-indigo-600/20'
                }`}
              >
                <span className="hidden lg:inline">{item.icon}</span>
                {item.name}
              </button>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'text-yellow-400 hover:bg-yellow-400/20'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode
                  ? 'text-yellow-400 hover:bg-yellow-400/20'
                  : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} hover:opacity-70 focus:outline-none transition-colors duration-300`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            onClick={() => setIsOpen(false)} 
            className="absolute inset-0 backdrop-blur-md bg-black/40"
          />
          <div className={`absolute top-16 left-0 w-full flex flex-col items-center space-y-4 py-6 rounded-b-2xl shadow-2xl transition-all duration-300 z-50 ${
            isDarkMode 
              ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-200 border-t border-cyan-500/20'
              : 'bg-gradient-to-b from-white via-slate-50 to-white text-gray-800 border-t border-blue-500/20'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-10/12 py-3 rounded-xl text-lg font-medium flex items-center justify-center gap-3 transition-all duration-300 shadow-md ${
                  activeSection === item.id
                    ? isDarkMode
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                    : isDarkMode
                      ? 'bg-slate-700 text-white hover:bg-slate-600'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                {item.icon}
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');

        @keyframes draw {
          0% {
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .animate-draw {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw 2s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;





















      // id: 2,
      // title: "Internship Experience",
      // icon: <FaBriefcase />,
      // color: isDarkMode ? "#84CC16" : "#F97316",
      // experiences: [
      //   {
      //     title: "Full Stack Developer Intern",
      //     organization: "Naugaya Technology Pvt Ltd",
      //     duration: "Sept 2025 - Nov 2025",
      //     location: "Remote",
      //     description: "Worked on developing and maintaining web applications using MERN stack. Collaborated with senior developers and participated in code reviews.",
      //     achievements: [
      //       "Working on one big project",
      //       "Improved application performance by 30%"
      //     ],
      //     skills: ["React.js", "Node.js", "MongoDB", "Git", "Express.js"]
      //   },


  ///college club
      // id: 0,
      // title: "College Club Experience",
      // icon: <FaGraduationCap />,
      // color: isDarkMode ? "#06B6D4" : "#4F46E5",
      // experiences: [
      //   {
      //     title: "Web Co-Lead",
      //     organization: "Google Developers Group on Campus (GDG)",
      //     duration: "August 2025 - Present",
      //     location: "SGGSIE&T Nanded, Maharashtra",
      //     description: "Led a team of 5+ students in organizing technical workshops and hackathons. Mentored junior students in web development and organized coding competitions.",
      //   //   achievements: [
      //   //     "Organized 5+ technical workshops with 200+ participants",
      //   //     "Increased club membership by 40%",
      //   //     "Led development of club's official website"
      //   //   ],
      //     skills: ["Leadership", "Event Management", "Mentoring", "MERN Stack"]
      //   },
      //   {
      //     title: "Junior Website Developer",
      //     organization: "Pragyaa",
      //     duration: "Nov 2024 - Feb 2025",
      //     location: "SGGSIE&T Nanded, Maharashtra",
      //     description: "Coordinated programming workshops and coding bootcamps for students. Managed event logistics and collaborated with industry professionals.",
      //     achievements: [
      //       "Conducted 3 successful coding bootcamps",
      //       "Collaborated with 10+ industry mentors",
      //       "Achieved 95% participant satisfaction rate"
      //     ],
      //     skills: ["Event Planning", "Communication", "Python", "JavaScript"]
      //   }
      // ]
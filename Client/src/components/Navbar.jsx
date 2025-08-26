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

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
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
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-2xl font-bold bg-gradient-to-r ${logoGradient} bg-clip-text text-transparent hover:scale-110 transition-all duration-300`}
            >
              NJ
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
          {/* Background Overlay with Blur */}
          <div 
            onClick={() => setIsOpen(false)} 
            className="absolute inset-0 backdrop-blur-md bg-black/40"
          />

          {/* Menu Panel */}
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
    </nav>
  );
};

export default Navbar;
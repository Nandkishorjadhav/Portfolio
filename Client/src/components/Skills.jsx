// Skills.js
import React from "react";
import { 
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaDatabase,
  FaBrain,
  FaExpressJs,
  SiExpress 
} from "react-icons/fa";
import { 
  SiMongodb,
  SiSpringboot,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiDocker
} from "react-icons/si";
import { 
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineDownload,
  HiOutlineTerminal
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Skills = () => {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';
  
  const cardBg = isDarkMode
    ? 'bg-gray-800/50 border-cyan-500/20 shadow-cyan-500/10'
    : 'bg-white/80 border-blue-500/20 shadow-blue-500/10';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-400' : 'text-slate-600';
  const skillItemBg = isDarkMode
    ? 'bg-gray-700/30 border-cyan-500/10 hover:from-cyan-600/10 hover:to-blue-600/10'
    : 'bg-gray-100/50 border-blue-500/10 hover:from-blue-600/10 hover:to-indigo-600/10';
  
  const titleGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiOutlineDesktopComputer />,
      skills: [
        { name: "React", icon: <FaReact />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" },
        { name: "JavaScript", icon: <FaJs />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "HTML5", icon: <SiHtml5 />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" },
        { name: "CSS3", icon: <SiCss3 />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" }
      ]
    },
    {
      title: "Backend",
      icon: <HiOutlineServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "Express.js", icon: <FaExpressJs />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" },
        // { name: "Spring Boot", icon: <SiSpringboot />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "Python", icon: <FaPython />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" },
        { name: "MySQL", icon: <SiMysql />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <HiOutlineCode />,
      skills: [
        { name: "Git", icon: <SiGit />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "Docker", icon: <SiDocker />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" },
        { name: "VS Code", icon: <HiOutlineTerminal />, color: isDarkMode ? "text-blue-400" : "text-indigo-600" },
        { name: "AI/ML", icon: <FaBrain />, color: isDarkMode ? "text-cyan-400" : "text-blue-600" }
      ]
    }
  ];

  return (
    <section id="skills" className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>Skills & Technologies</h2>
        <p className={`text-center ${subTextColor} mb-12`}>Technologies I work with</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className={`${cardBg} backdrop-blur-md border rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>{category.icon}</div>
                <h3 className={`text-xl font-bold ${textColor}`}>{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={`flex items-center gap-3 p-2 ${skillItemBg} rounded-lg hover:bg-gradient-to-r transition-colors border`}>
                    <div className={`text-xl ${skill.color}`}>{skill.icon}</div>
                    <span className={isDarkMode ? 'text-gray-300' : 'text-slate-700'}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25'
              : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25'
          } text-white rounded-full transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}>
            <HiOutlineDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
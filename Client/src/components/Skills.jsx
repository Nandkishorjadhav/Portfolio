import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaDatabase,
  FaBrain,
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
  SiDocker,
  SiExpress,
} from "react-icons/si";
import {
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineDownload,
  HiOutlineTerminal,
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";
import resume from '../assets/Resume.pdf'

const Skills = () => {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? "from-slate-900 via-cyan-900 to-slate-900"
    : "from-blue-50 via-indigo-50 to-blue-50";

  const cardBg = isDarkMode
    ? "bg-gray-800/50 border-cyan-500/20 shadow-cyan-500/10"
    : "bg-white/80 border-blue-500/20 shadow-blue-500/10";

  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-slate-600";
  const skillItemBg = isDarkMode
    ? "bg-gray-700/30 border-cyan-500/10 hover:from-cyan-600/10 hover:to-blue-600/10"
    : "bg-gray-100/50 border-blue-500/10 hover:from-blue-600/10 hover:to-indigo-600/10";

  const titleGradient = isDarkMode
    ? "from-cyan-400 to-blue-400"
    : "from-blue-600 to-indigo-600";

  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiOutlineDesktopComputer />,
      skills: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-500" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
      ],
    },
    {
      title: "Backend",
      icon: <HiOutlineServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
        // { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-indigo-500" },
      ],
    },
    {
      title: "Tools & Others",
      icon: <HiOutlineCode />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-orange-500" },
        // { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
        { name: "VS Code", icon: <HiOutlineTerminal />, color: "text-cyan-400" },
        { name: "AI/ML", icon: <FaBrain />, color: "text-pink-500" },
      ],
    },
    {
      title: "Programming Languages",
      icon: <HiOutlineServer />,
      skills: [
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" },
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        // { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
      ],
    },
  ];

  return (
    <section id="skills" className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold text-center bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}
        >
          Skills & Technologies
        </h2>
        <p className={`text-center ${subTextColor} mb-12`}>Technologies I work with</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${cardBg} backdrop-blur-md border rounded-xl p-6 shadow-lg hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`text-2xl bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-bold ${textColor}`}>{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`flex items-center gap-3 p-2 ${skillItemBg} rounded-lg hover:bg-gradient-to-r transition-colors border`}
                  >
                    <div className={`text-xl ${skill.color}`}>{skill.icon}</div>
                    <span className={isDarkMode ? "text-gray-300" : "text-slate-700"}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={resume}
            download="Resume.pdf"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
              isDarkMode
                ? "from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25"
                : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25"
            } text-white rounded-full transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}
          >
            <HiOutlineDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
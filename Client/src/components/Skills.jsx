// Skills.js
import React from "react";
import { 
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaJs,
  FaDatabase,
  FaBrain
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

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiOutlineDesktopComputer />,
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-400" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" }
      ]
    },
    {
      title: "Backend",
      icon: <HiOutlineServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
        { name: "Java", icon: <FaJava />, color: "text-red-400" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-500" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-400" }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-500" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <HiOutlineCode />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-orange-400" },
        { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
        { name: "VS Code", icon: <HiOutlineTerminal />, color: "text-blue-500" },
        { name: "AI/ML", icon: <FaBrain />, color: "text-purple-400" }
      ]
    }
  ];
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <HiOutlineDesktopComputer />,
      skills: [
        { name: "React", icon: <FaReact />, color: "text-purple-400" },
        { name: "JavaScript", icon: <FaJs />, color: "text-pink-400" },
        { name: "HTML5", icon: <SiHtml5 />, color: "text-purple-400" },
        { name: "CSS3", icon: <SiCss3 />, color: "text-pink-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-purple-400" }
      ]
    },
    {
      title: "Backend",
      icon: <HiOutlineServer />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-pink-400" },
        { name: "Java", icon: <FaJava />, color: "text-purple-400" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-pink-400" },
        { name: "Python", icon: <FaPython />, color: "text-purple-400" }
      ]
    },
    {
      title: "Database",
      icon: <FaDatabase />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-purple-400" },
        { name: "MySQL", icon: <SiMysql />, color: "text-pink-400" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-purple-400" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <HiOutlineCode />,
      skills: [
        { name: "Git", icon: <SiGit />, color: "text-pink-400" },
        { name: "Docker", icon: <SiDocker />, color: "text-purple-400" },
        { name: "VS Code", icon: <HiOutlineTerminal />, color: "text-pink-400" },
        { name: "AI/ML", icon: <FaBrain />, color: "text-purple-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">Skills & Technologies</h2>
        <p className="text-center text-gray-400 mb-12">Technologies I work with</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-md border border-purple-500/20 rounded-xl p-6 shadow-lg shadow-purple-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 p-2 bg-gray-700/30 rounded-lg hover:bg-gradient-to-r hover:from-purple-600/10 hover:to-pink-600/10 transition-colors border border-purple-500/10">
                    <div className={`text-xl ${skill.color}`}>{skill.icon}</div>
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:transform hover:scale-105 shadow-lg shadow-purple-500/25">
            <HiOutlineDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};
};

export default Skills;
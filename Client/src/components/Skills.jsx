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
  SiDocker,
  SiVisualstudiocode
} from "react-icons/si";
import { 
  HiOutlineDesktopComputer,
  HiOutlineServer,
  HiOutlineCode,
  HiOutlineDownload
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
        { name: "VS Code", icon: <SiVisualstudiocode />, color: "text-blue-500" },
        { name: "AI/ML", icon: <FaBrain />, color: "text-purple-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Skills & Technologies</h2>
        <p className="text-center text-gray-400 mb-12">Technologies I work with</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl text-indigo-400">{category.icon}</div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3 p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
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
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all duration-300 hover:transform hover:scale-105">
            <HiOutlineDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Skills;
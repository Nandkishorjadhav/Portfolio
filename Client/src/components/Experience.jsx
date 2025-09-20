import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaGraduationCap, 
  FaTrophy, 
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaChevronRight,
  FaAward,
  FaUsers,
  FaCode
} from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const Experience = () => {
  const { isDarkMode } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);
  const [visibleExperiences, setVisibleExperiences] = useState(new Set());
  const observerRef = useRef();

  // Color palette
  const bgGradient = isDarkMode
    ? "from-[#0F172A] via-[#06B6D4] to-[#0F172A]"
    : "from-[#F9FAFB] via-[#4F46E5] to-[#06B6D4]";

  const textColor = isDarkMode ? "text-[#E2E8F0]" : "text-[#1E293B]";
  const subTextColor = isDarkMode ? "text-[#06B6D4]" : "text-[#4F46E5]";
  const cardBg = isDarkMode 
    ? "bg-[#1e293b]/80 border-[#06B6D4]/30" 
    : "bg-white/90 border-[#4F46E5]/20";
  const titleGradient = isDarkMode
    ? "from-[#06B6D4] to-[#4F46E5]"
    : "from-[#4F46E5] to-[#EC4899]";

  const categories = [
    {
      id: 0,
      title: "College Club Experience",
      icon: <FaGraduationCap />,
      color: isDarkMode ? "#06B6D4" : "#4F46E5",
      experiences: [
        {
          title: "Web Co-Lead",
          organization: "Google Developers Group on Campus (GDG)",
          duration: "August 2025 - Present",
          location: "SGGSIE&T Nanded, Maharashtra",
          description: "Led a team of 5+ students in organizing technical workshops and hackathons. Mentored junior students in web development and organized coding competitions.",
          achievements: [
            "Organized 5+ technical workshops with 200+ participants",
            "Increased club membership by 40%",
            "Led development of club's official website"
          ],
          skills: ["Leadership", "Event Management", "Mentoring", "MERN Stack"]
        },
        {
          title: "Junior Website Developer",
          organization: "Pragyaa",
          duration: "Nov 2024 - Feb 2025",
          location: "SGGSIE&T Nanded, Maharashtra",
          description: "Coordinated programming workshops and coding bootcamps for students. Managed event logistics and collaborated with industry professionals.",
          achievements: [
            "Conducted 3 successful coding bootcamps",
            "Collaborated with 10+ industry mentors",
            "Achieved 95% participant satisfaction rate"
          ],
          skills: ["Event Planning", "Communication", "Python", "JavaScript"]
        }
      ]
    },
    // {
    //   id: 1,
    //   title: "Hackathon Experience",
    //   icon: <FaTrophy />,
    //   color: isDarkMode ? "#EC4899" : "#EC4899",
    //   experiences: [
    //     {
    //       title: "1st Prize Winner",
    //       organization: "HackNova 2024",
    //       duration: "March 2024",
    //       location: "Mumbai, Maharashtra",
    //       description: "Developed an innovative e-commerce platform with AI-powered recommendation system. Led a team of 4 developers in a 48-hour hackathon.",
    //       achievements: [
    //         "1st place among 150+ teams",
    //         "₹50,000 prize money",
    //         "Featured in college newsletter"
    //       ],
    //       skills: ["React.js", "Node.js", "MongoDB", "AI/ML", "Team Leadership"]
    //     },
    //     {
    //       title: "Finalist",
    //       organization: "Smart India Hackathon",
    //       duration: "September 2023",
    //       location: "Online",
    //       description: "Developed a solution for smart city management using IoT and machine learning. Reached final round among top 100 teams nationwide.",
    //       achievements: [
    //         "Top 100 teams nationally",
    //         "Mentorship from industry experts",
    //         "Certificate of Excellence"
    //       ],
    //       skills: ["IoT", "Machine Learning", "Python", "Data Analytics"]
    //     }
    //   ]
    // },
    {
      id: 2,
      title: "Internship Experience",
      icon: <FaBriefcase />,
      color: isDarkMode ? "#84CC16" : "#F97316",
      experiences: [
        {
          title: "Full Stack Developer Intern",
          organization: "Naugaya Technology Pvt Ltd",
          duration: "Sept 2025 - Nov 2025",
          location: "Remote",
          description: "Worked on developing and maintaining web applications using MERN stack. Collaborated with senior developers and participated in code reviews.",
          achievements: [
            "Working on one big project",
            "Improved application performance by 30%",
            "Collaborated with 5+ senior developers"
          ],
          skills: ["React.js", "Node.js", "MongoDB", "Git", "Express.js"]
        },
        // {
        //   title: "Frontend Developer Intern",
        //   organization: "StartupHub",
        //   duration: "Dec 2023 - Feb 2024",
        //   location: "Remote",
        //   description: "Focused on frontend development using React.js and implementing responsive designs. Worked closely with UI/UX team to create user-friendly interfaces.",
        //   achievements: [
        //     "Built 5+ responsive web pages",
        //     "Implemented pixel-perfect designs",
        //     "Reduced page load time by 25%"
        //   ],
        //   skills: ["React.js", "Tailwind CSS", "JavaScript", "Figma", "Responsive Design"]
        // }
      ]
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleExperiences(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  // Animation variants
  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: -100,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const divingVariants = {
    hidden: { 
      opacity: 0, 
      y: -50,
      rotate: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <section 
        id="experience" 
        className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6`}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>
              My Experience Journey
            </h2>
            <p className={`text-xl ${subTextColor} mb-8`}>
              From college clubs to internships - my growth story
            </p>
          </motion.div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r text-white shadow-lg`
                    : `${cardBg} ${textColor} hover:scale-105`
                }`}
                style={{
                  background: activeCategory === index 
                    ? `linear-gradient(to right, ${category.color}, #4F46E5)` 
                    : undefined
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{category.icon}</span>
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Animated Timeline Line */}
            <motion.div
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-[#06B6D4] to-[#4F46E5] origin-top"
              style={{ height: "100%" }}
              variants={timelineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Experience Cards */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {categories[activeCategory].experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    ref={(el) => {
                      if (el) {
                        el.dataset.index = index;
                        observerRef.current?.observe(el);
                      }
                    }}
                    className="relative pl-20"
                    variants={cardVariants}
                    initial="hidden"
                    animate={visibleExperiences.has(index) ? "visible" : "hidden"}
                  >
                    {/* Timeline Node */}
                    <motion.div
                      className="absolute left-6 top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg"
                      style={{
                        background: `linear-gradient(to right, ${categories[activeCategory].color}, #4F46E5)`
                      }}
                      variants={divingVariants}
                      initial="hidden"
                      animate={visibleExperiences.has(index) ? "visible" : "hidden"}
                    />

                    {/* Experience Card */}
                    <motion.div
                      className={`${cardBg} backdrop-blur-md border rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300`}
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className={`text-xl font-bold ${textColor}`}>
                              {exp.title}
                            </h3>
                            <FaChevronRight className={`text-sm ${subTextColor}`} />
                          </div>
                          
                          <p className={`text-lg font-semibold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-3`}>
                            {exp.organization}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm">
                            <div className={`flex items-center gap-1 ${subTextColor}`}>
                              <FaCalendarAlt />
                              {exp.duration}
                            </div>
                            <div className={`flex items-center gap-1 ${subTextColor}`}>
                              <FaMapMarkerAlt />
                              {exp.location}
                            </div>
                          </div>

                          <p className={`${textColor} mb-4 leading-relaxed`}>
                            {exp.description}
                          </p>

                          {/* Achievements - Fixed the undefined error */}
                          {exp.achievements && exp.achievements.length > 0 && (
                            <div className="mb-4">
                              <h4 className={`font-semibold ${textColor} mb-2 flex items-center gap-2`}>
                                <FaAward className={subTextColor} />
                                Key Achievements
                              </h4>
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, achIndex) => (
                                  <li key={achIndex} className={`${subTextColor} text-sm flex items-start gap-2`}>
                                    <span className="text-xs mt-1.5">•</span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Skills */}
                          <div>
                            <h4 className={`font-semibold ${textColor} mb-2 flex items-center gap-2`}>
                              <FaCode className={subTextColor} />
                              Skills Used
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${cardBg} border border-[#06B6D4]/20 ${subTextColor}`}
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Stats Section */}
          <motion.div
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* <div className={`${cardBg} backdrop-blur-md border rounded-xl p-6 text-center`}>
              <div className={`text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}>
                5+
              </div>
              <p className={subTextColor}>Total Experiences</p>
            </div>
            <div className={`${cardBg} backdrop-blur-md border rounded-xl p-6 text-center`}>
              <div className={`text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}>
                2
              </div>
              <p className={subTextColor}>Hackathon Wins</p>
            </div>
            <div className={`${cardBg} backdrop-blur-md border rounded-xl p-6 text-center`}>
              <div className={`text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}>
                5+
              </div>
              <p className={subTextColor}>Months Internship</p>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Custom CSS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Experience;
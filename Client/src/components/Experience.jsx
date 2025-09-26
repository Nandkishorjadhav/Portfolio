import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
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
  const [visibleExperiences, setVisibleExperiences] = useState(new Set([0, 1])); // Show first two by default
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const observerRef = useRef();
  const controls = useAnimation();

  // Color palette
  const bgGradient = isDarkMode
    ? "from-[#0F172A] via-[#06B6D4] to-[#0F172A]"
    : isMobile 
      ? "from-white to-white"
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
      title: "College Club",
      shortTitle: "Club", // For mobile
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
    {
      id: 1,
      title: "Internship",
      shortTitle: "Internship",
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
        }
      ]
    }
  ];

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
      { threshold: 0.2 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  // Reset visible experiences when category changes
  useEffect(() => {
    setVisibleExperiences(new Set([0])); // Show first experience immediately
  }, [activeCategory]);

  // Animation variants - responsive to device type
  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: { 
      scaleY: 1,
      transition: { 
        duration: isMobile ? 1 : 1.5,
        ease: "easeInOut"
      }
    }
  };

  const cardVariants = isMobile ? {
    hidden: { 
      opacity: 0, 
      rotateY: -90,
      x: -100,
      scale: 0.7
    },
    visible: { 
      opacity: 1, 
      rotateY: 0,
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.1
      }
    }
  } : {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1
      }
    }
  };

  const divingVariants = isMobile ? {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -180
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.4
      }
    }
  } : {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Mobile-specific animations
  const mobileFloatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!isMobile || !touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0 && activeCategory < categories.length - 1) {
        setActiveCategory(prev => prev + 1);
        controls.start({
          x: [-20, 0],
          opacity: [0.7, 1],
          transition: { duration: 0.3 }
        });
      } else if (diff < 0 && activeCategory > 0) {
        setActiveCategory(prev => prev - 1);
        controls.start({
          x: [20, 0],
          opacity: [0.7, 1],
          transition: { duration: 0.3 }
        });
      }
    }
    setTouchStart(null);
  };

  return (
    <section 
      id="experience" 
      className={`min-h-screen bg-gradient-to-br ${bgGradient} py-16 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>
            My Experience Journey
          </h2>
          <p className={`text-lg sm:text-xl ${subTextColor} mb-8 px-4`}>
            From college clubs to internships - my growth story
            {isMobile && (
              <motion.span 
                className="block text-sm mt-2 opacity-75"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Swipe left or right to switch categories
              </motion.span>
            )}
          </p>
        </motion.div>

        {/* Category Selector - Improved for mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                activeCategory === index
                  ? `text-white shadow-lg scale-105`
                  : `${cardBg} ${textColor} hover:scale-105`
              }`}
              style={{
                background: activeCategory === index 
                  ? `linear-gradient(to right, ${category.color}, #4F46E5)` 
                  : undefined
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={isMobile ? mobileFloatingVariants : {}}
              animate={isMobile && activeCategory === index ? "animate" : ""}
            >
              <motion.span 
                className="text-base sm:text-lg"
                animate={isMobile && activeCategory === index ? {
                  rotate: [0, 360],
                  transition: { duration: 2, repeat: Infinity, ease: "linear" }
                } : {}}
              >
                {category.icon}
              </motion.span>
              <span className="hidden sm:inline">{category.title}</span>
              <span className="sm:hidden">{category.shortTitle}</span>
            </motion.button>
          ))}
        </div>

        {/* Timeline Container - Enhanced for mobile */}
        <motion.div 
          className="relative px-2 sm:px-0"
          animate={controls}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Animated Timeline Line - Responsive positioning */}
          <motion.div
            className="absolute left-4 sm:left-8 top-0 w-0.5 sm:w-1 bg-gradient-to-b from-[#06B6D4] to-[#4F46E5] origin-top"
            style={{ height: "100%" }}
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Mobile pulse indicator */}
          {isMobile && (
            <motion.div
              className="absolute left-3 sm:left-7 top-0 w-2 h-2 bg-[#06B6D4] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}

          {/* Experience Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="space-y-6 sm:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
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
                  className="relative pl-12 sm:pl-20"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible" // Always show, don't wait for intersection
                  transition={{ delay: index * 0.2 }} // Stagger animation
                  whileInView={isMobile ? {
                    scale: [0.95, 1.02, 1],
                    transition: { duration: 0.3 }
                  } : {}}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Timeline Node - Responsive positioning */}
                  <motion.div
                    className="absolute left-2.5 sm:left-6 top-4 sm:top-6 w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 sm:border-4 border-white shadow-lg"
                    style={{
                      background: `linear-gradient(to right, ${categories[activeCategory].color}, #4F46E5)`
                    }}
                    variants={divingVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.3 }}
                    whileHover={isMobile ? {
                      scale: 1.3,
                      transition: { duration: 0.2 }
                    } : {}}
                  />

                  {/* Experience Card - Improved mobile layout */}
                  <motion.div
                    className={`${cardBg} backdrop-blur-md border rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg sm:shadow-xl hover:shadow-2xl transition-all duration-300`}
                    whileHover={{ scale: isMobile ? 1.02 : 1.01, y: -2 }}
                    whileTap={isMobile ? { scale: 0.98 } : {}}
                  >
                    <div className="flex flex-col gap-3 sm:gap-4">
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                          <h3 className={`text-lg sm:text-xl font-bold ${textColor}`}>
                            {exp.title}
                          </h3>
                          <FaChevronRight className={`text-xs sm:text-sm ${subTextColor} hidden sm:inline`} />
                        </div>
                        
                        <p className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-3 leading-tight`}>
                          {exp.organization}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 text-xs sm:text-sm">
                          <motion.div 
                            className={`flex items-center gap-1 ${subTextColor}`}
                            whileHover={isMobile ? { x: 5 } : {}}
                          >
                            <FaCalendarAlt />
                            <span>{exp.duration}</span>
                          </motion.div>
                          <motion.div 
                            className={`flex items-center gap-1 ${subTextColor}`}
                            whileHover={isMobile ? { x: 5 } : {}}
                          >
                            <FaMapMarkerAlt />
                            <span>{exp.location}</span>
                          </motion.div>
                        </div>

                        <p className={`${textColor} mb-4 text-sm sm:text-base leading-relaxed`}>
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        {exp.achievements && exp.achievements.length > 0 && (
                          <div className="mb-4">
                            <h4 className={`font-semibold ${textColor} mb-2 flex items-center gap-2 text-sm sm:text-base`}>
                              <FaAward className={`${subTextColor} text-sm`} />
                              Key Achievements
                            </h4>
                            <ul className="space-y-1">
                              {exp.achievements.map((achievement, achIndex) => (
                                <li key={achIndex} className={`${subTextColor} text-xs sm:text-sm flex items-start gap-2`}>
                                  <span className="text-xs mt-1 flex-shrink-0">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Skills */}
                        <div>
                          <h4 className={`font-semibold ${textColor} mb-2 flex items-center gap-2 text-sm sm:text-base`}>
                            <FaCode className={`${subTextColor} text-sm`} />
                            Skills Used
                          </h4>
                          <div className="flex flex-wrap gap-1 sm:gap-2">
                            {exp.skills.map((skill, skillIndex) => (
                              <motion.span
                                key={skillIndex}
                                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${cardBg} border border-[#06B6D4]/20 ${subTextColor}`}
                                initial={isMobile ? { scale: 0, rotate: -180 } : {}}
                                animate={isMobile ? { scale: 1, rotate: 0 } : {}}
                                transition={isMobile ? { 
                                  delay: index * 0.2 + skillIndex * 0.05 + 0.6,
                                  type: "spring",
                                  stiffness: 200
                                } : {}}
                                whileHover={isMobile ? { scale: 1.1, y: -2 } : {}}
                                whileTap={isMobile ? { scale: 0.95 } : {}}
                              >
                                {skill}
                              </motion.span>
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
        </motion.div>

        {/* Stats Section - Enhanced for mobile */}
        <motion.div
          className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div 
            className={`${cardBg} backdrop-blur-md border rounded-xl p-4 sm:p-6 text-center`}
            whileHover={isMobile ? { 
              scale: 1.05,
              rotateY: 5,
              transition: { duration: 0.3 }
            } : {}}
            whileTap={isMobile ? { scale: 0.95 } : {}}
          >
            <motion.div 
              className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}
              animate={isMobile ? {
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity }
              } : {}}
            >
              3+
            </motion.div>
            <p className={`${subTextColor} text-sm sm:text-base`}>Total Experiences</p>
          </motion.div>
          <motion.div 
            className={`${cardBg} backdrop-blur-md border rounded-xl p-4 sm:p-6 text-center`}
            whileHover={isMobile ? { 
              scale: 1.05,
              rotateY: -5,
              transition: { duration: 0.3 }
            } : {}}
            whileTap={isMobile ? { scale: 0.95 } : {}}
          >
            <motion.div 
              className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}
              animate={isMobile ? {
                scale: [1, 1.1, 1],
                transition: { duration: 2, repeat: Infinity, delay: 0.5 }
              } : {}}
            >
              3+
            </motion.div>
            <p className={`${subTextColor} text-sm sm:text-base`}>Months Experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
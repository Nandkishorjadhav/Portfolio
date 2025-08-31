import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaCode, FaBrain, FaLaptopCode, FaRocket, FaHeart } from "react-icons/fa";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

const About = () => {
  const { isDarkMode } = useTheme();
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-slate-600';
  const titleGradient = isDarkMode
    ? 'from-cyan-400 to-blue-400'
    : 'from-blue-600 to-indigo-600';

  const sections = [
    {
      icon: <FaRocket className="text-4xl sm:text-5xl" />,
      title: "The Journey",
      content: "Started as a curious mind exploring the endless possibilities of technology. Every line of code is a step towards building something meaningful.",
      highlight: "Passionate Explorer"
    },
    {
      icon: <FaCode className="text-4xl sm:text-5xl" />,
      title: "The Craft",
      content: "Specializing in Full-Stack Development with React, Node.js. Creating seamless user experiences from concept to deployment.",
      highlight: "Full-Stack Developer"
    },
    {
      icon: <FaBrain className="text-4xl sm:text-5xl" />,
      title: "The Vision",
      content: "Diving deep into Machine Learning and AI to build intelligent solutions that make a real difference in people's lives.",
      highlight: "AI Enthusiast"
    },
    {
      icon: <FaHeart className="text-4xl sm:text-5xl" />,
      title: "The Impact",
      content: "Building projects like quiz apps, chatbots that solve real problems. Every project is an opportunity to learn and create value.",
      highlight: "Problem Solver"
    }
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    const canvasSize = window.innerWidth < 640 ? 280 : window.innerWidth < 1024 ? 320 : 360;
    renderer.setSize(canvasSize, canvasSize);
    renderer.setClearColor(0x000000, 0);
    
    mountRef.current.innerHTML = '';
    mountRef.current.appendChild(renderer.domElement);

    const shapes = [];
    
    const torusGeometry = new THREE.TorusGeometry(1, 0.3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x00ffff : 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    shapes.push({ mesh: torus, speed: { x: 0.01, y: 0.02, z: 0.01 } });

    const icosaGeometry = new THREE.IcosahedronGeometry(0.8, 0);
    const icosaMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x22d3ee : 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const icosa = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosa.position.set(2, 1, -1);
    shapes.push({ mesh: icosa, speed: { x: 0.02, y: 0.01, z: 0.015 } });

    const octaGeometry = new THREE.OctahedronGeometry(0.6);
    const octaMaterial = new THREE.MeshBasicMaterial({
      color: isDarkMode ? 0x06b6d4 : 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const octa = new THREE.Mesh(octaGeometry, octaMaterial);
    octa.position.set(-2, -1, 1);
    shapes.push({ mesh: octa, speed: { x: 0.015, y: 0.025, z: 0.02 } });

    shapes.forEach(shape => scene.add(shape.mesh));
    camera.position.z = 5;

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      
      const speedMultiplier = isHovered ? 2.5 : 1;
      
      shapes.forEach(shape => {
        shape.mesh.rotation.x += shape.speed.x * speedMultiplier;
        shape.mesh.rotation.y += shape.speed.y * speedMultiplier;
        shape.mesh.rotation.z += shape.speed.z * speedMultiplier;
      });
      
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDarkMode, isHovered]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection(prev => (prev + 1) % sections.length);
    }, 7500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="about" // Added ID for Navbar integration
      className={`min-h-screen bg-gradient-to-br ${bgGradient} py-8 sm:py-12 lg:py-16 px-4 relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-cyan-400 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border-2 border-blue-400 rotate-45"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-indigo-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="relative inline-block">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black ${textColor} mb-4 relative`}>
              About
            </h1>
            <div className={`absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r ${titleGradient} rounded-full transform -skew-x-12`}></div>
          </div>
          <p className={`text-base sm:text-lg md:text-xl ${subTextColor} mt-4 sm:mt-6 lg:mt-8 max-w-2xl mx-auto px-4`}>
            Discovering the art of turning imagination into reality through code
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-start">
          <div className="w-full order-2 lg:order-1">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex space-x-3 justify-center lg:justify-start">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                      currentSection === index 
                        ? `bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-400' : 'from-blue-600 to-indigo-600'}` 
                        : `${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-opacity-70`
                    }`}
                  />
                ))}
              </div>

              <div className={`p-6 sm:p-8 rounded-2xl sm:rounded-3xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-800/90 to-cyan-900/30 backdrop-blur-lg border border-cyan-500/20' 
                  : 'bg-gradient-to-br from-white/90 to-blue-50/80 backdrop-blur-lg border border-blue-200/30'
              } shadow-2xl transition-all duration-700`}>
                
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                  <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br ${
                    isDarkMode ? 'from-cyan-500/20 to-blue-500/20' : 'from-blue-500/20 to-indigo-500/20'
                  } flex-shrink-0`}>
                    <div className={`bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
                      {sections[currentSection].icon}
                    </div>
                  </div>
                  <div className="text-center sm:text-left">
                    <div className={`text-sm font-semibold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-1`}>
                      {sections[currentSection].highlight}
                    </div>
                    <h2 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>
                      {sections[currentSection].title}
                    </h2>
                  </div>
                </div>

                <p className={`text-base sm:text-lg ${subTextColor} leading-relaxed text-center sm:text-left`}>
                  {sections[currentSection].content}
                </p>

                <div className={`mt-6 sm:mt-8 h-1 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden`}>
                  <div 
                    className={`h-full bg-gradient-to-r ${titleGradient} rounded-full transition-all duration-4000 ease-linear`}
                    style={{ width: '100%', animation: 'progress 4s linear infinite' }}
                  />
                </div>
              </div>

              {/* <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-cyan-900/20 border border-cyan-500/10' 
                    : 'bg-gradient-to-br from-white/80 to-blue-50/60 border border-blue-200/20'
                } backdrop-blur-lg text-center`}>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
                    3+
                  </div>
                  <div className={`text-xs sm:text-sm ${subTextColor} font-medium`}>
                    Years Learning
                  </div>
                </div>
                <div className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/60 to-blue-900/20 border border-blue-500/10' 
                    : 'bg-gradient-to-br from-white/80 to-indigo-50/60 border border-indigo-200/20'
                } backdrop-blur-lg text-center`}>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>
                    10+
                  </div>
                  <div className={`text-xs sm:text-sm ${subTextColor} font-medium`}>
                    Projects Built
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="w-full flex flex-col items-center space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div
              className="relative group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                ref={mountRef} 
                className={`rounded-2xl sm:rounded-3xl overflow-hidden ${
                  isDarkMode 
                    ? 'bg-gradient-to-br from-slate-800/40 to-cyan-900/20' 
                    : 'bg-gradient-to-br from-blue-100/40 to-indigo-100/20'
                } backdrop-blur-sm border ${
                  isDarkMode ? 'border-cyan-500/20' : 'border-blue-200/30'
                } group-hover:scale-105 transition-all duration-500 shadow-2xl ${
                  isDarkMode 
                    ? 'group-hover:shadow-cyan-500/20' 
                    : 'group-hover:shadow-blue-500/20'
                }`}
              />
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 px-4">
              <h3 className={`text-xl sm:text-2xl font-bold ${textColor}`}>
                Let's Build Something Amazing
              </h3>
              <a
                href="https://github.com/Nandkishorjadhav"
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'
                    : 'from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500'
                } text-white text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl ${
                  isDarkMode ? 'hover:shadow-cyan-500/30' : 'hover:shadow-blue-500/30'
                }`}
              >
                <FaGithub className="text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300" />
                <span className="whitespace-nowrap">Explore My Work</span>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0% }
          100% { width: 100% }
        }
      `}</style>
    </section>
  );
};

export default About;
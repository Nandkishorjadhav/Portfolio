import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import * as THREE from "three";
import { useTheme } from "./ThemeProvider";

const About = () => {
  const { isDarkMode } = useTheme();
  const mountRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-slate-600';
  const titleGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  useEffect(() => {
    // Three.js setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ 
      color: isDarkMode ? 0x00ffff : 0x0000ff,
      wireframe: true 
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 2;

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += isHovered ? 0.05 : 0.01;
      cube.rotation.y += isHovered ? 0.05 : 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isDarkMode, isHovered]);

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bgGradient} p-6 pt-20`}>
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left: About Text */}
        <div className="md:w-1/2 p-6 text-left">
          <h1 className={`text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>About Me</h1>
          <p className={`text-lg ${subTextColor} mb-6 leading-relaxed`}>
            Hi 👋, I'm <span className={`font-semibold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent`}>Nandkishor Jadhav</span>,
            a passionate developer exploring <b className={textColor}>Full-Stack Web Development</b>,
            <b className={textColor}>Machine Learning</b>, and <b className={textColor}>Creative Coding</b>.
            I love building interactive websites with React, Node.js, and Spring Boot, diving into AI and Data Science,
            and creating impactful projects like quiz apps, chatbots, and CMS.
          </p>
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${
              isDarkMode 
                ? 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700'
                : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
            } text-white text-lg rounded-full transition duration-300 hover:transform hover:scale-105`}
          >
            <FaGithub />
            Visit My GitHub
          </a>
        </div>
        {/* Right: Three.js Canvas */}
        <div 
          className="md:w-1/2 p-6 flex justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={mountRef} />
        </div>
      </div>
    </section>
  );
};

export default About;
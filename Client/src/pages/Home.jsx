const Home = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 via-purple-900 to-black text-white px-6 pt-16">
      {/* Hero Content */}
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-indigo-400">Nandkishor Jadhav</span> 👋
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          A passionate <span className="font-semibold text-indigo-300">Full-Stack Developer</span> 🚀 
          exploring <b>Web Development</b>, <b>AI/ML</b>, and building impactful projects.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105">
            About Me
          </button>
          <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 rounded-full text-lg shadow-lg transition duration-300 hover:transform hover:scale-105">
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-3xl">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {/* Hero Image / Illustration */}
      <div className="mt-12">
        <div className="w-72 sm:w-96 h-72 sm:h-96 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
          <span className="text-6xl">👨‍💻</span>
        </div>
      </div>
    </section>
  );
};
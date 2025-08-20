const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 pt-20">
      <div className="bg-white shadow-2xl rounded-2xl max-w-3xl w-full p-10 text-center transform transition duration-500 hover:scale-105">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
        
        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Hi 👋, I'm <span className="font-semibold text-indigo-600">Nandkishor Jadhav</span>,
          a passionate developer exploring <b>Full-Stack Web Development</b>,
          <b>Machine Learning</b>, and <b>Creative Coding</b>.
        </p>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">💻 Web Dev</h3>
            <p className="text-sm text-white mt-2">Building interactive websites with React, Node.js & Spring Boot.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">🤖 AI & ML</h3>
            <p className="text-sm text-white mt-2">Exploring AI, Data Science & Machine Learning applications.</p>
          </div>
          <div className="p-6 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
            <h3 className="text-xl font-semibold text-white">🚀 Projects</h3>
            <p className="text-sm text-white mt-2">Creating impactful projects like quiz apps, chatbots, and CMS.</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-10">
          <a
            href="https://github.com/Nandkishorjadhav"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 hover:transform hover:scale-105"
          >
            🌐 Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// Projects Component (New)
const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project {project}</h3>
              <p className="text-gray-300 mb-4">Amazing project description goes here...</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

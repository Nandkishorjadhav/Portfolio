const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-12">
          Let's build something amazing together! 🚀
        </p>
        
        <div className="flex justify-center gap-6 text-4xl mb-12">
          <a href="https://github.com/Nandkishorjadhav" className="text-white hover:text-indigo-400 transition-colors">
            <FaGithub />
          </a>
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" className="text-white hover:text-sky-400 transition-colors">
            <FaTwitter />
          </a>
        </div>
        
        <button className="px-8 py-4 bg-indigo-600 text-white text-lg rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 hover:transform hover:scale-105">
          📧 Say Hello
        </button>
      </div>
    </section>
  );
};

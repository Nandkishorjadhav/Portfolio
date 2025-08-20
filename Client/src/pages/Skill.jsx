const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['React', 'Node.js', 'Python', 'Java', 'JavaScript', 'MongoDB', 'AI/ML', 'Spring Boot'].map((skill, index) => (
            <div key={skill} className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-2">⚡</div>
              <h3 className="text-white font-semibold">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
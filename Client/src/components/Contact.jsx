import React, { useState, useEffect  } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import axios from "axios";

const Contact = () => {
  const { isDarkMode } = useTheme(); // Add useTheme hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (formData.name && formData.email && formData.message) {
      try {
        await axios.post("http://localhost:3000/api/contact", formData);
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        setStatus("❌ Failed to send message. Please try again.");
        console.error(err);
      }
    } else {
      setStatus("⚠️ Please fill in all fields.");
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      link: "https://github.com/Nandkishorjadhav",
      label: "GitHub",
      hoverClass: isDarkMode ? "hover:text-gray-900 hover:bg-gray-100" : "hover:text-gray-900 hover:bg-gray-200",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      link: "https://www.linkedin.com/in/nandkishor-jadhav-80044b300",
      label: "LinkedIn",
      hoverClass: isDarkMode ? "hover:text-blue-600 hover:bg-blue-50" : "hover:text-blue-700 hover:bg-blue-100",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      link: "https://twitter.com/your-username",
      label: "Twitter",
      hoverClass: isDarkMode ? "hover:text-cyan-500 hover:bg-cyan-50" : "hover:text-cyan-600 hover:bg-cyan-100",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      value: "nandupatiljadhav660@gmail.com",
      link: "mailto:nandupatiljadhav660@gmail.com",
      gradientClass: isDarkMode ? "from-cyan-400 to-blue-400" : "from-blue-600 to-indigo-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      value: "Nanded, Maharashtra, India",
      link: "https://www.google.com/maps/place/Nanded,+Maharashtra,+India/@19.1382513,77.3010339,13z",
      gradientClass: isDarkMode ? "from-blue-400 to-indigo-400" : "from-blue-600 to-indigo-600",
    },
  ];

  // Define theme-based styles
  const bgGradient = isDarkMode
    ? "from-slate-900 via-cyan-900 to-slate-900"
    : "from-blue-50 via-indigo-50 to-blue-50";
  const cardBg = isDarkMode
    ? "bg-gray-800/50 border-cyan-500/20 shadow-cyan-500/10"
    : "bg-white/80 border-blue-500/20 shadow-blue-500/10";
  const textColor = isDarkMode ? "text-white" : "text-slate-800";
  const subTextColor = isDarkMode ? "text-gray-300" : "text-slate-600";
  const titleGradient = isDarkMode
    ? "from-cyan-400 to-blue-400"
    : "from-blue-600 to-indigo-600";

  return (
    <section id="contact" className={`min-h-screen relative bg-gradient-to-br ${bgGradient} py-20 px-6 overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-300/25 to-blue-300/25 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-blue-300/25 to-indigo-300/25 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-indigo-200/15 to-cyan-200/15 blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-200/20 to-blue-200/20 blur-2xl animate-bounce" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-blue-200/20 to-indigo-200/20 blur-2xl animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-100/25 to-blue-100/25 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-indigo-100/20 to-cyan-100/20 blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-16 left-16 w-24 h-24 bg-gradient-to-br from-cyan-200/15 to-blue-200/15 rotate-45 blur-lg animate-spin" style={{ animationDuration: '15s' }}></div>
        <div className="absolute bottom-16 right-16 w-20 h-20 bg-gradient-to-br from-blue-200/15 to-indigo-200/15 rotate-12 blur-lg animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: 'radial-gradient(circle, #0ea5e9 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-100/10 via-transparent to-blue-100/10"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-6 tracking-tight`}>
              Let's Connect
            </h2>
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform scale-x-0 animate-pulse"></div>
          </div>
          <p className={`text-xl ${subTextColor} max-w-3xl mx-auto leading-relaxed mt-6`}>
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="xl:col-span-2">
            <div className={`${cardBg} backdrop-blur-xl rounded-3xl border p-8 md:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 group`}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Mail className="text-white w-6 h-6" />
                </div>
                <h3 className={`text-3xl font-bold ${textColor}`}>
                  Send a Message
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className={`block text-sm font-semibold ${subTextColor} mb-3 group-focus-within:text-cyan-600 transition-colors`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label className={`block text-sm font-semibold ${subTextColor} mb-3 group-focus-within:text-cyan-600 transition-colors`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-4 rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label className={`block text-sm font-semibold ${subTextColor} mb-3 group-focus-within:text-cyan-600 transition-colors`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full p-4 rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className={`w-full py-4 px-8 bg-gradient-to-r ${isDarkMode ? "from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25" : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25"} text-white rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 group`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className={`${cardBg} backdrop-blur-xl rounded-3xl border p-8 shadow-2xl hover:shadow-3xl transition-all duration-500`}>
              <h3 className={`text-2xl font-bold ${textColor} mb-6`}>
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className={`flex items-start gap-4 p-4 rounded-xl ${isDarkMode ? "hover:bg-cyan-600/10" : "hover:bg-blue-600/10"} transition-all duration-300 group`}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${info.gradientClass} rounded-lg flex items-center justify-center ${textColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      {info.icon}
                    </div>
                    <div>
                      <span className={`${subTextColor} group-hover:${textColor} transition-colors duration-300 text-sm leading-relaxed`}>
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`${cardBg} backdrop-blur-xl rounded-3xl border p-8 shadow-2xl hover:shadow-3xl transition-all duration-500`}>
              <h3 className={`text-2xl font-bold ${textColor} mb-6 text-center`}>
                Follow Me
              </h3>
              <div className="flex gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-14 h-14 rounded-xl ${isDarkMode ? "bg-gray-700/30 text-gray-400 hover:bg-cyan-600/20 hover:text-cyan-400" : "bg-gray-100/50 text-gray-600 hover:bg-blue-600/20 hover:text-blue-600"} flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`${cardBg} backdrop-blur-xl rounded-3xl border p-8 text-center`}>
              <div className={`text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}>
                24/7
              </div>
              <p className={`text-sm ${subTextColor}`}>
                Available for exciting projects and collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
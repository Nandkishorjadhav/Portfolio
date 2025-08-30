import React, { useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import axios from "axios";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Added status state

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
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://github.com/Nandkishorjadhav",
      label: "GitHub",
      hoverClass: isDarkMode ? "hover:text-gray-900 hover:bg-gray-100" : "hover:text-gray-900 hover:bg-gray-200",
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://www.linkedin.com/in/nandkishor-jadhav-80044b300",
      label: "LinkedIn",
      hoverClass: isDarkMode ? "hover:text-blue-600 hover:bg-blue-50" : "hover:text-blue-700 hover:bg-blue-100",
    },
    {
      icon: <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />,
      link: "https://twitter.com/your-username",
      label: "Twitter",
      hoverClass: isDarkMode ? "hover:text-cyan-500 hover:bg-cyan-50" : "hover:text-cyan-600 hover:bg-cyan-100",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "nandupatiljadhav660@gmail.com",
      link: "mailto:nandupatiljadhav660@gmail.com",
      gradientClass: isDarkMode ? "from-cyan-400 to-blue-400" : "from-blue-600 to-indigo-600",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
      value: "Nanded, Maharashtra, India",
      link: "https://www.google.com/maps/place/Nanded,+Maharashtra,+India/@19.1382513,77.3010339,13z",
      gradientClass: isDarkMode ? "from-blue-400 to-indigo-400" : "from-blue-600 to-indigo-600",
    },
  ];

  // Theme-based styles
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
    <section
      id="contact"
      className={`min-h-screen relative bg-gradient-to-br ${bgGradient} py-12 sm:py-16 px-4 sm:px-6 overflow-x-hidden`}
    >
      {/* Optimized background animations */}
      <div className="absolute inset-0 overflow-hidden hidden sm:block">
        <div className="absolute -top-20 -right-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-gradient-to-r from-blue-300/20 to-indigo-300/20 blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-gradient-to-r from-indigo-200/10 to-cyan-200/10 blur-2xl animate-spin" style={{ animationDuration: "20s" }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2
              className={`text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4 tracking-tight`}
            >
              Let's Connect
            </h2>
            <div className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transform scale-x-0 animate-pulse"></div>
          </div>
          <p className={`text-base sm:text-lg md:text-xl ${subTextColor} max-w-2xl mx-auto leading-relaxed mt-4 sm:mt-6`}>
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div
              className={`${cardBg} backdrop-blur-xl rounded-2xl sm:rounded-3xl border p-6 sm:p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 group`}
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Mail className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className={`text-2xl sm:text-3xl font-bold ${textColor}`}>
                  Send a Message
                </h3>
              </div>

              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold ${subTextColor} mb-2 sm:mb-3 group-focus-within:text-cyan-600 transition-colors`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="group">
                    <label
                      className={`block text-sm font-semibold ${subTextColor} mb-2 sm:mb-3 group-focus-within:text-cyan-600 transition-colors`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="group">
                  <label
                    className={`block text-sm font-semibold ${subTextColor} mb-2 sm:mb-3 group-focus-within:text-cyan-600 transition-colors`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className={`w-full p-3 sm:p-4 rounded-lg sm:rounded-xl ${isDarkMode ? "bg-gray-700/30 border-cyan-500/10" : "bg-gray-100/50 border-blue-500/10"} ${textColor} placeholder-gray-400 border-2 focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300 resize-none`}
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className={`w-full py-3 sm:py-4 px-6 sm:px-8 bg-gradient-to-r ${isDarkMode ? "from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25" : "from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25"} text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 group`}
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </span>
                </button>
                {status && (
                  <p className={`text-center text-sm sm:text-base ${subTextColor}`}>{status}</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <div
              className={`${cardBg} backdrop-blur-xl rounded-2xl sm:rounded-3xl border p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6`}>
                Get in Touch
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className={`flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl ${isDarkMode ? "hover:bg-cyan-600/10" : "hover:bg-blue-600/10"} transition-all duration-300 group`}
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${info.gradientClass} rounded-md sm:rounded-lg flex items-center justify-center ${textColor} flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <span
                        className={`${subTextColor} group-hover:${textColor} transition-colors duration-300 text-xs sm:text-sm leading-relaxed`}
                      >
                        {info.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className={`${cardBg} backdrop-blur-xl rounded-2xl sm:rounded-3xl border p-6 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold ${textColor} mb-4 sm:mb-6 text-center`}>
                Follow Me
              </h3>
              <div className="flex gap-3 sm:gap-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl ${isDarkMode ? "bg-gray-700/30 text-gray-400 hover:bg-cyan-600/20 hover:text-cyan-400" : "bg-gray-100/50 text-gray-600 hover:bg-blue-600/20 hover:text-blue-600"} flex items-center justify-center text-lg sm:text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg transform`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div
              className={`${cardBg} backdrop-blur-xl rounded-2xl sm:rounded-3xl border p-6 sm:p-8 text-center`}
            >
              <div
                className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-2`}
              >
                24/7
              </div>
              <p className={`text-xs sm:text-sm ${subTextColor}`}>
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
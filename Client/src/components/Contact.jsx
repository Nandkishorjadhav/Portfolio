import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Background and color scheme
  const bgColor = isDarkMode
    ? "bg-gradient-to-br from-black via-gray-900 to-black"
    : "bg-gradient-to-br from-gray-100 via-white to-gray-100";
  const textColor = isDarkMode ? "text-white" : "text-black";
  const subTextColor = isDarkMode ? "text-gray-400" : "text-gray-600";
  const cardBg = isDarkMode ? "bg-gray-900/90" : "bg-white/95";
  const inputBg = isDarkMode ? "bg-gray-800" : "bg-gray-200";
  const buttonBg = "bg-red-600 hover:bg-red-700";
  const accentColor = "text-red-500 hover:text-red-600";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Nandkishorjadhav",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/nandkishor-jadhav-80044b300",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/your-username",
      label: "Twitter",
    },
  ];

  const contactInfo = [
    {
      icon: <HiOutlineMail />,
      value: "nandkishorjadhav9580@gmail.com",
      link: "mailto:nandkishorjadhav9580@gmail.com",
    },
    {
      icon: <HiOutlineLocationMarker />,
      value: "Nanded, Maharashtra, India",
      link: "https://www.google.com/maps/place/Nanded,+Maharashtra,+India/@19.1382513,77.3010339,13z",
    },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen ${bgColor} py-20 px-6 flex items-center justify-center relative overflow-hidden`}
    >
      {/* Subtle background overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_70%)] z-0"></div>
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl font-extrabold ${textColor} mb-4 tracking-tight`}>
            Let's Connect
          </h2>
          <p className={`text-lg ${subTextColor} max-w-2xl mx-auto leading-relaxed`}>
            I'm excited to collaborate on innovative projects or discuss new opportunities. Drop me a message or connect via social media!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`${cardBg} p-10 rounded-3xl shadow-2xl border border-red-500/10 backdrop-blur-sm`}>
            <h3 className={`text-2xl font-semibold ${textColor} mb-8`}>Send a Message</h3>
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-2`} htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg ${inputBg} ${textColor} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200`}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-2`} htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full p-4 rounded-lg ${inputBg} ${textColor} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200`}
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${subTextColor} mb-2`} htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className={`w-full p-4 rounded-lg ${inputBg} ${textColor} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200`}
                  placeholder="Your Message"
                />
              </div>
              <button
                className={`w-full py-4 ${buttonBg} text-white rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg`}
                onClick={() => alert("Message prepared! Please use the email link to send your message.")}
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-12">
            {/* Contact Info */}
            <div className={`${cardBg} p-10 rounded-3xl shadow-2xl border border-red-500/10 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-semibold ${textColor} mb-8`}>Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : "_self"}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : ""}
                    className={`flex items-center gap-4 ${subTextColor} ${accentColor} transition duration-300 text-lg`}
                  >
                    <span className="text-2xl">{info.icon}</span>
                    <span>{info.value}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`${cardBg} p-10 rounded-3xl shadow-2xl border border-red-500/10 backdrop-blur-sm`}>
              <h3 className={`text-2xl font-semibold ${textColor} mb-8`}>Connect with Me</h3>
              <div className="flex gap-8 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${subTextColor} text-4xl ${accentColor} transition duration-300 hover:transform hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
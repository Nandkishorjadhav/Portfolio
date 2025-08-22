// Contact.js
import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter
} from "react-icons/fa";
import { 
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker
} from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

const Contact = () => {
  const { isDarkMode } = useTheme();

  const bgGradient = isDarkMode
    ? 'from-slate-900 via-cyan-900 to-slate-900'
    : 'from-blue-50 via-indigo-50 to-blue-50';
  
  const cardBg = isDarkMode
    ? 'bg-gray-800/50 border-cyan-500/20 shadow-cyan-500/10 hover:from-cyan-600/10 hover:to-blue-600/10'
    : 'bg-white/80 border-blue-500/20 shadow-blue-500/10 hover:from-blue-600/10 hover:to-indigo-600/10';

  const textColor = isDarkMode ? 'text-white' : 'text-slate-800';
  const subTextColor = isDarkMode ? 'text-gray-300' : 'text-slate-600';
  
  const titleGradient = isDarkMode 
    ? 'from-cyan-400 to-blue-400' 
    : 'from-blue-600 to-indigo-600';

  const contactInfo = [
    {
      icon: <HiOutlineMail />,
      title: "Email",
      value: "nandkishor@example.com",
      link: "mailto:nandkishor@example.com"
    },
    {
      icon: <HiOutlinePhone />,
      title: "Phone",
      value: "+91 12345 67890",
      link: "tel:+911234567890"
    },
    {
      icon: <HiOutlineLocationMarker />,
      title: "Location",
      value: "Mumbai, Maharashtra, India",
      link: "#"
    }
  ];

  return (
    <section id="contact" className={`min-h-screen bg-gradient-to-br ${bgGradient} py-20 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-4`}>Get In Touch</h2>
          <p className={`text-xl ${subTextColor} mb-8`}>
            Let's build something amazing together! 🚀
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className={`${cardBg} backdrop-blur-md border rounded-xl p-6 text-center hover:bg-gradient-to-r transition-all duration-300 hover:transform hover:scale-105 shadow-lg`}
            >
              <div className={`text-3xl bg-gradient-to-r ${titleGradient} bg-clip-text text-transparent mb-3 flex justify-center`}>{info.icon}</div>
              <h3 className={`text-lg font-semibold ${textColor} mb-2`}>{info.title}</h3>
              <p className={subTextColor}>{info.value}</p>
            </a>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-4xl mb-12">
          <a 
            href="https://github.com/Nandkishorjadhav" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColor} ${
              isDarkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColor} ${
              isDarkMode ? 'hover:text-blue-400' : 'hover:text-indigo-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank"
            rel="noopener noreferrer"
            className={`${textColor} ${
              isDarkMode ? 'hover:text-cyan-400' : 'hover:text-blue-600'
            } transition-all duration-300 hover:transform hover:scale-110`}
          >
            <FaTwitter />
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${
            isDarkMode 
              ? 'from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-cyan-500/25'
              : 'from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25'
          } text-white text-lg rounded-full shadow-lg transition duration-300 hover:transform hover:scale-105`}>
            <HiOutlineMail />
            Say Hello
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
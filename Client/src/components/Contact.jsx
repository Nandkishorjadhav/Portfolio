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

const Contact = () => {
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
    <section id="contact" className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's build something amazing together! 🚀
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.link}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-3xl text-indigo-400 mb-3 flex justify-center">{info.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
              <p className="text-gray-300">{info.value}</p>
            </a>
          ))}
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6 text-4xl mb-12">
          <a 
            href="https://github.com/Nandkishorjadhav" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/nandkishor-jadhav-80044b300" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com/your-username" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-sky-400 transition-all duration-300 hover:transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white text-lg rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 hover:transform hover:scale-105">
            <HiOutlineMail />
            Say Hello
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
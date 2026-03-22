import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { useTheme } from "./ThemeProvider";

const Modal = ({ isOpen, onClose, children, title }) => {
  const { isDarkMode } = useTheme();

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      y: 50,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onMouseDown={(e) => e.stopPropagation()}
            className={`w-full max-w-2xl sm:max-w-3xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border ${
              isDarkMode
                ? "bg-[#0f1419]/95 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                : "bg-white/95 border-blue-500/30 shadow-2xl shadow-blue-500/20"
            }`}
          >
            {/* Header */}
            <div
              className={`sticky top-0 flex items-center justify-between p-4 sm:p-6 ${
                isDarkMode
                  ? "bg-gradient-to-r from-[#1a1f3a]/80 to-[#0f1419]/80 border-b border-cyan-500/20"
                  : "bg-gradient-to-r from-blue-50/80 to-white/80 border-b border-blue-500/20"
              } backdrop-blur-lg gap-2`}
            >
              <h2
                className={`text-lg sm:text-2xl font-bold gradient-text flex-1 truncate ${
                  isDarkMode ? "text-cyan-300" : "text-blue-600"
                }`}
              >
                {title}
              </h2>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                  isDarkMode
                    ? "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-500/10"
                }`}
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6 md:p-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

// components/Header.tsx
'use client';

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "rgba(17, 24, 39, 0.8)" : "rgba(249, 250, 251, 0.8)";
  
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 96; // Adjust based on header height
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className="fixed top-0 w-full z-50 py-4 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      style={{ backgroundColor: bgColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex justify-center items-center relative">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute left-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
        >
          Sura Itana
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {["about", "projects", "contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => handleScrollTo(item)}
                className="capitalize text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium relative group"
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </button>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
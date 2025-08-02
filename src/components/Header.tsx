"use client";

import { motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "rgba(17, 24, 39, 0.8)" : "rgba(249, 250, 251, 0.8)";

  return (
    <motion.header
      className="fixed top-0 w-full z-50 py-4 backdrop-blur-md border-b border-gray-200 dark:border-gray-800"
      style={{ backgroundColor: bgColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Sura Itana
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {["About", "Projects", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium relative group"
              >
                {item}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </Link>
            </motion.div>
          ))}
        </nav>
        
        <DarkModeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
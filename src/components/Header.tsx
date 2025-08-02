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
      className="fixed top-0 w-full z-50 py-4 backdrop-blur-md"
      style={{ backgroundColor: bgColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
          Sura Itana
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {["About", "Projects", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <DarkModeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
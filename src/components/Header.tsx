// components/Header.tsx
'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const bgColor = theme === "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(234, 236, 240, 0.8)";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed top-0 w-full z-50 py-4 backdrop-blur-md border-b transition-shadow ${
        scrolled
          ? "border-[#233D4D] dark:border-[#233D4D] shadow-sm"
          : "border-transparent"
      }`}
      style={{ backgroundColor: bgColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold font-display text-brand-gradient cursor-pointer"
        >
          Sura Itana
        </div>

        <nav className="hidden md:flex space-x-8">
          {["projects", "expertise", "about", "contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <button
                onClick={() => handleScrollTo(item)}
                className="capitalize text-[#000000] dark:text-[#EAECF0] hover:text-[#FE7F2D] dark:hover:text-[#FE7F2D] transition-colors font-medium relative group"
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FE7F2D] group-hover:w-full transition-all duration-300"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </button>
            </motion.div>
          ))}
        </nav>

        <DarkModeToggle />
      </div>
    </motion.header>
  );
};

export default Header;
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const FloatingCTA = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    width: number;
    height: number;
    left: number;
    top: number;
  }> | null>(null);

  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        width: Math.random() * 20 + 10,
        height: Math.random() * 20 + 10,
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    );
  }, []);

  return (
    <motion.div 
      className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        rotateY: 2,
        rotateX: 1,
      }}
    >
      <motion.h3 
        className="text-2xl md:text-3xl font-bold text-white mb-4"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        Ready to build something amazing?
      </motion.h3>
      
      <motion.p className="text-blue-100 max-w-2xl mx-auto mb-6">
        Lets collaborate on your next project. I bring technical expertise and creative problem-solving to every challenge.
      </motion.p>
      
      <motion.button
        onClick={() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            const offset = 96;
            const y = contactSection.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }}
        className="inline-block px-8 py-3 bg-white text-blue-600 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.button>
      
      {/* Floating particles - render only on client */}
      {particles && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: particle.width,
            height: particle.height,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + particle.id * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default FloatingCTA;
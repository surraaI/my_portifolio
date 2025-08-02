"use client";

import { motion, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";

const InteractiveCard = ({ 
  title, 
  description,
  index,
  className = ""
}: {
  title: string;
  description: string;
  index: number;
  className?: string;
}) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const rotateX = useTransform(mouseY, [0, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 300], [-10, 10]);
  
  const background = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(var(--card-hover-rgb), 0.1), transparent 80%)`;

  return (
    <motion.div
      className={`relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden ${className}`}
      style={{ 
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
      />
      
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg w-14 h-14 flex items-center justify-center mb-6">
        <div className="bg-white dark:bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center">
          <span className="text-blue-600 font-bold text-lg">{index + 1}</span>
        </div>
      </div>
      
      <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
      
      {/* 3D effect indicator */}
      <motion.div 
        className="absolute bottom-4 right-4 text-xs text-gray-400"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        ← Move cursor →
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;
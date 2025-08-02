"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FloatingShapes = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const shapes = [
    { size: 120, x: 10, y: 20, color: "from-purple-600 to-indigo-600" },
    { size: 80, x: 85, y: 40, color: "from-blue-500 to-cyan-500" },
    { size: 150, x: 25, y: 70, color: "from-violet-500 to-fuchsia-500" },
    { size: 100, x: 75, y: 15, color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full bg-gradient-to-br ${shape.color} opacity-10 blur-xl`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;
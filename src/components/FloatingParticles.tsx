"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Particle {
  id: number;
  width: number;
  height: number;
  top: number;
  left: number;
  xDirection: number;
  duration: number;
  delay: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only generate particles on client side to avoid hydration errors
    setMounted(true);
    const generatedParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      width: Math.floor(Math.random() * 40) + 10,
      height: Math.floor(Math.random() * 40) + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      xDirection: Math.random() > 0.5 ? 20 : -20,
      duration: 4 + Math.random() * 4,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  if (!mounted) {
    return null; // Don't render on server
  }

  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/10"
          style={{
            width: particle.width,
            height: particle.height,
            top: `${particle.top}%`,
            left: `${particle.left}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xDirection, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </>
  );
};

export default FloatingParticles;


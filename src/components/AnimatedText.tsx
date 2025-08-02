"use client";

import { motion } from "framer-motion";

const AnimatedText = ({ 
  text, 
  className = "",
  delay = 0.1,
  stagger = 0.05
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block overflow-hidden"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ delay: delay + wordIndex * stagger, duration: 0.5 }}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`char-${wordIndex}-${charIndex}`}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: delay + wordIndex * stagger + charIndex * 0.02,
                duration: 0.3
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
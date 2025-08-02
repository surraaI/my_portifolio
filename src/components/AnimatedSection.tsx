"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const AnimatedSection = ({
  children,
  delay = 0.2,
}: {
  children: ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

export default AnimatedSection;
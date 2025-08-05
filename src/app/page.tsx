// app/page.tsx
'use client';

import { motion } from "framer-motion";
import InteractiveCard from "@/components/InteractiveCard";
import AnimatedText from "@/components/AnimatedText";
import FloatingCTA from "@/components/FloatingCTA";
import { 
  HERO_CONTENT, 
  SOCIAL_LINKS, 
  EXPERTISE, 
  STATS 
} from "@/utils/constants";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero" className="scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 pt-10">
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ 
                rotateY: 5,
                rotateX: 2,
                scale: 1.02,
              }}
            >
              {/* Profile Image Container */}
              <div className="relative">
                <motion.div
                  className="relative rounded-full w-48 h-48 md:w-64 md:h-64 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/profile.jpg" 
                    alt="Sura Itana"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                    quality={100}
                    priority
                  />
                </motion.div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  animate={{ 
                    rotate: [0, 360],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "easeInOut",
                    y: {
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }
                  }}
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold">
                    SI
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AnimatedText 
                  text={HERO_CONTENT.title} 
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-2"
                  delay={0.4}
                />
                
                <AnimatedText 
                  text={HERO_CONTENT.subtitle} 
                  className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300"
                  delay={0.8}
                />
                
                <motion.p 
                  className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  {HERO_CONTENT.description}
                </motion.p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      if (projectsSection) {
                        const offset = 96;
                        const y = projectsSection.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <span className="relative z-10">{HERO_CONTENT.cta}</span>
                    <motion.span 
                      className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: "-100%" }}
                      animate={{ x: "100%" }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        ease: "linear"
                      }}
                    />
                  </motion.button>
                  
                  <motion.div 
                    className="flex items-center gap-4 mt-4 md:mt-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                  >
                    {SOCIAL_LINKS.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors relative group"
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 + index * 0.1 }}
                      >
                        <span className="sr-only">{link.name}</span>
                        <span className="w-8 h-8 block relative z-10">
                          {link.icon}
                        </span>
                        <motion.span 
                          className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl text-center relative overflow-hidden"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.2 }}
              >
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-300 mt-1">{stat.label}</div>
                
                {/* Animated background elements */}
                <motion.div 
                  className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-blue-500 opacity-10 blur-xl"
                  animate={{ 
                    x: [0, 20, 0],
                    y: [0, 20, 0],
                  }}
                  transition={{ 
                    duration: 5 + index * 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-purple-500 opacity-10 blur-xl"
                  animate={{ 
                    x: [0, -20, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ 
                    duration: 6 + index * 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise Section */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4 }}
            >
              Areas of Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EXPERTISE.map((item, index) => (
                <InteractiveCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  index={index}
                  className="hover:shadow-2xl"
                />
              ))}
            </div>
          </motion.div>

          {/* 3D Floating Call to Action */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.8, duration: 0.5 }}
          >
            <FloatingCTA />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* About Section */}
      <AboutSection />
    </main>
  );
}
// app/page.tsx
'use client';

import { motion } from "framer-motion";
import { 
  HERO_CONTENT, 
  SOCIAL_LINKS, 
  EXPERTISE, 
  STATS 
} from "@/utils/constants";
import Image from "next/image";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import InteractiveCard from "@/components/InteractiveCard";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Full Screen */}
      <section 
        id="hero" 
        className="h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        {/* Background Gradient */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-600/5 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        </motion.div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-500/20 dark:bg-blue-400/10"
            style={{
              width: Math.floor(Math.random() * 40) + 10,
              height: Math.floor(Math.random() * 40) + 10,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() > 0.5 ? 20 : -20, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
        
        <div className="max-w-6xl mx-auto px-4 z-10 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                  {HERO_CONTENT.title}
                </span>
              </motion.h1>
              
              <motion.h2
                className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-8"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {HERO_CONTENT.subtitle}
              </motion.h2>
              
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <motion.button
                  onClick={() => {
                    const projectsSection = document.getElementById('projects');
                    if (projectsSection) {
                      const offset = 96;
                      const y = projectsSection.getBoundingClientRect().top + window.pageYOffset - offset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{HERO_CONTENT.cta}</span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"
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
                  className="flex items-center gap-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  {SOCIAL_LINKS.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all relative group"
                      whileHover={{ 
                        y: -5,
                        scale: 1.1,
                        background: "linear-gradient(45deg, #3b82f6, #8b5cf6)"
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      <span className="sr-only">{link.name}</span>
                      <span className="text-gray-800 dark:text-gray-200 group-hover:text-white transition-colors">
                        {link.icon}
                      </span>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                damping: 15,
                delay: 0.2
              }}
              whileHover={{ 
                rotateY: 5,
                rotateX: 2,
                scale: 1.02,
              }}
            >
              <div className="relative">
                <motion.div
                  className="relative rounded-full w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl"
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
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-xl"
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
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-xl font-bold">
                    SI
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-8 h-14 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center p-1"
          >
            <motion.div 
              className="w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full"
              animate={{ y: [0, 10] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Rest of the content */}
      <div className="max-w-6xl mx-auto px-4">
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

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* About Section */}
      <AboutSection />
    </div>
  );
}
// components/sections/AboutSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import EducationCard from '@/components/EducationCard';
import { Icons } from '@/utils/icons';
import SkillCard from '@/components/SkillCard';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
          <div className="max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                About Me
              </motion.h1>
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-Stack Developer, Problem Solver, and Passionate Pianist
              </motion.p>
            </motion.div>
      
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Section */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/30">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sura Itana"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                      quality={100}
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center text-white mb-2">Sura Itana</h2>
                  <p className="text-gray-400 text-center mb-6">Software Engineer & Problem Solver</p>
                  
                  <div className="bg-gray-700/50 rounded-xl p-4 mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Personal Info</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <Icons.location />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Icons.email />
                        <span>suraitana@gmail.com</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Icons.leetcode />
                        <span>LeetCode: 800+ Problems Solved</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Icons.piano />
                        <span>Passionate Pianist & Composer</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Amharic', 'Afaan Oromo'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
      
              {/* Bio and Skills Section */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {/* Bio */}
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-xl mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Biography</h2>
                  <p className="text-gray-300 mb-4">
                    I&apos;m a Software Engineering student at Addis Ababa University (ranked 10th in Africa) 
                    with a passion for solving complex problems through code. As a graduate of the Google-backed 
                    Africa to Silicon Valley (A2SV) program, I&apos;ve developed a strong foundation in data structures 
                    and algorithms, solving over 800 problems on competitive coding platforms.
                  </p>
                  <p className="text-gray-300">
                    My experience spans backend development, full-stack applications, and mobile development. 
                    I thrive on building scalable systems that solve real-world problems, particularly those 
                    relevant to African communities. When I&apos;m not coding, you&apos;ll find me composing music on 
                    the piano or mentoring junior developers.
                  </p>
                </div>
      
                {/* Education Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <EducationCard 
                    title="BSc in Software Engineering"
                    institution="Addis Ababa University"
                    period="2022 - Present"
                    description="Ranked 10th in Africa. Relevant coursework includes Data Structures & Algorithms, Web & Mobile Application Development, Introduction to AI, and Machine Learning."
                    icon={<Icons.university />}
                  />
                  
                  <EducationCard 
                    title="Full Stack Development"
                    institution="The Odin Project"
                    period="Aug 2023 - Oct 2024"
                    description="Studied HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through hands-on full-stack projects. Built responsive web apps from scratch."
                    icon={<Icons.trophy />}
                  />
                </div>
              </motion.div>
            </div>
      
            {/* Key Skills Section */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Technical Expertise
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <SkillCard 
                  icon={<Icons.python />}
                  name="Python"
                  level="Advanced"
                  description="Backend development with FastAPI and Flask"
                />
                
                <SkillCard 
                  icon={<Icons.js />}
                  name="JavaScript"
                  level="Advanced"
                  description="Full-stack development with Node.js and React"
                />
                
                <SkillCard 
                  icon={<Icons.nodejs />}
                  name="Node.js"
                  level="Advanced"
                  description="Building scalable backend systems and APIs"
                />
                
                <SkillCard 
                  icon={<Icons.react />}
                  name="React"
                  level="Advanced"
                  description="Creating responsive and interactive UIs"
                />
                
                <SkillCard 
                  icon={<Icons.flutter />}
                  name="Flutter"
                  level="Intermediate"
                  description="Building cross-platform mobile applications"
                />
                
                <SkillCard 
                  icon={<Icons.mongodb />}
                  name="MongoDB"
                  level="Advanced"
                  description="NoSQL database design and management"
                />
                
                <SkillCard 
                  icon={<Icons.postgresql />}
                  name="PostgreSQL"
                  level="Intermediate"
                  description="Relational database design and optimization"
                />
              </div>
            </motion.div>
      
            {/* Key Achievements */}
            <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <h2 className="text-3xl font-bold text-center mb-12 text-white">
                Key Achievements
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">800+ Problems Solved</h3>
                  </div>
                  <p className="text-gray-300">
                    Demonstrated advanced problem-solving skills by solving over 800 challenges on LeetCode 
                    and Codeforces, showcasing algorithmic proficiency and dedication to continuous learning.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl p-6 border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">A2SV Graduate</h3>
                  </div>
                  <p className="text-gray-300">
                    Selected for the prestigious Google-backed Africa to Silicon Valley program, joining an 
                    elite group of developers. A2SV has placed 50+ students at top tech companies like Google, 
                    Bloomberg, and Amazon.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
    </section>
  );
}
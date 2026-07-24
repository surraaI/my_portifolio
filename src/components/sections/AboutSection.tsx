// components/sections/AboutSection.tsx
'use client';

import Image from 'next/image';
import EducationCard from '@/components/EducationCard';
import { Icons } from '@/utils/icons';
import Reveal from '@/components/Reveal';
import Workspace3D from '@/components/three/Workspace3D';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-24">
          <div className="max-w-6xl mx-auto px-4 py-16">
            {/* Hero Section */}
            <Reveal className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-gradient mb-4">
                About Me
              </h1>
              <p className="text-xl text-[#000000] dark:text-[#EAECF0] max-w-2xl mx-auto">
                Backend & Full-Stack Developer | A2SV Graduate | 900+ LeetCode Problems
              </p>
            </Reveal>

            <Reveal className="mb-16" delay={0.05}>
              <Workspace3D />
            </Reveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Profile Section */}
              <Reveal className="lg:col-span-1" delay={0.1}>
                <div className="bg-surface-card border border-[#233D4D] dark:border-[#233D4D] rounded-2xl p-8 shadow-xl">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#233D4D]/30">
                    <Image
                      src="/images/profile.jpg"
                      alt="Sura Itana"
                      fill
                      sizes="192px"
                      className="object-cover rounded-full"
                      quality={100}
                    />
                  </div>

                  <h2 className="text-2xl font-bold font-display text-center text-[#000000] dark:text-[#EAECF0] mb-2">Sura Itana</h2>
                  <p className="text-[#233D4D] dark:text-[#EAECF0] text-center mb-6">Software Engineer & Problem Solver</p>

                  <div className="bg-[#EAECF0]/20 dark:bg-[#233D4D]/20 rounded-xl p-4 mb-6">
                    <h3 className="text-lg font-semibold text-[#000000] dark:text-[#EAECF0] mb-3">Personal Info</h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-[#000000] dark:text-[#EAECF0]">
                        <Icons.location />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                      <div className="flex items-center text-[#000000] dark:text-[#EAECF0]">
                        <Icons.email />
                        <span>suraitana@gmail.com</span>
                      </div>
                      <div className="flex items-center text-[#000000] dark:text-[#EAECF0]">
                        <Icons.leetcode />
                        <span>LeetCode: 900+ Problems Solved</span>
                      </div>
                      <div className="flex items-center text-[#000000] dark:text-[#EAECF0]">
                        <Icons.piano />
                        <span>Passionate Pianist & Composer</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#000000] dark:text-[#EAECF0] mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Amharic', 'Afaan Oromo'].map((lang) => (
                      <span key={lang} className="px-3 py-1 bg-[#233D4D]/10 text-[#233D4D] dark:text-[#EAECF0] rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Bio and Skills Section */}
              <Reveal className="lg:col-span-2" delay={0.2}>
                {/* Bio */}
                <div className="bg-surface-card border border-[#233D4D] dark:border-[#233D4D] rounded-2xl p-8 shadow-xl mb-8">
                  <h2 className="text-2xl font-bold font-display text-[#000000] dark:text-[#EAECF0] mb-4">Biography</h2>
                  <p className="text-[#000000] dark:text-[#EAECF0] mb-4">
                    I&apos;m a backend and full-stack developer with hands-on experience building scalable, real-world applications using Node.js, FastAPI, NestJS, and Flutter, along with PostgreSQL, MongoDB, and MySQL.
                  </p>
                  <p className="text-[#000000] dark:text-[#EAECF0] mb-4">
                    I recently led the backend for MoveMate, an AI-powered public bus tracking system for Addis Ababa, and contributed to TransitTrack, a real-time bus tracking and digital payment system developed during the 2024 A2SV Hackathon (AI for Impact).
                  </p>
                  <p className="text-[#000000] dark:text-[#EAECF0] mb-4">
                    I&apos;m also a graduate of the A2SV (Africa to Silicon Valley) program, a Google-backed initiative, where I sharpened my algorithmic thinking through 900+ problems on LeetCode and Codeforces. This experience strengthened my ability to write clean, efficient code and work in high-performing teams.
                  </p>
                  <p className="text-[#000000] dark:text-[#EAECF0] mb-4">
                    With a solid foundation in Python, TypeScript, and Dart, I&apos;ve developed production-ready systems such as HealLink (healthcare appointments), YENEB CODS (delivery platform), and SVM Booster (YouTube growth engine).
                  </p>
                  <p className="text-[#000000] dark:text-[#EAECF0]">
                    I&apos;m now focused on collaborating with mission-driven teams to build innovative, high-quality applications.
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#233D4D] dark:border-[#233D4D]">
                    <p className="text-[#233D4D] dark:text-[#EAECF0] text-sm mb-2">
                      <span className="font-semibold text-[#233D4D] dark:text-[#EAECF0]">🔧 Tech Stack:</span> Node.js, FastAPI, NestJS, Flutter, TypeScript, PostgreSQL, MongoDB
                    </p>
                    <p className="text-[#233D4D] dark:text-[#EAECF0] text-sm">
                      <span className="font-semibold text-[#233D4D] dark:text-[#EAECF0]">🌍 Open to:</span> Remote Backend or Fullstack Developer roles
                    </p>
                  </div>
                </div>

                {/* Education Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <EducationCard
                    title="A2SV Program"
                    institution="Africa to Silicon Valley"
                    period="Graduate"
                    description="Google-backed initiative focused on algorithmic thinking and problem-solving. Strengthened ability to write clean, efficient code and work in high-performing teams through 900+ LeetCode and Codeforces problems."
                    icon={<Icons.trophy />}
                  />

                  <EducationCard
                    title="Full Stack Development"
                    institution="The Odin Project"
                    period="Aug 2023 - Oct 2024"
                    description="Studied HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB through hands-on full-stack projects. Built responsive web apps from scratch."
                    icon={<Icons.university />}
                  />
                </div>
              </Reveal>
            </div>

            {/* Key Achievements */}
            <Reveal className="mt-16" delay={0.1}>
              <h2 className="text-3xl font-bold font-display text-center mb-12 text-[#000000] dark:text-[#EAECF0]">
                Key Achievements
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#233D4D]/10 to-[#000000]/10 rounded-2xl p-6 border border-[#233D4D]/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#233D4D] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#000000] dark:text-[#EAECF0]">900+ Problems Solved</h3>
                  </div>
                  <p className="text-[#000000] dark:text-[#EAECF0]">
                    Demonstrated advanced problem-solving skills by solving over 900 challenges on LeetCode
                    and Codeforces, showcasing algorithmic proficiency and dedication to continuous learning.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#233D4D]/10 to-[#000000]/10 rounded-2xl p-6 border border-[#233D4D]/30">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#233D4D] w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#000000] dark:text-[#EAECF0]">A2SV Graduate</h3>
                  </div>
                  <p className="text-[#000000] dark:text-[#EAECF0]">
                    Selected for the prestigious Google-backed Africa to Silicon Valley program, joining an
                    elite group of developers. A2SV has placed 50+ students at top tech companies like Google,
                    Bloomberg, and Amazon.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
    </section>
  );
}

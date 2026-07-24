// components/sections/ProjectsSection.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import ProjectFilter from '@/components/ProjectFilter';
import Reveal from '@/components/Reveal';
import { Button } from '@/components/ui/button';
import { projects, categories } from '@/data/projects';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredProjects = projects.filter((project) => project.featured);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="scroll-mt-24 py-24 bg-[#EAECF0]/20 dark:bg-[#000000]">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-brand-gradient mb-4">
            My Projects
          </h1>
          <p className="text-xl text-[#000000] dark:text-[#EAECF0] max-w-2xl mx-auto">
            Showcasing my technical solutions and creative implementations
          </p>
        </Reveal>

        {featuredProjects.length > 0 && (
          <Reveal className="mb-12" delay={0.1}>
            <div className="grid grid-cols-1 gap-6">
              {featuredProjects.map((project) => (
                <Link key={project.id} href={`/projects/${project.id}`} className="block">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl bg-brand-gradient p-8 md:p-10 shadow-xl"
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="inline-block mb-3 px-3 py-1 bg-white/20 text-white rounded-full text-xs font-semibold backdrop-blur-sm">
                      Flagship Project{project.role ? ` · ${project.role}` : ''}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-white/90 max-w-2xl mb-6">{project.description}</p>
                    {project.metrics && (
                      <div className="flex flex-wrap gap-3 mb-2">
                        {project.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-3 py-1.5 bg-white/15 text-white text-sm rounded-full backdrop-blur-sm"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>
          </Reveal>
        )}

        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl text-[#233D4D] dark:text-[#EAECF0]">No projects found in this category</h3>
            <Button
              variant="brand"
              className="mt-4"
              onClick={() => setActiveCategory('all')}
            >
              View All Projects
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id} delay={Math.min(index * 0.08, 0.32)}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

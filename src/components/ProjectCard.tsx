"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Project } from "@/data/projects";
import TechTag from "./TechTag";

const getInitials = (title: string) =>
  title
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    void width;
    void height;
  };

  const rotateX = useTransform(mouseY, [0, 260], [6, -6]);
  const rotateY = useTransform(mouseX, [0, 300], [-6, 6]);
  const spotlight = useMotionTemplate`radial-gradient(240px circle at ${mouseX}px ${mouseY}px, rgba(var(--card-hover-rgb), 0.12), transparent 80%)`;

  return (
    <motion.div
      className="group relative bg-surface-card dark:bg-surface-card rounded-2xl overflow-hidden border border-[#233D4D] dark:border-[#233D4D] transition-shadow"
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        boxShadow: hovered ? "var(--shadow-card-hover)" : "var(--shadow-card)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
      {/* Spotlight overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: spotlight, opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease" }}
      />

      {/* Project image / placeholder */}
      <div className="relative h-48 overflow-hidden">
        {project.imageUrl ? (
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 384px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="bg-brand-gradient h-full w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-white/90 text-4xl font-display font-bold tracking-wide">
              {getInitials(project.title)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/50 via-transparent to-transparent" />
        {project.featured && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#FFFFFF]/90 dark:bg-[#000000]/90 text-brand-gradient">
            Flagship Project
          </span>
        )}
      </div>

      {/* Project info */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3 gap-3">
          <h3 className="text-xl font-bold font-display text-[#000000] dark:text-[#EAECF0]">
            {project.title}
          </h3>
          <span className="shrink-0 px-2 py-1 bg-[#233D4D]/10 text-[#233D4D] dark:bg-[#233D4D]/20 dark:text-[#EAECF0] rounded-full text-xs">
            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
          </span>
        </div>

        <p className="text-[#000000] dark:text-[#EAECF0] mb-4">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <TechTag key={index} name={tech} />
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-[#233D4D] dark:text-[#EAECF0] bg-[#EAECF0]/20 dark:bg-[#233D4D]/20 px-2 py-1 rounded-full">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-4">
          <Link
            href={`/projects/${project.id}`}
            className="text-[#233D4D] dark:text-[#EAECF0] hover:text-[#FE7F2D] dark:hover:text-[#FE7F2D] flex items-center group/link text-sm font-medium"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>

          <div className="flex items-center space-x-3">
            {project.isClientProject && !project.githubUrl && (
              <span className="text-xs text-[#233D4D] dark:text-[#EAECF0]">Client Project</span>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#233D4D] hover:text-[#000000] dark:text-[#EAECF0] dark:hover:text-[#FE7F2D] transition-colors"
                aria-label="GitHub repository"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#233D4D] hover:text-[#000000] dark:text-[#EAECF0] dark:hover:text-[#FE7F2D] transition-colors"
                aria-label="Live demo"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import TechTag from "./TechTag";

const ProjectShowcase = ({ project }: { project: Project }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Project hero image */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>
        
        {/* Project header */}
        <div className="p-6 md:p-8">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h1>
            <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mt-2 md:mt-0">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>
          
          <p className="text-gray-300 mb-6">{project.longDescription}</p>
          
          {/* Links */}
          <div className="flex flex-wrap gap-4 mb-6">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
            )}
            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full flex items-center gap-2 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                View Live Demo
              </a>
            )}
          </div>
          
          {/* Technologies */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <TechTag key={index} name={tech} />
              ))}
            </div>
          </div>
          
          {/* Features */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-white mb-3">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-purple-400 hover:text-purple-300 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectShowcase;
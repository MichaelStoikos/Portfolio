import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

export function ProjectsPage() {
  return (
    <div className="pt-20 min-h-screen bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary mb-12 text-center"
        >
          My Projects
        </motion.h1>
        
        <div className="grid gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-8 items-center"
            >
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                />
              </motion.div>
              
              <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold text-primary">{project.title}</h2>
                <p className="text-gray-300 text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 my-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-secondary rounded-full font-semibold hover:bg-opacity-90"
                  >
                    View Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-secondary"
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
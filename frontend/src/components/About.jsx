import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using React and modern CSS frameworks."
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building scalable server-side applications with Node.js, Express, and RESTful APIs."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Working with both SQL and NoSQL databases, specifically MongoDB."
    }
  ];

  return (
    <section className="py-20 bg-gray-800 text-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-xl text-gray-400">
              I'm a passionate Full Stack Developer with a strong foundation in modern web technologies.
              I love creating elegant solutions to complex problems and am constantly learning new technologies
              to stay at the forefront of web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-700 p-6 rounded-lg"
              >
                <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-400">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
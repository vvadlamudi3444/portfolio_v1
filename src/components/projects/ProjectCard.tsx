import { motion, useInView } from 'framer-motion';
import { Project } from '../../types';
import { useRef } from 'react';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 1.02, 0.73, 0.96]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <p className="text-gray-200 text-sm">{project.company} • {project.period}</p>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
          <ul className="space-y-2">
            {project.achievements.map((achievement, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-2 text-gray-600 text-sm"
              >
                <span className="text-blue-600 font-bold mt-1">•</span>
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <project.icon className="w-6 h-6 text-blue-600" />
        </motion.div>
      </div>
    </motion.div>
  );
}
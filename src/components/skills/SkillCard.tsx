import { motion } from 'framer-motion';
import { Skill } from '../../types';
import { useInView } from 'react-intersection-observer';

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.2 + i * 0.1,
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="flex items-center gap-3 mb-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
          className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white"
        >
          <skill.icon className="w-6 h-6" />
        </motion.div>
        <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
      </div>

      <ul className="space-y-2">
        {skill.items.map((item, i) => (
          <motion.li
            key={item}
            custom={i}
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
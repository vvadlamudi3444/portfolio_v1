import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { SkillCard } from './SkillCard';
import { FadeIn } from '../animations/FadeIn';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Technical Expertise
            </motion.h2>
            <motion.p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive skillset in cloud infrastructure, DevOps practices, and enterprise-scale solutions
            </motion.p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.category} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
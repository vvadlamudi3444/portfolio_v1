import { motion } from 'framer-motion';
import { Cloud, Server, Shield, Code } from 'lucide-react';
import { ParallaxText } from '../ui/ParallaxText';
import { GradientText } from '../ui/GradientText';
import { StatsCard } from './StatsCard';

export function Hero() {
  const stats = [
    { value: 200, label: 'AWS Services Managed', icon: <Cloud className="w-6 h-6" /> },
    { value: 60, label: 'MTTR Reduction', icon: <Server className="w-6 h-6" /> },
    { value: 45, label: 'Security Incidents Reduced', icon: <Shield className="w-6 h-6" /> },
    { value: 100, label: 'Microservices Deployed', icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
              Available for Senior DevOps Positions
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <GradientText>
              Cloud Infrastructure & DevOps Expert
            </GradientText>
          </h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Architecting scalable cloud solutions and implementing DevOps practices
            for enterprise-scale applications
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatsCard
                key={stat.label}
                {...stat}
                delay={0.2 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        <div className="mb-12 py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
          <ParallaxText baseVelocity={-5}>
            AWS • Kubernetes • Terraform • Docker • Jenkins • Ansible • OpenTelemetry • 
          </ParallaxText>
        </div>
      </div>
    </section>
  );
}
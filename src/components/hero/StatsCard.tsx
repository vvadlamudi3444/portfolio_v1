import { motion } from 'framer-motion';
import { AnimatedCounter } from '../ui/AnimatedCounter';

interface StatsCardProps {
  value: number;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export function StatsCard({ value, label, icon, delay = 0 }: StatsCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="flex items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg text-white">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900">
            <AnimatedCounter from={0} to={value} delay={delay} />+
          </div>
          <div className="text-sm text-gray-600">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}
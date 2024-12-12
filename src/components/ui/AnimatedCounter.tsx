import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  delay?: number;
}

export function AnimatedCounter({ from, to, duration = 2, delay = 0 }: AnimatedCounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      delay,
      ease: "easeOut"
    });

    return controls.stop;
  }, [count, to, duration, delay]);

  return <motion.span>{rounded}</motion.span>;
}
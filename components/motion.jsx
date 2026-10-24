'use client';

import { motion, MotionConfig, useReducedMotion } from 'framer-motion';

export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function AnimatedSection({ children, className, ...props }) {
  const reduceMotion = useReducedMotion();
  const isHero = className?.includes('hero');

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        {...props}
        className={className}
        initial={false}
        whileInView={reduceMotion ? undefined : { opacity: [0.6, 1], y: [24, 0] }}
        viewport={{ once: true, amount: isHero ? 0.1 : 0.15 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.section>
    </MotionConfig>
  );
}

export function FloatingArtwork({ children, ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      {...props}
      initial={false}
      animate={reduceMotion ? { y: 0 } : { y: [0, -16, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

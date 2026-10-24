'use client';

import { motion, useReducedMotion } from 'framer-motion';

const technologies = ['JAVA', 'JAVASCRIPT', 'TYPESCRIPT', 'NEXT.JS', 'REACT', 'APIs REST', 'GIT'];

export default function TechnologyTicker() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="ticker" role="img" aria-label={`Tecnologias: ${technologies.join(', ')}`}>
      <motion.div
        className="ticker-track"
        aria-hidden="true"
        initial={false}
        animate={{ x: reduceMotion ? '0%' : ['0%', '-50%'] }}
        transition={reduceMotion ? { duration: 0 } : { duration: 28, ease: 'linear', repeat: Infinity }}
      >
        {[0, 1].map((copy) => (
          <div className="ticker-group" key={copy}>
            {technologies.map((technology) => (
              <span className="ticker-item" key={technology}>
                {technology}<span className="ticker-separator">✳</span>
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

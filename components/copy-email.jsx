'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const email = 'juandinarte11@gmail.com';

export default function CopyEmail() {
  const [status, setStatus] = useState('idle');
  const resetTimer = useRef(null);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus('copied');
    } catch {
      setStatus('error');
    }
    resetTimer.current = setTimeout(() => setStatus('idle'), 4000);
  }

  return (
    <div className="copy-email">
      <motion.button
        type="button"
        onClick={copyEmail}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        {status === 'copied' ? 'Copiado ✓' : 'Copiar e-mail ⧉'}
      </motion.button>
      <span className="copy-feedback" role="status" aria-live="polite">
        <AnimatePresence mode="wait">
          {status !== 'idle' && (
            <motion.span key={status} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {status === 'copied' ? 'E-mail copiado!' : `Selecione o endereço para copiar: ${email}`}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
    </div>
  );
}

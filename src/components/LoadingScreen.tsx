import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu } from 'lucide-react';
import { ZenXLogo } from './ZenXLogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [stepIndex, setStepIndex] = useState(0);

  const steps = [
    'Initializing System...',
    'Loading Components...',
    'Optimizing Experience...',
    'Ready 🚀',
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 420);

    const finishTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 450);
    }, 2200);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(finishTimer);
    };
  }, [onComplete, steps.length]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="app-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(8px)', transition: { duration: 0.5, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0B0F19] text-white overflow-hidden select-none"
        >
          {/* Ambient Glow in Loader */}
          <div className="absolute w-96 h-96 rounded-full bg-gradient-to-tr from-[#4F46E5]/30 to-cyan-500/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
            
            {/* Official ZenX Holographic Logo */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0, rotate: -8 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 flex flex-col items-center"
            >
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
                <ZenXLogo size="lg" theme="dark" showText={true} />
              </div>
            </motion.div>

            {/* Experience Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-center mb-6"
            >
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                10+ Years Experience
              </span>
              <p className="text-xs text-slate-400 mt-1.5">Senior Full-Stack Web Architecture</p>
            </motion.div>

            {/* Interactive Terminal Sequence */}
            <div className="w-full bg-[#111728]/90 border border-slate-800 rounded-xl p-3.5 font-mono text-xs shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-indigo-400" />
                  <span>core-boot.sh</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Cpu className="w-3 h-3 animate-spin" />
                  <span>ONLINE</span>
                </div>
              </div>

              <div className="space-y-1.5 min-h-[58px]">
                {steps.slice(0, stepIndex + 1).map((step, idx) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 text-xs"
                  >
                    <span className="text-indigo-400">❯</span>
                    <span className={idx === steps.length - 1 ? 'text-emerald-400 font-semibold' : 'text-slate-300'}>
                      {step}
                    </span>
                    {idx === stepIndex && idx < steps.length - 1 && (
                      <span className="w-1.5 h-3 bg-indigo-400 animate-pulse ml-0.5" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Loading Progress Bar */}
            <div className="w-full bg-slate-800/80 h-1.5 rounded-full mt-4 overflow-hidden relative">
              <motion.div
                initial={{ width: '5%' }}
                animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-[#4F46E5] via-cyan-400 to-emerald-400 rounded-full"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

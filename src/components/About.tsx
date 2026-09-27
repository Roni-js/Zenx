import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Palette, Code, Rocket, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  onWorkTogether: () => void;
}

export const About: React.FC<AboutProps> = ({ onWorkTogether }) => {
  const steps = [
    { name: 'Idea', icon: Lightbulb, desc: 'Strategy & wireframing' },
    { name: 'Design', icon: Palette, desc: 'High-fidelity UI/UX' },
    { name: 'Development', icon: Code, desc: 'Clean, fast code' },
    { name: 'Launch', icon: Rocket, desc: 'Deployment & launch' },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Pill */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] mb-4"
        >
          Who We Are
        </motion.span>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight mb-6"
        >
          About ZenX
        </motion.h2>

        {/* Storytelling Staggered Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto mb-14"
        >
          Backed by over 10 years of professional software engineering and web development experience, ZenX Web Solutions specializes in creating clean, responsive, and high-performance websites. We work with startups, entrepreneurs, and growing businesses to turn ideas into high-converting digital platforms without complicated agency bureaucracy or inflated costs.
        </motion.p>

        {/* Animated Storytelling Timeline: Idea → Design → Development → Launch */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-xs relative"
        >
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Our 4-Step Agile Delivery
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + idx * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col items-center text-center relative group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-[#111827]">{step.name}</span>
                    <span className="text-[10px] text-[#4F46E5] font-extrabold">0{idx + 1}</span>
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1">{step.desc}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Connected scanning progress line */}
          <div className="hidden md:block w-3/4 mx-auto h-0.5 bg-slate-200 mt-6 relative overflow-hidden">
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#4F46E5] to-transparent"
            />
          </div>
        </motion.div>

        {/* Value Bullets */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium mb-10"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>10+ Years Full-Stack Experience</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>100+ Production Websites Launched</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Direct Senior Engineer Collaboration</span>
          </div>
        </motion.div>

        {/* CTA Button with Glow Effect */}
        <motion.button
          onClick={onWorkTogether}
          whileHover={{ scale: 1.04, boxShadow: '0 12px 28px -6px rgba(79, 70, 229, 0.4)' }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl shadow-md shadow-[#4F46E5]/25 transition-all cursor-pointer group"
        >
          <span>Let's Work Together</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
        </motion.button>

      </div>
    </section>
  );
};

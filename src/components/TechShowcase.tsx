import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Database, Cloud, Rocket, Code2, Globe, Sparkles } from 'lucide-react';

export const TechShowcase: React.FC = () => {
  const pipelineStages = [
    { name: 'React 19', tag: 'UI Library', icon: Code2, color: 'text-cyan-500 bg-cyan-950/40 border-cyan-800/50' },
    { name: 'Next.js', tag: 'Full-Stack Framework', icon: Globe, color: 'text-white bg-slate-900 border-slate-700' },
    { name: 'APIs & Microservices', tag: 'High-Performance Backend', icon: Cpu, color: 'text-indigo-400 bg-indigo-950/40 border-indigo-800/50' },
    { name: 'Database & State', tag: 'PostgreSQL / Edge', icon: Database, color: 'text-emerald-400 bg-emerald-950/40 border-emerald-800/50' },
    { name: 'Cloud Infrastructure', tag: 'Serverless Edge', icon: Cloud, color: 'text-sky-400 bg-sky-950/40 border-sky-800/50' },
    { name: 'Continuous Deployment', tag: 'Global CDN', icon: Rocket, color: 'text-purple-400 bg-purple-950/40 border-purple-800/50' },
    { name: 'Performance Engine', tag: 'Core Web Vitals Optimization', icon: Sparkles, color: 'text-amber-400 bg-amber-950/40 border-amber-800/50' },
  ];

  // Repeat for continuous flowing marquee
  const stream = [...pipelineStages, ...pipelineStages];

  return (
    <div className="py-12 border-y border-slate-800/80 bg-[#0B0F19] text-white overflow-hidden relative">
      
      {/* Side Vignette Fades */}
      <div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-[#0B0F19] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-[#0B0F19] to-transparent z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-cyan-400 mb-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          <span>PROVEN_TECH_PIPELINE // 10_YEARS_EXPERIENCE</span>
        </div>
        <h3 className="text-sm font-bold text-slate-300 tracking-wide uppercase">
          10+ Years Battle-Tested Technology Architecture Pipeline
        </h3>
      </div>

      <div className="flex overflow-hidden">
        <div className="animate-marquee flex items-center gap-6 py-2">
          {stream.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <React.Fragment key={`${stage.name}-${idx}`}>
                <motion.div
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#0F172A] border border-slate-800 shadow-md hover:border-indigo-500/50 transition-all shrink-0 cursor-pointer"
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center border text-xs ${stage.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      {stage.name}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">
                      {stage.tag}
                    </div>
                  </div>
                </motion.div>

                {/* Pipeline Arrow Connector */}
                <div className="shrink-0 text-indigo-500/60 font-bold text-sm select-none flex items-center gap-1">
                  <span className="h-0.5 w-3 bg-indigo-500/40" />
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

    </div>
  );
};

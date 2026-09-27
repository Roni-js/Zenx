import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Award,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  Terminal,
  RotateCcw,
  Zap,
  Globe,
  Send,
  Check,
  UserCheck,
} from 'lucide-react';
import { ZenXLogo } from './ZenXLogo';

interface HeroProps {
  onStartProject: () => void;
  onViewPricing: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onViewPricing }) => {
  // Generation step: 1 (Wireframe), 2 (Media/Assets), 3 (Interactive Buttons), 4 (Finished Website)
  const [generationStep, setGenerationStep] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const [activeCodeLine, setActiveCodeLine] = useState<number>(0);
  const [cursorTarget, setCursorTarget] = useState<'code' | 'button' | 'preview'>('button');

  // Consultation chat sequence state
  const chatMessages = [
    { sender: 'user', text: 'Create an e-commerce website' },
    { sender: 'lead', text: 'Analyzing requirements...' },
    { sender: 'lead', text: 'Architecting responsive layout...' },
    { sender: 'lead', text: 'Optimizing speed & user flow...' },
    { sender: 'lead', text: 'Website Ready ✓' },
  ];
  const [visibleChatCount, setVisibleChatCount] = useState<number>(1);

  // Cycling generation pipeline simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isGenerating) {
      if (generationStep < 4) {
        timer = setTimeout(() => {
          setGenerationStep((prev) => prev + 1);
        }, 1200);
      } else {
        setIsGenerating(false);
      }
    }

    return () => clearTimeout(timer);
  }, [generationStep, isGenerating]);

  // Chat message cadence
  useEffect(() => {
    if (visibleChatCount < chatMessages.length) {
      const chatTimer = setTimeout(() => {
        setVisibleChatCount((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(chatTimer);
    }
  }, [visibleChatCount, chatMessages.length]);

  // Code editor line highlighting
  useEffect(() => {
    const codeTimer = setInterval(() => {
      setActiveCodeLine((prev) => (prev + 1) % 6);
    }, 1400);
    return () => clearInterval(codeTimer);
  }, []);

  // Cursor simulated movement loop
  useEffect(() => {
    const targets: Array<'code' | 'button' | 'preview'> = ['button', 'code', 'preview', 'button'];
    let idx = 0;
    const cursorInterval = setInterval(() => {
      idx = (idx + 1) % targets.length;
      setCursorTarget(targets[idx]);
    }, 3200);
    return () => clearInterval(cursorInterval);
  }, []);

  const triggerManualRegeneration = () => {
    setGenerationStep(1);
    setIsGenerating(true);
    setVisibleChatCount(1);
  };

  return (
    <section id="home" className="relative pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Text & Value Proposition */}
        <div className="text-center max-w-3xl mx-auto space-y-5 mb-14">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-xs font-semibold text-emerald-800 shadow-xs backdrop-blur-sm"
          >
            <Award className="w-4 h-4 text-emerald-600" />
            <span>10+ Years of Full-Stack Web Engineering Experience</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-[1.12]"
          >
            Next-Gen Websites Engineered with{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent">
              Senior Craft
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto"
          >
            With over 10 years in software design and production web engineering, ZenX Web Solutions builds ultra-fast, high-converting digital platforms for startups and established enterprises.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-1"
          >
            <motion.button
              onClick={onStartProject}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 28px -6px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl shadow-md shadow-[#4F46E5]/25 flex items-center gap-2 cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
              <span>Deploy Your Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              onClick={onViewPricing}
              whileHover={{ scale: 1.02, backgroundColor: '#F8FAFC' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <span>Explore Software Plans</span>
            </motion.button>
          </motion.div>

        </div>

        {/* ============================================================== */}
        {/* CENTERPIECE: SENIOR DEVELOPER WORKSPACE DASHBOARD */}
        {/* ============================================================== */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Ambient Multi-Hue Glow Behind Interface */}
          <div className="absolute -inset-6 bg-gradient-to-r from-[#4F46E5]/15 via-cyan-400/15 to-purple-500/15 rounded-3xl blur-3xl pointer-events-none" />

          {/* ================= FLOATING 3D GLASS SOFTWARE CARDS ================= */}
          {/* Card 1: UI Generated */}
          <motion.div
            animate={{ y: [-8, 8, -8], rotate: [-1, 2, -1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-7 -left-4 sm:-left-8 z-30 hidden md:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-indigo-500/10"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">10 Years Experience</div>
              <div className="text-xs font-bold text-slate-800">✓ Responsive Design</div>
            </div>
          </motion.div>

          {/* Card 2: Performance 98/100 */}
          <motion.div
            animate={{ y: [8, -8, 8], rotate: [2, -1, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            className="absolute -top-7 -right-4 sm:-right-8 z-30 hidden md:flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl shadow-cyan-500/10"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center font-bold text-xs">
              ⚡
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Performance</div>
              <div className="text-xs font-bold text-slate-800">98/100 Score</div>
            </div>
          </motion.div>

          {/* Card 3: Launch Ready */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [-2, 1, -2] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-6 left-12 z-30 hidden lg:flex items-center gap-2.5 px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg shadow-purple-500/10"
          >
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center text-xs font-bold">
              ✦
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Launch Ready</div>
              <div className="text-[11px] font-bold text-emerald-600">Production Ready</div>
            </div>
          </motion.div>

          {/* ================= FLOATING GLASS TECHNOLOGY BADGES ================= */}
          <motion.div
            animate={{ y: [6, -6, 6], rotate: [1, -1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            className="absolute -bottom-6 right-16 z-30 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md text-xs font-semibold text-slate-800"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>React + Next.js</span>
          </motion.div>

          {/* ================= MAIN DASHBOARD WINDOW CONTAINER ================= */}
          <div className="relative rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl overflow-hidden text-left z-20">
            
            {/* Top Window Navigation Bar */}
            <div className="px-4 py-3 bg-[#0B0F19] border-b border-slate-800 flex items-center justify-between">
              
              {/* Window Dots & Workspace Title */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>zenx-workspace // senior-engineer-studio</span>
                </div>
              </div>

              {/* Status & Re-generate Action */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-md border border-emerald-800/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>10Y_EXPERIENCE_ONLINE</span>
                </div>

                <button
                  onClick={triggerManualRegeneration}
                  className="px-2.5 py-1 text-[11px] font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Re-run Engineering Build Simulation"
                >
                  <RotateCcw className="w-3 h-3 text-indigo-400" />
                  <span className="hidden sm:inline">Rebuild Preview</span>
                </button>
              </div>

            </div>

            {/* Simulated Animated Cursor */}
            <motion.div
              animate={
                cursorTarget === 'button'
                  ? { x: 380, y: 70, opacity: 1, scale: [1, 0.9, 1] }
                  : cursorTarget === 'code'
                  ? { x: 90, y: 150, opacity: 1, scale: 1 }
                  : { x: 500, y: 220, opacity: 1, scale: 1 }
              }
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute z-40 pointer-events-none hidden md:block"
            >
              <div className="relative">
                {/* SVG Pointer */}
                <svg className="w-5 h-5 text-indigo-400 drop-shadow-md" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                {/* Engineer Tag */}
                <div className="absolute top-4 left-4 px-2 py-0.5 rounded-md bg-[#4F46E5] text-white text-[9px] font-mono font-bold shadow-md whitespace-nowrap">
                  ✦ Lead Engineer
                </div>
              </div>
            </motion.div>

            {/* 3-Column Dashboard Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
              
              {/* ================= LEFT PANEL: ANIMATED CODE EDITOR ================= */}
              <div className="lg:col-span-4 p-4 sm:p-5 bg-[#0B0F19]/60 font-mono flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>project-config.ts</span>
                    </div>
                    <span className="text-[10px] text-indigo-400 font-semibold">TypeScript</span>
                  </div>

                  {/* Code Block with line-by-line highlights */}
                  <div className="space-y-1 text-xs text-slate-300 leading-relaxed">
                    <div className={`p-1 rounded ${activeCodeLine === 0 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      <span className="text-purple-400 font-bold">const</span>{' '}
                      <span className="text-cyan-300">website</span> ={' '}
                      <span className="text-yellow-300 font-semibold">createProject</span>({'{'}
                    </div>

                    <div className={`pl-4 p-1 rounded ${activeCodeLine === 1 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      <span className="text-slate-400">design:</span>{' '}
                      <span className="text-emerald-300">"premium"</span>,
                    </div>

                    <div className={`pl-4 p-1 rounded ${activeCodeLine === 2 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      <span className="text-slate-400">performance:</span>{' '}
                      <span className="text-emerald-300">"optimized"</span>,
                    </div>

                    <div className={`pl-4 p-1 rounded ${activeCodeLine === 3 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      <span className="text-slate-400">responsive:</span>{' '}
                      <span className="text-amber-400 font-semibold">true</span>
                    </div>

                    <div className={`p-1 rounded ${activeCodeLine === 4 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      {'}'});
                    </div>

                    <div className={`pt-2 p-1 rounded text-[11px] ${activeCodeLine === 5 ? 'bg-indigo-950/60 text-white' : ''}`}>
                      <span className="text-slate-500">// Deploying to Edge Global CDN...</span>
                      <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse ml-1 align-middle" />
                    </div>
                  </div>
                </div>

                {/* Senior Engineer Note Pill */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/20 text-[11px] flex items-start gap-2 text-indigo-200">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-white">Senior Dev Architecture:</span> 100/100 Core Web Vitals optimization configured.
                    </div>
                  </div>
                </div>
              </div>

              {/* ================= CENTER PANEL: LIVE GENERATION PREVIEW ================= */}
              <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between bg-[#0F172A]/70">
                
                {/* Header Preview Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5 text-indigo-400" />
                    <span className="text-xs font-bold text-white">Live Build Canvas</span>
                  </div>
                  
                  <div className="text-[10px] text-slate-400 font-mono">
                    Step {generationStep}/4 · {generationStep === 4 ? 'Complete' : 'Compiling'}
                  </div>
                </div>

                {/* Transformation Area: Wireframe -> Images -> Buttons -> Final Interactive */}
                <div className="relative rounded-xl border border-slate-700/80 bg-white p-4 min-h-[260px] flex flex-col justify-between shadow-inner overflow-hidden text-slate-800">
                  
                  {/* Scanline Overlay while compiling */}
                  {isGenerating && (
                    <motion.div
                      animate={{ y: ['-100%', '300%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none z-10"
                    />
                  )}

                  {/* Wireframe Mockup Evolving */}
                  <div className="space-y-3">
                    
                    {/* Step 1: Layout Blocks / Nav */}
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <ZenXLogo size="sm" showText={false} />
                        <span className="text-xs font-bold text-slate-900">ZenX Client Portal</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {generationStep >= 1 ? (
                          <div className="w-12 h-2 rounded bg-slate-200" />
                        ) : (
                          <div className="w-12 h-2 rounded bg-slate-100 animate-pulse" />
                        )}
                        <span className="text-[9px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 font-bold">
                          Live
                        </span>
                      </div>
                    </div>

                    {/* Step 2: Hero Visual Card with Images Loading */}
                    <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 space-y-2">
                      <div className="w-2/3 h-3 rounded bg-slate-800 font-bold" />
                      <div className="w-5/6 h-2 rounded bg-slate-300" />
                      
                      {generationStep >= 2 ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-2 h-16 rounded-md bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-100 flex items-center justify-center text-[10px] text-indigo-700 font-semibold gap-1.5"
                        >
                          <Layers className="w-3.5 h-3.5 text-[#4F46E5]" />
                          <span>High-Resolution Visual Assets Loaded</span>
                        </motion.div>
                      ) : (
                        <div className="mt-2 h-16 rounded-md bg-slate-100 flex items-center justify-center text-[10px] text-slate-400">
                          Wireframe Grid Block...
                        </div>
                      )}
                    </div>

                    {/* Step 3: Dynamic Action Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {generationStep >= 3 ? (
                        <>
                          <motion.button
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-1.5 px-3 rounded-md bg-[#4F46E5] text-white text-[10px] font-bold shadow-xs text-center"
                          >
                            Explore Catalog
                          </motion.button>
                          <motion.button
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="py-1.5 px-3 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold text-center"
                          >
                            Instant Checkout
                          </motion.button>
                        </>
                      ) : (
                        <>
                          <div className="h-7 rounded-md bg-slate-200 animate-pulse" />
                          <div className="h-7 rounded-md bg-slate-100 animate-pulse" />
                        </>
                      )}
                    </div>

                  </div>

                  {/* Step 4: Final status indicator banner */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <Check className="w-3 h-3" />
                      {generationStep === 4 ? 'Ready for Deployment' : 'Building Layout...'}
                    </span>
                    <span className="font-mono text-slate-400">0.42ms build latency</span>
                  </div>

                </div>

                {/* Progress bar */}
                <div className="mt-4 space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      Engineering Digital Experience...
                    </span>
                    <span className="text-white font-bold">{generationStep * 25}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <motion.div
                      animate={{ width: `${generationStep * 25}%` }}
                      transition={{ duration: 0.4 }}
                      className="h-full bg-gradient-to-r from-[#4F46E5] via-cyan-400 to-emerald-400 rounded-full"
                    />
                  </div>
                </div>

              </div>

              {/* ================= RIGHT PANEL: SENIOR ENGINEER CONSULTATION DESK ================= */}
              <div className="lg:col-span-3 p-4 sm:p-5 bg-[#0B0F19]/80 flex flex-col justify-between">
                
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-xs font-bold text-white">Lead Engineer Desk</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-mono">ONLINE</span>
                  </div>

                  {/* Conversation Bubbles */}
                  <div className="space-y-2.5 min-h-[240px]">
                    <AnimatePresence>
                      {chatMessages.slice(0, visibleChatCount).map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3 }}
                          className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                              msg.sender === 'user'
                                ? 'bg-[#4F46E5] text-white font-medium rounded-br-none shadow-xs'
                                : msg.text.includes('✓')
                                ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 font-semibold rounded-bl-none'
                                : 'bg-slate-800/90 text-slate-200 rounded-bl-none border border-slate-700/60'
                            }`}
                          >
                            {msg.sender === 'lead' && (
                              <div className="text-[9px] font-mono text-cyan-400 mb-0.5">ZenX Lead Engineer (10Y Exp)</div>
                            )}
                            {msg.text}
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Simulated Chat Input Field */}
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                    <span className="text-slate-500">Message: "Deploy to production"</span>
                    <Send className="w-3 h-3 text-indigo-400 ml-auto cursor-pointer" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

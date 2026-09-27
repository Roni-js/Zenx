import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle2, ArrowRight, X, Sparkles, Terminal, Code2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitProjectInquiry } from '../firebase';

interface ContactCTAProps {
  selectedPlan?: string;
  onClearPlan?: () => void;
}

export const ContactCTA: React.FC<ContactCTAProps> = ({ selectedPlan }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState(selectedPlan || 'Business Website ($179)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (selectedPlan) {
      setProjectType(selectedPlan);
    }
  }, [selectedPlan]);

  // Auto-dismiss toast after 6 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => {
        setShowToast(false);
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4F46E5', '#6366F1', '#38BDF8', '#10B981'],
      });
    } catch (_) {}
  };

  const openMailClient = () => {
    const subject = `New ZenX project inquiry - ${projectType}`;
    const body = `Name: ${name}\nEmail: ${email}\nProject Type: ${projectType}\n\nProject brief:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=zenx2205@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:zenx2205@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    const newWindow = window.open(gmailUrl, '_blank');

    if (!newWindow) {
      window.location.href = mailtoUrl;
      return;
    }

    setTimeout(() => {
      if (newWindow.closed) {
        window.location.href = mailtoUrl;
      }
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedProjectType = projectType.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return;
    }

    setSubmitError('');
    setIsSubmitting(true);

    // Show success celebration before opening the user's email draft.
    setSubmitted(true);
    setShowToast(true);
    triggerCelebration();

    try {
      await submitProjectInquiry({
        name: trimmedName,
        email: trimmedEmail,
        projectType: trimmedProjectType,
        message: trimmedMessage,
      });

      setTimeout(() => {
        setShowToast(false);
      }, 1800);
    } catch (error) {
      console.error('Project inquiry submission failed:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        openMailClient();
      }, 500);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setShowToast(false);
    setSubmitError('');
    setName('');
    setEmail('');
    setMessage('');
  };

  const [isCelebrating, setIsCelebrating] = useState(false);

  const triggerCelebration = () => {
    setIsCelebrating(true);
    triggerConfetti();
    setTimeout(() => setIsCelebrating(false), 1400);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi ZenX Web Solutions! I'd like to initiate our digital project (${projectType}).`
  );
  const whatsappUrl = `https://wa.me/918777324550?text=${whatsappMessage}`;

  return (
    <section id="contact" className="relative py-24 bg-[#0B0F19] text-white border-t border-slate-800 overflow-hidden">
      
      {/* Animated Gradient Mesh in Background */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[42rem] rounded-full bg-gradient-to-tr from-[#4F46E5]/25 via-cyan-500/15 to-purple-600/20 blur-3xl pointer-events-none"
      />

      {/* Floating Code Fragments in Background */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-10 p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-[11px] text-cyan-400 backdrop-blur-md pointer-events-none hidden md:block shadow-lg"
      >
        <span className="text-slate-500">// Senior Engineer Dispatch</span>
        <br />
        initiateProductionStack();
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15], rotate: [2, -2, 2] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-16 right-10 p-3 rounded-xl bg-slate-900/80 border border-slate-800 font-mono text-[11px] text-indigo-300 backdrop-blur-md pointer-events-none hidden md:block shadow-lg"
      >
        <span className="text-slate-500">// Global Deployment</span>
        <br />
        target: "edge-us-eu-apac";
      </motion.div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 right-4 sm:right-8 z-50 max-w-sm w-full bg-[#111728] text-white rounded-xl shadow-2xl shadow-indigo-500/20 border border-slate-700 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-xs font-bold text-white">
                  Submitted
                </h4>
                <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                  Thank you, <strong className="text-white">{name}</strong>. Our architects will contact you at <strong className="text-cyan-300">{email}</strong> within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                aria-label="Close notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full bg-slate-800 h-1 rounded-full mt-3 overflow-hidden">
              <div className="bg-emerald-400 h-full w-full animate-[shrink_6s_linear_forwards]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isCelebrating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center pointer-events-none z-40"
          >
            <div className="rounded-full bg-emerald-500/15 border border-emerald-400/30 px-6 py-3 shadow-[0_0_40px_rgba(16,185,129,0.35)] backdrop-blur-sm">
              <span className="text-lg font-bold text-emerald-300">Submitted</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-300">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>DISPATCH_PROJECT_INQUIRY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Build Your Digital Product?
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Tell us about your brand vision and we will engineer a high-speed, modern website tailored to your goals.
          </p>

          {/* Quick WhatsApp & Direct Contact Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </motion.a>

            <motion.a
              href="mailto:zenx2205@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-slate-400" />
              <span>zenx2205@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Lead Capture Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#0F172A] rounded-2xl border border-slate-800 p-8 sm:p-10 shadow-2xl text-left relative overflow-hidden"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-8 text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Inquiry Successfully Logged!
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{name}</strong>. We received your configuration for <strong className="text-cyan-300">{projectType}</strong>. Our senior engineers will review your specs and contact you at <strong className="text-white">{email}</strong> within 24 hours.
              </p>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleReset}
                  className="px-5 py-2.5 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/60 hover:bg-indigo-900/60 border border-indigo-500/30 rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </motion.button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Alex Mercer"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Target Architecture Plan
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all"
                >
                  <option value="Starter Website ($50)">Starter Website ($50)</option>
                  <option value="Business Website ($100)">Business Website ($100) — Most Popular</option>
                  <option value="Premium Website ($150)">Premium Website ($150)</option>
                  <option value="Landing Page Architecture">High-Converting Landing Page</option>
                  <option value="E-Commerce Storefront">E-Commerce Development</option>
                  <option value="Custom Engineering Project">Custom Enterprise Scope</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">
                  Project Brief &amp; Requirements <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your project scope, target timeline, and any design references..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] resize-none transition-all"
                />
              </div>

              {/* Action Button with Glow Expansion and Arrow Motion */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 0 30px 4px rgba(79, 70, 229, 0.45)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#4F46E5] via-[#6366F1] to-cyan-500 shadow-md shadow-[#4F46E5]/30 transition-all cursor-pointer group disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Synthesizing Project...</span>
                  ) : (
                    <>
                      <span>Submit</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1.5" />
                    </>
                  )}
                </motion.button>

                <p className="text-[11px] text-slate-400 text-center sm:text-right font-mono">
                  &lt;24h engineering turnaround · Zero obligation
                </p>
              </div>

              {submitError && (
                <p className="text-xs text-rose-300 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2 mt-3">
                  {submitError}
                </p>
              )}
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};

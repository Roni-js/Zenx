import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Terminal } from 'lucide-react';
import { ZenXLogo } from './ZenXLogo';

interface HeaderProps {
  onGetStarted: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetStarted }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Workspace', href: '#home' },
    { name: 'Capabilities', href: '#services' },
    { name: 'Software Plans', href: '#pricing' },
    { name: 'Methodology', href: '#about' },
    { name: 'Dispatch Inquiry', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-40 bg-white/85 backdrop-blur-xl border-b border-slate-200/80 transition-all"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Official Company Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <ZenXLogo size="md" showText={true} theme="light" />
          </motion.a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + i * 0.05 }}
                whileHover={{ y: -1 }}
                className="text-xs font-semibold text-slate-600 hover:text-[#4F46E5] transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4F46E5] transition-all duration-200 group-hover:w-full rounded-full" />
              </motion.a>
            ))}
          </nav>

          {/* Right Side CTA Button with Subtle Glow */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={onGetStarted}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 24px -4px rgba(79, 70, 229, 0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#4F46E5] to-[#6366F1] rounded-xl shadow-sm shadow-[#4F46E5]/30 overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-indigo-200 group-hover:rotate-12 transition-transform" />
                <span>Start Project</span>
              </span>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-4 space-y-3 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#4F46E5] hover:bg-slate-50 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetStarted();
                }}
                className="w-full py-2.5 px-4 text-xs font-bold text-center text-white bg-[#4F46E5] hover:bg-[#4338CA] rounded-xl shadow-sm"
              >
                Start Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

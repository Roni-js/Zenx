import React from 'react';
import { ZenXLogo } from './ZenXLogo';

export const Footer: React.FC = () => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-slate-100 py-12 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Left Brand & Tagline */}
          <div>
            <a href="#home" className="inline-block">
              <ZenXLogo size="md" showText={true} theme="light" />
            </a>
            <p className="text-xs text-slate-500 mt-2">
              Modern websites engineered for performance and real business growth.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-600 hover:text-[#4F46E5] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-xs font-medium text-slate-500">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#4F46E5] transition-colors"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Bottom Copyright Text */}
        <div className="pt-6 flex items-center justify-between text-xs text-slate-400">
          <p>© 2025 ZenX Web Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

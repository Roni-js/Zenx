import React from 'react';

interface ZenXLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'dark' | 'light';
  useImage?: boolean;
}

export const ZenXLogo: React.FC<ZenXLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
  useImage = false,
}) => {
  // Dimensions mapping
  const sizeMap = {
    sm: { icon: 28, textMain: 'text-sm', textSub: 'text-[7px]' },
    md: { icon: 38, textMain: 'text-lg', textSub: 'text-[9px]' },
    lg: { icon: 54, textMain: 'text-2xl', textSub: 'text-[11px]' },
    xl: { icon: 72, textMain: 'text-3xl', textSub: 'text-[13px]' },
  };

  const currentSize = sizeMap[size];
  const isDark = theme === 'dark';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      
      {/* Official Interlocking ZX Tech Emblem */}
      <div
        className="relative flex items-center justify-center shrink-0"
        style={{ width: currentSize.icon, height: currentSize.icon }}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm overflow-visible"
        >
          <defs>
            {/* Blue to Cyan Gradient for Z */}
            <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#1E40AF" />
            </linearGradient>

            {/* Lime to Green Gradient for X */}
            <linearGradient id="xGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A3E635" />
              <stop offset="60%" stopColor="#65A30D" />
              <stop offset="100%" stopColor="#15803D" />
            </linearGradient>

            {/* Cyan Accent */}
            <linearGradient id="cyanAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
          </defs>

          {/* Circuit / Digital Particle Trails (Left & Top) */}
          <rect x="8" y="24" width="14" height="4" rx="2" fill="#38BDF8" opacity="0.85" />
          <rect x="14" y="32" width="10" height="3" rx="1.5" fill="#0284C7" opacity="0.65" />
          <circle cx="6" cy="26" r="2.5" fill="#38BDF8" />
          <circle cx="10" cy="40" r="2" fill="#0284C7" opacity="0.5" />

          {/* Circuit Branches (Right & Top) */}
          <line x1="68" y1="26" x2="82" y2="12" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <line x1="82" y1="12" x2="92" y2="12" stroke="#84CC16" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <circle cx="92" cy="12" r="3" fill="#A3E635" />
          <circle cx="76" cy="18" r="2" fill="#65A30D" />
          <circle cx="86" cy="28" r="2.5" fill="#A3E635" opacity="0.8" />
          <circle cx="80" cy="44" r="2" fill="#65A30D" opacity="0.6" />

          {/* Letter 'Z' - Stylized High-Tech Polygon */}
          {/* Top Bar of Z */}
          <path
            d="M20 22 H54 L48 30 H26 Z"
            fill="url(#cyanAccent)"
          />
          {/* Diagonal Stroke of Z */}
          <path
            d="M48 30 L22 72 H36 L58 36 Z"
            fill="url(#zGrad)"
          />
          {/* Bottom Bar of Z */}
          <path
            d="M22 72 H58 L54 80 H18 Z"
            fill="url(#zGrad)"
          />

          {/* Letter 'X' - Interlocking Modern Cross */}
          {/* Main Diagonal (Top-Right to Bottom-Left) */}
          <path
            d="M74 20 L44 80 H56 L86 20 Z"
            fill="url(#xGrad)"
            opacity="0.95"
          />
          {/* Crossing Segment (Top-Left to Bottom-Right) */}
          <path
            d="M50 28 L40 46 L48 52 L58 34 Z"
            fill="url(#xGrad)"
          />
          <path
            d="M62 58 L76 80 H88 L70 52 Z"
            fill="#475569"
            opacity="0.8"
          />

          {/* Digital Network Connection Dots around ZX */}
          <circle cx="58" cy="80" r="2.5" fill="#0284C7" />
          <circle cx="88" cy="80" r="2.5" fill="#65A30D" />
          <line x1="58" y1="80" x2="68" y2="88" stroke="#0284C7" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <circle cx="68" cy="88" r="2" fill="#0284C7" opacity="0.7" />
        </svg>
      </div>

      {/* Typography: ZENX + WEB SOLUTIONS */}
      {showText && (
        <div className="flex flex-col text-left leading-none">
          <div
            className={`font-black tracking-[0.16em] uppercase transition-colors ${currentSize.textMain} ${
              isDark ? 'text-white' : 'text-[#0F172A]'
            }`}
          >
            ZENX
          </div>
          <div
            className={`font-bold tracking-[0.24em] uppercase mt-0.5 transition-colors ${currentSize.textSub} ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            WEB SOLUTIONS
          </div>
        </div>
      )}

    </div>
  );
};

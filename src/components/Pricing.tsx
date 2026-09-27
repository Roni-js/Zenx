import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, ShieldCheck, Terminal, Cpu } from 'lucide-react';

interface PricingProps {
  onSelectPlan: (planName: string, price: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      tierId: 'TIER_STARTER',
      name: 'Starter Website',
      price: '$50',
      originalPrice: '$99',
      bestFor: 'Ideal for early-stage entrepreneurs & single product launches.',
      isPopular: false,
      isPremium: false,
      features: [
        '1–3 High-Performance Pages',
        'Mobile-First Responsive Engine',
        'Secure Inbound Contact Form',
        'Performance-Optimized Build',
        'Social Media Integration',
        'Fast 5–7 Day Delivery',
      ],
      buttonText: 'Deploy Starter Plan',
      buttonClass: 'bg-slate-900 text-white hover:bg-slate-800',
    },
    {
      tierId: 'TIER_BUSINESS',
      name: 'Business Website',
      price: '$100',
      originalPrice: '$179',
      bestFor: 'Optimized for scaling businesses needing authority & conversions.',
      isPopular: true,
      isPremium: false,
      features: [
        'Up to 5 Custom Engineered Pages',
        'Premium Interactive Animations',
        'Custom Lead Capture Funnels',
        'Conversion-Focused UX Architecture',
        'Global Edge CDN Speed Optimization',
        'Social Media & WhatsApp Integration',
        'Priority Revision Support',
      ],
      buttonText: 'Deploy Business Suite',
      buttonClass: 'bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white shadow-md shadow-indigo-500/25',
    },
    {
      tierId: 'TIER_ENTERPRISE',
      name: 'Premium Website',
      price: '$150',
      originalPrice: '$250',
      bestFor: 'Complete turnkey digital architecture with tailored interactions.',
      isPopular: false,
      isPremium: true,
      features: [
        'Up to 8 Bespoke Architecture Pages',
        'Custom Interactive Motion Graphics',
        'E-Commerce or Booking Logic Support',
        'Full WhatsApp / API Integrations',
        'Automated Performance Optimization',
        '30 Days Dedicated Launch Support',
        'Complete Source Code Handover',
      ],
      buttonText: 'Deploy Premium Architecture',
      buttonClass: 'bg-slate-900 text-white hover:bg-slate-800',
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-mono font-semibold uppercase tracking-wider text-[#4F46E5]">
            <Terminal className="w-3.5 h-3.5" />
            <span>SOFTWARE_TIERS // TRANSPARENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Transparent Software Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Flat, milestone-based pricing with zero recurring developer retainer lock-ins.
          </p>
        </motion.div>

        {/* 3 Pricing Cards with 3D Tilt & Moving Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch perspective-1000">
          {plans.map((plan, index) => {
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={
                  plan.isPopular
                    ? {
                        y: -10,
                        boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.3)',
                      }
                    : {
                        y: -8,
                        boxShadow: '0 20px 35px -10px rgba(17, 24, 39, 0.12)',
                      }
                }
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 text-left ${
                  plan.isPopular
                    ? 'bg-white p-[2px] bg-gradient-to-b from-[#4F46E5] via-[#818CF8] to-[#06B6D4] animate-gradient-border shadow-xl shadow-indigo-100 ring-1 ring-[#4F46E5]/30 lg:-translate-y-2'
                    : 'bg-slate-50/70 border border-slate-200/90 shadow-xs'
                }`}
              >
                {/* For the popular plan with gradient border, wrapper inner body */}
                <div className={`w-full h-full rounded-2xl flex flex-col justify-between ${plan.isPopular ? 'bg-white p-7' : ''}`}>
                  
                  {/* Floating "Most Popular" Badge with Moving Light */}
                  {plan.isPopular && (
                    <motion.div
                      animate={{ y: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#4F46E5] via-[#7C3AED] to-cyan-500 text-white text-[11px] font-bold tracking-wide uppercase shadow-lg shadow-indigo-500/30 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Most Popular Plan</span>
                    </motion.div>
                  )}

                  <div>
                    {/* Top Tier Tag */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        {plan.tierId}
                      </span>
                      {plan.isPremium && (
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                          Enterprise Ready
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-[#111827]">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 mb-5">
                      {plan.bestFor}
                    </p>

                    {/* Price Block */}
                    <div className="mb-6 pb-6 border-b border-slate-200/80">
                      <span className="text-[11px] text-slate-400 font-mono block">One-Time Project Investment</span>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-[#111827] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">/ flat fee</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-[11px]">
                        <span className="text-slate-400 line-through">{plan.originalPrice}</span>
                        <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 font-semibold">
                          Save {Number(plan.originalPrice.replace('$', '')) - Number(plan.price.replace('$', ''))}
                        </span>
                      </div>
                    </div>

                    {/* Feature Specs */}
                    <div className="space-y-3 mb-8">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block font-mono text-[11px]">
                        Specifications:
                      </span>
                      <ul className="space-y-2.5">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                            <Check className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div>
                    <motion.button
                      onClick={() => onSelectPlan(plan.name, plan.price)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${plan.buttonClass}`}
                    >
                      {plan.buttonText}
                    </motion.button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Pricing Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 max-w-xl mx-auto">
            <strong>Custom Scope Note:</strong> Need custom database architectures, third-party API integrations, or multi-tenant portals? Custom engineering estimates are provided within 24 hours.
          </p>
        </div>

      </div>
    </section>
  );
};

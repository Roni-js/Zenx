import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Layout, ShoppingCart, ArrowRight, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services = [
    {
      moduleId: 'MOD_01',
      title: 'Website Development',
      badge: 'Multi-Page Architecture',
      description: 'Engineered responsive websites structured to scale your brand authority, capture inbound inquiries, and deliver lightning-fast page speeds.',
      icon: Globe,
      features: ['Modern React / Next.js Stack', 'Automated Core Web Vitals', 'Enterprise CMS & Lead Forms'],
      latency: '< 0.8s Global CDN',
      color: 'from-indigo-500 to-cyan-500',
    },
    {
      moduleId: 'MOD_02',
      title: 'Landing Pages',
      badge: 'Conversion Optimization',
      description: 'Precision-engineered landing pages built specifically for campaign performance, product releases, and high-impact startup launches.',
      icon: Layout,
      features: ['A/B Conversion Architecture', 'Interactive Hero Simulations', 'Micro-Interactions & Analytics'],
      latency: 'Instant Hydration',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      moduleId: 'MOD_03',
      title: 'E-Commerce Development',
      badge: 'Transactional Engine',
      description: 'Streamlined online stores built for high checkout completion rates, secure digital payments, and effortless product catalogue management.',
      icon: ShoppingCart,
      features: ['Frictionless Checkout Flow', 'Inventory & Cart State Management', 'Payment Gateway Integration'],
      latency: 'Zero Cart Friction',
      color: 'from-emerald-500 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] border-y border-slate-100 relative overflow-hidden">
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
            <Cpu className="w-3.5 h-3.5" />
            <span>SOFTWARE_MODULES // ACTIVATED</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Engineered Capabilities for Modern Growth
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Modular software architectures configured to deploy your digital footprint with speed and conversion excellence.
          </p>
        </motion.div>

        {/* 3 Software Module Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 35px -10px rgba(79, 70, 229, 0.16)',
                  borderColor: '#6366F1',
                }}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 transition-all duration-300 text-left flex flex-col justify-between overflow-hidden shadow-xs"
              >
                {/* Module Header Bar */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                    <span className="text-[10px] font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                      {service.moduleId} // ACTIVE
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {service.latency}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-50 to-slate-50 border border-indigo-100 text-[#4F46E5] flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white group-hover:border-transparent transition-all shadow-xs"
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-bold text-[#111827] group-hover:text-[#4F46E5] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {service.badge}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger Action */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#4F46E5] group-hover:text-[#4338CA] py-1 cursor-pointer"
                  >
                    <span>Configure {service.title}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

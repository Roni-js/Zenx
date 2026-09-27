import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Tag, HeadphonesIcon } from 'lucide-react';

export const WhyZenX: React.FC = () => {
  const points = [
    {
      title: 'Modern & Responsive Design',
      description: 'Your website adapts seamlessly across mobile phones, tablets, and high-resolution desktops.',
      icon: Smartphone,
      color: 'bg-indigo-50 text-[#4F46E5] border-indigo-100',
    },
    {
      title: '10+ Years of Web Mastery',
      description: 'Over a decade of hands-on experience building high-traffic, secure, and conversion-optimized websites.',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
    {
      title: 'Transparent Pricing',
      description: 'Upfront, milestone-based packages with zero hidden fees or unexpected post-launch invoices.',
      icon: Tag,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Friendly Support',
      description: 'Direct communication with the developers building your site and helpful post-launch assistance.',
      icon: HeadphonesIcon,
      color: 'bg-blue-50 text-blue-600 border-blue-100',
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-slate-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold uppercase tracking-wider text-[#4F46E5]">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
            Why Work With ZenX?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A straightforward, hassle-free web development partnership focused on your business results.
          </p>
        </motion.div>

        {/* 4 Small Points Grid with Hover Micro-Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 12px 25px -8px rgba(79, 70, 229, 0.12)',
                  borderColor: '#818CF8',
                }}
                className="group p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 6 }}
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 transition-transform ${point.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <h3 className="text-base font-bold text-[#111827] mb-2 group-hover:text-[#4F46E5] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

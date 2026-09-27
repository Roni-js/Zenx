import { 
  ProjectItem, 
  ServiceItem, 
  TestimonialItem, 
  TechnologyItem, 
  FaqItem, 
  ProcessStep 
} from '../types';

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    name: 'React',
    category: 'Frontend',
    level: 'Core Framework',
    icon: 'react',
    color: '#61DAFB',
    description: 'Component-driven, modular UI architecture with high rendering speed.'
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    level: 'Production Web',
    icon: 'nextjs',
    color: '#FFFFFF',
    description: 'Server-side rendering, static generation & Edge computing for high SEO.'
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    level: 'Design System',
    icon: 'tailwind',
    color: '#38BDF8',
    description: 'Utility-first modern styling system ensuring responsive layouts and zero bloat.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    level: 'Type Safety',
    icon: 'typescript',
    color: '#3178C6',
    description: 'Robust static typing ensuring bug-free production delivery and scalability.'
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Server Runtime',
    icon: 'nodejs',
    color: '#22C55E',
    description: 'Event-driven, asynchronous I/O backend for blazing-fast APIs and microservices.'
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 'NoSQL Engine',
    icon: 'mongodb',
    color: '#10AA50',
    description: 'Flexible, distributed document database with high indexing and schema agility.'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    level: 'Modern ESNext',
    icon: 'javascript',
    color: '#F7DF1E',
    description: 'Advanced modern ECMAScript standards with performant DOM manipulation.'
  },
  {
    name: 'Bootstrap',
    category: 'Styling',
    level: 'Responsive Grid',
    icon: 'bootstrap',
    color: '#7952B3',
    description: 'Proven grid and rapid component prototyping for enterprise workflows.'
  },
  {
    name: 'Express',
    category: 'Backend',
    level: 'REST / GraphQL',
    icon: 'express',
    color: '#94A3B8',
    description: 'Minimalist web framework for lightning-fast RESTful APIs and middleware pipelines.'
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    level: 'Relational DB',
    icon: 'postgres',
    color: '#336791',
    description: 'ACID-compliant relational database with complex querying and reliability.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    subtitle: 'Blazing Fast & Conversion Focused',
    description: 'Modern responsive websites designed for speed, performance, and conversion. Built with clean semantic code, top SEO standards, and flawless mobile experiences.',
    features: [
      'Landing pages',
      'Business websites',
      'Corporate websites',
      'Portfolio websites'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Vite', 'TypeScript'],
    timeline: '1 - 3 Weeks',
    deliverables: [
      'Fully responsive UI across 100% of devices',
      'Sub-second load times & 98+ Lighthouse scores',
      'Technical SEO architecture & social preview meta',
      'Integrated CMS or editable Markdown pipelines'
    ],
    icon: 'Globe'
  },
  {
    id: 'web-app',
    title: 'Web Application Development',
    subtitle: 'Complex Logic & Scalable Architecture',
    description: 'Custom web applications built according to your business requirements. We architect scalable, secure full-stack applications with dynamic reactive interfaces.',
    features: [
      'Dashboards',
      'SaaS platforms',
      'Custom systems',
      'Internal tools'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs'],
    timeline: '3 - 8 Weeks',
    deliverables: [
      'Role-based access control (RBAC) & user authentication',
      'Real-time data visualization & custom analytics',
      'Scalable database schema design & API documentation',
      'Automated CI/CD deployment pipelines'
    ],
    icon: 'LayoutGrid'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Development',
    subtitle: 'Seamless Checkout & High Sales Conversion',
    description: 'Powerful online stores optimized for user experience and sales. From product catalogs to frictionless global checkouts, we build revenue-generating storefronts.',
    features: [
      'Product systems',
      'Payment integration',
      'Custom storefronts',
      'Inventory solutions'
    ],
    technologies: ['Next.js', 'Stripe', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    timeline: '2 - 6 Weeks',
    deliverables: [
      'Global multi-currency checkout & payment gateways',
      'Instant search, filtering, and faceted navigation',
      'Automated inventory & customer order webhooks',
      'High security compliance & zero-downtime hosting'
    ],
    icon: 'ShoppingBag'
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    subtitle: 'Human-Centered & Visually Memorable',
    description: 'Beautiful interfaces designed around user behavior. We craft intuitive flows, distinct visual identities, and interactive design systems that elevate your brand.',
    features: [
      'Wireframes',
      'Prototypes',
      'Design systems'
    ],
    technologies: ['Figma', 'Design Systems', 'Micro-interactions', 'Motion Design'],
    timeline: '1 - 2 Weeks',
    deliverables: [
      'Interactive clickable prototypes for user validation',
      'Comprehensive design token system (colors, typography)',
      'Pixel-perfect developer handoff specifications',
      'User journey maps and conversion funnel blueprints'
    ],
    icon: 'Palette'
  },
  {
    id: 'optimization',
    title: 'Website Optimization',
    subtitle: 'Sub-Second Speed & Search Dominance',
    description: 'Improve website speed, performance, and user experience. We audit legacy bottlenecks, compress assets, and tune Core Web Vitals to maximize search rankings.',
    features: [
      'Speed optimization',
      'SEO improvements',
      'Conversion optimization'
    ],
    technologies: ['Core Web Vitals', 'Lighthouse Audit', 'Image CDN', 'Caching'],
    timeline: '3 - 7 Days',
    deliverables: [
      'Lighthouse score upgrade to 95+ across all 4 metrics',
      'Asset compression, code splitting & bundle pruning',
      'Schema.org structured data & canonical SEO setup',
      'Before & After Core Web Vitals performance report'
    ],
    icon: 'Zap'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discovery',
    subtitle: 'Research & Objectives',
    description: 'Understanding business goals, target audience, technical requirements, and core success metrics to map a foolproof foundation.',
    deliverables: ['Product Requirement Brief', 'Competitor Analysis', 'Technical Architecture Plan'],
    duration: '2 - 4 Days',
    icon: 'Compass'
  },
  {
    step: 2,
    title: 'Planning',
    subtitle: 'Architecture & Design',
    description: 'Creating information structure, design direction, user journey wireframes, and a milestone-driven development roadmap.',
    deliverables: ['Interactive Figma Prototypes', 'Database Schema Models', 'Sprint Roadmap & Milestones'],
    duration: '3 - 6 Days',
    icon: 'Map'
  },
  {
    step: 3,
    title: 'Development',
    subtitle: 'Clean Code & Execution',
    description: 'Building responsive, scalable solutions with modern tech stacks, modular components, clean architecture, and rapid feedback loops.',
    deliverables: ['Weekly Staging Previews', 'Clean Modular Codebase', 'API Integration & State Sync'],
    duration: '1 - 4 Weeks',
    icon: 'Code2'
  },
  {
    step: 4,
    title: 'Testing',
    subtitle: 'Quality Assurance & Audit',
    description: 'Checking performance, security, cross-browser compatibility, responsive viewports, and end-to-end usability before release.',
    deliverables: ['Cross-Device Matrix QA', 'Lighthouse 95+ Audit', 'Security & Penetration Check'],
    duration: '2 - 4 Days',
    icon: 'ShieldCheck'
  },
  {
    step: 5,
    title: 'Launch',
    subtitle: 'Deployment & Scaling',
    description: 'Deploying the final product with automated CI/CD pipelines, SSL encryption, domain DNS mapping, and ongoing post-launch support.',
    deliverables: ['Global Cloud Deployment', 'DNS & SSL Security Config', '30-Day Post-Launch Warranty'],
    duration: '1 - 2 Days',
    icon: 'Rocket'
  }
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: 'synergy-analytics',
    title: 'Synergy SaaS Analytics Suite',
    client: 'Synergy Cloud Ltd.',
    category: 'SaaS Applications',
    description: 'Real-time telemetry and revenue forecasting dashboard with sub-second queries, interactive charts, and role-based permissions.',
    fullOverview: 'Synergy needed a high-performance web dashboard capable of visualizing 45,000+ daily active user interactions with instant filtering. ZenX engineered a custom React/Next.js interface with server-side caching and dynamic SVG analytics.',
    metrics: [
      { label: 'Query Latency', value: '42ms' },
      { label: 'Active Users', value: '45.8K' },
      { label: 'Lighthouse Score', value: '99/100' }
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    features: ['Real-time streaming charts', 'Exportable PDF & CSV audits', 'Multi-tenant organization switch', 'Dark/Light mode contrast engine'],
    gradient: 'from-[#6366F1] to-[#22D3EE]',
    accentColor: '#6366F1',
    deliverables: ['Custom Web App', 'API Integration', 'UI Design System'],
    liveUrl: 'https://synergy-analytics.demo'
  },
  {
    id: 'velocity-luxury',
    title: 'Velocity Motors Commerce',
    client: 'Velocity Global Brands',
    category: 'E-commerce',
    description: 'Ultra-fast luxury storefront engineered for high conversion, 3D interactive car configurator, and multi-currency Stripe checkout.',
    fullOverview: 'An international luxury automotive boutique required an ultra-clean, minimal storefront with instantaneous page transitions. ZenX built a custom headless storefront with Next.js and Tailwind, boosting checkout conversion by 142%.',
    metrics: [
      { label: 'Conversion Lift', value: '+142%' },
      { label: 'Mobile Page Speed', value: '0.6s' },
      { label: 'Revenue Handled', value: '$3.4M' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Stripe API', 'MongoDB'],
    features: ['3D vehicle visualizer', 'One-click guest checkout', 'Instant currency conversion', 'Inventory webhook integration'],
    gradient: 'from-[#3B82F6] to-[#06B6D4]',
    accentColor: '#38BDF8',
    deliverables: ['Custom Storefront', 'Payment Gateway Integration', 'Mobile Optimization'],
    liveUrl: 'https://velocity-store.demo'
  },
  {
    id: 'synthex-fintech',
    title: 'Synthex Digital Banking Platform',
    client: 'Synthex Financial Corp',
    category: 'SaaS Applications',
    description: 'Enterprise fintech portal enabling cross-border currency transfers, multi-account ledger, and cryptographic transaction verification.',
    fullOverview: 'Synthex required bank-grade security alongside consumer-grade design elegance. ZenX developed a zero-trust frontend with encrypted state persistence, real-time FX rate graphs, and intuitive balance forecasting.',
    metrics: [
      { label: 'Monthly Transactions', value: '$12M+' },
      { label: 'Security Audit', value: 'Grade A+' },
      { label: 'User Retention', value: '88%' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'MongoDB'],
    features: ['Live FX streaming rates', 'Two-factor biometric ready', 'Automated tax statement exports', 'Instant bank account linking'],
    gradient: 'from-[#8B5CF6] to-[#EC4899]',
    accentColor: '#8B5CF6',
    deliverables: ['Full-Stack Web App', 'REST API Architecture', 'Compliance Testing'],
    liveUrl: 'https://synthex-finance.demo'
  },
  {
    id: 'nova-studio',
    title: 'Nova Creative Agency Portal',
    client: 'Nova Studio Zurich',
    category: 'Business Websites',
    description: 'A striking editorial agency portfolio with fluid layout transitions, typography showcase, and interactive inquiry calculator.',
    fullOverview: 'Nova Studio sought an international presence that demonstrated creative mastery. ZenX crafted a visually arresting website with smooth scroll kinematics, high-contrast typography, and zero performance compromises.',
    metrics: [
      { label: 'Client Inquiries', value: '+310%' },
      { label: 'Avg Session Duration', value: '3m 48s' },
      { label: 'Mobile Bounce Rate', value: '18%' }
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Motion'],
    features: ['Smooth fluid transitions', 'Interactive agency reel', 'Dynamic client project filter', 'Bespoke project estimation widget'],
    gradient: 'from-[#6366F1] to-[#A855F7]',
    accentColor: '#6366F1',
    deliverables: ['Brand Website', 'Interactive Portfolio', 'SEO Optimization'],
    liveUrl: 'https://nova-studio.demo'
  },
  {
    id: 'hyperflow-saas',
    title: 'HyperFlow Developer Automation',
    client: 'HyperFlow Inc.',
    category: 'Landing Pages',
    description: 'High-converting B2B SaaS landing page with interactive interactive playground, terminal simulation, and documentation integration.',
    fullOverview: 'HyperFlow wanted to launch their developer workflow automation tool to 50,000+ early waitlist engineers. ZenX engineered an interactive landing experience featuring a simulated in-browser terminal, interactive command sandbox, and seamless GitHub auth.',
    metrics: [
      { label: 'Waitlist Signups', value: '54.2K' },
      { label: 'Visitor to Lead Rate', value: '23.8%' },
      { label: 'First Contentful Paint', value: '0.4s' }
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Vite', 'Node.js'],
    features: ['In-browser interactive terminal', 'Animated architecture diagrams', 'One-click copy snippets', 'Live social proof ticker'],
    gradient: 'from-[#06B6D4] to-[#3B82F6]',
    accentColor: '#06B6D4',
    deliverables: ['High-Conversion Landing Page', 'Interactive Terminal', 'Email Capture Pipeline'],
    liveUrl: 'https://hyperflow-dev.demo'
  },
  {
    id: 'lumina-health',
    title: 'Lumina Telehealth Ecosystem',
    client: 'Lumina Care Network',
    category: 'Business Websites',
    description: 'Patient consultation booking portal with clinician scheduling, automated SMS reminders, and secure patient intake records.',
    fullOverview: 'Lumina unified 14 medical clinics under a single web booking architecture. ZenX provided a HIPAA-friendly responsive interface that reduced missed appointment rates by 41%.',
    metrics: [
      { label: 'Missed Appointments', value: '-41%' },
      { label: 'Monthly Bookings', value: '18,500' },
      { label: 'Patient Rating', value: '4.9/5' }
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    features: ['Smart doctor availability calendar', 'Instant insurance verification', 'Multilingual support (EN, ES, FR)', 'Automated appointment reminders'],
    gradient: 'from-[#10B981] to-[#06B6D4]',
    accentColor: '#10B981',
    deliverables: ['Healthcare Website', 'Booking Engine', 'Accessibility Audit'],
    liveUrl: 'https://lumina-health.demo'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Synergy Cloud Systems',
    avatarText: 'MV',
    avatarBg: 'bg-indigo-600',
    content: 'ZenX transformed our vision into an extraordinary reality. Their team did not just write code; they understood our business logic, optimized our funnel, and delivered a SaaS dashboard with a 99 Lighthouse score. Our inbound demos skyrocketed by 185% in month one.',
    rating: 5,
    projectType: 'SaaS Platform Development',
    location: 'San Francisco, USA'
  },
  {
    id: 'test-2',
    name: 'Elena Rostova',
    role: 'Director of Digital Experience',
    company: 'Velocity Global Brands',
    avatarText: 'ER',
    avatarBg: 'bg-cyan-600',
    content: 'Finding a development partner that marries high-end aesthetic precision with airtight engineering is nearly impossible—until we worked with ZenX. Their speed of delivery, transparent daily updates, and clean React architecture set a new standard for our agency partners.',
    rating: 5,
    projectType: 'Luxury E-Commerce Storefront',
    location: 'London, UK'
  },
  {
    id: 'test-3',
    name: 'Tariq Al-Mansoor',
    role: 'Co-Founder & CTO',
    company: 'Synthex Financial',
    avatarText: 'TA',
    avatarBg: 'bg-violet-600',
    content: 'ZenX built our core banking portal under tight regulatory constraints. The code is modular, type-safe, and thoroughly documented. We were able to onboard our first 10,000 corporate accounts without a single production glitch.',
    rating: 5,
    projectType: 'Fintech Web Application',
    location: 'Dubai, UAE'
  },
  {
    id: 'test-4',
    name: 'Sophie Lindqvist',
    role: 'Creative Director',
    company: 'Nova Design Studio',
    avatarText: 'SL',
    avatarBg: 'bg-emerald-600',
    content: 'As designers ourselves, we are notoriously demanding with spacing, typography, and micro-interactions. ZenX nailed every single transition down to the pixel. Working with them felt like an extension of our internal team.',
    rating: 5,
    projectType: 'Agency Portfolio Website',
    location: 'Stockholm, Sweden'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Services',
    question: 'What services does ZenX provide?',
    answer: 'ZenX provides end-to-end digital solutions including Website Development (landing pages, business & corporate websites), Web Application Development (custom dashboards, SaaS platforms, internal tools), E-Commerce Development (storefronts, payment gateways, product catalogs), UI/UX Design (wireframing, design systems, clickable prototypes), and Website Optimization (speed auditing, SEO architecture, conversion rate improvement).'
  },
  {
    id: 'faq-2',
    category: 'Operations',
    question: 'Do you work with international clients?',
    answer: 'Yes, absolutely! ZenX operates with a global mindset and works with startups, enterprises, and founders across North America, Europe, the Middle East, and Asia. We structure clear async communication channels via Slack, weekly video sprints, and collaborative project management boards across time zones.'
  },
  {
    id: 'faq-3',
    category: 'Technical',
    question: 'Which technologies do you use?',
    answer: 'We build on modern, enterprise-proven stacks including React, Next.js, Tailwind CSS, Bootstrap, JavaScript (ESNext), TypeScript, Node.js, Express, MongoDB, PostgreSQL, and Vite. We prioritize speed, modular architecture, type safety, and clean code that any engineering team can easily maintain.'
  },
  {
    id: 'faq-4',
    category: 'Timeline',
    question: 'How long does website development take?',
    answer: 'Project timelines depend directly on scope and complexity. A modern landing page or corporate business website typically takes 1 to 2 weeks. Custom web applications and e-commerce platforms typically range from 3 to 6 weeks. Every project receives a locked milestone roadmap during our Planning phase.'
  },
  {
    id: 'faq-5',
    category: 'Careers',
    question: 'Do you provide internship opportunities?',
    answer: 'Yes! ZenX is deeply committed to mentoring the next generation of engineers. We offer remote 8-week to 12-week internship and mentorship cohorts where participants work on real-world client repositories, receive structured 1-on-1 code reviews from senior developers, and build demonstrable portfolio products.'
  },
  {
    id: 'faq-6',
    category: 'Ownership',
    question: 'Do I own 100% of the code and design assets after project completion?',
    answer: 'Yes, 100%. Upon project completion and final handover, all intellectual property, source code repositories, Figma design files, and deployment credentials are fully transferred to your company with zero lock-in or recurring proprietary licensing fees.'
  },
  {
    id: 'faq-7',
    category: 'Support',
    question: 'What kind of support is provided after launch?',
    answer: 'Every project includes a 30-day post-launch warranty with zero-cost bug fixes, performance monitoring, and team training. We also offer monthly retainer packages covering feature expansions, security audits, and continuous optimization.'
  }
];

export const WHY_CHOOSE_ZENX = [
  {
    title: 'Modern Technology',
    tagline: 'Cutting-Edge Stacks',
    description: 'We do not build on bloated legacy templates. We harness Next.js, React, TypeScript, and modern headless tools that future-proof your digital presence for years to come.',
    zenxScore: '100% Modern Stack',
    legacyScore: 'Outdated Templates',
    icon: 'Cpu'
  },
  {
    title: 'Responsive Design',
    tagline: 'Flawless Every Screen',
    description: 'Perfect, fluid experiences engineered from 320px mobile screens to 4K ultra-wide monitors. Every button, menu, and layout adapts seamlessly without awkward clipping.',
    zenxScore: 'Adaptive Fluid Layouts',
    legacyScore: 'Rigid Desktop-Only',
    icon: 'Smartphone'
  },
  {
    title: 'Performance Focused',
    tagline: 'Sub-Second Loading',
    description: 'Fast loading websites with optimized architecture, code-splitting, tree-shaking, and asset compression. We systematically hit 95+ Google Lighthouse benchmarks.',
    zenxScore: '95+ Lighthouse Score',
    legacyScore: 'Slow & Bloated (3-5s)',
    icon: 'Gauge'
  },
  {
    title: 'Transparent Process',
    tagline: 'Zero Guesswork',
    description: 'Clear, continuous communication from discovery to deployment. You get live staging links, dedicated Discord/Slack channels, and sprint milestones with zero surprise invoices.',
    zenxScore: 'Real-time Staging Access',
    legacyScore: 'Opaque Radio Silence',
    icon: 'Eye'
  },
  {
    title: 'Affordable Solutions',
    tagline: 'Maximum ROI Value',
    description: 'Startup-friendly pricing models without cutting corners on engineering quality. Transparent fixed-price milestones designed to scale alongside your business growth.',
    zenxScore: 'Transparent Value Milestones',
    legacyScore: 'Hidden Overages & Lock-ins',
    icon: 'TrendingUp'
  }
];

export const INTERNSHIP_BENEFITS = [
  {
    title: 'Real Client Projects',
    description: 'No busywork or toy projects. You will write code that gets merged into live production web applications deployed globally.',
    icon: 'Briefcase'
  },
  {
    title: 'Code Reviews',
    description: 'Receive detailed PR feedback from senior full-stack architects on cleanliness, design patterns, testing, and performance.',
    icon: 'FileCheck'
  },
  {
    title: 'Developer Mentorship',
    description: 'Weekly 1-on-1 pairing sessions to debug complex issues, discuss architecture trade-offs, and master industry tooling.',
    icon: 'Users'
  },
  {
    title: 'Portfolio Building',
    description: 'Graduate with tangible, high-caliber production references and code samples that instantly stand out to tech hiring managers.',
    icon: 'Award'
  },
  {
    title: 'Career Guidance',
    description: 'Resume audits, technical interview preparation, LinkedIn profile optimization, and direct hiring referrals across our startup network.',
    icon: 'Compass'
  }
];

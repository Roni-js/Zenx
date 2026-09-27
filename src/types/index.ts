export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Business Websites' | 'E-commerce' | 'SaaS Applications' | 'Landing Pages';
  description: string;
  fullOverview: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  features: string[];
  gradient: string;
  accentColor: string;
  deliverables: string[];
  liveUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  timeline: string;
  deliverables: string[];
  icon: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  avatarBg: string;
  content: string;
  rating: number;
  projectType: string;
  location: string;
}

export interface TechnologyItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Styling' | 'DevOps';
  level: string;
  icon: string;
  color: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  message: string;
}

export interface InternshipApplicationData {
  fullName: string;
  email: string;
  phone: string;
  githubUrl: string;
  portfolioUrl?: string;
  track: string;
  experienceLevel: string;
  statement: string;
}

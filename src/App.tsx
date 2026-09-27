/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechShowcase } from './components/TechShowcase';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { WhyZenX } from './components/WhyZenX';
import { About } from './components/About';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Business Website ($100)');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string, price: string) => {
    setSelectedPlan(`${planName} (${price})`);
    scrollToSection('contact');
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedPlan(serviceName);
    scrollToSection('contact');
  };

  return (
    <div className="relative min-h-screen bg-white text-[#374151] flex flex-col antialiased selection:bg-[#4F46E5]/15 selection:text-[#4F46E5]">
      
      {/* 0. Introductory Logo Loading Screen */}
      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}

      {/* Subtle Moving Background Elements */}
      <BackgroundAnimation />

      {/* 1. Sticky Header with Entrance & Hover Animations */}
      <Header onGetStarted={() => scrollToSection('contact')} />

      <main className="flex-grow relative z-10">
        
        {/* 2. Hero Section: Futuristic Developer Workspace Animation */}
        <Hero 
          onStartProject={() => scrollToSection('contact')} 
          onViewPricing={() => scrollToSection('pricing')} 
        />

        {/* 3. Technology Showcase: Infinite Horizontal Marquee */}
        <TechShowcase />

        {/* 4. Services Section: 3 Animated Service Cards */}
        <Services 
          onSelectService={handleSelectService} 
        />

        {/* 5. Pricing Section: $50 / $100 / $150 with 3D & Glowing Interactivity */}
        <Pricing 
          onSelectPlan={handleSelectPlan} 
        />

        {/* 6. Why ZenX Section: 4 Compact Pillars */}
        <WhyZenX />

        {/* 7. About Section: Storytelling Animation & 4-Step Agile Delivery */}
        <About 
          onWorkTogether={() => scrollToSection('contact')} 
        />

        {/* 8. Contact CTA & Lead Form: Gradient Glow, WhatsApp, Toast & Confetti */}
        <ContactCTA 
          selectedPlan={selectedPlan} 
        />
        
      </main>

      {/* 9. Minimal Footer */}
      <Footer />

    </div>
  );
}

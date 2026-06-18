import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { StatsSection } from './components/StatsSection';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { PromoBanner } from './components/PromoBanner';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SkillsSection />
        <StatsSection />
        <HowItWorks />
        <Testimonials />
        <PromoBanner />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default App;

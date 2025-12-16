import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { UspGrid } from './components/UspGrid';
import { Pricing } from './components/Pricing';
import { ContactForm } from './components/ContactForm';
import { StickyMobileCTA } from './components/StickyMobileCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <section className="py-16">
          <UspGrid />
        </section>
        <Pricing />
        <ContactForm />
      </main>
      <StickyMobileCTA />
    </div>
  );
};

export default App;
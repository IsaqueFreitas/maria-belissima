import React, { useEffect } from 'react';
import { Navbar, Footer } from './components/layout';
import { HeroSection, AboutSection, ServicesSection, GallerySection } from './components/sections';

const App: React.FC = () => {
  useEffect(() => {
    // Ensure smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;


import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import LanguageToggle from '../components/LanguageToggle';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AIChatWidget from '../components/AIChatWidget';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleLanguageToggle = (lang: 'en' | 'fr') => {
    setLanguage(lang);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen">
      <LanguageToggle language={language} onToggle={handleLanguageToggle} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
      <AIChatWidget />
    </div>
  );
};

export default Index;

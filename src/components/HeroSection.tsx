
import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface HeroSectionProps {
  language: 'en' | 'fr';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: "Dr. Kaleab Nigusse, MD",
      subtitle: "Physician | Health Informatics Specialist | Graphic Designer | Voice-over Artist",
      cta: "Explore My Work",
      description: "Bridging healthcare, technology, and creative design to make a meaningful impact."
    },
    fr: {
      title: "Dr. Kaleab Nigusse, MD",
      subtitle: "Médecin | Spécialiste en Informatique de Santé | Graphiste | Artiste de Voix-off",
      cta: "Découvrir Mon Travail",
      description: "Faire le lien entre la santé, la technologie et le design créatif pour un impact significatif."
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#16425B] via-[#3A7CA5] to-[#81C3D7]">
      {/* Admin Button - Top Right */}
      <Link 
        to="/admin"
        className="fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
      >
        Admin
      </Link>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Medical Icons */}
        <div className="absolute top-1/4 left-1/4 w-6 md:w-8 h-6 md:h-8 text-white/20 animate-bounce" style={{ animationDelay: '0s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H14V20C14 21.1 13.1 22 12 22H10C8.9 22 8 21.1 8 20V16H4C2.9 16 2 15.1 2 14V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
          </svg>
        </div>
        
        <div className="absolute top-3/4 right-1/4 w-8 md:w-12 h-8 md:h-12 text-white/20 animate-bounce" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 19H5V5H19V19M17 12H15.5V13.5H14V15H15.5V16.5H17V15H18.5V13.5H17V12Z"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/6 w-4 md:w-6 h-4 md:h-6 text-white/20 animate-pulse">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.4 16.6L4.8 12L6.2 10.6L9.4 13.8L17.8 5.4L19.2 6.8L9.4 16.6Z"/>
          </svg>
        </div>

        {/* ECG Line Background */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-10">
          <div className="ecg-background"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 text-white text-center lg:text-left transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {content[language].title}
            </h1>
            
            <p className={`text-lg md:text-xl lg:text-2xl mb-6 lg:mb-8 text-white/90 font-light transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {content[language].subtitle}
            </p>
            
            <p className={`text-base md:text-lg mb-8 lg:mb-12 text-white/80 max-w-lg mx-auto lg:mx-0 transform transition-all duration-1000 delay-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              {content[language].description}
            </p>
            
            <button 
              onClick={scrollToProjects}
              className={`bg-white text-[#16425B] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg 
                         hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer
                         transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                         delay-900`}
            >
              {content[language].cta}
            </button>
          </div>

          {/* Profile Image - Hidden on mobile */}
          <div className={`hidden lg:flex lg:w-1/2 justify-center transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/ac8d7979-7a4e-4740-b4af-686150bef380.png"
                alt="Dr. Kaleab Nigusse"
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl 
                          hover:scale-105 transition-transform duration-500 animate-float"
              />
              
              {/* Floating Elements around the image */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-white/20 rounded-full 
                             flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M7 7H17V9H7V7M7 11H17V13H7V11M7 15H13V17H7V15Z"/>
                </svg>
              </div>
              
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-white/20 rounded-full 
                             flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H14V20C14 21.1 13.1 22 12 22H10C8.9 22 8 21.1 8 20V16H4C2.9 16 2 15.1 2 14V10C2 8.9 2.9 8 4 8H8V4C8 2.9 8.9 2 10 2H12Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

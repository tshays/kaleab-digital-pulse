
import React from 'react';

interface FooterProps {
  language: 'en' | 'fr';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    en: {
      tagline: "Bridging Health, Technology & Design",
      quickLinks: "Quick Links",
      links: ["About", "Projects", "Contact"],
      social: "Connect",
      copyright: "© 2025 Dr. Kaleab Nigusse. All rights reserved."
    },
    fr: {
      tagline: "Réunir Santé, Technologie & Design",
      quickLinks: "Liens Rapides",
      links: ["À Propos", "Projets", "Contact"],
      social: "Connecter",
      copyright: "© 2025 Dr. Kaleab Nigusse. Tous droits réservés."
    }
  };

  return (
    <footer className="bg-[#16425B] text-white py-12 md:py-16 relative overflow-hidden">
      {/* Animated ECG Background */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#81C3D7] to-transparent animate-pulse"></div>
      
      {/* Live ECG Heartbeat Line */}
      <div className="absolute top-8 left-0 w-full h-8 overflow-hidden opacity-30">
        <div className="ecg-heartbeat-line"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Dr. Kaleab Nigusse</h3>
            <p className="text-white/80 leading-relaxed text-sm md:text-base">{content[language].tagline}</p>
            
            {/* Bouncing Stethoscope */}
            <div className="mt-6 flex items-center justify-center md:justify-start gap-3">
              <div className="w-6 md:w-8 h-6 md:h-8 text-[#81C3D7] animate-bounce">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 7C13.1 7 14 7.9 14 9S13.1 11 12 11 10 10.1 10 9 10.9 7 12 7M12 17C9.3 17 7 14.7 7 12V11H9V12C9 13.7 10.3 15 12 15S15 13.7 15 12V11H17V12C17 14.7 14.7 17 12 17Z"/>
                </svg>
              </div>
              <div className="text-xs md:text-sm text-white/60">Always Caring, Always Creating</div>
            </div>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">{content[language].quickLinks}</h4>
            <div className="space-y-2 md:space-y-3">
              {content[language].links.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-sm md:text-base text-white/80 hover:text-[#81C3D7] transition-colors duration-200 hover:translate-x-2 transform transition-transform"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <h4 className="text-base md:text-lg font-semibold mb-4 md:mb-6">{content[language].social}</h4>
            <div className="flex gap-3 md:gap-4 justify-center md:justify-end">
              <a 
                href="https://linkedin.com/in/kaleab-nigusse-md-885084111" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:kalsonofzion@gmail.com" 
                className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
                </svg>
              </a>
              <a 
                href="https://t.me/k_Sonofzion" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20 text-center text-white/60 text-sm md:text-base">
          {content[language].copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

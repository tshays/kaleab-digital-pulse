
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
                href="https://wa.me/251910237506" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300"
              >
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.405 3.488"/>
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


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
              <a href="#" className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 md:w-12 h-10 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#81C3D7] hover:scale-110 transition-all duration-300">
                <svg className="w-4 md:w-5 h-4 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.732.099.12.112.225.085.346-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
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

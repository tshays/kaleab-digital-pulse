
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [text, setText] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'fr'>('en');
  
  const messages = {
    en: "Loading Precision & Creativity...",
    fr: "Chargement de précision et de créativité..."
  };

  useEffect(() => {
    const message = messages[currentLanguage];
    let index = 0;

    const typeText = () => {
      if (index < message.length) {
        setText(message.slice(0, index + 1));
        index++;
        setTimeout(typeText, 50);
      } else {
        // Switch language after completing typing
        setTimeout(() => {
          setCurrentLanguage(currentLanguage === 'en' ? 'fr' : 'en');
          setText('');
          index = 0;
        }, 1000);
      }
    };

    typeText();
  }, [currentLanguage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#16425B] flex items-center justify-center z-50">
      <div className="text-center">
        {/* Enhanced Stethoscope Animation */}
        <div className="w-32 h-32 mb-8 mx-auto relative">
          {/* Stethoscope SVG with listening animation */}
          <div className="stethoscope-container">
            <svg 
              className="w-full h-full text-[#81C3D7] animate-stethoscope-bounce" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/>
              <circle cx="12" cy="12" r="2"/>
            </svg>
          </div>
          
          {/* Heartbeat ECG Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-8 overflow-hidden">
            <div className="heartbeat-line"></div>
          </div>
          
          {/* Pulse circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pulse-ring"></div>
            <div className="pulse-ring pulse-ring-delayed"></div>
          </div>
        </div>
        
        <div className="text-white text-xl font-light min-h-[1.5rem]">
          {text}
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

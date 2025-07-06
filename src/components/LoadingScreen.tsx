
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
        {/* Single Stethoscope Animation */}
        <div className="w-32 h-32 mb-8 mx-auto relative">
          <div className="stethoscope-container">
            <svg 
              className="w-full h-full text-[#81C3D7] animate-stethoscope-listening" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              {/* Stethoscope Body */}
              <path d="M19.43 8.56c.18-.06.36-.06.54 0 .93.31 1.47 1.31 1.16 2.24-.31.93-1.31 1.47-2.24 1.16-.93-.31-1.47-1.31-1.16-2.24.22-.66.78-1.11 1.42-1.16v-.88c0-2.42-1.96-4.38-4.38-4.38h-.62c-.38 0-.69-.31-.69-.69s.31-.69.69-.69h.62c3.18 0 5.76 2.58 5.76 5.76v.88zm-5.81 2.2c0 .76-.62 1.38-1.38 1.38s-1.38-.62-1.38-1.38c0-.76.62-1.38 1.38-1.38s1.38.62 1.38 1.38z"/>
              
              {/* Earpieces */}
              <path d="M8 2C7.45 2 7 2.45 7 3s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"/>
              
              {/* Tubes */}
              <path d="M8 4v4c0 2.21 1.79 4 4 4s4-1.79 4-4V4M12 12v4" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    className="animate-pulse"/>
              
              {/* Chest piece */}
              <circle cx="12" cy="18" r="2" className="animate-pulse"/>
            </svg>
          </div>
          
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pulse-ring"></div>
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


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
        {/* Realistic Stethoscope Animation */}
        <div className="w-32 h-32 mb-8 mx-auto relative">
          <div className="stethoscope-container">
            <svg 
              className="w-full h-full text-[#81C3D7] animate-stethoscope-listening" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 200 200"
            >
              {/* Left Earpiece */}
              <circle cx="60" cy="30" r="8" fill="#3A7CA5"/>
              
              {/* Right Earpiece */}
              <circle cx="140" cy="30" r="8" fill="#3A7CA5"/>
              
              {/* Left Tube from earpiece */}
              <path d="M 60 38 Q 60 60 70 80 Q 80 100 100 110" 
                    stroke="#81C3D7" 
                    strokeWidth="4" 
                    fill="none"/>
              
              {/* Right Tube from earpiece */}
              <path d="M 140 38 Q 140 60 130 80 Q 120 100 100 110" 
                    stroke="#81C3D7" 
                    strokeWidth="4" 
                    fill="none"/>
              
              {/* Main tube going down */}
              <path d="M 100 110 L 100 140 Q 100 160 120 170" 
                    stroke="#81C3D7" 
                    strokeWidth="4" 
                    fill="none"/>
              
              {/* Chest piece connector */}
              <circle cx="120" cy="170" r="4" fill="#3A7CA5"/>
              
              {/* Main chest piece (diaphragm) */}
              <circle cx="120" cy="170" r="15" 
                      fill="none" 
                      stroke="#81C3D7" 
                      strokeWidth="3"
                      className="animate-pulse"/>
              
              {/* Inner diaphragm */}
              <circle cx="120" cy="170" r="10" 
                      fill="#3A7CA5" 
                      opacity="0.3"
                      className="animate-pulse"/>
            </svg>
          </div>
          
          {/* Pulse ring around chest piece */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="pulse-ring-realistic"></div>
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

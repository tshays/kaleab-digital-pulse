
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
        {/* ECG Animation */}
        <div className="w-32 h-16 mb-8 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-0.5 bg-[#81C3D7] relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="animate-pulse w-8 h-8 bg-[#81C3D7] rounded-full absolute -top-4 animate-bounce" 
                     style={{ animationDelay: '0.5s' }}></div>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#81C3D7] to-transparent 
                               animate-pulse opacity-80"></div>
                {/* ECG Line Animation */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="ecg-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-white text-xl font-light min-h-[1.5rem]">
          {text}
          <span className="animate-pulse">|</span>
        </div>
      </div>

      <style jsx>{`
        .ecg-line {
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            #81C3D7 20%,
            #81C3D7 40%,
            transparent 60%,
            transparent 100%
          );
          animation: ecg-move 2s linear infinite;
          transform: translateY(-50%);
        }
        
        @keyframes ecg-move {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

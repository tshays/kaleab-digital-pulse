
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const completionTimer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(completionTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Digital grid background */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="floating-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10">
        {/* Digital Stethoscope Formation */}
        <div className="relative w-32 h-32 mb-8 mx-auto">
          {/* Digital particles forming stethoscope */}
          <div className="digital-stethoscope-container">
            {/* Main circular frame with rotating particles */}
            <div className="particle-ring">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="ring-particle"
                  style={{
                    '--rotation': `${i * 30}deg`,
                    animationDelay: `${i * 0.1}s`
                  } as React.CSSProperties}
                />
              ))}
            </div>

            {/* Central glowing core */}
            <div className="digital-core">
              <div className="core-pulse"></div>
            </div>

            {/* Digital stethoscope trails */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 128 128">
              {/* Left earpiece trail */}
              <path
                d="M 45 25 Q 45 45 55 65 Q 60 75 64 85"
                stroke="url(#digitalGradient1)"
                strokeWidth="2"
                fill="none"
                className="digital-trail trail-1"
              />
              
              {/* Right earpiece trail */}
              <path
                d="M 83 25 Q 83 45 73 65 Q 68 75 64 85"
                stroke="url(#digitalGradient2)"
                strokeWidth="2"
                fill="none"
                className="digital-trail trail-2"
              />

              {/* Main tube */}
              <path
                d="M 64 85 L 64 95"
                stroke="url(#digitalGradient3)"
                strokeWidth="3"
                fill="none"
                className="digital-trail trail-3"
              />

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="digitalGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
                  <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="digitalGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                  <stop offset="50%" stopColor="#93C5FD" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="digitalGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Earpieces */}
              <circle cx="45" cy="25" r="4" fill="#60A5FA" className="earpiece earpiece-1" />
              <circle cx="83" cy="25" r="4" fill="#60A5FA" className="earpiece earpiece-2" />
              
              {/* Chest piece */}
              <circle cx="64" cy="95" r="8" fill="none" stroke="#3B82F6" strokeWidth="2" className="chest-piece" />
              <circle cx="64" cy="95" r="5" fill="#1E40AF" className="chest-piece-inner" />
            </svg>

            {/* Scanning line effect */}
            <div className="scan-line"></div>
          </div>
        </div>
        
        {/* Loading text with modern typography */}
        <div className="text-white/90 text-lg font-light tracking-wider mb-4">
          loading<span className="animate-pulse">...</span>
        </div>

        {/* Progress indicator */}
        <div className="w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-blue-400/70 text-xs font-mono mt-2 tracking-widest">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

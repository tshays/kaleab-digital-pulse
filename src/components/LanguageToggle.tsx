
import React from 'react';

interface LanguageToggleProps {
  language: 'en' | 'fr';
  onToggle: (lang: 'en' | 'fr') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
      <button
        onClick={() => onToggle('en')}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${
          language === 'en' 
            ? 'bg-[#16425B] text-white' 
            : 'text-[#16425B] hover:bg-gray-100'
        }`}
      >
        <span className="text-sm">🇬🇧</span>
        <span className="text-sm font-medium">EN</span>
      </button>
      <button
        onClick={() => onToggle('fr')}
        className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-300 ${
          language === 'fr' 
            ? 'bg-[#16425B] text-white' 
            : 'text-[#16425B] hover:bg-gray-100'
        }`}
      >
        <span className="text-sm">🇫🇷</span>
        <span className="text-sm font-medium">FR</span>
      </button>
    </div>
  );
};

export default LanguageToggle;

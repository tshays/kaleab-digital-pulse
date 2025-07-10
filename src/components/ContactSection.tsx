
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

interface ContactSectionProps {
  language: 'en' | 'fr';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Let's collaborate and create something amazing together"
    },
    fr: {
      title: "Contactez-Moi",
      subtitle: "Collaborons et créons quelque chose d'extraordinaire ensemble"
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#16425B] mb-4">
              {content[language].title}
            </h2>
            <p className="text-lg text-[#16425B]/70 max-w-2xl mx-auto">
              {content[language].subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm language={language} isVisible={isVisible} />
            <ContactInfo language={language} isVisible={isVisible} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

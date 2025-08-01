
import React from 'react';
import { Mail, MessageSquare, Phone, MapPin, Linkedin } from 'lucide-react';

interface ContactInfoProps {
  language: 'en' | 'fr';
  isVisible: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ language, isVisible }) => {
  const content = {
    en: {
      contact: {
        email: "Get in Touch",
        whatsapp: "WhatsApp Chat",
        linkedin: "LinkedIn Profile",
        website: "Visit Website",
        address: "Location"
      }
    },
    fr: {
      contact: {
        email: "Prenez Contact",
        whatsapp: "Chat WhatsApp",
        linkedin: "Profil LinkedIn",
        website: "Visitez le Site",
        address: "Localisation"
      }
    }
  };

  return (
    <div className={`transform transition-all duration-1000 delay-500 ${
      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
    }`}>
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-[#16425B] to-[#3A7CA5] p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-6">{content[language].contact.email}</h3>
          <div className="space-y-4">
            <a
              href="mailto:kalsonofzion@gmail.com"
              className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <Mail size={24} />
              <span>kalsonofzion@gmail.com</span>
            </a>
            <a
              href="tel:+251910237506"
              className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <Phone size={24} />
              <span>+251-91-023-7506</span>
            </a>
            <a
              href="https://wa.me/251910237506"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare size={24} />
              <span>{content[language].contact.whatsapp}</span>
            </a>
            <a
              href="https://linkedin.com/in/kaleab-nigusse-md-885084111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={24} />
              <span>{content[language].contact.linkedin}</span>
            </a>
            <a
              href="https://drkal.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>{content[language].contact.website}</span>
            </a>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-2xl">
          <div className="flex items-center gap-4 text-[#16425B]">
            <MapPin size={24} />
            <div>
              <h4 className="font-semibold">{content[language].contact.address}</h4>
              <p className="text-sm">Rue de France(Kezira), Dire Dawa Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

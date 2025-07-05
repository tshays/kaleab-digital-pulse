
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, MessageSquare, Send } from 'lucide-react';

interface ContactSectionProps {
  language: 'en' | 'fr';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Let's collaborate and create something amazing together",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      },
      contact: {
        email: "Get in Touch",
        whatsapp: "WhatsApp Chat"
      }
    },
    fr: {
      title: "Contactez-Moi",
      subtitle: "Collaborons et créons quelque chose d'extraordinaire ensemble",
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        send: "Envoyer le Message"
      },
      contact: {
        email: "Prenez Contact",
        whatsapp: "Chat WhatsApp"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here we would integrate with Firebase or email service
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
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
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={content[language].form.name}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCD6] focus:border-[#3A7CA5] focus:outline-none focus:ring-2 focus:ring-[#3A7CA5]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={content[language].form.email}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCD6] focus:border-[#3A7CA5] focus:outline-none focus:ring-2 focus:ring-[#3A7CA5]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={content[language].form.message}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#D9DCD6] focus:border-[#3A7CA5] focus:outline-none focus:ring-2 focus:ring-[#3A7CA5]/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#16425B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3A7CA5] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {content[language].form.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#16425B] to-[#3A7CA5] p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-6">{content[language].contact.email}</h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:dr.kaleab@example.com"
                      className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <Mail size={24} />
                      <span>dr.kaleab@example.com</span>
                    </a>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
                    >
                      <MessageSquare size={24} />
                      <span>{content[language].contact.whatsapp}</span>
                    </a>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#81C3D7] to-[#3A7CA5] rounded-2xl opacity-10"></div>
                  <div className="relative p-8 text-center">
                    <div className="text-6xl mb-4">🩺</div>
                    <p className="text-[#16425B] font-medium">
                      {language === 'en' 
                        ? 'Ready to make healthcare more innovative and accessible' 
                        : 'Prêt à rendre les soins de santé plus innovants et accessibles'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

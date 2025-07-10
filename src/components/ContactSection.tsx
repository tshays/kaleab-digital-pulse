import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Mail, MessageSquare, Send, Phone, MapPin, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  language: 'en' | 'fr';
}

const ContactSection: React.FC<ContactSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
        phone: "Call Me",
        address: "Location",
        linkedin: "LinkedIn Profile",
        website: "Visit Website",
        whatsapp: "WhatsApp Chat"
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Failed to send message. Please try again or contact me directly.",
      sending: "Sending..."
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
        phone: "Appelez-Moi",
        address: "Localisation",
        linkedin: "Profil LinkedIn",
        website: "Visitez le Site",
        whatsapp: "Chat WhatsApp"
      },
      success: "Message envoyé avec succès ! Je vous répondrai bientôt.",
      error: "Échec de l'envoi du message. Veuillez réessayer ou me contacter directement.",
      sending: "Envoi en cours..."
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS to send emails
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_portfolio', // You'll need to set this up in EmailJS
          template_id: 'template_contact', // You'll need to set this up in EmailJS
          user_id: 'your_public_key', // You'll need to get this from EmailJS
          template_params: {
            from_name: formData.name,
            from_email: formData.email,
            to_email: 'kalsonofzion@gmail.com',
            message: formData.message,
            reply_to: formData.email,
          }
        })
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: content[language].success,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: content[language].error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
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
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#16425B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#3A7CA5] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <Send size={20} />
                  {isSubmitting ? content[language].sending : content[language].form.send}
                </button>
              </form>
            </div>

            {/* Contact Info */}
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

                {/* Address Info */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

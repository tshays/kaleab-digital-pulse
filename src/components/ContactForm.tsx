
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  language: 'en' | 'fr';
  isVisible: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ language, isVisible }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = {
    en: {
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message"
      },
      success: "Message sent successfully! I'll get back to you soon.",
      error: "Failed to send message. Please try again or contact me directly.",
      sending: "Sending..."
    },
    fr: {
      form: {
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        send: "Envoyer le Message"
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
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_portfolio',
          template_id: 'template_contact',
          user_id: 'your_public_key',
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
  );
};

export default ContactForm;

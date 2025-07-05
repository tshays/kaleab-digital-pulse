
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AboutSectionProps {
  language: 'en' | 'fr';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();

  const content = {
    en: {
      title: "About Dr. Kaleab",
      description: "A passionate medical professional who seamlessly blends healthcare expertise with innovative technology and creative design. With extensive experience in health informatics and a keen eye for visual communication, Dr. Kaleab bridges the gap between medical practice and digital innovation.",
      skills: [
        "Medical Practice & Patient Care",
        "Health Informatics & Digital Health",
        "Graphic Design & Visual Communication",
        "Voice-over & Audio Production",
        "Multilingual Communication"
      ]
    },
    fr: {
      title: "À Propos du Dr. Kaleab",
      description: "Un professionnel médical passionné qui allie harmonieusement l'expertise en soins de santé avec la technologie innovante et le design créatif. Avec une vaste expérience en informatique de santé et un œil aiguisé pour la communication visuelle, le Dr. Kaleab fait le pont entre la pratique médicale et l'innovation numérique.",
      skills: [
        "Pratique Médicale & Soins aux Patients",
        "Informatique de Santé & Santé Numérique",
        "Design Graphique & Communication Visuelle",
        "Voix-off & Production Audio",
        "Communication Multilingue"
      ]
    }
  };

  return (
    <section ref={ref} className="py-20 bg-[#D9DCD6]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl lg:text-5xl font-bold text-[#16425B] mb-12 text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {content[language].title}
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <p className="text-lg text-[#16425B]/80 leading-relaxed mb-8">
                {content[language].description}
              </p>
              
              <div className="space-y-4">
                {content[language].skills.map((skill, index) => (
                  <div key={index} className={`flex items-center gap-3 transform transition-all duration-500 ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                  }`} style={{ transitionDelay: `${500 + index * 100}ms` }}>
                    <div className="w-2 h-2 bg-[#3A7CA5] rounded-full"></div>
                    <span className="text-[#16425B] font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-3xl font-bold text-[#16425B] mb-2">5+</div>
                    <div className="text-sm text-[#16425B]/70">{language === 'en' ? 'Years Experience' : 'Années d\'Expérience'}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-[#3A7CA5] mb-2">100+</div>
                    <div className="text-sm text-[#16425B]/70">{language === 'en' ? 'Projects Completed' : 'Projets Complétés'}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-[#81C3D7] mb-2">2</div>
                    <div className="text-sm text-[#16425B]/70">{language === 'en' ? 'Languages' : 'Langues'}</div>
                  </div>
                  <div className="p-4">
                    <div className="text-3xl font-bold text-[#16425B] mb-2">∞</div>
                    <div className="text-sm text-[#16425B]/70">{language === 'en' ? 'Innovation' : 'Innovation'}</div>
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

export default AboutSection;


import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface ProjectsSectionProps {
  language: 'en' | 'fr';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'medical' | 'design'>('medical');

  const content = {
    en: {
      title: "Featured Work",
      tabs: {
        medical: "Medical Work",
        design: "Design Work"
      },
      projects: {
        medical: [
          {
            title: "Health Informatics Dashboard",
            description: "Interactive patient data visualization system",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Medical Research Poster",
            description: "Conference presentation on digital health innovations",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Patient Education Infographic",
            description: "Visual guide for chronic disease management",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          }
        ],
        design: [
          {
            title: "Brand Identity Design",
            description: "Complete branding package for healthcare startup",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Mobile App UI/UX",
            description: "Health monitoring application interface",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Social Media Campaign",
            description: "Visual content for health awareness initiative",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          }
        ]
      }
    },
    fr: {
      title: "Travaux Remarquables",
      tabs: {
        medical: "Travail Médical",
        design: "Travail de Design"
      },
      projects: {
        medical: [
          {
            title: "Tableau de Bord Informatique Santé",
            description: "Système de visualisation interactive des données patients",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Poster de Recherche Médicale",
            description: "Présentation de conférence sur les innovations en santé numérique",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Infographie d'Éducation Patient",
            description: "Guide visuel pour la gestion des maladies chroniques",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          }
        ],
        design: [
          {
            title: "Design d'Identité de Marque",
            description: "Package de branding complet pour startup santé",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "UI/UX Application Mobile",
            description: "Interface d'application de monitoring santé",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          },
          {
            title: "Campagne Médias Sociaux",
            description: "Contenu visuel pour initiative de sensibilisation santé",
            image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400"
          }
        ]
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl lg:text-5xl font-bold text-[#16425B] mb-12 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {content[language].title}
        </h2>
        
        {/* Tab Navigation */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-[#D9DCD6] p-2 rounded-full">
            <button
              onClick={() => setActiveTab('medical')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'medical'
                  ? 'bg-[#16425B] text-white shadow-lg'
                  : 'text-[#16425B] hover:bg-white/50'
              }`}
            >
              {content[language].tabs.medical}
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'design'
                  ? 'bg-[#16425B] text-white shadow-lg'
                  : 'text-[#16425B] hover:bg-white/50'
              }`}
            >
              {content[language].tabs.design}
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].projects[activeTab].map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#16425B]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-[#16425B] px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200">
                    {language === 'en' ? 'View Details' : 'Voir Détails'}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#16425B] mb-3">{project.title}</h3>
                <p className="text-[#16425B]/70 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

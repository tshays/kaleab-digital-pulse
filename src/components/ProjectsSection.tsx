
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Loader } from 'lucide-react';

interface ProjectsSectionProps {
  language: 'en' | 'fr';
}

interface Project {
  id: string;
  title: string;
  category: 'medical' | 'design';
  description: string;
  image: string;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<'medical' | 'design'>('medical');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      title: "Featured Work",
      tabs: {
        medical: "Medical Work",
        design: "Design Work"
      },
      viewDetails: "View Details",
      loading: "Loading projects..."
    },
    fr: {
      title: "Travaux Remarquables",
      tabs: {
        medical: "Travail Médical",
        design: "Travail de Design"
      },
      viewDetails: "Voir Détails",
      loading: "Chargement des projets..."
    }
  };

  // Fetch projects from Firebase
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'projects'));
        const projectsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Project[];
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(project => project.category === activeTab);

  if (loading) {
    return (
      <section ref={ref} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-[#16425B]">
              <Loader size={24} className="animate-spin" />
              <span className="text-lg">{content[language].loading}</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-[#16425B] mb-12 text-center transform transition-all duration-1000 ${
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
              className={`px-4 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                activeTab === 'medical'
                  ? 'bg-[#16425B] text-white shadow-lg'
                  : 'text-[#16425B] hover:bg-white/50'
              }`}
            >
              {content[language].tabs.medical}
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-4 md:px-8 py-3 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
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
        {filteredProjects.length === 0 ? (
          <div className="text-center py-12 text-[#16425B]/60">
            <p className="text-lg mb-4">No {activeTab} projects available yet.</p>
            <p className="text-sm">Check back soon for updates!</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
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
                    <button className="bg-white text-[#16425B] px-4 md:px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform duration-200 text-sm md:text-base">
                      {content[language].viewDetails}
                    </button>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-[#16425B] mb-3">{project.title}</h3>
                  <p className="text-[#16425B]/70 leading-relaxed text-sm md:text-base">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

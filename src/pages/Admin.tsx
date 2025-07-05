
import React, { useState } from 'react';
import { Upload, Edit, Trash2, Save } from 'lucide-react';

const Admin = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Health Informatics Dashboard',
      category: 'medical',
      description: 'Interactive patient data visualization system',
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400'
    }
  ]);

  const [newProject, setNewProject] = useState({
    title: '',
    category: 'medical',
    description: '',
    image: ''
  });

  const [editingId, setEditingId] = useState<number | null>(null);

  const handleAddProject = () => {
    if (newProject.title && newProject.description) {
      const project = {
        id: Date.now(),
        ...newProject
      };
      setProjects([...projects, project]);
      setNewProject({ title: '', category: 'medical', description: '', image: '' });
    }
  };

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real implementation, this would upload to Firebase Storage
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewProject(prev => ({
          ...prev,
          image: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-[#D9DCD6] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-[#16425B] mb-8 flex items-center gap-3">
            <Edit size={32} />
            Admin Panel - Dr. Kaleab's Portfolio
          </h1>

          {/* Add New Project Form */}
          <div className="bg-[#D9DCD6] p-6 rounded-xl mb-8">
            <h2 className="text-xl font-semibold text-[#16425B] mb-4">Add New Project</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Project Title"
                value={newProject.title}
                onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3A7CA5] focus:outline-none"
              />
              <select
                value={newProject.category}
                onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3A7CA5] focus:outline-none"
              >
                <option value="medical">Medical Work</option>
                <option value="design">Design Work</option>
              </select>
              <textarea
                placeholder="Project Description"
                value={newProject.description}
                onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3A7CA5] focus:outline-none md:col-span-2"
                rows={3}
              />
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-[#16425B] mb-2">
                  Upload Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3A7CA5] focus:outline-none"
                />
              </div>
              <button
                onClick={handleAddProject}
                className="md:col-span-2 bg-[#16425B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A7CA5] transition-colors flex items-center justify-center gap-2"
              >
                <Save size={20} />
                Add Project
              </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16425B] mb-4">Existing Projects</h2>
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 p-6 rounded-xl flex items-center gap-4">
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-[#16425B]">{project.title}</h3>
                  <p className="text-sm text-gray-600 capitalize">{project.category}</p>
                  <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                </div>
                <button
                  onClick={() => handleDeleteProject(project.id)}
                  className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This is a basic admin panel. In production, this would be connected to Firebase 
              for real-time data storage and would include proper authentication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

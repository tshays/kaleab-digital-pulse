
import React, { useState, useEffect } from 'react';
import { Upload, Edit, Trash2, Save, Loader } from 'lucide-react';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../lib/firebase';

interface Project {
  id: string;
  title: string;
  category: 'medical' | 'design';
  description: string;
  image: string;
}

const Admin = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'medical' as 'medical' | 'design',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  // Fetch projects from Firebase
  useEffect(() => {
    fetchProjects();
  }, []);

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
  };

  const handleAddProject = async () => {
    if (newProject.title && newProject.description && newProject.image) {
      setLoading(true);
      try {
        await addDoc(collection(db, 'projects'), {
          title: newProject.title,
          category: newProject.category,
          description: newProject.description,
          image: newProject.image,
          createdAt: new Date()
        });
        setNewProject({ title: '', category: 'medical', description: '', image: '' });
        fetchProjects();
      } catch (error) {
        console.error('Error adding project:', error);
      }
      setLoading(false);
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'projects', id));
      fetchProjects();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadingImage(true);
      try {
        const storageRef = ref(storage, `projects/${Date.now()}_${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setNewProject(prev => ({
          ...prev,
          image: downloadURL
        }));
      } catch (error) {
        console.error('Error uploading image:', error);
      }
      setUploadingImage(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D9DCD6] p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#16425B] mb-8 flex items-center gap-3">
            <Edit size={32} />
            Admin Panel - Dr. Kaleab's Portfolio
          </h1>

          {/* Add New Project Form */}
          <div className="bg-[#D9DCD6] p-4 md:p-6 rounded-xl mb-8">
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
                onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value as 'medical' | 'design' }))}
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
                  disabled={uploadingImage}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#3A7CA5] focus:outline-none"
                />
                {uploadingImage && (
                  <div className="flex items-center gap-2 mt-2 text-[#3A7CA5]">
                    <Loader size={16} className="animate-spin" />
                    <span className="text-sm">Uploading image...</span>
                  </div>
                )}
              </div>
              <button
                onClick={handleAddProject}
                disabled={loading || uploadingImage || !newProject.title || !newProject.description || !newProject.image}
                className="md:col-span-2 bg-[#16425B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3A7CA5] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader size={20} className="animate-spin" /> : <Save size={20} />}
                {loading ? 'Adding Project...' : 'Add Project'}
              </button>
            </div>
          </div>

          {/* Projects List */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#16425B] mb-4">Existing Projects ({projects.length})</h2>
            {projects.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                No projects found. Add your first project above.
              </div>
            ) : (
              projects.map((project) => (
                <div key={project.id} className="bg-gray-50 p-4 md:p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-4">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full md:w-20 h-32 md:h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#16425B] text-lg">{project.title}</h3>
                    <p className="text-sm text-gray-600 capitalize mb-1">{project.category}</p>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteProject(project.id)}
                    className="text-red-500 hover:text-red-700 p-2 hover:bg-red-50 rounded-lg transition-colors self-end md:self-center"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Firebase Connected:</strong> Your projects are now stored in Firebase Firestore and images in Firebase Storage. 
              Changes will reflect immediately on the main website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

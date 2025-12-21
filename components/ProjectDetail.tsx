import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4 dark:text-white">Project Not Found</h2>
        <Link to="/projects" className="text-brand hover:underline">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c14] to-transparent z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute bottom-0 left-0 w-full z-20 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-300 hover:text-brand mb-6 transition-colors">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-4 items-center">
             <span className="flex items-center gap-2 text-gray-300 bg-white/10 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                <Calendar size={14} /> {project.date}
             </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-card p-8 rounded-2xl border border-gray-200 dark:border-white/10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Overview</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 gap-6">
                {project.gallery.map((img, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-lg">
                    <img src={img} alt={`Gallery ${index + 1}`} className="w-full hover:scale-105 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-white/10 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Project Info</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-sm px-3 py-1 rounded-full bg-brand/10 text-brand border border-brand/20">
                        <Tag size={12} /> {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col gap-3">
                  <a 
                    href={project.demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-brand hover:bg-brand-dark text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand/20 hover:shadow-brand/40"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
                  >
                    <Github size={18} /> View Code
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
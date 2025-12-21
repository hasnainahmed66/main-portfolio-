import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <div className="mb-12 flex items-end justify-between" data-reveal>
         <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight mb-2">Projects</h2>
            <p className="text-gray-500 dark:text-gray-400">Selected work from 2023-2024</p>
         </div>
         <Link to="/contact" className="hidden md:block text-sm font-medium text-brand hover:text-brand-light transition-colors">
            Start a project &rarr;
         </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id}
            data-reveal
            className={`stagger-${(idx % 2) + 1} group cursor-pointer rounded-2xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-none ${
                idx === 0 ? 'md:col-span-2' : ''
            }`}
            onClick={() => navigate(`/projects/${project.id}`)}
          >
            {/* Image Area */}
            <div className={`w-full overflow-hidden bg-gray-200 dark:bg-[#111] ${idx === 0 ? 'aspect-[2/1]' : 'aspect-[4/3]'}`}>
               <img 
                 src={project.image} 
                 alt={project.title}
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
               />
            </div>

            {/* Info Area */}
            <div className="p-6 relative">
               <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all" />
               </div>
               <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                 {project.shortDescription}
               </p>
               <div className="flex flex-wrap gap-2">
                 {project.tags.slice(0, 3).map(tag => (
                   <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded bg-gray-200 dark:bg-white/5 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
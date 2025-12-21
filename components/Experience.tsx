import React from "react";
import { EXPERIENCE } from "../constants";
import { Briefcase } from "lucide-react";

const Experience: React.FC = () => {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-16" data-reveal>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
          Experience
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">
          Professional journey and real-world contributions.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            data-reveal
            className={`stagger-${(idx % 4) + 1} group relative p-8 rounded-[2rem]
                       bg-white/40 dark:bg-black/20 backdrop-blur-sm
                       border border-gray-200 dark:border-white/5
                       hover:border-brand/40
                       transition-all duration-500
                       hover:-translate-y-2`}
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 rounded-[2rem] bg-brand/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
              {/* Logo / Badge Area */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand
                                flex items-center justify-center
                                font-black text-2xl shadow-inner shadow-brand/20 group-hover:scale-110 transition-transform duration-500">
                  {exp.logo}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-brand font-bold uppercase tracking-wider mt-1">
                      {exp.company} <span className="text-gray-400 font-medium">/ {exp.type}</span>
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end text-sm">
                    <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 font-bold mb-1">
                      {exp.duration}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 font-medium italic">
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-gray-200 dark:from-white/5 to-transparent mb-6"></div>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-medium opacity-90">
                  {exp.description}
                </p>
                
                {/* Visual Accent */}
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <div className="w-8 h-px bg-brand"></div>
                   <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Present Engagement</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative Bottom Link */}
      <div className="mt-20 text-center" data-reveal>
        <p className="text-gray-400 dark:text-gray-600 text-sm font-medium">
          Interested in working together?
          <a 
            href="https://www.linkedin.com/in/hasnain-ali/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="ml-2 text-brand hover:underline font-bold transition-all"
          >
            Let's talk on LinkedIn.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Experience;
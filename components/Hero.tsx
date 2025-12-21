import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MousePointer2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] max-w-5xl mx-auto text-center">
      
      {/* Status Badge */}
      <div className="mb-8" data-reveal>
         <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 tracking-[0.15em] uppercase">AVAILABLE FOR NEW PROJECTS</span>
         </div>
      </div>

      <div className="max-w-3xl z-10">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 text-gray-900 dark:text-white leading-[0.9]" data-reveal>
          Designing <span className="text-gray-300 dark:text-gray-700">Interfaces</span><br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand via-purple-400 to-pink-500 animate-gradient-x py-2 inline-block">Crafting Code.</span>
        </h1>

        {/* Fix: Merged duplicate className attribute for stagger animation */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto font-medium stagger-1" data-reveal>
          I'm Hasnain, a developer bridging the gap between <span className="text-gray-900 dark:text-gray-100">vision</span> and <span className="text-gray-900 dark:text-gray-100">reality</span>. Specialist in pixel-perfect digital experiences.
        </p>

        {/* Fix: Merged duplicate className attribute for stagger animation */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-2" data-reveal>
          <Link
            to="/projects"
            className="group px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-bold text-sm transition-all hover:scale-105 flex items-center gap-3 shadow-xl shadow-brand/10"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/about"
            className="px-8 py-4 rounded-full font-bold text-sm border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/5 text-gray-600 dark:text-gray-300 transition-all hover:border-brand/40"
          >
            More About Me
          </Link>
        </div>
      </div>
      
      {/* Scroll Decoration */}
      {/* Fix: Merged duplicate className attribute for stagger animation */}
      <div className="mt-20 flex flex-col items-center gap-4 stagger-3" data-reveal>
        <div className="w-px h-24 bg-gradient-to-b from-gray-200 dark:from-white/10 to-transparent relative">
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600 animate-bounce">
              <MousePointer2 size={12} className="rotate-180" />
           </div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-400 dark:text-gray-600">Scroll</span>
      </div>
    </div>
  );
};

export default Hero;
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Lightbulb, Zap, Star } from 'lucide-react';

const IdeaCTA: React.FC = () => {
  return (
    <div className="py-32 px-4 relative overflow-hidden">
      
      {/* Background Floating Icons */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <Star className="absolute top-1/4 left-10 text-brand animate-float" size={24} />
         <Zap className="absolute bottom-1/4 right-10 text-brand animate-float" style={{animationDelay: '1s'}} size={32} />
         <Sparkles className="absolute top-1/2 left-1/4 text-brand animate-pulse" size={20} />
      </div>

      <div className="max-w-5xl mx-auto relative group">
        
        {/* Animated Glow Behind */}
        <div className="absolute -inset-2 bg-gradient-to-r from-brand via-pink-500 to-purple-600 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Main Card */}
        <div className="relative rounded-[3rem] bg-white dark:bg-[#0a0a0a] ring-1 ring-gray-900/5 dark:ring-white/10 overflow-hidden shadow-2xl">
           
           {/* Conic Border Effect */}
           <div className="absolute inset-0 z-0">
               <div className="absolute inset-[-150%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#9b5bff_100%)] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
           </div>
           
           {/* Inner Content Background */}
           <div className="absolute inset-[3px] bg-gray-50/80 dark:bg-[#0a0a0a]/90 backdrop-blur-2xl rounded-[2.9rem] z-0"></div>

           {/* Content */}
           <div className="relative z-10 p-12 md:p-24 text-center flex flex-col items-center">
              
              <div className="mb-10 p-6 bg-brand/10 rounded-[2rem] text-brand animate-float relative">
                 <Lightbulb size={48} strokeWidth={1.5} />
                 <Sparkles className="absolute -top-2 -right-2 text-pink-500 animate-pulse" />
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tighter uppercase">
                Got a vision?
              </h2>
              
              <p className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand via-pink-500 to-brand animate-gradient-x mb-10 pb-2 tracking-tighter uppercase leading-[0.9]">
                Let's turn it into code.
              </p>

              <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-12 text-lg md:text-xl font-medium leading-relaxed">
                 From ideas to production-ready applications — I build fast, intuitive digital products that users love
              </p>

              <Link to="/contact">
                <button className="relative group px-10 py-5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-brand/20">
                  <span className="relative z-10 flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    START A PROJECT
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </span>
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-black/10 to-transparent z-0" />
                </button>
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaCTA;
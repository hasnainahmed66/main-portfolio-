import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = ['Frontend', 'Backend', 'Tools'];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
       <div className="mb-16" data-reveal>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tech Stack</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category, catIdx) => (
          <div key={category} data-reveal className={`stagger-${catIdx + 1}`}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              {category}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {SKILLS.filter(s => s.category === category).map((skill, skillIdx) => (
                <div 
                  key={skill.name}
                  data-reveal="scale"
                  className={`stagger-${(skillIdx % 4) + 1} group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 hover:border-brand/30 transition-all hover:-translate-y-1`}
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center text-xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-brand transition-colors">
                    {skill.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                    <div className="h-1 w-12 bg-gray-200 dark:bg-white/10 rounded-full mt-2 overflow-hidden">
                       <div className="h-full bg-brand origin-left transition-transform duration-1000 delay-500 scale-x-100" style={{ width: `${skill.level}%`}} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
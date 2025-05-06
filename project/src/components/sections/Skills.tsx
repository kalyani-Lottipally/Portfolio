import React, { useState } from 'react';
import Section from '../ui/Section';
import { skills } from '../../data/skills';
import * as Icons from 'lucide-react';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'database' | 'devops' | 'other';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    
  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)];
    return LucideIcon ? <LucideIcon size={24} /> : null;
  };

  return (
    <Section 
      id="skills"
      title="Technical Skills"
      subtitle="My expertise in various technologies and tools that I use to build modern web applications."
      className="bg-gray-50 dark:bg-gray-800"
    >
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id as SkillCategory)}
            className={`
              px-4 py-2 rounded-full transition-all duration-200 
              ${activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'}
            `}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      {/* Skills grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredSkills.map((skill) => (
          <div 
            key={skill.name}
            className="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 mb-3 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
              <DynamicIcon name={skill.icon} />
            </div>
            <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
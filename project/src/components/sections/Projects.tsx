import React, { useState } from 'react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '../../data/projects';
import { ExternalLink, Github, X } from 'lucide-react';
import { Project } from '../../types';

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);
  
  
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <Section 
      id="projects"
      title="Featured Projects"
      subtitle="Check out some of my recent work that showcases my skills and expertise."
      className="bg-white dark:bg-gray-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {displayedProjects.map((project) => (
          <Card 
            key={project.id} 
            hoverable 
            className="h-full flex flex-col"
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardContent className="flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl} 
                    variant="ghost" 
                    size="sm" 
                    icon={Github}
                  >
                    Code
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {projects.length > 2 && (
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less Projects' : 'View All Projects'}
          </Button>
        </div>
      )}
      
      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-xl">
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{selectedProject.title}</h3>
              <button 
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6 aspect-video overflow-hidden rounded-lg">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="prose dark:prose-invert max-w-none mb-8">
                <p className="text-gray-700 dark:text-gray-300">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {selectedProject.demoUrl && (
                  <Button 
                    href={selectedProject.demoUrl} 
                    variant="primary" 
                    icon={ExternalLink} 
                    iconPosition="right"
                  >
                    Live Demo
                  </Button>
                )}
                
                {selectedProject.githubUrl && (
                  <Button 
                    href={selectedProject.githubUrl} 
                    variant="outline" 
                    icon={Github}
                  >
                    View Source
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Projects;
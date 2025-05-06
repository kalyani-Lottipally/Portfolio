import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { socialLinks } from '../../data/socialLinks';
import * as Icons from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / 700;
        const translateY = scrollPosition * 0.3;
        
        heroRef.current.style.transform = `translateY(${translateY}px)`;
        heroRef.current.style.opacity = opacity > 0 ? String(opacity) : '0';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const DynamicIcon = ({ name }: { name: string }) => {
    const LucideIcon = (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)];
    return LucideIcon ? <LucideIcon size={24} /> : null;
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-24 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-300 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div ref={heroRef} className="container mx-auto px-4 md:px-8 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="block">Hi I'm Kalyani Lottipally</span>
          <span className="block text-blue-600 dark:text-blue-400">Student, Anurag University</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
          I create beautiful, functional, and responsive applications using modern technologies.
          Specializing in both frontend and backend development.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            href="#projects" 
            variant="primary" 
            size="lg"
          >
            View My Work
          </Button>
          <Button 
            href="#contact" 
            variant="outline" 
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:-translate-y-1 duration-200"
              aria-label={link.platform}
            >
              <DynamicIcon name={link.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
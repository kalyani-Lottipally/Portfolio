import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  return (
    <section id={id} className={`py-16 px-4 md:px-8 lg:px-16 ${className}`}>
      <div className="container mx-auto">
        {title && (
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-3 text-gray-900 dark:text-white ${titleClassName}`}
          >
            {title}
          </h2>
        )}
        {subtitle && (
          <p 
            className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
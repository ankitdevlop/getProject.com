'use client';
import React, { useState, useEffect } from 'react';

interface SectionLoaderProps {
  children: React.ReactNode;
  delay?: number;
}

const SectionLoader: React.FC<SectionLoaderProps> = ({ children, delay = 500 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="relative">
          <div className="w-12 h-12 border-4 border-gray-700 rounded-full animate-spin">
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 border-r-pink-500 rounded-full animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return <div className="animate-fade-in">{children}</div>;
};

export default SectionLoader;
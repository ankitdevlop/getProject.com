'use client';
import React, { useState, useEffect } from 'react';
import Loader from './Loader';

interface LoadingWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children, delay = 2000 }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
};

export default LoadingWrapper;
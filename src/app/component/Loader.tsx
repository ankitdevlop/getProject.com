
'use client';
import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center z-50">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-md opacity-70 animate-pulse" />
            <div className="relative bg-gradient-to-r from-indigo-600 to-pink-600 text-white p-3 rounded-full shadow-lg">
              <svg
                className="w-8 h-8 animate-spin-slow"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient-x">
            GetProject
          </span>
        </div>
        
        {/* Loading spinner */}
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-700 rounded-full animate-spin">
            <div className="absolute inset-0 border-4 border-transparent border-t-indigo-500 border-r-pink-500 rounded-full animate-spin" />
          </div>
        </div>
        
        {/* Loading text */}
        <div className="text-center space-y-2">
          <p className="text-white text-lg font-medium animate-pulse">
            Loading your experience...
          </p>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

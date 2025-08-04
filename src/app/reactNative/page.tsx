'use client';

import React from 'react';
import Image from 'next/image';
import LoadingWrapper from '../component/LoadingWrapper';

type Project = {
  tag: string;
  title: string;
  description: string;
  image: string;
  gradient: string;
  icon: string;
};

const projects: Project[] = [
  {
    tag: "REACT NATIVE",
    title: "Fitness Tracker App",
    description: "Cross-platform mobile app with activity tracking, goal setting, and real-time analytics using React Native and Firebase.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-green-500 to-lime-500",
    icon: "🏃"
  },
  {
    tag: "MOBILE + BACKEND",
    title: "Food Delivery App",
    description: "End-to-end solution with GPS tracking, payment gateway, and backend order management using Node.js and MongoDB.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-yellow-500 to-orange-500",
    icon: "🍔"
  },
  {
    tag: "REAL-TIME",
    title: "Chat Messaging App",
    description: "Real-time chat with authentication, media sharing, and push notifications using Socket.io and Firebase Cloud Messaging.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-purple-500 to-pink-500",
    icon: "💬"
  },
  {
    tag: "ECOMMERCE",
    title: "Mobile Shopping App",
    description: "Seamless shopping experience with product listings, cart, payment integration, and secure backend services.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-blue-600 to-indigo-600",
    icon: "🛒"
  },
  {
    tag: "EDTECH",
    title: "Online Learning App",
    description: "E-learning mobile app with video lessons, quizzes, and student progress tracking, powered by REST APIs.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-teal-500 to-cyan-500",
    icon: "📚"
  },
  {
    tag: "UTILITIES",
    title: "Finance Manager",
    description: "Expense tracking app with graphs, budget alerts, and cloud sync using React Native and Express.js backend.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-red-500 to-pink-500",
    icon: "💰"
  }
];

export default function ReactNativeProjectsPage() {
  return (
    <LoadingWrapper delay={1000}>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen pt-20 relative">
        {/* Background blur blobs */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" />
        </div>

        <section className="relative z-10 py-24 px-6 md:px-24">
          <div className="container mx-auto">
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                React Native App Development
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We specialize in building scalable cross-platform mobile apps with seamless backend integration, real-time capabilities, and modern UI/UX.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {projects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                    <div className="relative h-full bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-green-500/20 transition-all duration-500 overflow-hidden">
                      <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                        {project.icon}
                      </div>
                      <div className="relative h-48 overflow-hidden rounded-t-2xl">
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                        <img
  src={project.image}
  alt={project.title}
  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
/>

                      </div>
                      <div className="p-8 space-y-4">
                        <h3 className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent tracking-widest uppercase`}>
                          {project.tag}
                        </h3>
                        <h2 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                          {project.title}
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                          {project.description}
                        </p>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                          <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                            Mobile App Project
                          </span>
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LoadingWrapper>
  );
}

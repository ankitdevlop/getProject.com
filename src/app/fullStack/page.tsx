const projects = [
  {
    tag: "MERN STACK",
    title: "Job Search Platform",
    description: "Real-time job portal with secure authentication and smart job-matching algorithms using React, Node.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    gradient: "from-indigo-600 to-purple-600",
    icon: "💼"
  },
  {
    tag: "FULL STACK",
    title: "E-Commerce Platform",
    description: "Online store with payment gateway, inventory control, and dashboard analytics built with modern tech stack.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    gradient: "from-pink-600 to-rose-600",
    icon: "🛍️"
  },
  {
    tag: "REAL-TIME",
    title: "Social Network",
    description: "Interactive social platform with messaging, sharing, and profile features using Socket.io for real-time communication.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    gradient: "from-purple-600 to-indigo-600",
    icon: "🌐"
  },
  {
    tag: "PRODUCTIVITY",
    title: "Project Management Tool",
    description: "Kanban board with task tracking, team collaboration, and reporting features for enhanced productivity.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    gradient: "from-blue-600 to-cyan-600",
    icon: "📈"
  },
  {
    tag: "EDUCATION",
    title: "E-Learning Platform",
    description: "LMS with video content, quizzes, and student progress tracking built for modern online education.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    gradient: "from-emerald-600 to-teal-600",
    icon: "🎓"
  },
  {
    tag: "BACKEND",
    title: "RESTful API Service",
    description: "Backend system with scalable endpoints, caching, and testing tools for enterprise-level applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    gradient: "from-orange-600 to-red-600",
    icon: "⚙️"
  },
];

import LoadingWrapper from '../component/LoadingWrapper';

export default function FullStackPage() {
  return (
    <LoadingWrapper delay={1500}>
      <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-pulse" />
      </div>
      
      <section className="relative z-10 py-24 px-6 md:px-24">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
              Full-Stack Development Projects
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our team specializes in building robust MERN stack applications with modern UIs, real-time features, and full deployment pipelines.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4 hover:scale-105">
                  {/* Glowing background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500`} />
                  
                  {/* Card */}
                  <div className="relative h-full bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl group-hover:shadow-indigo-500/20 transition-all duration-500 overflow-hidden">
                    {/* Icon */}
                    <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300">
                      {project.icon}
                    </div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden rounded-t-2xl">
                      <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <h3 className={`text-sm font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent tracking-widest uppercase`}>
                        {project.tag}
                      </h3>
                      <h2 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          Full-Stack Project
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
